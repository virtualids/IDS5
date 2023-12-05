<body>
<div class = "login screen">
<section class = "topbar">
  <button class = "ermgency"><a href = "emergency/+page.svelte">Emergency <br> Information</a></button>
  <button class = "topbarbutton"><a href = "SIA/+page.svelte">SIA</a></button>
  <button class = "topbarbutton"><a href = "vfrsectional/+page.svelte">VFR Sectional</a></button>
  <button class = "approachcharts"><a href = "charts/+page.svlete">Approach <br> Charts</a></button>
  <button class = "topbarbutton"><a href = "publication/+page.svelte">Publications</a></button>
  <button class = "topbarrbutton"><a href = "main_menu/+page.svelte">Main Menu</a></button>
</section>
                <h1>welcome, to ids5 select a tab at the top to get started</h1>
</div>
  <style>
   .emergency {
    background-color: rgb(198, 2, 0);
    border-radius: 1px rgb(128, 128, 128);
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    width: 13%;
    vertical-align: middle;
    margin-right: 5px; /* Remove margin-left for consistent spacing */
   }

   .approachcharts {
    display: inline-block; 
    background-color: rgb(192, 192, 192);
    border-radius: 1px rgb (128, 128, 128);
    padding-left: 15px;
    padding-right: 15px; 
    padding-top: 10px; 
    padding-bottom: 10px; 
    border: none;
    width: 13%; 
    vertical-align: middle;
    margin-right: 5px; 
   }
 
   .topbar {
    background-color: rgb(127, 127, 127);
    display: inline-block;
    width: 100%;
   }

   body {
    background-color: rgb (127, 127, 127)
   }
 
   .topbar-container {
    display: flex;
    justify-content: center;
    align-items: center; /* Optional for vertical centering */
   }
 
   .topbarbutton {
    display: inline-block;
    background-color: rgb(192, 192, 192);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 26px;
    padding-bottom: 26px;
    border: none;
    width: 13%;
    vertical-align: middle;
    margin-right: 5px;
   }
 
   body {
    background-color: rgb(128, 128, 128);
   }
 
   .content {
    padding: 20px;
    font-size: 18px;
   }
  </style>
 </body>