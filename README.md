# Ciphering CLI Tool

## Install

1. Create directory for cross-check purpose. For example:

```bash
 ~/.../$ mkdir nodejs-cross-check
```

2. Go to that directory:

```bash
 ~/.../$ cd nodejs-cross-check
```

3. Clone repository:

```bash
 ~/.../$ git clone https://github.com/gonzjv/nodejs-2021q4.git
```

4. Switch to ciphering-tool branch:

```bash
 ~/.../$ git checkout ciphering-tool
```

## Details

CLI tool accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
    Config is a string with pattern `{XY(-)}n`, where:

- `X` is a cipher mark:
  - `C` is for Caesar cipher (with shift 1)
  - `A` is for Atbash cipher
  - `R` is for ROT-8 cipher
- `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
  - `1` is for encoding
  - `0` is for decoding

2.  **-i, --input**: a path to input file
3.  **-o, --output**: a path to output file

For example, config `"C1-C1-R0-A"` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

**Usage example:**

```bash
$ node ciphering-tool -c C1-C1-R0-A -i input.txt -o output.txt
```

> input.txt

> `This is secret. Message about "_" symbol!`

> output.txt

> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`
