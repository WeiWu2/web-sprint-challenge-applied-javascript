const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // creates div element with topic class
   const tabsTopics = document.createElement('div');
   tabsTopics.classList.add('topics');
 //loops through topic array and creates a div element with tab class 
 // and sets the textContent with the strings in topic array
   topics.forEach((topic) => {
    const newTopic = document.createElement('div');
    newTopic.classList.add('tab');
    newTopic.textContent = topic;
    tabsTopics.appendChild(newTopic);
   });

   return tabsTopics;
}
import axios from 'axios';
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then(
    (res) => {
      // calls Tabs function with array taken from the api 
      // then appends it to where selector points at
    document.querySelector(selector).append(Tabs(res.data.topics));
  }
  )
  .catch(
    (error) => {
    console.log(error);
  }
  );
}
export { Tabs, tabsAppender }
