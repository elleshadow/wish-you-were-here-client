# Pull Request
**Block quotes in this template are only used as instructions and examples, and are preceded by a right arrow (>).**
**Delete all the block quotes before submitting**
## Summary
>What does this PR do?
## Review
>What specific feedback would you like to receive from the reviewer(s)?
>Please look at the feature on line 2 of app.js, and let me know if you see any other way to DRY the logic.
## Issues
>List all issues from the project board that will be closed by the merging of this Pull Request. When done correctly, the issues will become linked, and the project board will automatically close them if the pull request is merged.
Example: Close # 173
> **If there is not a corresponding issue for the work you have completed, STOP and go open an issue before continuing**
> Seriously ^
1.
2.
3.
## Type of change
> Delete any change types that are not applicable, along with any explanations in the parenthesis.
- Admin (Update to documentation only eg README.md, Not for any code updates)
- New feature (non-breaking change which adds functionality)
- Bug fix (non-breaking change which fixes an issue)
- Refactor feature (non-breaking change that modifies existing work)
- Cosmetic changes (changes to layout or visuals only)
## All Submission:
- [ ] I completed all sections of this PR.
- [ ] I have deleted unnecessary sections of this PR.
- [ ] I have reviewed the rubric at the bottom of this PR (Even if deleting the section, it’s good to keep it all in mind)
- [ ] I have added other team member as reviewers.
## New Feature Submissions:
> Delete this section if the change is not a new feature.
- [ ] New feature appears to be bug free.
- [ ] When the project is run locally, the terminal shows no errors, warnings, or console.logs.
- [ ] Tests have been written for the change
- [ ] Change passes all tests
## Bug fix Submissions:
> Delete this section if the change is not a bug fix.
How did you confirm the bug?
What was the cause of the bug?
How did you resolve the bug?
## Refactor Submissions:
> Delete this section if the change is not refactoring.
- [ ] DRY: Code is as DRY as possible.
- [ ] SRP: Each function/methods completes no more than 1 task.
- [ ] Code follows the style guidelines of this project (semicolons, indentation, naming conventions, etc..).
- [ ] All console logs have been removed from the code. (Seriously, users will never need them, get rid of them.)
- [ ] All commented code has been removed, including commented console logs (commented explanations are acceptable)
## Cosmetic Submissions:
> Delete this section if the change is not cosmetic.
- [ ] Semantic tags are used. (section over div)
- [ ] Aria tags are used. (role)
- [ ] UI is tabable.
- [ ] Changes have been tested using Lighthouse.
Current Score: XX%
### Current Accessibility Concerns:
> None
# Rubric
> Delete this section if the change is Admin only. These are the guidelines to get a 4 on this project, it’s totally fine if some of the boxes don’t get checked. This is just something to aim for.
## React Architecture
- [ ] A consistent, modular file structure is used.
- [ ] A clear understanding of class components vs function components is demonstrated.
- [ ] Only the data that a child component needs is passed down as props.
- [ ] Logic is kept out of return statements; return statements are as readable as possible, only communicating what will be displayed.
- [ ] Fetch calls have been refactored to be reusable for multiple queries.
- [ ] Frontend data (state) always matches the backend data.
- [ ] Data fetched from API is run through a cleaning function (which is defined in a separate utilities file).
- [ ] Implements excellent error handling if movie database server is down or fetch fails (this includes loading images as well as error messages on the frontend).
## Testing
- [ ] Team has successfully achieved 90%+ test coverage of all components.
- [ ] All async functionality is stubbed and tested.
- [ ] Async tests cover happy & sad paths.
- [ ] All application views are tested.
- [ ] All user flows are tested.
## Routing
- [ ] Application has been refactored to use Router without leaving artifacts of the prior code (no odd workarounds remaining).
- [ ] Use of Router shows developer empathy (readability, maintainability).
- [ ] UX is excellent; routes are consistent and navigation is clear.
- [ ] When the user enters a bad URL, they are given an easy way to navigate to a working page.
