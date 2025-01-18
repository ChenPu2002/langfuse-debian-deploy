![Langfuse GitHub Banner](https://github.com/langfuse/langfuse/assets/121163007/6035f0f3-d691-4963-b5d0-10cf506e9d42)

<div align="center"><h1>Langfuse: Open Source LLM Engineering Platform</h1></div>
<div align="center"><h4>LLM Observability, Prompt Management, LLM Evaluations,<br/>Datasets, LLM Metrics, and Prompt Playground</h4></div>

<div align="center">
   <div>
      <h3>
         <a href="https://cloud.langfuse.com">
            <strong>Sign up</strong>
         </a> · 
         <a href="https://langfuse.com/docs/deployment/self-host">
            <strong>Self Host</strong>
         </a> · 
         <a href="https://langfuse.com/demo">
            <strong>Demo (live data)</strong>
         </a>
      </h3>
   </div>
   <div>
      <a href="https://langfuse.com/docs"><strong>Docs</strong></a> ·
      <a href="https://langfuse.com/issues"><strong>Report Bug</strong></a> ·
      <a href="https://langfuse.com/ideas"><strong>Feature Request</strong></a> ·
      <a href="https://langfuse.com/changelog"><strong>Changelog</strong></a> ·
      <a href="https://langfuse.com/roadmap"><strong>Roadmap</strong></a> ·
      <a href="https://langfuse.com/discord"><strong>Discord</strong></a> 
   </div>
   <span>Langfuse uses <a href="https://github.com/orgs/langfuse/discussions"><strong>Github Discussions</strong></a>  for Support and Feature Requests.</span>
   <br/>
   <span>
   <br/>
   <br/>
   <div>
      <a href="https://github.com/langfuse/langfuse/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-red.svg?style=flat-square" alt="MIT License"></a>
      <a href="https://www.ycombinator.com/companies/langfuse"><img src="https://img.shields.io/badge/Y%20Combinator-W23-orange?style=flat-square" alt="Y Combinator W23"></a>
      <a href="https://github.com/langfuse/langfuse/pkgs/container/langfuse"><img alt="Docker Image" src="https://img.shields.io/badge/docker-langfuse-blue?logo=Docker&logoColor=white&style=flat-square"></a>
      <a href="https://pypi.python.org/pypi/langfuse"><img src="https://img.shields.io/pypi/dm/langfuse?style=flat-square&logo=python&logoColor=white&label=pypi%20langfuse&color=blue" alt="langfuse Python package on PyPi"></a>
      <a href="https://www.npmjs.com/package/langfuse"><img src="https://img.shields.io/npm/dm/langfuse?style=flat-square&logo=npm&logoColor=white&label=npm%20langfuse&color=blue" alt="langfuse npm package"></a>
   </div>
</div>
</br>

This repository is forked from langfuse/langfuse.
Here we are trying to modify the code to make it work for node image based on debian slim rather than alpine for self-host. If you want to use the original code, please visit the original repository.

If you want to use the modified code, please follow the instructions below.

## Step 1
Clone the repository
```bash
git clone
```
In the source code, we have two folders called `web` and `worker`. We have modified the `Dockerfile` in both the folders to use `node:20-slim` image instead of `node:20-alpine` image.

## Step 2
Build the docker image.
For each folder, move the `Dockerfile` to the parent directory and run the following command.
```bash
docker build -t langfuse/langfuse:self .
```

```bash
docker build -t langfuse/langfuse-worker:self .
```

## Step 3
Run the docker image. The name of the image is `langfuse/langfuse:self` and `langfuse/langfuse-worker:self` in the `web` and `worker` folders respectively. We also have changed the name in the `docker-compose.yml` file. The modification of image names is to
avoid confusion with the original image from dockerhub. 
```bash
docker compose up
```
