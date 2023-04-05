#  Digital Odyssey

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
│   ├── index.test.js\
│   ├── about.test.js\
│   └── ...\
├── components\
│   ├── Header\
│   │   ├── Header.js\
│   │   ├── Header.test.js\
│   │   └── ...\
│   ├── Footer\
│   │   ├── Footer.js\
│   │   ├── Footer.test.js\
│   │   └── ...\
│   └── ...\
├── jest.config.js\
└── package.json\


Run:
```bash
$ pnpm test
```

to update snapshots:

```bash
$ pnpm test -- -u
```