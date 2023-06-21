#  Imagination Odyssey

An interactive odyssey to discover the digital landscape

Built with Enverse Labs'[Create Green App](https://github.com/enverse/create-geen-app-deno)





---



## Getting startin
> recomended package manager: [pnpm](https://github.com/pnpm/pnpm)

```bash
$ pnpm install
$ pnpm dev
```

default to http://localhost:3000

3.  Building for production

```bash
$ pnpm build
```

To view prodcution build in browser:

```bash
$ pnpm start
```

### Tests

The test files are structured are such: 

├── pages\
│   ├── index.js\
│   ├── about.js\
│   └── ...\
├── components\
│   ├── Header.js\
│   ├── Footer.js\
│   └── ...\
├── tests\
│   ├── unit\
│   │   ├── Header.test.js\
│   │   ├── Footer.test.js\
│   │   └── ...\
│   ├── integration\
│   │   ├── HomePage.test.js\
│   │   ├── AboutPage.test.js\
│   │   └── ...\
│   └── setupTests.js\
├── jest.config.js\
└── package.json\


where `integration` tests entire pages and their components and `unit` tests test single components

Run:
```bash
$ pnpm test
```

to update snapshots:

```bash
$ pnpm test -- -u
```