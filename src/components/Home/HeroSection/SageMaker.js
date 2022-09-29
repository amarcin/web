function SageMaker() {
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("rotate");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
  } 
  return (
    <div className="sm-animation">
      <svg viewBox="15 15 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" id="rotate">
        <path fill="transparent" stroke="rgba(255,255,255,0.3)" stroke-width="1" class="path" d="M57.364,77.951292 C57.1661154,77.9547297 56.971408,77.9009094 56.803,77.7962224 L50.5,74.0523997 L44.197,77.8516044 C43.8566588,78.0494652 43.4373412,78.0494652 43.097,77.8516044 L30.128,69.8544446 C29.7981524,69.6522541 29.5977512,69.2907082 29.6,68.9018743 L29.6,60.9268673 L23.561,57.4378017 C23.2283849,57.2499889 23.0161014,56.9021084 23,56.5184606 L23,43.4261574 C23.0006839,43.0265607 23.2150644,42.6583128 23.561,42.4625107 L29.6,39.0177507 L29.6,31.0427437 C29.5992395,30.6600525 29.794716,30.3040758 30.117,30.1012498 L43.064,22.159472 C43.4043412,21.9616112 43.8236588,21.9616112 44.164,22.159472 L50.5,25.9476003 L56.803,22.1483956 C57.1433412,21.9505348 57.5626588,21.9505348 57.903,22.1483956 L70.872,30.1012498 C71.1984972,30.3013909 71.3984055,30.6578539 71.4,31.0427437 L71.4,39.0177507 L77.439,42.4625107 C77.7849356,42.6583128 77.9993161,43.0265607 78,43.4261574 L78,56.5184606 C77.9993161,56.9180573 77.7849356,57.2863052 77.439,57.4821073 L71.4,60.9379437 L71.4,68.9018743 C71.4022488,69.2907082 71.2018476,69.6522541 70.872,69.8544446 L57.936,77.7962224 C57.7615803,77.8961703 57.5646776,77.9495507 57.364,77.951292 Z M51.6,72.0808007 L57.375,75.5587899 L69.2,68.281596 L69.2,60.2844361 C69.2006839,59.8848395 69.4150644,59.5165915 69.761,59.3207895 L74.634,56.5406134 L70.542,54.2588753 C69.613064,55.0552684 68.3115635,55.2414167 67.1991346,54.7369916 C66.0867056,54.2325666 65.3624868,53.1278665 65.339,51.8996024 C65.3162868,50.693754 65.9732103,49.5788132 67.0351149,49.0209297 C68.0970194,48.4630462 69.3809982,48.5583123 70.3502277,49.2668977 C71.3194572,49.9754832 71.8069932,51.1753383 71.609,52.3648111 L75.8,54.6465492 L75.8,44.0796649 L69.75,40.6238285 C69.4248331,40.4353377 69.2175042,40.0929568 69.2,39.7155639 L69.2,36.6806306 L66.153,36.6806306 C65.6203272,38.129273 64.1333913,38.9854409 62.6233441,38.7129834 C61.1132968,38.4405258 60.0141038,37.1177431 60.0141038,35.5729908 C60.0141038,34.0282384 61.1132968,32.7054557 62.6233441,32.4329982 C64.1333913,32.1605406 65.6203272,33.0167086 66.153,34.4653509 L69.2,34.4653509 L69.2,31.663022 L57.364,24.3969045 L51.6,27.8638173 L51.6,40.0478558 L57.716,43.6144562 C58.8817033,42.7308973 60.4977462,42.7703459 61.6195618,43.7097444 C62.7413775,44.649143 63.0745402,46.2419421 62.4243185,47.5571608 C61.7740968,48.8723794 60.3111444,49.5648326 58.8905476,49.2297857 C57.4699509,48.8947388 56.4645519,47.6201264 56.462,46.1509515 C56.4610856,45.9277198 56.4832043,45.7049964 56.528,45.4863676 L49.928,41.6539336 C49.5863024,41.4552884 49.3764336,41.0875805 49.378,40.6902869 L49.378,27.8638173 L43.647,24.3969045 L38.4,27.6090601 L38.4,35.4289976 L36.2,35.4289976 L36.2,28.9603808 L31.8,31.663022 L31.8,39.0177507 L37.3,42.1523716 L42.8,39.0177507 L42.8,33.357711 L45,33.357711 L45,39.7155639 C44.9993161,40.1151605 44.7849356,40.4834085 44.439,40.6792105 L38.4,44.0685885 L38.4,49.3409543 L44.516,53.3284578 C44.8265801,53.5344055 45.0127953,53.8844213 45.011,54.2588753 L45.011,57.9805452 L49.411,55.3665151 L49.411,50.6701221 L43.592,47.2253621 L44.692,45.3091452 L51.05,49.0861971 C51.3798476,49.2883876 51.5802488,49.6499335 51.578,50.0387674 L51.578,64.4380856 L56.627,64.4380856 C57.1478987,62.9848122 58.6339679,62.121907 60.1440262,62.3958793 C61.6540845,62.6698516 62.7475959,64.0007741 62.732,65.5457255 C62.6470677,67.0280998 61.5641905,68.2586671 60.1129616,68.5219659 C58.6617328,68.7852647 57.2204142,68.0126662 56.627,66.6533654 L51.6,66.6533654 L51.6,72.0808007 Z M39.049,72.7232318 L43.647,75.5477135 L49.4,72.0808007 L49.4,57.9362396 L37.113,65.1912807 L36.013,63.2750638 L42.8,59.2764839 L42.8,54.8459244 L37.3,51.2350184 L31.14,54.7130076 L30.04,52.7746379 L36.2,49.2966487 L36.2,44.0685885 L30.7,40.9339677 L25.2,44.0685885 L25.2,48.1003976 L29.908,45.3202216 L31.008,47.2253621 L25.2,50.6701221 L25.2,55.8760295 L30.7,59.0106503 L36.266,55.6877307 L37.366,57.6039477 L31.8,60.9157909 L31.8,68.281596 L36.783,71.338682 L42.525,67.9382276 L42.591,68.0379152 L42.855,67.8828456 L43.955,69.7990626 L39.049,72.7232318 Z M59.608,64.5266968 C59.0870136,64.5327973 58.669001,64.9619409 58.6730283,65.4865656 C58.6770555,66.0111903 59.1016063,66.4337759 59.6226241,66.4317731 C60.143642,66.4297561 60.5649648,66.0039074 60.565,65.4792671 C60.5681686,65.2217855 60.4664655,64.9742334 60.2835741,64.7942572 C60.1006827,64.614281 59.8525652,64.5175888 59.597,64.5266968 L59.608,64.5266968 Z M68.507,50.8916501 C68.1189598,50.8871586 67.766641,51.1190744 67.6150435,51.4787855 C67.463446,51.8384967 67.5425853,52.2547818 67.8153986,52.5326842 C68.0882119,52.8105865 68.5006833,52.8950826 68.859642,52.7466007 C69.2186006,52.5981189 69.4529744,52.2460579 69.453,51.8552968 C69.453,51.3230894 69.0245365,50.8916501 68.496,50.8916501 L68.507,50.8916501 Z M59.608,45.1873048 C59.0794635,45.1873048 58.651,45.6187441 58.651,46.1509515 C58.651,46.6831588 59.0794635,47.1145982 59.608,47.1145982 C60.1365365,47.1145982 60.565,46.6831588 60.565,46.1509515 C60.5680544,45.892513 60.4666869,45.6439183 60.2841567,45.4622091 C60.1016266,45.2804998 59.8536043,45.1812759 59.597,45.1873048 L59.608,45.1873048 Z M63.205,34.6093441 C62.8179296,34.6093441 62.4689727,34.8441291 62.3208473,35.2042191 C62.1727219,35.5643092 62.2545987,35.9787908 62.5282988,36.2543919 C62.8019989,36.5299929 63.2136217,36.6124384 63.571228,36.4632842 C63.9288344,36.31413 64.162,35.9627495 64.162,35.5729908 C64.162,35.315485 64.0596818,35.0686841 63.8778233,34.8876435 C63.6959649,34.7066029 63.4497127,34.6063842 63.194,34.6093441 L63.205,34.6093441 Z" id="Shape" fill-rule="nonzero">
        </path>
        <path fill="transparent" stroke="#00B0E6" stroke-width="1" class="line2" d="M57.364,77.951292 C57.1661154,77.9547297 56.971408,77.9009094 56.803,77.7962224 L50.5,74.0523997 L44.197,77.8516044 C43.8566588,78.0494652 43.4373412,78.0494652 43.097,77.8516044 L30.128,69.8544446 C29.7981524,69.6522541 29.5977512,69.2907082 29.6,68.9018743 L29.6,60.9268673 L23.561,57.4378017 C23.2283849,57.2499889 23.0161014,56.9021084 23,56.5184606 L23,43.4261574 C23.0006839,43.0265607 23.2150644,42.6583128 23.561,42.4625107 L29.6,39.0177507 L29.6,31.0427437 C29.5992395,30.6600525 29.794716,30.3040758 30.117,30.1012498 L43.064,22.159472 C43.4043412,21.9616112 43.8236588,21.9616112 44.164,22.159472 L50.5,25.9476003 L56.803,22.1483956 C57.1433412,21.9505348 57.5626588,21.9505348 57.903,22.1483956 L70.872,30.1012498 C71.1984972,30.3013909 71.3984055,30.6578539 71.4,31.0427437 L71.4,39.0177507 L77.439,42.4625107 C77.7849356,42.6583128 77.9993161,43.0265607 78,43.4261574 L78,56.5184606 C77.9993161,56.9180573 77.7849356,57.2863052 77.439,57.4821073 L71.4,60.9379437 L71.4,68.9018743 C71.4022488,69.2907082 71.2018476,69.6522541 70.872,69.8544446 L57.936,77.7962224 C57.7615803,77.8961703 57.5646776,77.9495507 57.364,77.951292 Z M51.6,72.0808007 L57.375,75.5587899 L69.2,68.281596 L69.2,60.2844361 C69.2006839,59.8848395 69.4150644,59.5165915 69.761,59.3207895 L74.634,56.5406134 L70.542,54.2588753 C69.613064,55.0552684 68.3115635,55.2414167 67.1991346,54.7369916 C66.0867056,54.2325666 65.3624868,53.1278665 65.339,51.8996024 C65.3162868,50.693754 65.9732103,49.5788132 67.0351149,49.0209297 C68.0970194,48.4630462 69.3809982,48.5583123 70.3502277,49.2668977 C71.3194572,49.9754832 71.8069932,51.1753383 71.609,52.3648111 L75.8,54.6465492 L75.8,44.0796649 L69.75,40.6238285 C69.4248331,40.4353377 69.2175042,40.0929568 69.2,39.7155639 L69.2,36.6806306 L66.153,36.6806306 C65.6203272,38.129273 64.1333913,38.9854409 62.6233441,38.7129834 C61.1132968,38.4405258 60.0141038,37.1177431 60.0141038,35.5729908 C60.0141038,34.0282384 61.1132968,32.7054557 62.6233441,32.4329982 C64.1333913,32.1605406 65.6203272,33.0167086 66.153,34.4653509 L69.2,34.4653509 L69.2,31.663022 L57.364,24.3969045 L51.6,27.8638173 L51.6,40.0478558 L57.716,43.6144562 C58.8817033,42.7308973 60.4977462,42.7703459 61.6195618,43.7097444 C62.7413775,44.649143 63.0745402,46.2419421 62.4243185,47.5571608 C61.7740968,48.8723794 60.3111444,49.5648326 58.8905476,49.2297857 C57.4699509,48.8947388 56.4645519,47.6201264 56.462,46.1509515 C56.4610856,45.9277198 56.4832043,45.7049964 56.528,45.4863676 L49.928,41.6539336 C49.5863024,41.4552884 49.3764336,41.0875805 49.378,40.6902869 L49.378,27.8638173 L43.647,24.3969045 L38.4,27.6090601 L38.4,35.4289976 L36.2,35.4289976 L36.2,28.9603808 L31.8,31.663022 L31.8,39.0177507 L37.3,42.1523716 L42.8,39.0177507 L42.8,33.357711 L45,33.357711 L45,39.7155639 C44.9993161,40.1151605 44.7849356,40.4834085 44.439,40.6792105 L38.4,44.0685885 L38.4,49.3409543 L44.516,53.3284578 C44.8265801,53.5344055 45.0127953,53.8844213 45.011,54.2588753 L45.011,57.9805452 L49.411,55.3665151 L49.411,50.6701221 L43.592,47.2253621 L44.692,45.3091452 L51.05,49.0861971 C51.3798476,49.2883876 51.5802488,49.6499335 51.578,50.0387674 L51.578,64.4380856 L56.627,64.4380856 C57.1478987,62.9848122 58.6339679,62.121907 60.1440262,62.3958793 C61.6540845,62.6698516 62.7475959,64.0007741 62.732,65.5457255 C62.6470677,67.0280998 61.5641905,68.2586671 60.1129616,68.5219659 C58.6617328,68.7852647 57.2204142,68.0126662 56.627,66.6533654 L51.6,66.6533654 L51.6,72.0808007 Z M39.049,72.7232318 L43.647,75.5477135 L49.4,72.0808007 L49.4,57.9362396 L37.113,65.1912807 L36.013,63.2750638 L42.8,59.2764839 L42.8,54.8459244 L37.3,51.2350184 L31.14,54.7130076 L30.04,52.7746379 L36.2,49.2966487 L36.2,44.0685885 L30.7,40.9339677 L25.2,44.0685885 L25.2,48.1003976 L29.908,45.3202216 L31.008,47.2253621 L25.2,50.6701221 L25.2,55.8760295 L30.7,59.0106503 L36.266,55.6877307 L37.366,57.6039477 L31.8,60.9157909 L31.8,68.281596 L36.783,71.338682 L42.525,67.9382276 L42.591,68.0379152 L42.855,67.8828456 L43.955,69.7990626 L39.049,72.7232318 Z M59.608,64.5266968 C59.0870136,64.5327973 58.669001,64.9619409 58.6730283,65.4865656 C58.6770555,66.0111903 59.1016063,66.4337759 59.6226241,66.4317731 C60.143642,66.4297561 60.5649648,66.0039074 60.565,65.4792671 C60.5681686,65.2217855 60.4664655,64.9742334 60.2835741,64.7942572 C60.1006827,64.614281 59.8525652,64.5175888 59.597,64.5266968 L59.608,64.5266968 Z M68.507,50.8916501 C68.1189598,50.8871586 67.766641,51.1190744 67.6150435,51.4787855 C67.463446,51.8384967 67.5425853,52.2547818 67.8153986,52.5326842 C68.0882119,52.8105865 68.5006833,52.8950826 68.859642,52.7466007 C69.2186006,52.5981189 69.4529744,52.2460579 69.453,51.8552968 C69.453,51.3230894 69.0245365,50.8916501 68.496,50.8916501 L68.507,50.8916501 Z M59.608,45.1873048 C59.0794635,45.1873048 58.651,45.6187441 58.651,46.1509515 C58.651,46.6831588 59.0794635,47.1145982 59.608,47.1145982 C60.1365365,47.1145982 60.565,46.6831588 60.565,46.1509515 C60.5680544,45.892513 60.4666869,45.6439183 60.2841567,45.4622091 C60.1016266,45.2804998 59.8536043,45.1812759 59.597,45.1873048 L59.608,45.1873048 Z M63.205,34.6093441 C62.8179296,34.6093441 62.4689727,34.8441291 62.3208473,35.2042191 C62.1727219,35.5643092 62.2545987,35.9787908 62.5282988,36.2543919 C62.8019989,36.5299929 63.2136217,36.6124384 63.571228,36.4632842 C63.9288344,36.31413 64.162,35.9627495 64.162,35.5729908 C64.162,35.315485 64.0596818,35.0686841 63.8778233,34.8876435 C63.6959649,34.7066029 63.4497127,34.6063842 63.194,34.6093441 L63.205,34.6093441 Z" id="Shape" fill-rule="nonzero">
        </path>
        <path fill="transparent" stroke="rgba(255,255,255,0.3)" stroke-width="1" class="line1" d="M57.364,77.951292 C57.1661154,77.9547297 56.971408,77.9009094 56.803,77.7962224 L50.5,74.0523997 L44.197,77.8516044 C43.8566588,78.0494652 43.4373412,78.0494652 43.097,77.8516044 L30.128,69.8544446 C29.7981524,69.6522541 29.5977512,69.2907082 29.6,68.9018743 L29.6,60.9268673 L23.561,57.4378017 C23.2283849,57.2499889 23.0161014,56.9021084 23,56.5184606 L23,43.4261574 C23.0006839,43.0265607 23.2150644,42.6583128 23.561,42.4625107 L29.6,39.0177507 L29.6,31.0427437 C29.5992395,30.6600525 29.794716,30.3040758 30.117,30.1012498 L43.064,22.159472 C43.4043412,21.9616112 43.8236588,21.9616112 44.164,22.159472 L50.5,25.9476003 L56.803,22.1483956 C57.1433412,21.9505348 57.5626588,21.9505348 57.903,22.1483956 L70.872,30.1012498 C71.1984972,30.3013909 71.3984055,30.6578539 71.4,31.0427437 L71.4,39.0177507 L77.439,42.4625107 C77.7849356,42.6583128 77.9993161,43.0265607 78,43.4261574 L78,56.5184606 C77.9993161,56.9180573 77.7849356,57.2863052 77.439,57.4821073 L71.4,60.9379437 L71.4,68.9018743 C71.4022488,69.2907082 71.2018476,69.6522541 70.872,69.8544446 L57.936,77.7962224 C57.7615803,77.8961703 57.5646776,77.9495507 57.364,77.951292 Z M51.6,72.0808007 L57.375,75.5587899 L69.2,68.281596 L69.2,60.2844361 C69.2006839,59.8848395 69.4150644,59.5165915 69.761,59.3207895 L74.634,56.5406134 L70.542,54.2588753 C69.613064,55.0552684 68.3115635,55.2414167 67.1991346,54.7369916 C66.0867056,54.2325666 65.3624868,53.1278665 65.339,51.8996024 C65.3162868,50.693754 65.9732103,49.5788132 67.0351149,49.0209297 C68.0970194,48.4630462 69.3809982,48.5583123 70.3502277,49.2668977 C71.3194572,49.9754832 71.8069932,51.1753383 71.609,52.3648111 L75.8,54.6465492 L75.8,44.0796649 L69.75,40.6238285 C69.4248331,40.4353377 69.2175042,40.0929568 69.2,39.7155639 L69.2,36.6806306 L66.153,36.6806306 C65.6203272,38.129273 64.1333913,38.9854409 62.6233441,38.7129834 C61.1132968,38.4405258 60.0141038,37.1177431 60.0141038,35.5729908 C60.0141038,34.0282384 61.1132968,32.7054557 62.6233441,32.4329982 C64.1333913,32.1605406 65.6203272,33.0167086 66.153,34.4653509 L69.2,34.4653509 L69.2,31.663022 L57.364,24.3969045 L51.6,27.8638173 L51.6,40.0478558 L57.716,43.6144562 C58.8817033,42.7308973 60.4977462,42.7703459 61.6195618,43.7097444 C62.7413775,44.649143 63.0745402,46.2419421 62.4243185,47.5571608 C61.7740968,48.8723794 60.3111444,49.5648326 58.8905476,49.2297857 C57.4699509,48.8947388 56.4645519,47.6201264 56.462,46.1509515 C56.4610856,45.9277198 56.4832043,45.7049964 56.528,45.4863676 L49.928,41.6539336 C49.5863024,41.4552884 49.3764336,41.0875805 49.378,40.6902869 L49.378,27.8638173 L43.647,24.3969045 L38.4,27.6090601 L38.4,35.4289976 L36.2,35.4289976 L36.2,28.9603808 L31.8,31.663022 L31.8,39.0177507 L37.3,42.1523716 L42.8,39.0177507 L42.8,33.357711 L45,33.357711 L45,39.7155639 C44.9993161,40.1151605 44.7849356,40.4834085 44.439,40.6792105 L38.4,44.0685885 L38.4,49.3409543 L44.516,53.3284578 C44.8265801,53.5344055 45.0127953,53.8844213 45.011,54.2588753 L45.011,57.9805452 L49.411,55.3665151 L49.411,50.6701221 L43.592,47.2253621 L44.692,45.3091452 L51.05,49.0861971 C51.3798476,49.2883876 51.5802488,49.6499335 51.578,50.0387674 L51.578,64.4380856 L56.627,64.4380856 C57.1478987,62.9848122 58.6339679,62.121907 60.1440262,62.3958793 C61.6540845,62.6698516 62.7475959,64.0007741 62.732,65.5457255 C62.6470677,67.0280998 61.5641905,68.2586671 60.1129616,68.5219659 C58.6617328,68.7852647 57.2204142,68.0126662 56.627,66.6533654 L51.6,66.6533654 L51.6,72.0808007 Z M39.049,72.7232318 L43.647,75.5477135 L49.4,72.0808007 L49.4,57.9362396 L37.113,65.1912807 L36.013,63.2750638 L42.8,59.2764839 L42.8,54.8459244 L37.3,51.2350184 L31.14,54.7130076 L30.04,52.7746379 L36.2,49.2966487 L36.2,44.0685885 L30.7,40.9339677 L25.2,44.0685885 L25.2,48.1003976 L29.908,45.3202216 L31.008,47.2253621 L25.2,50.6701221 L25.2,55.8760295 L30.7,59.0106503 L36.266,55.6877307 L37.366,57.6039477 L31.8,60.9157909 L31.8,68.281596 L36.783,71.338682 L42.525,67.9382276 L42.591,68.0379152 L42.855,67.8828456 L43.955,69.7990626 L39.049,72.7232318 Z M59.608,64.5266968 C59.0870136,64.5327973 58.669001,64.9619409 58.6730283,65.4865656 C58.6770555,66.0111903 59.1016063,66.4337759 59.6226241,66.4317731 C60.143642,66.4297561 60.5649648,66.0039074 60.565,65.4792671 C60.5681686,65.2217855 60.4664655,64.9742334 60.2835741,64.7942572 C60.1006827,64.614281 59.8525652,64.5175888 59.597,64.5266968 L59.608,64.5266968 Z M68.507,50.8916501 C68.1189598,50.8871586 67.766641,51.1190744 67.6150435,51.4787855 C67.463446,51.8384967 67.5425853,52.2547818 67.8153986,52.5326842 C68.0882119,52.8105865 68.5006833,52.8950826 68.859642,52.7466007 C69.2186006,52.5981189 69.4529744,52.2460579 69.453,51.8552968 C69.453,51.3230894 69.0245365,50.8916501 68.496,50.8916501 L68.507,50.8916501 Z M59.608,45.1873048 C59.0794635,45.1873048 58.651,45.6187441 58.651,46.1509515 C58.651,46.6831588 59.0794635,47.1145982 59.608,47.1145982 C60.1365365,47.1145982 60.565,46.6831588 60.565,46.1509515 C60.5680544,45.892513 60.4666869,45.6439183 60.2841567,45.4622091 C60.1016266,45.2804998 59.8536043,45.1812759 59.597,45.1873048 L59.608,45.1873048 Z M63.205,34.6093441 C62.8179296,34.6093441 62.4689727,34.8441291 62.3208473,35.2042191 C62.1727219,35.5643092 62.2545987,35.9787908 62.5282988,36.2543919 C62.8019989,36.5299929 63.2136217,36.6124384 63.571228,36.4632842 C63.9288344,36.31413 64.162,35.9627495 64.162,35.5729908 C64.162,35.315485 64.0596818,35.0686841 63.8778233,34.8876435 C63.6959649,34.7066029 63.4497127,34.6063842 63.194,34.6093441 L63.205,34.6093441 Z" id="Shape" fill-rule="nonzero">
        </path>
      </svg>
    </div>
  )
}

export default SageMaker