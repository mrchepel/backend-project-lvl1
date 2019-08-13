install:
			npm install

publish:
			publish --dry-run

lint:
			npx eslint .

start:
			npx babel-node src/bin/brain-games.js
