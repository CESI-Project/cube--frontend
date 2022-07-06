# Cube Front-End + Mobile

## Prerequisites

You need to have :
* Node 16.x

## How to install
Clone the git project

```shell
git clone git@github.com:SVT-Cube-Project/cube--frontend.git
```

## How to run

### Docker

Launch docker-compose

```shell
docker-compose up
```

### Vite

Install packages

```shell
npm ci
```

Run the project

```shell
npm run start
```

### Mobile

Set your Path 

```shell
export ANDROID_HOME=$HOME/Android/Sdk
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Use Java v11 :
```shell
sudo update-java-alternatives --set /usr/lib/jvm/java-1.11.0-openjdk-amd64
```

Install packages

```shell
npm ci
```

Build the project

```shell
npm run build
```

Run the project

```shell
npx cap sync
npx cap run
```

## How to test


## Project Structure

* src
* /assets - Images
* /components - Each reusable component (Button, Input ...)
* /hooks - For custom hooks
* /layouts - The top wrapper component (Navbar, Sidebar ...)
* /models - Model of each entity
* /pages - Page structure (Login Page, Home Page ...)
* /router - Page routes
* /services - HTTP request

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md)

## Maintainers

* theo.gadiffet@gmail.com
* valou.lacour59@gmail.com
* sebastienpostiaux@gmail.com
