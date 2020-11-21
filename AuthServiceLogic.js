/* 
#99 Auth Service Setup
  1. Signin, Signout, Signup, Currentuser
  2. Install typescript
  3. ts-node-dev ==> To execute project in dev environment
  @types/express
  4. Generate a ts config file --> tsconfig.json

#100 Reminder
  FROM node:alpine
  ENV CI=true
  
  WORKDIR /app
  COPY package.json .
  RUN npm install
  COPY . .
  
  CMD ["npm", "start"]

#101 Auth K8s Setup  
  * In order to setup Kubernetes, we need to make sure that we can build an auth image
  * In order to build an image, we need to create a Dockerfile
  * Now, we will build the dockerfile ---> docker build -t gagandeepahuja09/auth .
  * -t --> For tagging the image
  * Now, we will put together some configuration to get that image loaded up in the Kubernetes cluster
  * To get that image running, we will create a deployment
  * infra folder --> k8s --> auth-depl.yaml
  * Skaffold config file ---> Goal of Skaffold is to find all the things that we want to 
   throw into our cluster, build them up
*/