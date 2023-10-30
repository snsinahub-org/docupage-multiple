**Quickstart for GitHub Actions**

**In this article**

  - 
> [Introduction](https://docs.github.com/en/actions/quickstart#introduction)

  - 
> [Creating your first workflow](https://docs.github.com/en/actions/quickstart#creating-your-first-workflow)

  - 
> [Viewing your workflow results](https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results)

  - 
> [More starter workflows](https://docs.github.com/en/actions/quickstart#more-starter-workflows)

  - 
> [Next steps](https://docs.github.com/en/actions/quickstart#next-steps)

Try out the features of GitHub Actions in 5 minutes or less.

[**<span class="underline">Introduction</span>**](https://docs.github.com/en/actions/quickstart#introduction)

You only need a GitHub repository to create and run a GitHub Actions workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of GitHub Actions.

The following example shows you how GitHub Actions jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

[**<span class="underline">Creating your first workflow</span>**](https://docs.github.com/en/actions/quickstart#creating-your-first-workflow)

1.  Create a .github/workflows directory in your repository on GitHub if this directory does not already exist.

2.  In the .github/workflows directory, create a file named github-actions-demo.yml. For more information, see "[<span class="underline">Creating new files</span>](https://docs.github.com/en/repositories/working-with-files/managing-files/creating-new-files)."

3.  Copy the following YAML contents into the github-actions-demo.yml file:

> YAML
> 
> name: GitHub Actions Demo
> 
> run-name: ${{ github.actor }} is testing out GitHub Actions 🚀
> 
> on: \[push\]
> 
> jobs:
> 
> Explore-GitHub-Actions:
> 
> runs-on: ubuntu-latest
> 
> steps:
> 
> \- run: echo "🎉 The job was automatically triggered by a ${{ github.event\_name }} event."
> 
> \- run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub\!"
> 
> \- run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
> 
> \- name: Check out repository code
> 
> uses: actions/checkout@v4
> 
> \- run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
> 
> \- run: echo "🖥️ The workflow is now ready to test your code on the runner."
> 
> \- name: List files in the repository
> 
> run: |
> 
> ls ${{ github.workspace }}
> 
> \- run: echo "🍏 This job's status is ${{ job.status }}."

4.  Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.

> ![Screenshot of the "Commit new file" area of the page.](output/word-doc/githubdocs/actions/media/image1.png)

Committing the workflow file to a branch in your repository triggers the push event and runs your workflow.

[**<span class="underline">Viewing your workflow results</span>**](https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results)

1.  On GitHub.com, navigate to the main page of the repository.

2.  Under your repository name, click  **Actions**.

> ![Screenshot of the tabs for the "github/docs" repository. The "Actions" tab is highlighted with an orange outline.](output/word-doc/githubdocs/actions/media/image2.png)

3.  In the left sidebar, click the workflow you want to display, in this example "GitHub Actions Demo."

> ![Screenshot of the "Actions" page. The name of the example workflow, "GitHub Actions Demo", is highlighted by a dark orange outline.](output/word-doc/githubdocs/actions/media/image3.png)

4.  From the list of workflow runs, click the name of the run you want to see, in this example "USERNAME is testing out GitHub Actions."

5.  In the left sidebar of the workflow run page, under **Jobs**, click the **Explore-GitHub-Actions** job.

> ![Screenshot of the "Workflow run" page. In the left sidebar, the "Explore-GitHub-Actions" job is highlighted with a dark orange outline.](output/word-doc/githubdocs/actions/media/image4.png)

6.  The log shows you how each of the steps was processed. Expand any of the steps to view its details.

> ![Screenshot of steps run by the workflow.](output/word-doc/githubdocs/actions/media/image5.png)
> 
> For example, you can see the list of files in your repository:![Screenshot of the "List files in the repository" step expanded to show the log output. The output for the step is highlighted with a dark orange highlight.](output/word-doc/githubdocs/actions/media/image6.png)

The example workflow you just added is triggered each time code is pushed to the branch, and shows you how GitHub Actions can work with the contents of your repository. For an in-depth tutorial, see "[<span class="underline">Understanding GitHub Actions</span>](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)."

[**<span class="underline">More starter workflows</span>**](https://docs.github.com/en/actions/quickstart#more-starter-workflows)

GitHub provides preconfigured starter workflows that you can customize to create your own continuous integration workflow. GitHub analyzes your code and shows you CI starter workflows that might be useful for your repository. For example, if your repository contains Node.js code, you'll see suggestions for Node.js projects. You can use starter workflows as a starting place to build your custom workflow or use them as-is.

You can browse the full list of starter workflows in the [<span class="underline">actions/starter-workflows</span>](https://github.com/actions/starter-workflows) repository.

[**<span class="underline">Next steps</span>**](https://docs.github.com/en/actions/quickstart#next-steps)

GitHub Actions can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with GitHub Actions:

  - For a quick way to create a GitHub Actions workflow, see "[<span class="underline">Using starter workflows</span>](https://docs.github.com/en/actions/learn-github-actions/using-starter-workflows)."

  - For continuous integration (CI) workflows to build and test your code, see "[<span class="underline">Automating builds and tests</span>](https://docs.github.com/en/actions/automating-builds-and-tests)."

  - For building and publishing packages, see "[<span class="underline">Publishing packages</span>](https://docs.github.com/en/actions/publishing-packages)."

  - For deploying projects, see "[<span class="underline">Deployment</span>](https://docs.github.com/en/actions/deployment)."

  - For automating tasks and processes on GitHub, see "[<span class="underline">Managing issues and pull requests</span>](https://docs.github.com/en/actions/managing-issues-and-pull-requests)."

  - For examples that demonstrate more complex features of GitHub Actions, including many of the above use cases, see "[<span class="underline">Examples</span>](https://docs.github.com/en/actions/examples)." You can see detailed examples that explain how to test your code on a runner, access the GitHub CLI, and use advanced features such as concurrenc
