<p align="center">
    <img src="public/FULL_LOGO_COLOR.png" alt="Logo" >
</p>

<p align="center">
    <h1 align="center">Educational Video Player</h3>
</p>

<p align="center">
    <p><b>Technologies Used</b></p>
    <ul>
        <li>ReactJS</li>
        <li>TypeScript</li>
        <li>React Router</li>
        <li>axios</li>
    </ul>
</p>

<p align="center">
    <h2 align="center">Main page (path: "/")</h2>
</p>
<p align="center">
    <img src="screens/mainPage.png" alt="Main page" >
</p>
<p><b>Header</b>: The header of the page includes a logo. Clicking on the logo redirects users back to the main page, ensuring easy navigation to the home screen.</p>
<p><b>Add Video Button</b>: A button labeled "Add Video" that redirects users to a page where they can add new videos. This feature simplifies the process of expanding the video library.</p>
<p><b>Video List</b>: Main page show a list of videos and allow users to select a video from the list.</p>
<p>Each video entry in the list shows the following details:</p>
<p>
    <ul>
        <li>Video Title</li>
        <li>Number of Comments</li>
        <li>Upload Time</li>
    </ul>
</p>

<p align="center">
    <img src="screens/mainPageLoading.png" alt="Main Loading page" >
</p>
<p><b>Fallback Component</b>: A fallback component is displayed while the main page is loading. This component enhances the user experience by providing a visual indicator that the content is being loaded, ensuring users are aware that the application is working on retrieving the data.</p>

<p align="center">
    <h2 align="center">Add Video page (path: "/add-video")</h2>
</p>
<p>The page has 4 required fields:</p>
<p>
    <ul>
        <li>Video URL</li>
        <li>User ID</li>
        <li>Title</li>
        <li>Description</li>
    </ul>
</p>
<p><b>Add Video</b> button: Clicking this button submits the entered information to add the video to the application. Upon clicking the "Add Video" button, users are redirected back to the Main Page of the application.</p>
<p align="center">
    <img src="screens/addVideo.png" alt="Add Video page" >
</p>

<p align="center">
    <h2 align="center">Video Detailes page (path: "/video-details/:id")</h2>
</p>
<p>The data for this page is preloaded. The page includes:</p>
<p>
    <ul>
        <li>Edit Video button</li>
        <li>Video player</li>
        <li>Edit Video button</li>
        <li>Video title</li>
        <li>Video description</li>
        <li>Amount of comments</li>
        <li>When video was published</li>
        <li>Form for adding a comment to the video with 2 required fields: User Id and Comments. And a Comment button, which changes its color on hover</li>
        <li>List of comments with information about who left the comment, how long ago it was left, and the comment content</li>
    </ul>
</p>
<p align="center">
    <img src="screens/videoDetailes1.png" alt="Video Detailes page" >
</p>
<p align="center">
    <img src="screens/videoDetailes2.png" alt="Video Detailes page" >
</p>

<p align="center">
    <img src="screens/videoDetailesLoading.png" alt="Video Detailes Loading page" >
</p>
<p><b>Fallback Component</b>: A fallback component is displayed while the main page is loading. This component enhances the user experience by providing a visual indicator that the content is being loaded, ensuring users are aware that the application is working on retrieving the data.</p>

<p align="center">
    <h2 align="center">Edit Video page (path: "/edit-video/:id")</h2>
</p>
<p>The data for this page are preloaded. The page has 2 required fields:</p>
<p>
    <ul>
        <li>Title</li>
        <li>Description</li>
    </ul>
</p>
<p><b>Edit Video</b> button: Clicking this button submits the entered information to add the video to the application. Upon clicking the "Edit Video" button, users are redirected back to the Main Page of the application.</p>
<p align="center">
    <img src="screens/editVideo.png" alt="Edit Video page" >
</p>
