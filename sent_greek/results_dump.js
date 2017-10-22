const results = [
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "18b22fa9f0605ac49903aa4df5262c78c9232edc",
    name: "Lukos Caffenio",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJ9VICJ1a7oRQRJJesESzNRfE",
    rating: 5,
    reference:
      "CmRSAAAADooTwYyPDBVR16JAmLTWKG4i8LER6A4d3HRgk_M8rdrkSWzx1ClNnP_vyLuzaRlNUEsewGyeAdtw1HjscLJwOQNorS8ZNonqc3cwSYCO3mzxPKqah2366kJYNVSvT9YXEhCIewqc2goB8WFeIF87qhkqGhTyafXQ867CujSoQiVxTFRlVcZboA",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Zefirou 25, Egaleo"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "18b41e3b7fc568e4da8bb22517f3f7b18e8d591c",
    name: "Star Cafe",
    photos: [[Object]],
    place_id: "ChIJGURgWlS7oRQRH55n1NyV4wY",
    rating: 4,
    reference:
      "CmRRAAAAmJL-TbzikaW_EYHG77mC_SzXCE-aTjnXcdfOTXLexOIFjFmZ8SkfSzp_N45T3v9wYb7IKD_Sl_zWppa82l2nW1wpZ-Ko10uAuxLmlNPLUPxJIPyJVhVJ0UWQQ27A2ROiEhB5yEC8TarUgHdSFNe82zuHGhTlTT2KS3ok7YZB8m75EHajMvWpIA",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 48, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "5c0098254c6c9f443c75977d1b07f7e1a45221e8",
    name: "Novem",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJRW8IV1S7oRQRnmhDjAFA_XM",
    rating: 4.6,
    reference:
      "CmRRAAAAZ-r50n96Wa0gCCNUU_DTF5V4qwWEH9Gdj-FeAFFlAfSmD8-yzmKqU-RzNWF1hUjjvPUI6eNpSGD-15KIBJnwybIZ-Nh42ss6916oX59umpCVd-IE37ubPughwttHAnpAEhCT_829DifHHzH-j1zscwRcGhTpFJnaeUnWi8prHT5f5YnwES5AhQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 47, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "0bdb6d31f942c9d35259624309a8000906826380",
    name: "Pagotofrenia M&D",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJT2ulWVS7oRQR9UUZOfGH4fI",
    rating: 4.2,
    reference:
      "CmRSAAAAVYdnG4zc-MF0VeOvVGnkWIINiKr9FIJtluvTeZMcEJg82saqQJvk6XDuETm5n0ZxedZWs2atNeMD_M0u0jk2agntr1UfcU4iNO_MgsTANKlQ0_mdEOV8P-hPjvwmm9X5EhCQAOd8BgAZ9XigvU6GTsm1GhQ7iy0w2gEtQZVfY-2_BYkOZ-gI5w",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 39, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "1b34cb189c390a0aae1433c10862d20838cd03dd",
    name: "Novem",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJOQstQVS7oRQRekRm30PG_Xg",
    rating: 4.4,
    reference:
      "CmRRAAAAyODxGOU4NSN_55UIILP0-OAYM-Q9mgJEqJ3hCgdK5ADdjllZl8xqHbknMymtCbV1N8DGP4Mo89GNqIc86UGMjqLoTEeWB9H_2PccAzwupWX-oqyYZLb9_Np6PiFGDTkNEhDKv9VCzAgo31tcTRKrEPuWGhTD4qOFHwQ_5v7wrlpwy0KS7IoeBw",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 42, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "2e8d5c59ca066111725a6628fc78a156c5572b79",
    name: "CAFE ME -SPORTS",
    place_id: "ChIJEWOjF1S7oRQRYredXSZypQM",
    reference:
      "CmRRAAAAOgFbvS3ZPKvLZV5H_KuFUV9VaLtHpaSfB88WEvuCV8lXZBDDF7D6GDpABe-96e1eNCDEX9Mgsbh1o2ciGpNc1xZyXBG4093BatX1jFOdS0uEi90UN7a8_m3V0t7yb60KEhD5Txh4THfI6m2j_IB-XJiEGhQcn2cWOS_km7OONFX1URW3LRmABQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Kriezotou 11, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "45c2589f58c73764185a2d284a47541284a49319",
    name: "Cafe Me Sports",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJv5OgPVS7oRQRqgInKe3htN8",
    rating: 4.2,
    reference:
      "CmRSAAAAYkLzPNmxlixRkiIk1HI5UuARS9qYpsy7UMa_nc-31TvJMHvGDR0FQRFI_G--tbIreiOeC-0KLUotrRW8CkSeXXIL5RiXetESI6yZy2jHxrOV97_2SSEQj3S67HDOdjEyEhDPCGLqUd_NtaOYqtsuILy2GhR3hOwqoK0RZ1SjoZW4ZQ9GxduVJw",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 25, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "38935b9ccb03263f785fb0e33e9621b682260d8c",
    name: "Το Τρακ Cafe",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJ505Q91S7oRQR-Gz33FguTYY",
    rating: 4.4,
    reference:
      "CmRSAAAA4s8Pe1Sg0tVvBWjRIKEnBqk5JZ4v2rNw2xh11-VuUqPPq1kQfbXa5l1LV6WUaO6U3ApMu_1HmnUfKJytxmUDyJdf7-olmAzsmSNfXdR2w-kwbm1_kvrk6AM2JM81X7H5EhAHShpsdFtZ32NaOAfzcSw2GhQaAQ6WhcnHJNrBHiaAjrXMO7FgZQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 56, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "53f90e2ec270996dbfd218ad6c3178e7535251f1",
    name: "Trak Cafe Χαιδαρι",
    photos: [[Object]],
    place_id: "ChIJ6wwv9lS7oRQR_o5pZUYLqK0",
    rating: 3,
    reference:
      "CmRSAAAAe-gBYqqeUHtTHkRynhYrgxCB-y1BExAJVPrgP0_t6dFCNrW5FSi6xqgJ5CHqFcbMWJ_I2DNyJtwqB5XBgf2daVjIvhrKxjUtMA-dANO-DUZ14YV-tIzjuh8VMj3TI0TQEhC3B088nz4HPric-DGBvUMgGhSH70NHhQQtOHRri7fdj0DmPArAMg",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 56, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "2ed0cbeca980240ea95fe8e82af6a8906c6301fe",
    name: "CrepaLand",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJP7Mp91S7oRQRRNbHp6908ds",
    rating: 3.8,
    reference:
      "CmRSAAAAJPcDJ2RGp6Nii9TPSNBoifKoM-qrZ2M_4CYUObsvQzn2IRRpe6cu_3FFFKoQ19vuD92V--G01nJ_ZfPCcYNb9z_8OlTMnagpiWh-8THjkglEua5rXUI_mVZrHBv6Na9hEhBZrtTLraDTi2zm-Id49fLeGhSR4s2cy09xH114g16Z9jlav-kABQ",
    scope: "GOOGLE",
    types: [
      "cafe",
      "meal_takeaway",
      "restaurant",
      "food",
      "store",
      "point_of_interest",
      "establishment"
    ],
    vicinity: "Karaiskaki, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "7c9f06af888bfb37901a688651ab9836414be9ff",
    name: "Avenue Cafe",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJ6ZuA8FS7oRQRUNSf3Br-f_c",
    rating: 4.2,
    reference:
      "CmRSAAAAVWr9BkXAe7sZOHq4-BdnY0gU5jU8J9e9SK_F0L5wJmIlQWtg2N-zDMarkHFg04Qgw-Z0VzC-nuqIG8pERvzgyt38DTSKpNmcXLVRdxSDwPNPXxpt6go-Rzc_LYpjN7DQEhB8nokMSFvtDhxDyKRxXFDrGhRQU25PBFIRvmmMzveIUhigz1PZUA",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 51, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "ea5709a47a00afddcb97a4ede37135447fbaea3c",
    name: "AVENUE Revolution cafe bar",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJcWfx8FS7oRQRsAoAPUz_fLI",
    reference:
      "CmRSAAAApG2jEBAX5hzV2sx73NsBbcssaXnxt9QeUC8Mj7VkJ__RvhCqH7GdDL65MnSmthbABIROfCT6hJDBov3v-_U1Gyq6N1jHAsxoPwzct-mlHKmkdP8loD99bcE4q48AbKSTEhBBwHSsW1ULgJ8n_1NT2b6NGhTbOU9uHSTq22DCKxnup6__pAiSQQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "store", "point_of_interest", "establishment"],
    vicinity: "53, Parodos Karaiskaki 51, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "6442bcd5593654025df5eb48a0b01aadc3f59ee8",
    name: "Cutty Sark cafe bar",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJO-H971S7oRQRaj3J8eHBRqA",
    rating: 4.3,
    reference:
      "CmRSAAAAd1g6el9eob5jvwWuFw9oVfaiYZInKjbh3vQWh1MNIDSGzZ83lNU5DWhOkriIWZ06cDlTOqCIkGbVLcEf5A6aNwSqfKgo2vioo3c_t12ePOO9b24tD4Nvgd2b0v136zSdEhBjaomW_rvH6QzruX05w2stGhQoNMooAwW_iWS9r3wYrgh01hN6BQ",
    scope: "GOOGLE",
    types: [
      "cafe",
      "bar",
      "night_club",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
    ],
    vicinity: "Karaiskaki 55, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "a0f27c532bf97cbf986163fd025fa89eaee001bf",
    name: "enigma Cafe",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJaWxr71S7oRQRMz6SgYvgmY0",
    rating: 4.4,
    reference:
      "CmRSAAAAew7qWL2olkCV2cJUa49SV9dNjJT68a5O6xv2NHXc4MuttrhGo0706qJxk6uFSdVYmKM2wUvk8ysmVtXsXxI2l2Vfm9xPfSbEaF-Yv5LeF4D4vzq6AhBCRlKYaBeW2bUgEhD1GDHoBCnWq-N7bsQD_d1xGhT_lBfCyqLzz14uLJh6hh2R7RPuiA",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 57, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "57de390744017dd4eda39b74147401a5cecd4d3e",
    name: "mastiCoffee",
    opening_hours: { open_now: false, weekday_text: [] },
    place_id: "ChIJ25On51S7oRQRbDvwZ1uE_-Q",
    rating: 4.5,
    reference:
      "CmRSAAAAbrpbBCoclwaveOmuXAtNKd7_otjQhV103TnjkgH7_dY57L8NHkXGEdQldRF74BYMS3uYAfSFBKEbmsl22J0WIRRQR66wQOZrusseDMwWQoxaqZ1H908s_0msxySuOD_2EhCaRqNkTxn_Jy8hFkvcVU1gGhToR66EXHR-JpQIG1tPOXrIywlfZQ",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Καραισκάκη, 72, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "74cf6efe363131c64860db33afd4992cee44a951",
    name: "Grēgórēs",
    photos: [[Object]],
    place_id: "ChIJj5iKH1i7oRQRJK0d8pb3ojA",
    rating: 4.4,
    reference:
      "CmRRAAAA9k3BFIlYUwfbZb80BjPX2594SI6mVU0qXO0BBRn1kvUOX3kZUyMV7UkC_nLsU19cZ8WI1Lt7gUYD1NU63R9BCbYg9AmI8usQbXhTYM5aNLRZ3xV4gPHn_3KUt_H1CmOnEhBJhT5TWTk-YW1aeGwPQRH-GhRnS6KGKRieQysv_9AhsP6bsMhJ6g",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Iera Odos 335, Agia Varvara"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "0c1542247601ef19d91bf9f37e05649d0993ca82",
    name: "mastiCoffee",
    opening_hours: { open_now: false, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJ4bxu51S7oRQRD6rSbIyEPPk",
    rating: 5,
    reference:
      "CmRSAAAA61PBOI0Fyg0khqAJr--U1VpdiMsOfFU3rDNDZUZHyP55njHJbc84uyhVOAfMPw5z_Gd-yNVgVG0oW-MCpwIrnE0wApJYTSc_E6uy5niK6P1WrkKo3OA0Pg6bEFco0azgEhB0Yaiv5sxifkCZ-CTYpVx1GhSWsuTaG-V7TTebtac5rSFSFr9sSw",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 72, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "6f1872bd9d9919ea5b3006441ef1d9ffbe759afc",
    name: "Home Gourmet All Day Bar",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJeTwf5lS7oRQRpOYXtZM5u48",
    rating: 4.4,
    reference:
      "CmRSAAAAHVNfDtAJuP2J0nATrUt-MGvyUZPkWrXKT5fo0eX3ar6DDHUyNKIfftGntRyZgZCWOQzT05GLqV1HVSaRBmBfdq7JiVY8txzBe3by4yIy5b0bPT7vg5qA6KxL0GwI21jKEhD6styZtIcTxdjXkl4Np7OjGhTKxF0N5E7lq1DLdfSd9mAmKly9qA",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Nikolaou Plastira 48, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "78c646a99cbdd6a1537096e5d8fe932c565acb6f",
    name: "Leonidas COFFEE & BAKE SHOP",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJwxzE2la7oRQRuER6iL_7eQ8",
    rating: 4.1,
    reference:
      "CmRRAAAAjvrQ83IKJ2GxEUS-q0YtuPk5ttRr79bNkxCTRMODohM9qHa_bA8AFloVHIfnV9YxnPAXyTYgg_6lxpmVlp07uxvAGIigACGIgKA7Tp85-EhC1_vKPj1Ss7vGepNob3RaEhBFPJNic3niXPF8-ZbzEqEFGhRwnO6B2WyajsX7VS3leesvCyPu5A",
    scope: "GOOGLE",
    types: ["cafe", "food", "point_of_interest", "establishment"],
    vicinity: "Karaiskaki 2, Chaidari"
  },
  {
    geometry: { location: [Object], viewport: [Object] },
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
    id: "f4d0abc724368be1f7632ec77c4bf299bd0bb2e6",
    name: "Passepartout",
    opening_hours: { open_now: true, weekday_text: [] },
    photos: [[Object]],
    place_id: "ChIJz9K0zqqkoRQRT9nc59N2I_4",
    reference:
      "CmRSAAAAhopHB9aL3ZeT6X8EdfSv6VtAB81FH2jT8fDsDug4en28FJr-ORUVLR2ihO9gmQdWsH59JYQEg1GoLL-K0-IPFzs2ph2JPGmEpL1CWa5vEu221WK-YA6uluZkWbJ3CvItEhDDe9tFZw1NjTXGthV9Y08cGhRXEhv4R2zBa5ExCfS53eWTVR7dxw",
    scope: "GOOGLE",
    types: [
      "cafe",
      "bar",
      "night_club",
      "restaurant",
      "food",
      "store",
      "point_of_interest",
      "establishment"
    ],
    vicinity: "Skoufa 47, Athina"
  }
];

module.exports = {
  results
};
