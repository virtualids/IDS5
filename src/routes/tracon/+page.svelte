<body>
  <section class="topbar">
    <div class="topbar-container">
      <button class="emergency" type="button">
        <span>Emergency</span><br>
        Information
      </button>
      <button class="topbarbutton" type="button">SIA</button>
      <button class="topbarbutton" type="button">Weather</button>
      <button class="topbarbutton" type="button">VFR Sectional</button>
      <button class="topbarbuttoncharts" type="button">Approach
        <br> Charts</button>
      <button class="topbarbutton" type="button">Publication</button>
      <button class="topbarbutton" type="button">Main Menu</button>
    </div>
  </section>
</body>

<style>

.emergency {
  background-color: rgb(198, 02, 0);
  border-radius: 1px rgb(128, 128, 128);
  display: inline-block;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 18px;
  padding-bottom: 19px;
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
  margin-left: 5px; 
  margin-right: 5px; 
}

.topbarbuttoncharts {
  display: inline-block;
  background-color: rgb(192, 192, 192);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 18px;
  padding-bottom: 19px;
  border: none;
  width: 13%;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
}


body {
  background-color: rgb(128, 128, 128);
}

</style>
