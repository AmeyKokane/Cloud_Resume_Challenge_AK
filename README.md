# Cloud Resume Challenge
Hello!  
Here is my [resume](https://www.ameykokane.com/) hosted on Azure Cloud Services. 

## Challenge Steps  
- [x] Create a GitHub Repo.
- [x] Create a website using HTML and CSS; upload it to GitHub repo.
- [x] Deploy website to Azure Blob Storage.
- [x] Use Azure Functions to create a 'Visitor Count' for website; Create Cosmos DB database to store visitor count information.
- [x] Enable HTTPS and Customs Domain support for website.
- [x] Setup GitHub Actions for Continuous Integration/Continuous Deployment.
- [ ] Write a blog post.

### Frontend Development Steps  
- Static Website : Website was created using HTML, CSS and JavaScript. I did not create website from scratch but used a template and modified it heavily to my liking. I have no background in HTML/CSS/JavaScript so took me a while to modify template to my liking.
- On Azure Portal, started with creating a Resource group for this project. All the resources that will be created for the project will created under this resource group. [resource](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal)  
- I used Azure Blob Storage for storing website contents as it offers 'Static Website' option; Website is made available on https website endpoint. [resources](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)  
-  I used [resource 1](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal) and [resource 2](https://docs.microsoft.com/en-us/azure/cdn/cdn-create-new-endpoint) to first set-up Azure CDN and an Endpoint in order to enable HTTPS for website.
-  With this setup you will have a website that look like https://ak-cdn-endpoint.azureedge.net. But you want to have custom domain (or in non-techy speak, a website address) easy to remember by folks (for ex. www.ameykokane.com) you will need to CNAME DNS record. [resource](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-custom-domain-name?tabs=azure-portal)
-  I registered my custom domain to CDN Endpoint from prervious step and enabled HTTPS for my custom domain.

### Backend Development Steps
Backend development consists mainly of two steps, 1. Implementing Visitor Count, 2. Implementing CI/CD
1. Implement Visitor Count
- This was the most frustrating/challenging part for me for many reasons. 😤
- I started with creating Cosmos DB database that will be used to hold counter information for Visitor Count API.[resource](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction)
- Now I need to create an API (via Azure Functions) that will interact with Cosmos DB at backend and JavaScript code on frontend. This was the part where I ended up spending a lot of time and almost gave up. Reason for my frustration was I chose to use Python for Azure Functions. But had trouble deploying those python Azure Functions, which I will need to write a whole blog post about. But long story short, please choose JavaScript when creating HTTP trigger Azure Function using VS Code.[resource](https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-node?pivots=nodejs-model-v4)
- Once Azure function is deployed successfully, I implmented input and output binding for Azure function with Cosmos DB.
- Now add Azure function URL to frontend JavaScript script and voila visitor counter on the website should get working!
2. Implement CI/CD
- Now that website was up and running, final step was to implement CI/CD using GitHub actions.[resource](https://www.google.com/search?client=firefox-b-1-d&q=get+started+with+github+actions)

### My Experience
I really enjoyed working on this project as I was able to learn a lot about Azure Services and some DevOps concepts. Whenever I was stranded, I was able to leverage Microsoft's exhaustive documentation to get me over the hurdle. 
