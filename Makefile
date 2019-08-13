install:
			npm install

publish:
			npm publish --dry-run

make lint:
			npx eslint .

start:
			npx babel-node src/bin/brain-games.js
