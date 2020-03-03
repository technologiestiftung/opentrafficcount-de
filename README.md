# open-traffic-count-microsite

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [open-traffic-count-microsite](#open-traffic-count-microsite)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Development](#development)

<!-- /code_chunk_output -->

## About

This is a microsite build with Jekyll for the Open Traffic Count Project

## Getting Started

### Prerequisites

You will need

- Ruby >= 2.6 (install with [rbenv](https://github.com/rbenv/rbenv))
- bundler (install with ruby gems `gem install bundler`)
- Node.js >= 12 (install with [nvm](https://github.com/nvm-sh/nvm))

### Installing

```bash
git clone https://github.com/technologiestiftung/open-traffic-count-microsite.git
cd open-traffic-count-microsite
# Will check dependencies and give you hints what is missing
# Does NOT autoinstall Ruby and bundler
# It will run `bundle install` for you
./tools/install.sh
```

### Development

All files that are used for the actual site are located in the [`src`](/src/) folder. The entrypoint to the site is [`index.md`](/src/index.md).

To run the Jekyll with "livereload" enabled you need to execute:

```bash
bundle exec jekyll serve --livereload
```

For compiling `scss` and `ts` you need to run:

```bash
npm run webpack:dev
```

For convenience this is combined in the the command:

```bash
npm run dev
```

Use `CTRL + C` to stop the server.
