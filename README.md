# Covid-MM backend mock

This is backend mock api for covid-mm.

## Step 1

    npm install

## Step 2 (Create .env)

    HOST=Localhost
    PORT=4000(or something) in .env

## Step 3

    npm run start

---

### Test api

`Latest Global Count`
```
localhost:4000/api/v1/all
```
`Countries data`
```
localhost:4000/api/v1/countries
```
`Country specific data`
```
localhost:4000/api/v1/countries/Myanmar
```
`Global timeseries`
```
localhost:4000/api/v1/timeline/global
```
`Country specific timeseries`
```
localhost:4000/api/v1/timeline/India
```