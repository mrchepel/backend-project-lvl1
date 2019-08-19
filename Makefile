install:
			npm install

publish:
			rm -rf dist
			npm publish --dry-run

lint:
			npx eslint .

start:
			npx babel-node src/bin/brain-games.js

brain-even:
			npx babel-node src/bin/brain-even.js

# brain-calc:
# 			npx babel-node src/bin/brain-calc.js