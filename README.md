# TippingWeb

Demo: https://d10ay4mbbx5ito.cloudfront.net/

##Purpose

**Demo application used for training and UBET API integration examples**

API GET examples include: 

+ leagues (e.g https://api.ubet.com/sales/vmax/web/data/sports/league/48 )
+ mainEvents (e.g https://api.ubet.com/sales/vmax/web/data/sports/mainevent/622477 )

**Code:** https://github.com/spjenk/tipping-web/blob/master/src/app/tipping/services/mainevent.service.ts  

Examples of linking back to UBET with prepopulated data are in: 
 
**Code:** https://github.com/spjenk/tipping-web/blob/master/src/app/tipping/components/grid/tipping-grid.component.html


_This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3._

## Running locally
### Prerequisites

Both the CLI and generated project have dependencies that require Node 6.9.0 or higher, together
with NPM 3 or higher.

### Installation
**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)
```bash
npm install -g @angular/cli
```

You can install the packages with npm
```bash
npm install
```

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.