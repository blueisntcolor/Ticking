const scrollATS = document.querySelector(".scroll-host");
let scroll1 = 0;
function ticking() {
    // List Array URL base on element on website, info change due to policy
  const siteList = [
    "a",
    "asd.com",
    "das.com",
    "ds.com",
    "ds",
    "Nestidasda",
    "Sukabumdasi das",
    "SGDtidsdass",
    "SdsadGMagdadasdassazine - AdasdasTMdsadas",
    "KiasuPardasdasents - dasdasdATdsadas",
    "nineendasdasdastertain.mcdasdot.nest",
    "Dekdsadasoruma",
    "Cintadasdasdasmobdasildasdas",
    "ineasdasdws.dasdasdasdid",
    "daradadasdily.comdas",
    "chiangmainewdasdasds.cdasdas.thdasd",
    "genpdasdas.cdasdaso",
    "Thdasde Sudasd Daildasdasy",
    "Odsadh!Mdasdaedidas",
    "wiserdsadad.mydasd",
    "Siadasdkap dasdKeldsadi",
    "OdasH MYdasd MEdsadasDIA",
    "ProducdasdastNation",
    "Rasdsadasa",
    "sunstardasdacom.pdashdsa",
    "Keludasadasdasrga",
    "eCendasdastral",
    "bilydasdasdnaryasdo.cdasom",
    "philstdasdasdarlife.cdasdom",
    "latestcdasdasdhika.codasdm",
    "voicedsadtv.codsa.dsadath",
    "workpointtvdsadas.codasdm",
    "VOdasd",
    "cdasduasdabasoi.tuoidasdtrdsadasde.vdasdasn",
    "tinxdasdasdase.fasfvfasfn",
    "hosadasid123ap2dasdasd12347.codasdas",
    "whatpdasdashone.nedsadast",
    "asd.cdasdasom (not usdasdase)",
    "mazdasiadidsadasdas.ndasdsaet",
  ];

  const checkSites = document.querySelectorAll(
    ".ng-option.ng-star-inserted > div > .checkbox >.unchecked"
  );
  checkSites.forEach((checkSite) => {
    if (
      siteList.some(
        (siteList) => checkSite.textContent.includes(siteList) === true
      )
    ) {
      checkSite.click();
    }
  });
  scroll1 += 544;
  scrollATS.scroll(0, scroll1);
}
setInterval(ticking, 500);