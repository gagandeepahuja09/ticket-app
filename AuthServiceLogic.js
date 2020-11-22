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

#102 Skaffold
  * It automates many tasks in a Kubernetes dev env.
  * Makes it really easy to update code in a running pod.
  * Make it really easy to create /  delete all objects tied to a project at once.
  * Helps in not having to kubectl apply -f everytime we change a infra / k8s file
  * artifacts section --> 
    *  If we try to change a ts file, then it's only going to try to update the pod
    * If we change anything else, then skaffold will try to rebuild the entire image,
      example if we add a new module --> package.json, node_modules ---> 
        This will rebuild the image
    
  * 

#54 Kubernetes
  * A tool for running a bunch of containers together. 
  * We give it some configuration to describe how we want our configuration to run
    and interact with each other.
  * For installing kubernetes, we just need to open docker and then in preferences --> Kubernetes --> Enable Kubernetes 
*/