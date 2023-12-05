<script lang="ts">
  let selectedTab: string = "main_menu";
 
  interface Tab {
   title: string;
   content: string;
  }
 
  const tabs: Record<string, Tab> = {
   emergency: {
    title: "Emergency",
    content: "Emergency Information",
   },
   sia: {
    title: "SIA",
    content: "This is the content for the SIA tab.",
   },
   weather: {
    title: "Weather",
    content: "This is the content for the Weather tab.",
   },
   vfr_sectional: {
    title: "VFR Sectional",
    content: "This is the content for the VFR Sectional tab.",
   },
   approach_charts: {
    title: "Approach Charts",
    content: "This is the content for the Approach Charts tab.",
   },
   publication: {
    title: "Publication",
    content: "This is the content for the Publication tab.",
   },
   main_menu: {
    title: "Main Menu",
    content: "This is the content for the Main Menu tab.",
   },
  };
 
  function handleTabClick(tab: string) {
   selectedTab = tab;
  }
 </script>
 
 <body>
  <section class="topbar">
   <div class="topbar-container">
    {#each Object.entries(tabs) as [key, { title }]}
     <button
      class={key === "emergency" ? "emergency active" : "topbarbutton"}
      type="button"
      on:click={() => handleTabClick(key)}
     >
      {key === "emergency" ? (
        Emergency
        <br />
        Information
       </div>
      ) : title}
     </button>
    {/each}
   </div>
  </section>
 
  <div class="content">
   {tabs[selectedTab].content}
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
 
   .topbar {
    background-color: rgb(127, 127, 127);
    display: inline-block;
    width: 100%;
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