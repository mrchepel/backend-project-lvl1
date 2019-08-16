install:
			npm install

publish:
			npm publish --dry-run

lint:
			npx eslint .

start:
			npx babel-node src/bin/brain-games.js

even:
			npx babel-node src/bin/brain-even.js
