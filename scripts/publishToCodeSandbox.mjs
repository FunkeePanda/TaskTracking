import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const DIST_DIR = path.join(ROOT, 'dist')

async function walk(dir, base = '') {
	const entries = await readdir(dir)
	const files = {}
	for (const name of entries) {
		const full = path.join(dir, name)
		const rel = path.posix.join(base, name)
		const s = await stat(full)
		if (s.isDirectory()) {
			Object.assign(files, await walk(full, rel))
		} else {
			const content = await readFile(full, 'utf8')
			files[rel] = { content }
		}
	}
	return files
}

async function main() {
	const files = await walk(DIST_DIR)
	// Ensure static template
	files['sandbox.config.json'] = { content: JSON.stringify({ template: 'static' }) }
	// Root index.html must exist
	if (!files['index.html']) {
		console.error('No index.html found in dist/')
		process.exit(1)
	}

	const res = await fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ files }),
	})
	if (!res.ok) {
		const txt = await res.text()
		console.error('Failed to define sandbox:', res.status, txt)
		process.exit(1)
	}
	const json = await res.json()
	const id = json.sandbox_id || json.data?.sandbox_id
	if (!id) {
		console.error('No sandbox_id in response:', JSON.stringify(json))
		process.exit(1)
	}
	const url = `https://codesandbox.io/s/${id}`
	console.log(url)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})

