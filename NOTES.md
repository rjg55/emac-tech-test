## Note on Util Func

In my fetchAllCards model I intend to use a util function to find and replace the templateId with the imageURL. I will test this in a seperate folder. The first half of the model uses a map protoype method and I dont think this requires testing as it is a well-known method that has been tested extensively.

## What i'd do given more time:

- ## Error handling

I would have liked to add more error handling to my endpoints, particularly the /card/:cardID. There should be a util function or something similar to check for a valid but non-existent cardID that would throw a different error to an invalid cardID.

- ## Testing, testing, testing

There are more tests that I would like to add, the util function for example needs a test for when its given an empty array or an object that is not enumerable.
