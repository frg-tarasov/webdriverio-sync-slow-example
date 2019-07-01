## Steps

1. Install deps
```bash cd normal && npm install```
```bash cd slow && npm install```

2. Run test http server
```bash python2 -m SimpleHTTPServer 9999```

3. Run normal example

```bash cd normal && npx wdio wdio.conf.js```

4. Run slow example

```bash cd slow && npx wdio wdio.conf.js```