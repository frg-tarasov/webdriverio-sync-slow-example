## Steps

1. Install deps
```bash
cd normal && npm install
```
```bash
cd slow && npm install
```

2. Run test http server
```bash
python2 -m SimpleHTTPServer 9999
```

3. Run normal example

```bash
cd normal && npx wdio wdio.conf.js
```

```
...
[0-0] query: 28.533ms
[0-0] 
[0-0] query: 26.961ms
[0-0] 
[0-0] query: 25.147ms

[0-0] query: 21.690ms

[0-0] query: 21.364ms

[0-0] query: 21.047ms

[0-0] query: 21.529ms

[0-0] query: 21.933ms

[0-0] query: 21.115ms

[0-0] query: 21.082ms

[0-0] query: 28.048ms

[0-0] query: 19.386ms
[0-0] 
[0-0] query: 19.940ms
[0-0] 
[0-0] query: 20.167ms
...
```

4. Run slow example

```bash
cd slow && npx wdio wdio.conf.js
```

```
...
[0-0] RUNNING in chrome - /test-1.js
[0-0] query: 752.180ms
[0-0] 
[0-0] query: 826.457ms
[0-0] 
[0-0] query: 861.304ms
[0-0] 
[0-0] query: 781.280ms
[0-0] 
[0-0] query: 729.714ms
[0-0] 
[0-0] query: 820.347ms
[0-0] 
[0-0] query: 743.798ms
[0-0] 
[0-0] query: 744.071ms
[0-0] 
[0-0] query: 775.081ms
[0-0] 
[0-0] query: 753.812ms
[0-0] 
[0-0] query: 750.229ms
[0-0] 
[0-0] query: 740.027ms
...
```
