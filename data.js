var years = [1990, 1995, 2000, 2005, 2008];
var countries = {
  "Canada": {
    "water_rural_unimproved": [
      65.0, 
      66.0, 
      63.0, 
      64.0, 
      65.0
    ], 
    "water_rural_improved_total": [
      6422.0, 
      6476.0, 
      6235.0, 
      6358.0, 
      6461.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      6422.1199999999999, 
      6476.2799999999997, 
      6234.5699999999997, 
      6357.7799999999997, 
      6461.21
    ], 
    "water_total_improved_other": [
      6422.0, 
      3990.0, 
      3842.0, 
      3918.0, 
      6461.0
    ], 
    "sanitation_total_improved": [
      27636.0, 
      29236.0, 
      30624.0, 
      32243.0, 
      33194.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      21213.869999999999, 
      22760.400000000001, 
      24389.27, 
      25885.080000000002, 
      26732.869999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      25246.0, 
      26782.0, 
      28325.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      21214.0, 
      22760.0, 
      24389.0, 
      25885.0, 
      26733.0
    ], 
    "sanitation_total_unimproved_total": [
      64.849999999999994, 
      66.090000000000003, 
      62.82, 
      64.090000000000003, 
      65.349999999999994
    ], 
    "sanitation_rural_unimproved_other": [
      64.870000000000005, 
      65.420000000000002, 
      62.979999999999997, 
      64.219999999999999, 
      65.260000000000005
    ], 
    "water_total_improved_total": [
      27636.0, 
      29236.0, 
      30624.0, 
      32243.0, 
      33194.0
    ], 
    "population_rural": [
      6486.9899999999998, 
      6541.6899999999996, 
      6297.5500000000002, 
      6422.0, 
      6526.4799999999996
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      6422.0, 
      3990.0, 
      3842.0, 
      3918.0, 
      6461.0
    ], 
    "water_total_unimproved": [
      65.0, 
      66.0, 
      63.0, 
      64.0, 
      65.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      27700.849999999999, 
      29302.09, 
      30686.82, 
      32307.09, 
      33259.349999999999
    ], 
    "sanitation_rural_unimproved_total": [
      64.870000000000005, 
      65.409999999999997, 
      62.979999999999997, 
      64.219999999999999, 
      65.269999999999996
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      2486.0, 
      2393.0, 
      2440.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      65.0, 
      65.0, 
      63.0, 
      64.0, 
      65.0
    ], 
    "sanitation_urban_improved": [
      21213.869999999999, 
      22760.400000000001, 
      24389.27, 
      25885.080000000002, 
      26732.869999999999
    ], 
    "water_urban_improved_piped": [
      21214.0, 
      22760.0, 
      24389.0, 
      25885.0, 
      26733.0
    ]
  }, 
  "Libyan Arab Jamahiriya": {
    "water_rural_unimproved": [
      477.0, 
      522.0, 
      568.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      583.0, 
      638.0, 
      695.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      1785.0, 
      1984.0, 
      2205.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1017.21, 
      1114.0699999999999, 
      1212.8099999999999, 
      1307.4200000000001, 
      1359.1199999999999
    ], 
    "water_total_improved_other": [
      2368.0, 
      2622.0, 
      2900.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      4223.0, 
      4677.0, 
      5174.0, 
      5731.0, 
      6091.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      99.150000000000006, 
      110.20999999999999, 
      122.48999999999999, 
      136.83000000000001, 
      146.34999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3305.0, 
      3673.6700000000001, 
      4083.0300000000002, 
      4560.9399999999996, 
      4878.4300000000003
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      1785.0, 
      1984.0, 
      2205.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      141.59, 
      157.16, 
      172.38, 
      191.83000000000001, 
      203.18000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      42.380000000000003, 
      46.420000000000002, 
      50.530000000000001, 
      54.479999999999997, 
      56.630000000000003
    ], 
    "water_total_improved_total": [
      2368.0, 
      2622.0, 
      2900.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      1059.5899999999999, 
      1160.49, 
      1263.3499999999999, 
      1361.9000000000001, 
      1415.75
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1520.0, 
      1690.0, 
      1878.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      99.150000000000006, 
      110.20999999999999, 
      122.48999999999999, 
      136.83000000000001, 
      146.34999999999999
    ], 
    "water_rural_improved_other": [
      583.0, 
      638.0, 
      695.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      1997.0, 
      2212.0, 
      2446.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      4364.5900000000001, 
      4834.1599999999999, 
      5346.3800000000001, 
      5922.8299999999999, 
      6294.1800000000003
    ], 
    "sanitation_rural_unimproved_total": [
      42.380000000000003, 
      46.420000000000002, 
      50.539999999999999, 
      54.479999999999997, 
      56.630000000000003
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      141.0, 
      156.0, 
      173.0, 
      191.0, 
      203.0
    ], 
    "sanitation_urban_improved": [
      3205.8499999999999, 
      3563.46, 
      3960.54, 
      4424.1099999999997, 
      4732.0799999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Sao Tome and Principe": {
    "water_rural_unimproved": [
      -1.0, 
      23.0, 
      19.0, 
      12.0, 
      7.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      43.0, 
      46.0, 
      52.0, 
      56.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      34.0, 
      41.0, 
      50.0, 
      55.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      2.4900000000000002, 
      2.9900000000000002, 
      3.54, 
      3.8799999999999999
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      9.1999999999999993, 
      9.7899999999999991, 
      10.880000000000001, 
      11.98
    ], 
    "water_total_improved_other": [
      -1.0, 
      68.0, 
      78.0, 
      91.0, 
      100.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      26.0, 
      30.0, 
      37.0, 
      41.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      0.62, 
      2.9900000000000002, 
      10.630000000000001, 
      16.510000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      95.0, 
      100.0, 
      94.0, 
      88.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      2.6299999999999999, 
      2.6099999999999999, 
      3.2000000000000002, 
      3.1499999999999999
    ], 
    "population_urban": [
      50.68, 
      62.219999999999999, 
      74.859999999999999, 
      88.620000000000005, 
      97.099999999999994
    ], 
    "water_total_improved_piped": [
      -1.0, 
      28.0, 
      32.0, 
      39.0, 
      42.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      42.310000000000002, 
      48.659999999999997, 
      48.740000000000002, 
      47.579999999999998
    ], 
    "water_urban_improved_total": [
      -1.0, 
      53.0, 
      64.0, 
      78.0, 
      86.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      101.94, 
      110.13, 
      115.62, 
      119.18000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.66000000000000003, 
      1.96, 
      5.1200000000000001, 
      7.5700000000000003
    ], 
    "water_total_improved_total": [
      -1.0, 
      96.0, 
      110.0, 
      130.0, 
      142.0
    ], 
    "population_rural": [
      65.430000000000007, 
      65.719999999999999, 
      65.269999999999996, 
      64.0, 
      63.079999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      5.0, 
      6.0, 
      7.0, 
      7.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      9.0, 
      11.0, 
      11.0, 
      11.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      45.420000000000002, 
      54.649999999999999, 
      62.920000000000002, 
      67.969999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      34.0, 
      37.0, 
      41.0, 
      45.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      32.0, 
      30.0, 
      23.0, 
      18.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      53.229999999999997, 
      50.909999999999997, 
      44.799999999999997, 
      40.369999999999997
    ], 
    "population_total": [
      116.12, 
      127.94, 
      140.13, 
      152.62, 
      160.18000000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      56.520000000000003, 
      55.479999999999997, 
      53.119999999999997, 
      51.100000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      9.0, 
      9.0, 
      11.0, 
      11.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      2.0, 
      5.0, 
      16.0, 
      25.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      16.800000000000001, 
      20.210000000000001, 
      25.699999999999999, 
      29.129999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      19.0, 
      23.0, 
      28.0, 
      31.0
    ]
  }, 
  "Turkmenistan": {
    "water_rural_unimproved": [
      -1.0, 
      641.0, 
      683.0, 
      715.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1650.0, 
      1755.0, 
      1837.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      1603.0, 
      304.0, 
      330.0, 
      366.0, 
      2377.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1955.03, 
      2222.29, 
      2364.8200000000002, 
      2475.4099999999999, 
      2514.8400000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      1290.0, 
      1378.0, 
      1463.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      3591.0, 
      4099.0, 
      4408.0, 
      4743.0, 
      4941.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      16.530000000000001, 
      18.960000000000001, 
      20.640000000000001, 
      22.91, 
      24.510000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      20.0, 
      23.0, 
      24.0, 
      26.0, 
      26.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      1652.51, 
      1896.4000000000001, 
      2063.77, 
      2291.2199999999998, 
      2451.0
    ], 
    "water_total_improved_piped": [
      -1.0, 
      2200.0, 
      2379.0, 
      2596.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1603.0, 
      1840.0, 
      2002.0, 
      2222.0, 
      2377.0
    ], 
    "sanitation_total_unimproved_total": [
      77.0, 
      88.420000000000002, 
      93.730000000000004, 
      100.19, 
      102.62
    ], 
    "sanitation_rural_unimproved_other": [
      40.310000000000002, 
      45.82, 
      48.759999999999998, 
      51.039999999999999, 
      51.850000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      3490.0, 
      3757.0, 
      4059.0, 
      -1.0
    ], 
    "population_rural": [
      2015.49, 
      2291.02, 
      2437.96, 
      2551.9699999999998, 
      2592.6199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      50.0, 
      56.0, 
      62.0, 
      69.0, 
      74.0
    ], 
    "sanitation_urban_unimproved_total": [
      16.530000000000001, 
      18.969999999999999, 
      20.640000000000001, 
      22.920000000000002, 
      24.510000000000002
    ], 
    "water_rural_improved_other": [
      -1.0, 
      986.0, 
      1048.0, 
      1097.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      697.0, 
      745.0, 
      784.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      20.149999999999999, 
      22.91, 
      24.379999999999999, 
      25.52, 
      25.93
    ], 
    "population_total": [
      3668.0, 
      4187.4200000000001, 
      4501.7299999999996, 
      4843.1899999999996, 
      5043.6199999999999
    ], 
    "sanitation_rural_unimproved_total": [
      60.460000000000001, 
      68.730000000000004, 
      73.140000000000001, 
      76.560000000000002, 
      77.780000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      664.0, 
      707.0, 
      740.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      57.0, 
      65.0, 
      70.0, 
      74.0, 
      77.0
    ], 
    "sanitation_urban_improved": [
      1635.98, 
      1877.4300000000001, 
      2043.1300000000001, 
      2268.3000000000002, 
      2426.4899999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1536.0, 
      1672.0, 
      1856.0, 
      -1.0
    ]
  }, 
  "United States of America": {
    "water_rural_unimproved": [
      3777.0, 
      3694.0, 
      3610.0, 
      3490.0, 
      3419.0
    ], 
    "water_rural_improved_total": [
      59175.0, 
      57865.0, 
      56552.0, 
      54676.0, 
      53566.0
    ], 
    "water_urban_improved_other": [
      5758.0, 
      6273.0, 
      6830.0, 
      7337.0, 
      7640.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      62322.190000000002, 
      60943.309999999998, 
      59560.279999999999, 
      57583.900000000001, 
      56415.160000000003
    ], 
    "water_total_improved_other": [
      35975.0, 
      35821.0, 
      35708.0, 
      35257.0, 
      34993.0
    ], 
    "sanitation_total_improved": [
      254236.0, 
      270032.0, 
      287240.0, 
      302159.0, 
      311096.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      191913.51000000001, 
      209089.16, 
      227680.28, 
      244575.06, 
      254680.98999999999
    ], 
    "water_total_improved_piped": [
      215114.0, 
      231133.0, 
      248524.0, 
      263994.0, 
      273254.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      191914.0, 
      209089.0, 
      227680.0, 
      244575.0, 
      254681.0
    ], 
    "sanitation_total_unimproved_total": [
      629.22000000000003, 
      616.05999999999995, 
      602.17999999999995, 
      581.61000000000001, 
      570.0
    ], 
    "sanitation_rural_unimproved_other": [
      629.51999999999998, 
      615.59000000000003, 
      601.62, 
      581.65999999999997, 
      569.85000000000002
    ], 
    "water_total_improved_total": [
      251089.0, 
      266954.0, 
      284232.0, 
      299251.0, 
      308247.0
    ], 
    "population_rural": [
      62951.709999999999, 
      61558.900000000001, 
      60161.889999999999, 
      58165.550000000003, 
      56985.010000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      30217.0, 
      29548.0, 
      28878.0, 
      27920.0, 
      27353.0
    ], 
    "water_total_unimproved": [
      3777.0, 
      3694.0, 
      3610.0, 
      3490.0, 
      3419.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      254865.22, 
      270648.06, 
      287842.17999999999, 
      302740.60999999999, 
      311666.0
    ], 
    "sanitation_rural_unimproved_total": [
      629.51999999999998, 
      615.59000000000003, 
      601.61000000000001, 
      581.64999999999998, 
      569.85000000000002
    ], 
    "water_rural_improved_piped": [
      28958.0, 
      28317.0, 
      27674.0, 
      26756.0, 
      26213.0
    ], 
    "sanitation_total_unimproved_other": [
      630.0, 
      616.0, 
      602.0, 
      582.0, 
      570.0
    ], 
    "sanitation_urban_improved": [
      191913.51000000001, 
      209089.16, 
      227680.28, 
      244575.06, 
      254680.98999999999
    ], 
    "water_urban_improved_piped": [
      186156.0, 
      202816.0, 
      220850.0, 
      237238.0, 
      247041.0
    ]
  }, 
  "United Republic of Tanzania": {
    "water_rural_unimproved": [
      11150.0, 
      13098.0, 
      14584.0, 
      16262.0, 
      17414.0
    ], 
    "water_rural_improved_total": [
      9498.0, 
      10717.0, 
      11933.0, 
      13305.0, 
      14248.0
    ], 
    "water_urban_improved_other": [
      2884.0, 
      3632.0, 
      4416.0, 
      5381.0, 
      6168.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1201.71, 
      1600.8499999999999, 
      2132.02, 
      2737.7600000000002, 
      3246.4499999999998
    ], 
    "sanitation_rural_improved": [
      4748.9899999999998, 
      5477.3800000000001, 
      5833.7299999999996, 
      6504.6999999999998, 
      6649.1099999999997
    ], 
    "water_total_improved_other": [
      12176.0, 
      14111.0, 
      15819.0, 
      17799.0, 
      19466.0
    ], 
    "sanitation_total_improved": [
      6047.0, 
      7201.0, 
      8042.0, 
      9432.0, 
      10112.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      2163.0799999999999, 
      2647.5599999999999, 
      3121.8899999999999, 
      3587.4099999999999, 
      3895.7399999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2209.0, 
      3043.0, 
      3864.0, 
      4920.0, 
      5599.0
    ], 
    "sanitation_rural_unimproved_shared": [
      4748.9899999999998, 
      5239.2299999999996, 
      5568.5600000000004, 
      6209.0299999999997, 
      6649.1099999999997
    ], 
    "population_urban": [
      4806.8500000000004, 
      6157.1099999999997, 
      7614.3500000000004, 
      9440.5599999999995, 
      10821.51
    ], 
    "water_total_improved_piped": [
      1840.0, 
      2147.0, 
      2662.0, 
      3247.0, 
      3439.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      144.21000000000001, 
      184.71000000000001, 
      152.28999999999999, 
      188.81, 
      216.43000000000001
    ], 
    "water_urban_improved_total": [
      4518.0, 
      5541.0, 
      6548.0, 
      7741.0, 
      8657.0
    ], 
    "sanitation_total_unimproved_total": [
      19407.630000000001, 
      22770.799999999999, 
      26089.310000000001, 
      29575.360000000001, 
      32371.93
    ], 
    "sanitation_rural_unimproved_other": [
      9085.0200000000004, 
      10240.32, 
      11402.290000000001, 
      12122.389999999999, 
      12981.59
    ], 
    "water_total_improved_total": [
      14016.0, 
      16258.0, 
      18481.0, 
      21046.0, 
      22905.0
    ], 
    "population_rural": [
      20647.779999999999, 
      23814.689999999999, 
      26516.959999999999, 
      29566.799999999999, 
      31662.419999999998
    ], 
    "sanitation_total_unimproved_shared": [
      5951.0, 
      6840.0, 
      7701.0, 
      8947.0, 
      9895.0
    ], 
    "water_urban_unimproved": [
      289.0, 
      616.0, 
      1066.0, 
      1700.0, 
      2165.0
    ], 
    "sanitation_urban_unimproved_total": [
      3509.0, 
      4433.1199999999999, 
      5406.1899999999996, 
      6513.9899999999998, 
      7358.6300000000001
    ], 
    "water_rural_improved_other": [
      9292.0, 
      10479.0, 
      11403.0, 
      12418.0, 
      13298.0
    ], 
    "water_total_unimproved": [
      11439.0, 
      13714.0, 
      15650.0, 
      17962.0, 
      19579.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2064.7800000000002, 
      2857.7600000000002, 
      3712.3699999999999, 
      4730.6899999999996, 
      5382.6099999999997
    ], 
    "population_total": [
      25454.630000000001, 
      29971.799999999999, 
      34131.309999999998, 
      39007.360000000001, 
      42483.93
    ], 
    "sanitation_rural_unimproved_total": [
      15898.790000000001, 
      18337.310000000001, 
      20683.23, 
      23062.099999999999, 
      25013.310000000001
    ], 
    "water_rural_improved_piped": [
      206.0, 
      238.0, 
      530.0, 
      887.0, 
      950.0
    ], 
    "sanitation_total_unimproved_other": [
      11248.0, 
      12888.0, 
      14524.0, 
      15709.0, 
      16878.0
    ], 
    "sanitation_urban_improved": [
      1297.8499999999999, 
      1723.99, 
      2208.1599999999999, 
      2926.5700000000002, 
      3462.8800000000001
    ], 
    "water_urban_improved_piped": [
      1634.0, 
      1909.0, 
      2132.0, 
      2360.0, 
      2489.0
    ]
  }, 
  "Lithuania": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2499.1199999999999, 
      2442.5799999999999, 
      2345.0599999999999, 
      2276.6799999999998, 
      2222.1300000000001
    ], 
    "water_total_improved_piped": [
      2811.0, 
      2816.0, 
      2793.0, 
      2767.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      1198.73, 
      1187.6199999999999, 
      1155.76, 
      1139.6099999999999, 
      1098.8399999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      3697.8499999999999, 
      3630.21, 
      3500.8200000000002, 
      3416.29, 
      3320.9699999999998
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      587.0, 
      618.0, 
      636.0, 
      650.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      2224.0, 
      2198.0, 
      2157.0, 
      2117.0, 
      -1.0
    ]
  }, 
  "Cambodia": {
    "water_rural_unimproved": [
      5674.0, 
      6447.0, 
      6150.0, 
      5454.0, 
      5027.0
    ], 
    "water_rural_improved_total": [
      2795.0, 
      3322.0, 
      4453.0, 
      5677.0, 
      6398.0
    ], 
    "water_urban_improved_other": [
      427.0, 
      564.0, 
      669.0, 
      766.0, 
      816.0
    ], 
    "sanitation_urban_unimproved_shared": [
      61.049999999999997, 
      96.670000000000002, 
      151.00999999999999, 
      218.80000000000001, 
      282.29000000000002
    ], 
    "sanitation_rural_improved": [
      423.45999999999998, 
      586.15999999999997, 
      1060.25, 
      1669.6700000000001, 
      2056.5900000000001
    ], 
    "water_total_improved_other": [
      3222.0, 
      3886.0, 
      4910.0, 
      5998.0, 
      6643.0
    ], 
    "sanitation_total_improved": [
      887.0, 
      1230.0, 
      2139.0, 
      3311.0, 
      4158.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      109.89, 
      128.88999999999999, 
      129.44, 
      136.75, 
      62.729999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      8124.0, 
      9338.0, 
      9492.0, 
      9309.0, 
      9259.0
    ], 
    "sanitation_rural_unimproved_shared": [
      84.689999999999998, 
      97.689999999999998, 
      212.05000000000001, 
      333.93000000000001, 
      457.01999999999998
    ], 
    "population_urban": [
      1220.95, 
      1611.1199999999999, 
      2157.3000000000002, 
      2734.9400000000001, 
      3136.5100000000002
    ], 
    "water_total_improved_piped": [
      208.0, 
      306.0, 
      924.0, 
      1730.0, 
      2296.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      586.05999999999995, 
      741.12, 
      798.20000000000005, 
      738.42999999999995, 
      690.02999999999997
    ], 
    "water_urban_improved_total": [
      635.0, 
      870.0, 
      1381.0, 
      2051.0, 
      2541.0
    ], 
    "sanitation_total_unimproved_total": [
      8803.1100000000006, 
      10150.389999999999, 
      10620.809999999999, 
      10555.049999999999, 
      10404.01
    ], 
    "sanitation_rural_unimproved_other": [
      423.45999999999998, 
      488.45999999999998, 
      636.14999999999998, 
      556.55999999999995, 
      342.75999999999999
    ], 
    "water_total_improved_total": [
      3430.0, 
      4192.0, 
      5834.0, 
      7728.0, 
      8939.0
    ], 
    "population_rural": [
      8469.1499999999996, 
      9769.2700000000004, 
      10602.51, 
      11131.110000000001, 
      11425.5
    ], 
    "sanitation_total_unimproved_shared": [
      146.0, 
      195.0, 
      363.0, 
      553.0, 
      739.0
    ], 
    "water_urban_unimproved": [
      586.0, 
      741.0, 
      776.0, 
      684.0, 
      596.0
    ], 
    "sanitation_urban_unimproved_total": [
      756.99000000000001, 
      966.66999999999996, 
      1078.6500000000001, 
      1093.98, 
      1035.05
    ], 
    "water_rural_improved_other": [
      2795.0, 
      3322.0, 
      4241.0, 
      5232.0, 
      5827.0
    ], 
    "water_total_unimproved": [
      6260.0, 
      7188.0, 
      6926.0, 
      6138.0, 
      5623.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      7537.5500000000002, 
      8596.9500000000007, 
      8694.0599999999995, 
      8570.9599999999991, 
      8569.1200000000008
    ], 
    "population_total": [
      9690.1100000000006, 
      11380.389999999999, 
      12759.809999999999, 
      13866.049999999999, 
      14562.01
    ], 
    "sanitation_rural_unimproved_total": [
      8045.6899999999996, 
      9183.1100000000006, 
      9542.2600000000002, 
      9461.4400000000005, 
      9368.9099999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      212.0, 
      445.0, 
      571.0
    ], 
    "sanitation_total_unimproved_other": [
      533.0, 
      617.0, 
      765.0, 
      694.0, 
      406.0
    ], 
    "sanitation_urban_improved": [
      463.95999999999998, 
      644.45000000000005, 
      1078.6500000000001, 
      1640.96, 
      2101.46
    ], 
    "water_urban_improved_piped": [
      208.0, 
      306.0, 
      712.0, 
      1285.0, 
      1725.0
    ]
  }, 
  "Ethiopia": {
    "water_rural_unimproved": [
      38821.0, 
      43175.0, 
      45717.0, 
      47628.0, 
      49622.0
    ], 
    "water_rural_improved_total": [
      3376.0, 
      5887.0, 
      10036.0, 
      15041.0, 
      17435.0
    ], 
    "water_urban_improved_other": [
      4084.0, 
      5228.0, 
      6052.0, 
      7075.0, 
      7921.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1523.75, 
      2138.5700000000002, 
      2928.5, 
      3957.3699999999999, 
      4643.2799999999997
    ], 
    "sanitation_rural_improved": [
      421.97000000000003, 
      981.25, 
      2787.6500000000001, 
      4386.8199999999997, 
      5364.54
    ], 
    "water_total_improved_other": [
      7460.0, 
      11115.0, 
      16088.0, 
      22116.0, 
      25356.0
    ], 
    "sanitation_total_improved": [
      1702.0, 
      2803.0, 
      5326.0, 
      7745.0, 
      9325.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      426.64999999999998, 
      871.26999999999998, 
      1757.0999999999999, 
      2998.0100000000002, 
      3960.4499999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      44640.0, 
      50679.0, 
      50486.0, 
      48681.0, 
      48703.0
    ], 
    "sanitation_rural_unimproved_shared": [
      0.0, 
      490.62, 
      557.52999999999997, 
      1253.3800000000001, 
      1341.1300000000001
    ], 
    "population_urban": [
      6094.9899999999998, 
      7920.6199999999999, 
      9761.6800000000003, 
      11992.030000000001, 
      13656.709999999999
    ], 
    "water_total_improved_piped": [
      609.0, 
      1267.0, 
      2538.0, 
      4317.0, 
      5463.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      2864.6399999999999, 
      3089.04, 
      2538.04, 
      1678.8800000000001, 
      1092.54
    ], 
    "water_urban_improved_total": [
      4693.0, 
      6495.0, 
      8590.0, 
      11392.0, 
      13384.0
    ], 
    "sanitation_total_unimproved_total": [
      46590.440000000002, 
      54179.910000000003, 
      60188.629999999997, 
      66915.899999999994, 
      71388.440000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      4460.2399999999998, 
      10027.02, 
      12740.780000000001
    ], 
    "water_total_improved_total": [
      8069.0, 
      12382.0, 
      18626.0, 
      26433.0, 
      30819.0
    ], 
    "population_rural": [
      42197.449999999997, 
      49062.279999999999, 
      55752.949999999997, 
      62668.870000000003, 
      67056.720000000001
    ], 
    "sanitation_total_unimproved_shared": [
      1524.0, 
      2630.0, 
      3487.0, 
      5210.0, 
      5984.0
    ], 
    "water_urban_unimproved": [
      1402.0, 
      1426.0, 
      1172.0, 
      600.0, 
      273.0
    ], 
    "sanitation_urban_unimproved_total": [
      4815.04, 
      6098.8800000000001, 
      7223.6400000000003, 
      8634.2600000000002, 
      9696.2600000000002
    ], 
    "water_rural_improved_other": [
      3376.0, 
      5887.0, 
      10036.0, 
      15041.0, 
      17435.0
    ], 
    "water_total_unimproved": [
      40223.0, 
      44601.0, 
      46889.0, 
      48228.0, 
      49895.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      41775.470000000001, 
      47590.410000000003, 
      47947.529999999999, 
      47001.650000000001, 
      47610.269999999997
    ], 
    "population_total": [
      48292.440000000002, 
      56982.910000000003, 
      65514.629999999997, 
      74660.899999999994, 
      80713.440000000002
    ], 
    "sanitation_rural_unimproved_total": [
      41775.480000000003, 
      48081.029999999999, 
      52965.300000000003, 
      58282.050000000003, 
      61692.18
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      427.0, 
      871.0, 
      6217.0, 
      13025.0, 
      16701.0
    ], 
    "sanitation_urban_improved": [
      1279.95, 
      1821.74, 
      2538.04, 
      3357.77, 
      3960.4499999999998
    ], 
    "water_urban_improved_piped": [
      609.0, 
      1267.0, 
      2538.0, 
      4317.0, 
      5463.0
    ]
  }, 
  "Aruba": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      31.0, 
      41.0, 
      48.0, 
      54.0, 
      56.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      31.82, 
      39.18, 
      42.340000000000003, 
      47.079999999999998, 
      49.259999999999998
    ], 
    "water_total_improved_piped": [
      63.0, 
      80.0, 
      90.0, 
      101.0, 
      105.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      32.0, 
      39.0, 
      42.0, 
      47.0, 
      49.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      63.0, 
      80.0, 
      90.0, 
      101.0, 
      105.0
    ], 
    "population_rural": [
      31.41, 
      41.170000000000002, 
      48.32, 
      53.950000000000003, 
      56.200000000000003
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      63.229999999999997, 
      80.349999999999994, 
      90.659999999999997, 
      101.04000000000001, 
      105.45999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      31.0, 
      41.0, 
      48.0, 
      54.0, 
      56.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      32.0, 
      39.0, 
      42.0, 
      47.0, 
      49.0
    ]
  }, 
  "Swaziland": {
    "water_rural_unimproved": [
      -1.0, 
      425.0, 
      447.0, 
      375.0, 
      342.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      321.0, 
      381.0, 
      478.0, 
      535.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      65.0, 
      71.0, 
      70.0, 
      72.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      69.25, 
      78.040000000000006, 
      86.760000000000005, 
      92.930000000000007
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      335.63, 
      380.85000000000002, 
      426.64999999999998, 
      465.04000000000002
    ], 
    "water_total_improved_other": [
      -1.0, 
      304.0, 
      344.0, 
      394.0, 
      423.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      470.0, 
      532.0, 
      592.0, 
      642.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      13.4, 
      15.109999999999999, 
      13.56, 
      14.52
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      231.0, 
      240.0, 
      210.0, 
      190.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      126.79000000000001, 
      149.03, 
      162.13, 
      175.49000000000001
    ], 
    "population_urban": [
      198.00999999999999, 
      223.38999999999999, 
      251.75, 
      271.12, 
      290.38999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      207.0, 
      254.0, 
      328.0, 
      379.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      6.7000000000000002, 
      7.5499999999999998, 
      5.4199999999999999, 
      5.8099999999999996
    ], 
    "water_urban_improved_total": [
      -1.0, 
      190.0, 
      217.0, 
      244.0, 
      267.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      499.23000000000002, 
      547.69000000000005, 
      532.40999999999997, 
      525.84000000000003
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      59.670000000000002, 
      66.239999999999995, 
      59.729999999999997, 
      52.649999999999999
    ], 
    "water_total_improved_total": [
      -1.0, 
      511.0, 
      598.0, 
      722.0, 
      802.0
    ], 
    "population_rural": [
      666.36000000000001, 
      745.84000000000003, 
      827.94000000000005, 
      853.28999999999996, 
      877.44000000000005
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      196.0, 
      227.0, 
      249.0, 
      268.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      33.0, 
      35.0, 
      27.0, 
      23.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      89.359999999999999, 
      100.7, 
      105.73999999999999, 
      113.25
    ], 
    "water_rural_improved_other": [
      -1.0, 
      239.0, 
      273.0, 
      324.0, 
      351.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      458.0, 
      482.0, 
      402.0, 
      365.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      223.75, 
      231.81999999999999, 
      204.78999999999999, 
      184.25999999999999
    ], 
    "population_total": [
      864.37, 
      969.23000000000002, 
      1079.6900000000001, 
      1124.4100000000001, 
      1167.8399999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      410.20999999999998, 
      447.08999999999997, 
      426.63999999999999, 
      412.39999999999998
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      82.0, 
      108.0, 
      154.0, 
      184.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      73.0, 
      81.0, 
      74.0, 
      68.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      134.03, 
      151.05000000000001, 
      165.38, 
      177.13999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      125.0, 
      146.0, 
      174.0, 
      195.0
    ]
  }, 
  "Argentina": {
    "water_rural_unimproved": [
      1184.0, 
      986.0, 
      803.0, 
      666.0, 
      636.0
    ], 
    "water_rural_improved_total": [
      3046.0, 
      2959.0, 
      2845.0, 
      2668.0, 
      2546.0
    ], 
    "water_urban_improved_other": [
      5937.0, 
      6165.0, 
      5659.0, 
      5309.0, 
      5505.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      3087.8099999999999, 
      2958.6399999999999, 
      2808.73, 
      2567.4899999999998, 
      2450.3400000000001
    ], 
    "water_total_improved_other": [
      8052.0, 
      7941.0, 
      7081.0, 
      6477.0, 
      6619.0
    ], 
    "sanitation_total_improved": [
      29377.0, 
      31628.0, 
      33437.0, 
      34778.0, 
      35848.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      1978.73, 
      2157.8800000000001, 
      2663.2800000000002, 
      3185.75, 
      3303.0599999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      28267.630000000001, 
      30826.84, 
      33291.029999999999, 
      35397.199999999997, 
      36700.720000000001
    ], 
    "water_total_improved_piped": [
      22414.0, 
      25228.0, 
      28389.0, 
      30880.0, 
      31894.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      27420.0, 
      30210.0, 
      32625.0, 
      34689.0, 
      35967.0
    ], 
    "sanitation_total_unimproved_total": [
      3120.5100000000002, 
      3143.6900000000001, 
      3501.73, 
      3953.5999999999999, 
      4034.98
    ], 
    "sanitation_rural_unimproved_other": [
      1142.0699999999999, 
      986.21000000000004, 
      838.97000000000003, 
      766.90999999999997, 
      731.91999999999996
    ], 
    "water_total_improved_total": [
      30466.0, 
      33169.0, 
      35470.0, 
      37357.0, 
      38513.0
    ], 
    "population_rural": [
      4229.8800000000001, 
      3944.8499999999999, 
      3647.6999999999998, 
      3334.4000000000001, 
      3182.2600000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      848.0, 
      617.0, 
      666.0, 
      708.0, 
      734.0
    ], 
    "sanitation_urban_unimproved_total": [
      1978.73, 
      2157.8800000000001, 
      2663.2800000000002, 
      3185.75, 
      3303.0700000000002
    ], 
    "water_rural_improved_other": [
      2115.0, 
      1776.0, 
      1422.0, 
      1168.0, 
      1114.0
    ], 
    "water_total_unimproved": [
      2032.0, 
      1603.0, 
      1469.0, 
      1374.0, 
      1370.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      32497.509999999998, 
      34771.690000000002, 
      36938.730000000003, 
      38731.599999999999, 
      39882.980000000003
    ], 
    "sanitation_rural_unimproved_total": [
      1142.0699999999999, 
      986.21000000000004, 
      838.97000000000003, 
      766.90999999999997, 
      731.91999999999996
    ], 
    "water_rural_improved_piped": [
      931.0, 
      1183.0, 
      1423.0, 
      1500.0, 
      1432.0
    ], 
    "sanitation_total_unimproved_other": [
      3121.0, 
      3144.0, 
      3502.0, 
      3953.0, 
      4035.0
    ], 
    "sanitation_urban_improved": [
      26288.900000000001, 
      28668.959999999999, 
      30627.75, 
      32211.450000000001, 
      33397.650000000001
    ], 
    "water_urban_improved_piped": [
      21483.0, 
      24045.0, 
      26966.0, 
      29380.0, 
      30462.0
    ]
  }, 
  "Bolivia": {
    "water_rural_unimproved": [
      1718.0, 
      1550.0, 
      1396.0, 
      1216.0, 
      1100.0
    ], 
    "water_rural_improved_total": [
      1245.0, 
      1489.0, 
      1778.0, 
      2070.0, 
      2233.0
    ], 
    "water_urban_improved_other": [
      519.0, 
      444.0, 
      360.0, 
      235.0, 
      191.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1408.77, 
      1733.79, 
      2108.6100000000001, 
      2535.3499999999999, 
      2798.9200000000001
    ], 
    "sanitation_rural_improved": [
      177.80000000000001, 
      212.69999999999999, 
      253.94999999999999, 
      295.73000000000002, 
      299.95999999999998
    ], 
    "water_total_improved_other": [
      1349.0, 
      1234.0, 
      1090.0, 
      925.0, 
      858.0
    ], 
    "sanitation_total_improved": [
      1253.0, 
      1547.0, 
      1900.0, 
      2242.0, 
      2463.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      74.150000000000006, 
      311.19, 
      514.29999999999995, 
      825.46000000000004, 
      1017.79
    ], 
    "sanitation_total_unimproved_opendefecation": [
      3520.0, 
      3224.0, 
      2874.0, 
      2397.0, 
      2048.0
    ], 
    "sanitation_rural_unimproved_shared": [
      296.32999999999998, 
      364.63, 
      444.42000000000002, 
      492.88, 
      533.26999999999998
    ], 
    "population_urban": [
      3707.3000000000002, 
      4445.6000000000004, 
      5142.96, 
      5896.1700000000001, 
      6361.1800000000003
    ], 
    "water_total_improved_piped": [
      3307.0, 
      4389.0, 
      5522.0, 
      6746.0, 
      7482.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      1149.26, 
      1066.9400000000001, 
      874.29999999999995, 
      589.62, 
      381.67000000000002
    ], 
    "water_urban_improved_total": [
      3411.0, 
      4134.0, 
      4834.0, 
      5601.0, 
      6107.0
    ], 
    "sanitation_total_unimproved_total": [
      5417.5600000000004, 
      5937.1800000000003, 
      6417.3699999999999, 
      6940.0600000000004, 
      7231.1099999999997
    ], 
    "sanitation_rural_unimproved_other": [
      118.53, 
      303.86000000000001, 
      476.16000000000003, 
      690.03999999999996, 
      833.23000000000002
    ], 
    "water_total_improved_total": [
      4656.0, 
      5623.0, 
      6612.0, 
      7671.0, 
      8340.0
    ], 
    "population_rural": [
      2963.2600000000002, 
      3038.5799999999999, 
      3174.4099999999999, 
      3285.8899999999999, 
      3332.9299999999998
    ], 
    "sanitation_total_unimproved_shared": [
      1705.0, 
      2099.0, 
      2553.0, 
      3028.0, 
      3332.0
    ], 
    "water_urban_unimproved": [
      296.0, 
      312.0, 
      309.0, 
      295.0, 
      254.0
    ], 
    "sanitation_urban_unimproved_total": [
      2632.1799999999998, 
      3111.9200000000001, 
      3497.21, 
      3950.4299999999998, 
      4198.3800000000001
    ], 
    "water_rural_improved_other": [
      830.0, 
      790.0, 
      730.0, 
      690.0, 
      667.0
    ], 
    "water_total_unimproved": [
      2014.0, 
      1862.0, 
      1705.0, 
      1511.0, 
      1354.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2370.6100000000001, 
      2157.3899999999999, 
      1999.8800000000001, 
      1807.24, 
      1666.47
    ], 
    "population_total": [
      6670.5600000000004, 
      7484.1800000000003, 
      8317.3700000000008, 
      9182.0599999999995, 
      9694.1100000000006
    ], 
    "sanitation_rural_unimproved_total": [
      2785.46, 
      2825.8800000000001, 
      2920.46, 
      2990.1599999999999, 
      3032.9699999999998
    ], 
    "water_rural_improved_piped": [
      415.0, 
      699.0, 
      1048.0, 
      1380.0, 
      1566.0
    ], 
    "sanitation_total_unimproved_other": [
      193.0, 
      615.0, 
      990.0, 
      1515.0, 
      1851.0
    ], 
    "sanitation_urban_improved": [
      1075.1199999999999, 
      1333.6800000000001, 
      1645.75, 
      1945.74, 
      2162.8000000000002
    ], 
    "water_urban_improved_piped": [
      2892.0, 
      3690.0, 
      4474.0, 
      5366.0, 
      5916.0
    ]
  }, 
  "Cameroon": {
    "water_rural_unimproved": [
      5004.0, 
      4841.0, 
      4534.0, 
      4239.0, 
      4042.0
    ], 
    "water_rural_improved_total": [
      2248.0, 
      2843.0, 
      3421.0, 
      3912.0, 
      4206.0
    ], 
    "water_urban_improved_other": [
      2590.0, 
      3631.0, 
      4825.0, 
      6287.0, 
      7263.0
    ], 
    "sanitation_urban_unimproved_shared": [
      996.17999999999995, 
      1210.4100000000001, 
      1502.9400000000001, 
      1741.0599999999999, 
      1842.8800000000001
    ], 
    "sanitation_rural_improved": [
      2538.23, 
      2689.3400000000001, 
      2784.3400000000001, 
      2852.7800000000002, 
      2886.77
    ], 
    "water_total_improved_other": [
      4693.0, 
      6320.0, 
      8087.0, 
      10036.0, 
      11222.0
    ], 
    "sanitation_total_improved": [
      5776.0, 
      6702.0, 
      7530.0, 
      8463.0, 
      8958.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      647.51999999999998, 
      1019.29, 
      1582.04, 
      2224.6900000000001, 
      2818.5300000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1623.0, 
      1510.0, 
      1272.0, 
      1075.0, 
      933.0
    ], 
    "sanitation_rural_unimproved_shared": [
      580.16999999999996, 
      614.71000000000004, 
      636.41999999999996, 
      652.05999999999995, 
      659.83000000000004
    ], 
    "population_urban": [
      4980.8999999999996, 
      6370.5799999999999, 
      7910.1999999999998, 
      9672.5599999999995, 
      10840.49
    ], 
    "water_total_improved_piped": [
      1390.0, 
      1747.0, 
      2137.0, 
      2581.0, 
      2957.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      99.620000000000005, 
      127.41, 
      79.099999999999994, 
      96.730000000000004, 
      108.40000000000001
    ], 
    "water_urban_improved_total": [
      3835.0, 
      5224.0, 
      6803.0, 
      8705.0, 
      9973.0
    ], 
    "sanitation_total_unimproved_total": [
      6456.9700000000003, 
      7352.3999999999996, 
      8335.4599999999991, 
      9360.3500000000004, 
      10130.389999999999
    ], 
    "sanitation_rural_unimproved_other": [
      2610.75, 
      2996.6900000000001, 
      3341.21, 
      3667.8600000000001, 
      3876.5100000000002
    ], 
    "water_total_improved_total": [
      6083.0, 
      8067.0, 
      10224.0, 
      12617.0, 
      14179.0
    ], 
    "population_rural": [
      7252.0699999999997, 
      7683.8199999999997, 
      7955.2600000000002, 
      8150.8000000000002, 
      8247.8999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      1576.0, 
      1825.0, 
      2139.0, 
      2393.0, 
      2503.0
    ], 
    "water_urban_unimproved": [
      1146.0, 
      1147.0, 
      1107.0, 
      968.0, 
      867.0
    ], 
    "sanitation_urban_unimproved_total": [
      1743.3099999999999, 
      2357.1100000000001, 
      3164.0799999999999, 
      4062.48, 
      4769.8199999999997
    ], 
    "water_rural_improved_other": [
      2103.0, 
      2689.0, 
      3262.0, 
      3749.0, 
      3959.0
    ], 
    "water_total_unimproved": [
      6150.0, 
      5988.0, 
      5641.0, 
      5207.0, 
      4909.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1522.9400000000001, 
      1383.0899999999999, 
      1193.29, 
      978.10000000000002, 
      824.78999999999996
    ], 
    "population_total": [
      12232.969999999999, 
      14054.4, 
      15865.459999999999, 
      17823.349999999999, 
      19088.389999999999
    ], 
    "sanitation_rural_unimproved_total": [
      4713.8400000000001, 
      4994.4799999999996, 
      5170.9200000000001, 
      5298.0200000000004, 
      5361.1300000000001
    ], 
    "water_rural_improved_piped": [
      145.0, 
      154.0, 
      159.0, 
      163.0, 
      247.0
    ], 
    "sanitation_total_unimproved_other": [
      3259.0, 
      4016.0, 
      4923.0, 
      5893.0, 
      6696.0
    ], 
    "sanitation_urban_improved": [
      3237.5900000000001, 
      4013.4699999999998, 
      4746.1199999999999, 
      5610.0799999999999, 
      6070.6700000000001
    ], 
    "water_urban_improved_piped": [
      1245.0, 
      1593.0, 
      1978.0, 
      2418.0, 
      2710.0
    ]
  }, 
  "Burkina Faso": {
    "water_rural_unimproved": [
      4861.0, 
      4813.0, 
      4383.0, 
      3930.0, 
      3432.0
    ], 
    "water_rural_improved_total": [
      2735.0, 
      3782.0, 
      5356.0, 
      7297.0, 
      8825.0
    ], 
    "water_urban_improved_other": [
      743.0, 
      996.0, 
      1318.0, 
      1790.0, 
      2203.0
    ], 
    "sanitation_urban_unimproved_shared": [
      207.0, 
      260.5, 
      348.67000000000002, 
      478.88, 
      595.34000000000003
    ], 
    "sanitation_rural_improved": [
      151.93000000000001, 
      257.85000000000002, 
      389.56, 
      673.61000000000001, 
      735.42999999999995
    ], 
    "water_total_improved_other": [
      3478.0, 
      4778.0, 
      6674.0, 
      9087.0, 
      11028.0
    ], 
    "sanitation_total_improved": [
      493.0, 
      702.0, 
      990.0, 
      1481.0, 
      1717.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      511.41000000000003, 
      643.59000000000003, 
      794.20000000000005, 
      1008.16, 
      1160.9100000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6995.0, 
      7662.0, 
      8277.0, 
      9096.0, 
      9676.0
    ], 
    "sanitation_rural_unimproved_shared": [
      151.93000000000001, 
      257.85000000000002, 
      486.94999999999999, 
      673.61000000000001, 
      858.0
    ], 
    "population_urban": [
      1217.6500000000001, 
      1532.3499999999999, 
      1937.0699999999999, 
      2520.4099999999999, 
      2976.6999999999998
    ], 
    "water_total_improved_piped": [
      146.0, 
      215.0, 
      329.0, 
      504.0, 
      625.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      158.28999999999999, 
      183.88, 
      193.71000000000001, 
      226.84, 
      238.13999999999999
    ], 
    "water_urban_improved_total": [
      889.0, 
      1211.0, 
      1647.0, 
      2294.0, 
      2828.0
    ], 
    "sanitation_total_unimproved_total": [
      8320.9599999999991, 
      9425.2199999999993, 
      10686.16, 
      12266.18, 
      13516.879999999999
    ], 
    "sanitation_rural_unimproved_other": [
      455.77999999999997, 
      601.63999999999999, 
      779.13, 
      1010.41, 
      1225.72
    ], 
    "water_total_improved_total": [
      3624.0, 
      4993.0, 
      7003.0, 
      9591.0, 
      11653.0
    ], 
    "population_rural": [
      7596.3199999999997, 
      8594.8700000000008, 
      9739.0799999999999, 
      11226.77, 
      12257.18
    ], 
    "sanitation_total_unimproved_shared": [
      359.0, 
      518.0, 
      836.0, 
      1153.0, 
      1453.0
    ], 
    "water_urban_unimproved": [
      329.0, 
      321.0, 
      290.0, 
      226.0, 
      149.0
    ], 
    "sanitation_urban_unimproved_total": [
      876.71000000000004, 
      1087.97, 
      1336.5799999999999, 
      1713.8800000000001, 
      1994.3900000000001
    ], 
    "water_rural_improved_other": [
      2735.0, 
      3782.0, 
      5356.0, 
      7297.0, 
      8825.0
    ], 
    "water_total_unimproved": [
      5190.0, 
      5134.0, 
      4673.0, 
      4156.0, 
      3581.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      6836.6800000000003, 
      7477.54, 
      8083.4399999999996, 
      8869.1499999999996, 
      9438.0300000000007
    ], 
    "population_total": [
      8813.9599999999991, 
      10127.219999999999, 
      11676.16, 
      13747.18, 
      15233.879999999999
    ], 
    "sanitation_rural_unimproved_total": [
      7444.3900000000003, 
      8337.0200000000004, 
      9349.5200000000004, 
      10553.16, 
      11521.75
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      967.0, 
      1246.0, 
      1573.0, 
      2018.0, 
      2387.0
    ], 
    "sanitation_urban_improved": [
      340.94, 
      444.38, 
      600.49000000000001, 
      806.52999999999997, 
      982.30999999999995
    ], 
    "water_urban_improved_piped": [
      146.0, 
      215.0, 
      329.0, 
      504.0, 
      625.0
    ]
  }, 
  "Ghana": {
    "water_rural_unimproved": [
      5993.0, 
      5471.0, 
      4597.0, 
      3663.0, 
      3036.0
    ], 
    "water_rural_improved_total": [
      3520.0, 
      4852.0, 
      6348.0, 
      7785.0, 
      8639.0
    ], 
    "water_urban_improved_other": [
      2346.0, 
      3323.0, 
      4550.0, 
      5966.0, 
      7006.0
    ], 
    "sanitation_urban_unimproved_shared": [
      2399.9000000000001, 
      3530.3000000000002, 
      4978.6700000000001, 
      6908.4499999999998, 
      8173.3100000000004
    ], 
    "sanitation_rural_improved": [
      380.52999999999997, 
      516.16999999999996, 
      547.26999999999998, 
      686.87, 
      817.23000000000002
    ], 
    "water_total_improved_other": [
      5676.0, 
      7969.0, 
      10570.0, 
      13408.0, 
      15295.0
    ], 
    "sanitation_total_improved": [
      981.0, 
      1416.0, 
      1835.0, 
      2466.0, 
      2919.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      1854.47, 
      1799.76, 
      1545.0999999999999, 
      942.05999999999995, 
      583.80999999999995
    ], 
    "sanitation_total_unimproved_opendefecation": [
      3264.0, 
      3789.0, 
      4166.0, 
      4615.0, 
      4786.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1997.77, 
      2684.0599999999999, 
      3393.0700000000002, 
      4006.7399999999998, 
      4436.4099999999999
    ], 
    "population_urban": [
      5454.3100000000004, 
      6922.1599999999999, 
      8583.9099999999999, 
      10467.34, 
      11676.16
    ], 
    "water_total_improved_piped": [
      2426.0, 
      2836.0, 
      3332.0, 
      3693.0, 
      3853.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      599.97000000000003, 
      692.22000000000003, 
      772.54999999999995, 
      837.38999999999999, 
      817.33000000000004
    ], 
    "water_urban_improved_total": [
      4582.0, 
      5953.0, 
      7554.0, 
      9316.0, 
      10509.0
    ], 
    "sanitation_total_unimproved_total": [
      13986.51, 
      15829.459999999999, 
      17694.310000000001, 
      19449.169999999998, 
      20431.93
    ], 
    "sanitation_rural_unimproved_other": [
      4471.1999999999998, 
      4026.0900000000001, 
      3611.98, 
      2976.4299999999998, 
      2451.6999999999998
    ], 
    "water_total_improved_total": [
      8102.0, 
      10805.0, 
      13902.0, 
      17101.0, 
      19148.0
    ], 
    "population_rural": [
      9513.2000000000007, 
      10323.309999999999, 
      10945.389999999999, 
      11447.83, 
      11674.76
    ], 
    "sanitation_total_unimproved_shared": [
      4398.0, 
      6214.0, 
      8372.0, 
      10915.0, 
      12609.0
    ], 
    "water_urban_unimproved": [
      872.0, 
      969.0, 
      1030.0, 
      1151.0, 
      1167.0
    ], 
    "sanitation_urban_unimproved_total": [
      4854.3400000000001, 
      6022.2799999999997, 
      7296.3199999999997, 
      8687.8899999999994, 
      9574.4500000000007
    ], 
    "water_rural_improved_other": [
      3330.0, 
      4646.0, 
      6020.0, 
      7442.0, 
      8289.0
    ], 
    "water_total_unimproved": [
      6865.0, 
      6440.0, 
      5627.0, 
      4814.0, 
      4203.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2663.6999999999998, 
      3096.9899999999998, 
      3393.0700000000002, 
      3777.7800000000002, 
      3969.4200000000001
    ], 
    "population_total": [
      14967.51, 
      17245.459999999999, 
      19529.310000000001, 
      21915.169999999998, 
      23350.93
    ], 
    "sanitation_rural_unimproved_total": [
      9132.6700000000001, 
      9807.1399999999994, 
      10398.120000000001, 
      10760.959999999999, 
      10857.530000000001
    ], 
    "water_rural_improved_piped": [
      190.0, 
      206.0, 
      328.0, 
      343.0, 
      350.0
    ], 
    "sanitation_total_unimproved_other": [
      6325.0, 
      5826.0, 
      5157.0, 
      3918.0, 
      3036.0
    ], 
    "sanitation_urban_improved": [
      599.97000000000003, 
      899.88, 
      1287.5899999999999, 
      1779.45, 
      2101.71
    ], 
    "water_urban_improved_piped": [
      2236.0, 
      2630.0, 
      3004.0, 
      3350.0, 
      3503.0
    ]
  }, 
  "Saudi Arabia": {
    "water_rural_unimproved": [
      1408.0, 
      1441.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      2399.0, 
      2453.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      115.0, 
      117.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      12451.530000000001, 
      14360.91, 
      16614.75, 
      19120.369999999999, 
      20572.689999999999
    ], 
    "water_total_improved_piped": [
      14362.0, 
      16266.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      12078.0, 
      13930.0, 
      16116.0, 
      18547.0, 
      19956.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      14477.0, 
      16383.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      3807.3400000000001, 
      3893.71, 
      4193.2200000000003, 
      4492.3100000000004, 
      4627.8199999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      374.0, 
      431.0, 
      499.0, 
      573.0, 
      617.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      115.0, 
      117.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      1782.0, 
      1872.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      16258.860000000001, 
      18254.619999999999, 
      20807.970000000001, 
      23612.68, 
      25200.52
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      2284.0, 
      2336.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      12451.530000000001, 
      14360.91, 
      16614.75, 
      19120.369999999999, 
      20572.689999999999
    ], 
    "water_urban_improved_piped": [
      12078.0, 
      13930.0, 
      16116.0, 
      18547.0, 
      19956.0
    ]
  }, 
  "Japan": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      45466.0, 
      44363.0, 
      44073.0, 
      43381.0, 
      42708.0
    ], 
    "water_urban_improved_other": [
      2332.0, 
      2432.0, 
      1652.0, 
      1682.0, 
      846.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      45466.120000000003, 
      44362.540000000001, 
      44073.339999999997, 
      43380.970000000001, 
      42708.099999999999
    ], 
    "water_total_improved_other": [
      8697.0, 
      7312.0, 
      5618.0, 
      4285.0, 
      2981.0
    ], 
    "sanitation_total_improved": [
      123191.0, 
      125442.0, 
      126705.0, 
      127449.0, 
      127293.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      77724.929999999993, 
      81079.399999999994, 
      82632.440000000002, 
      84067.679999999993, 
      84584.990000000005
    ], 
    "water_total_improved_piped": [
      114494.0, 
      118130.0, 
      121087.0, 
      123164.0, 
      124312.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      77725.0, 
      81079.0, 
      82632.0, 
      84068.0, 
      84585.0
    ], 
    "sanitation_total_unimproved_total": [
      0.050000000000000003, 
      -0.059999999999999998, 
      0.78000000000000003, 
      -0.34000000000000002, 
      0.089999999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      123191.0, 
      125442.0, 
      126705.0, 
      127449.0, 
      127293.0
    ], 
    "population_rural": [
      45466.120000000003, 
      44362.540000000001, 
      44073.339999999997, 
      43380.970000000001, 
      42708.099999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      6365.0, 
      4880.0, 
      3966.0, 
      2603.0, 
      2135.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      123191.05, 
      125441.94, 
      126705.78, 
      127448.66, 
      127293.09
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      39101.0, 
      39483.0, 
      40107.0, 
      40778.0, 
      40573.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      77724.929999999993, 
      81079.399999999994, 
      82632.440000000002, 
      84067.679999999993, 
      84584.990000000005
    ], 
    "water_urban_improved_piped": [
      75393.0, 
      78647.0, 
      80980.0, 
      82386.0, 
      83739.0
    ]
  }, 
  "Cape Verde": {
    "water_rural_unimproved": [
      -1.0, 
      45.0, 
      40.0, 
      36.0, 
      36.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      159.0, 
      164.0, 
      167.0, 
      165.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      91.0, 
      103.0, 
      113.0, 
      116.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      34.68, 
      49.060000000000002, 
      69.140000000000001, 
      76.450000000000003
    ], 
    "water_total_improved_other": [
      -1.0, 
      246.0, 
      249.0, 
      235.0, 
      227.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      159.0, 
      199.0, 
      247.0, 
      269.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      0.0, 
      2.3500000000000001, 
      5.4800000000000004, 
      5.9500000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      239.0, 
      233.0, 
      214.0, 
      211.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      156.28, 
      194.19, 
      234.56, 
      274.06999999999999, 
      297.48000000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      80.0, 
      117.0, 
      168.0, 
      191.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      69.909999999999997, 
      82.090000000000003, 
      90.439999999999998, 
      98.170000000000002
    ], 
    "water_urban_improved_total": [
      -1.0, 
      167.0, 
      202.0, 
      236.0, 
      253.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      239.19999999999999, 
      239.97, 
      230.44, 
      229.66999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.0, 
      4.0899999999999999, 
      10.17, 
      12.07
    ], 
    "water_total_improved_total": [
      -1.0, 
      326.0, 
      366.0, 
      403.0, 
      418.0
    ], 
    "population_rural": [
      197.94, 
      204.00999999999999, 
      204.41999999999999, 
      203.37, 
      201.19
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      27.0, 
      33.0, 
      38.0, 
      44.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      69.909999999999997, 
      84.439999999999998, 
      95.920000000000002, 
      104.12
    ], 
    "water_rural_improved_other": [
      -1.0, 
      155.0, 
      146.0, 
      122.0, 
      111.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      72.0, 
      73.0, 
      74.0, 
      80.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      169.31999999999999, 
      151.27000000000001, 
      124.05, 
      112.67
    ], 
    "population_total": [
      354.22000000000003, 
      398.19999999999999, 
      438.97000000000003, 
      477.44, 
      498.67000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      169.33000000000001, 
      155.36000000000001, 
      134.22999999999999, 
      124.73999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      4.0, 
      18.0, 
      45.0, 
      54.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      0.0, 
      6.0, 
      15.0, 
      18.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      124.28, 
      150.12, 
      178.15000000000001, 
      193.36000000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      76.0, 
      99.0, 
      123.0, 
      137.0
    ]
  }, 
  "Northern Mariana Islands": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      1.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      4.0, 
      5.0, 
      4.0, 
      4.0, 
      6.0
    ], 
    "water_urban_improved_other": [
      39.0, 
      52.0, 
      63.0, 
      74.0, 
      78.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      3.48, 
      4.1100000000000003, 
      4.3099999999999996, 
      4.2599999999999998, 
      5.5300000000000002
    ], 
    "water_total_improved_other": [
      43.0, 
      57.0, 
      67.0, 
      78.0, 
      84.0
    ], 
    "sanitation_total_improved": [
      36.0, 
      51.0, 
      63.0, 
      75.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      5.9000000000000004, 
      5.8200000000000003, 
      5.1500000000000004, 
      4.5499999999999998, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      39.32, 
      52.920000000000002, 
      64.370000000000005, 
      75.769999999999996, 
      79.599999999999994
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      39.0, 
      52.0, 
      63.0, 
      74.0, 
      78.0
    ], 
    "sanitation_total_unimproved_total": [
      7.7800000000000002, 
      6.71, 
      6.0, 
      5.2000000000000002, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      0.97999999999999998, 
      0.67000000000000004, 
      0.32000000000000001, 
      0.17999999999999999, 
      0.23000000000000001
    ], 
    "water_total_improved_total": [
      43.0, 
      57.0, 
      67.0, 
      78.0, 
      84.0
    ], 
    "population_rural": [
      4.4699999999999998, 
      4.7800000000000002, 
      4.6399999999999997, 
      4.4400000000000004, 
      5.7599999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      1.0, 
      1.0, 
      2.0, 
      2.0
    ], 
    "sanitation_urban_unimproved_total": [
      5.9000000000000004, 
      5.8200000000000003, 
      5.1500000000000004, 
      4.5499999999999998, 
      -1.0
    ], 
    "water_rural_improved_other": [
      4.0, 
      5.0, 
      4.0, 
      4.0, 
      6.0
    ], 
    "water_total_unimproved": [
      0.0, 
      1.0, 
      2.0, 
      2.0, 
      2.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      43.780000000000001, 
      57.710000000000001, 
      69.0, 
      80.200000000000003, 
      85.359999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.98999999999999999, 
      0.67000000000000004, 
      0.33000000000000002, 
      0.17999999999999999, 
      0.23000000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      7.0, 
      7.0, 
      5.0, 
      5.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      33.420000000000002, 
      47.100000000000001, 
      59.219999999999999, 
      71.219999999999999, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Slovenia": {
    "water_rural_unimproved": [
      10.0, 
      10.0, 
      10.0, 
      10.0, 
      11.0
    ], 
    "water_rural_improved_total": [
      946.0, 
      961.0, 
      968.0, 
      1000.0, 
      1028.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      956.02999999999997, 
      970.99000000000001, 
      977.76999999999998, 
      1010.21, 
      1038.6199999999999
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      1927.0, 
      1966.0, 
      1986.0, 
      2001.0, 
      2016.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      970.66999999999996, 
      995.21000000000004, 
      1007.63, 
      990.96000000000004, 
      976.50999999999999
    ], 
    "water_total_improved_piped": [
      1917.0, 
      1956.0, 
      1976.0, 
      1991.0, 
      2005.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      971.0, 
      995.0, 
      1008.0, 
      991.0, 
      977.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.29999999999999999, 
      0.20999999999999999, 
      -0.58999999999999997, 
      0.17000000000000001, 
      -0.88
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      1917.0, 
      1956.0, 
      1976.0, 
      1991.0, 
      2005.0
    ], 
    "population_rural": [
      956.02999999999997, 
      970.99000000000001, 
      977.76999999999998, 
      1010.21, 
      1038.6199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      10.0, 
      10.0, 
      10.0, 
      10.0, 
      11.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      1926.7, 
      1966.21, 
      1985.4100000000001, 
      2001.1700000000001, 
      2015.1199999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      946.0, 
      961.0, 
      968.0, 
      1000.0, 
      1028.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      970.66999999999996, 
      995.21000000000004, 
      1007.63, 
      990.96000000000004, 
      976.50999999999999
    ], 
    "water_urban_improved_piped": [
      971.0, 
      995.0, 
      1008.0, 
      991.0, 
      977.0
    ]
  }, 
  "Guatemala": {
    "water_rural_unimproved": [
      1312.0, 
      1139.0, 
      986.0, 
      806.0, 
      704.0
    ], 
    "water_rural_improved_total": [
      3935.0, 
      4554.0, 
      5177.0, 
      5907.0, 
      6341.0
    ], 
    "water_urban_improved_other": [
      843.0, 
      777.0, 
      608.0, 
      420.0, 
      199.0
    ], 
    "sanitation_urban_unimproved_shared": [
      256.44999999999999, 
      301.97000000000003, 
      354.76999999999998, 
      419.81, 
      464.85000000000002
    ], 
    "sanitation_rural_improved": [
      2675.7399999999998, 
      3244.8899999999999, 
      3882.4499999999998, 
      4631.6400000000003, 
      5143.1999999999998
    ], 
    "water_total_improved_other": [
      2942.0, 
      2826.0, 
      2519.0, 
      2098.0, 
      1749.0
    ], 
    "sanitation_total_improved": [
      5753.0, 
      6912.0, 
      8291.0, 
      9910.0, 
      11053.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      146.53999999999999, 
      172.55000000000001, 
      152.03999999999999, 
      119.94, 
      132.81
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2019.0, 
      1824.0, 
      1508.0, 
      1187.0, 
      908.0
    ], 
    "sanitation_rural_unimproved_shared": [
      104.93000000000001, 
      113.86, 
      123.25, 
      134.25, 
      140.91
    ], 
    "population_urban": [
      3663.5700000000002, 
      4313.8699999999999, 
      5068.0799999999999, 
      5997.2200000000003, 
      6640.6499999999996
    ], 
    "water_total_improved_piped": [
      4327.0, 
      5740.0, 
      7473.0, 
      9626.0, 
      11100.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      183.18000000000001, 
      172.55000000000001, 
      152.03999999999999, 
      179.91999999999999, 
      132.81
    ], 
    "water_urban_improved_total": [
      3334.0, 
      4012.0, 
      4815.0, 
      5817.0, 
      6508.0
    ], 
    "sanitation_total_unimproved_total": [
      3157.1199999999999, 
      3094.6500000000001, 
      2939.6999999999998, 
      2799.7399999999998, 
      2633.1300000000001
    ], 
    "sanitation_rural_unimproved_other": [
      629.59000000000003, 
      683.13, 
      801.13999999999999, 
      939.75, 
      986.37
    ], 
    "water_total_improved_total": [
      7269.0, 
      8566.0, 
      9992.0, 
      11724.0, 
      12849.0
    ], 
    "population_rural": [
      5246.5500000000002, 
      5692.79, 
      6162.6199999999999, 
      6712.5200000000004, 
      7045.4799999999996
    ], 
    "sanitation_total_unimproved_shared": [
      361.0, 
      416.0, 
      478.0, 
      554.0, 
      606.0
    ], 
    "water_urban_unimproved": [
      330.0, 
      302.0, 
      253.0, 
      180.0, 
      133.0
    ], 
    "sanitation_urban_unimproved_total": [
      586.16999999999996, 
      647.08000000000004, 
      658.85000000000002, 
      719.66999999999996, 
      730.48000000000002
    ], 
    "water_rural_improved_other": [
      2099.0, 
      2049.0, 
      1911.0, 
      1678.0, 
      1550.0
    ], 
    "water_total_unimproved": [
      1642.0, 
      1441.0, 
      1239.0, 
      986.0, 
      837.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1836.29, 
      1650.9100000000001, 
      1355.78, 
      1006.88, 
      775.0
    ], 
    "population_total": [
      8910.1200000000008, 
      10006.65, 
      11230.700000000001, 
      12709.74, 
      13686.129999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2570.8099999999999, 
      2447.9000000000001, 
      2280.1700000000001, 
      2080.8800000000001, 
      1902.28
    ], 
    "water_rural_improved_piped": [
      1836.0, 
      2505.0, 
      3266.0, 
      4229.0, 
      4791.0
    ], 
    "sanitation_total_unimproved_other": [
      777.0, 
      856.0, 
      953.0, 
      1060.0, 
      1119.0
    ], 
    "sanitation_urban_improved": [
      3077.4000000000001, 
      3666.79, 
      4409.2299999999996, 
      5277.5500000000002, 
      5910.1700000000001
    ], 
    "water_urban_improved_piped": [
      2491.0, 
      3235.0, 
      4207.0, 
      5397.0, 
      6309.0
    ]
  }, 
  "Bosnia and Herzegovina": {
    "water_rural_unimproved": [
      -1.0, 
      79.0, 
      84.0, 
      61.0, 
      40.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1885.0, 
      2013.0, 
      1990.0, 
      1944.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      41.0, 
      48.0, 
      104.0, 
      108.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      1826.3499999999999, 
      1950.1300000000001, 
      1887.3399999999999, 
      1824.8699999999999
    ], 
    "water_total_improved_other": [
      -1.0, 
      394.0, 
      446.0, 
      596.0, 
      644.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      3167.0, 
      3515.0, 
      3600.0, 
      3597.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      13.68, 
      31.93, 
      17.300000000000001, 
      17.899999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      34.0, 
      21.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      19.640000000000001, 
      20.969999999999999, 
      20.510000000000002, 
      19.84
    ], 
    "population_urban": [
      1690.9300000000001, 
      1368.3, 
      1596.6600000000001, 
      1729.8199999999999, 
      1789.54
    ], 
    "water_total_improved_piped": [
      -1.0, 
      2846.0, 
      3148.0, 
      3124.0, 
      3090.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      13.68, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      1355.0, 
      1581.0, 
      1730.0, 
      1790.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      165.12, 
      178.58000000000001, 
      181.27000000000001, 
      176.09999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      98.189999999999998, 
      104.84999999999999, 
      143.59999999999999, 
      138.84999999999999
    ], 
    "water_total_improved_total": [
      -1.0, 
      3240.0, 
      3594.0, 
      3720.0, 
      3734.0
    ], 
    "population_rural": [
      2617.27, 
      1963.8199999999999, 
      2096.9200000000001, 
      2051.46, 
      1983.5599999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      20.0, 
      21.0, 
      21.0, 
      20.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      13.0, 
      16.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      27.359999999999999, 
      31.93, 
      17.300000000000001, 
      17.890000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      353.0, 
      398.0, 
      492.0, 
      536.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      92.0, 
      100.0, 
      61.0, 
      40.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      19.640000000000001, 
      20.969999999999999, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4308.1999999999998, 
      3332.1199999999999, 
      3693.5799999999999, 
      3781.27, 
      3773.0999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      137.47, 
      146.78999999999999, 
      164.12, 
      158.69
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      1532.0, 
      1615.0, 
      1498.0, 
      1408.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      112.0, 
      137.0, 
      161.0, 
      157.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      1340.9400000000001, 
      1564.73, 
      1712.52, 
      1771.6500000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1314.0, 
      1533.0, 
      1626.0, 
      1682.0
    ]
  }, 
  "Kuwait": {
    "water_rural_unimproved": [
      1.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      42.0, 
      32.0, 
      40.0, 
      46.0, 
      48.0
    ], 
    "water_urban_improved_other": [
      2079.0, 
      1675.0, 
      2166.0, 
      2627.0, 
      2842.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      42.710000000000001, 
      32.710000000000001, 
      40.130000000000003, 
      46.119999999999997, 
      48.219999999999999
    ], 
    "water_total_improved_other": [
      2121.0, 
      1707.0, 
      2206.0, 
      2673.0, 
      2890.0
    ], 
    "sanitation_total_improved": [
      2143.0, 
      1725.0, 
      2228.0, 
      2700.0, 
      2919.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2100.3000000000002, 
      1692.3, 
      2188.23, 
      2653.8699999999999, 
      2870.8899999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2079.0, 
      1675.0, 
      2166.0, 
      2627.0, 
      2842.0
    ], 
    "sanitation_total_unimproved_total": [
      0.01, 
      0.0, 
      0.35999999999999999, 
      -0.02, 
      0.11
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      2121.0, 
      1707.0, 
      2206.0, 
      2673.0, 
      2890.0
    ], 
    "population_rural": [
      42.710000000000001, 
      32.710000000000001, 
      40.130000000000003, 
      46.119999999999997, 
      48.219999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      21.0, 
      17.0, 
      22.0, 
      27.0, 
      29.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      42.0, 
      32.0, 
      40.0, 
      46.0, 
      48.0
    ], 
    "water_total_unimproved": [
      22.0, 
      18.0, 
      22.0, 
      27.0, 
      29.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      2143.0100000000002, 
      1725.0, 
      2228.3600000000001, 
      2699.98, 
      2919.1100000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      2100.3000000000002, 
      1692.3, 
      2188.23, 
      2653.8699999999999, 
      2870.8899999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Russian Federation": {
    "water_rural_unimproved": [
      7485.0, 
      6722.0, 
      5473.0, 
      4263.0, 
      4231.0
    ], 
    "water_rural_improved_total": [
      31909.0, 
      32820.0, 
      33615.0, 
      34493.0, 
      34227.0
    ], 
    "water_urban_improved_other": [
      11954.0, 
      9806.0, 
      8607.0, 
      6264.0, 
      6176.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      27575.959999999999, 
      27679.27, 
      27361.259999999998, 
      27129.25, 
      26920.48
    ], 
    "water_total_improved_other": [
      26136.0, 
      25623.0, 
      25805.0, 
      25255.0, 
      25020.0
    ], 
    "sanitation_total_improved": [
      128640.0, 
      129007.0, 
      127413.0, 
      124234.0, 
      122651.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      7606.9700000000003, 
      7626.8699999999999, 
      7530.7600000000002, 
      7308.96, 
      7205.5500000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      108670.98, 
      108955.28999999999, 
      107582.32000000001, 
      104413.75, 
      102936.47
    ], 
    "water_total_improved_piped": [
      112271.0, 
      113973.0, 
      113241.0, 
      111563.0, 
      110085.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      106498.0, 
      106776.0, 
      105431.0, 
      102325.0, 
      100878.0
    ], 
    "sanitation_total_unimproved_total": [
      19425.209999999999, 
      19490.099999999999, 
      19256.830000000002, 
      18935.82, 
      18743.299999999999
    ], 
    "sanitation_rural_unimproved_other": [
      11818.27, 
      11862.540000000001, 
      11726.25, 
      11626.82, 
      11537.35
    ], 
    "water_total_improved_total": [
      138407.0, 
      139596.0, 
      139046.0, 
      136818.0, 
      135105.0
    ], 
    "population_rural": [
      39394.230000000003, 
      39541.809999999998, 
      39087.510000000002, 
      38756.07, 
      38457.839999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      2173.0, 
      2179.0, 
      2151.0, 
      2089.0, 
      2058.0
    ], 
    "sanitation_urban_unimproved_total": [
      7606.9700000000003, 
      7626.8699999999999, 
      7530.7600000000002, 
      7308.9700000000003, 
      7205.5600000000004
    ], 
    "water_rural_improved_other": [
      14182.0, 
      15817.0, 
      17198.0, 
      18991.0, 
      18844.0
    ], 
    "water_total_unimproved": [
      9658.0, 
      8901.0, 
      7624.0, 
      6352.0, 
      6289.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      148065.20999999999, 
      148497.10000000001, 
      146669.82999999999, 
      143169.82000000001, 
      141394.29999999999
    ], 
    "sanitation_rural_unimproved_total": [
      11818.27, 
      11862.540000000001, 
      11726.25, 
      11626.82, 
      11537.360000000001
    ], 
    "water_rural_improved_piped": [
      17727.0, 
      17003.0, 
      16417.0, 
      15502.0, 
      15383.0
    ], 
    "sanitation_total_unimproved_other": [
      19425.0, 
      19490.0, 
      19257.0, 
      18936.0, 
      18743.0
    ], 
    "sanitation_urban_improved": [
      101064.00999999999, 
      101328.42, 
      100051.56, 
      97104.779999999999, 
      95730.910000000003
    ], 
    "water_urban_improved_piped": [
      94544.0, 
      96970.0, 
      96824.0, 
      96061.0, 
      94702.0
    ]
  }, 
  "Jordan": {
    "water_rural_unimproved": [
      82.0, 
      84.0, 
      95.0, 
      108.0, 
      119.0
    ], 
    "water_rural_improved_total": [
      822.0, 
      854.0, 
      960.0, 
      1099.0, 
      1206.0
    ], 
    "water_urban_improved_other": [
      24.0, 
      34.0, 
      76.0, 
      130.0, 
      192.0
    ], 
    "sanitation_urban_unimproved_shared": [
      47.009999999999998, 
      67.319999999999993, 
      75.959999999999994, 
      87.170000000000002, 
      96.209999999999994
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      891.12, 
      1013.0599999999999, 
      1159.0599999999999, 
      1285.1700000000001
    ], 
    "water_total_improved_other": [
      60.0, 
      91.0, 
      171.0, 
      263.0, 
      351.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      4190.0, 
      4735.0, 
      5430.0, 
      5999.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      28.0, 
      21.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      9.3800000000000008, 
      10.550000000000001, 
      12.07, 
      13.25
    ], 
    "population_urban": [
      2350.3400000000001, 
      3366.0300000000002, 
      3798.0900000000001, 
      4358.5500000000002, 
      4810.6599999999999
    ], 
    "water_total_improved_piped": [
      3089.0, 
      4062.0, 
      4511.0, 
      5107.0, 
      5569.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2327.0, 
      3299.0, 
      3722.0, 
      4271.0, 
      4714.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      114.05, 
      118.36, 
      135.90000000000001, 
      136.58000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      9.3800000000000008, 
      10.550000000000001, 
      36.219999999999999, 
      26.5
    ], 
    "water_total_improved_total": [
      3149.0, 
      4153.0, 
      4682.0, 
      5370.0, 
      5920.0
    ], 
    "population_rural": [
      903.66999999999996, 
      938.02999999999997, 
      1055.27, 
      1207.3599999999999, 
      1324.9200000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      76.0, 
      87.0, 
      99.0, 
      109.0
    ], 
    "water_urban_unimproved": [
      23.0, 
      67.0, 
      76.0, 
      88.0, 
      97.0
    ], 
    "sanitation_urban_unimproved_total": [
      47.009999999999998, 
      67.319999999999993, 
      75.959999999999994, 
      87.170000000000002, 
      96.209999999999994
    ], 
    "water_rural_improved_other": [
      36.0, 
      57.0, 
      95.0, 
      133.0, 
      159.0
    ], 
    "water_total_unimproved": [
      105.0, 
      151.0, 
      171.0, 
      196.0, 
      216.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      28.140000000000001, 
      21.109999999999999, 
      0.0, 
      0.0
    ], 
    "population_total": [
      3254.0, 
      4304.0500000000002, 
      4853.3599999999997, 
      5565.8999999999996, 
      6135.5799999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      46.909999999999997, 
      42.210000000000001, 
      48.299999999999997, 
      39.75
    ], 
    "water_rural_improved_piped": [
      786.0, 
      797.0, 
      865.0, 
      966.0, 
      1047.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      9.0, 
      11.0, 
      36.0, 
      26.0
    ], 
    "sanitation_urban_improved": [
      2303.3299999999999, 
      3298.71, 
      3722.1300000000001, 
      4271.3800000000001, 
      4714.4499999999998
    ], 
    "water_urban_improved_piped": [
      2303.0, 
      3265.0, 
      3646.0, 
      4141.0, 
      4522.0
    ]
  }, 
  "Dominica": {
    "water_rural_unimproved": [
      -1.0, 
      2.0, 
      2.0, 
      1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      19.0, 
      18.0, 
      17.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      9.0, 
      8.0, 
      9.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      17.670000000000002, 
      16.52, 
      15.380000000000001, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      18.0, 
      16.0, 
      17.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      56.0, 
      56.0, 
      54.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      0.94999999999999996, 
      0.96999999999999997, 
      0.97999999999999998, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      12.0, 
      12.0, 
      12.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      46.600000000000001, 
      47.659999999999997, 
      48.399999999999999, 
      49.149999999999999, 
      48.93
    ], 
    "water_total_improved_piped": [
      -1.0, 
      47.0, 
      48.0, 
      47.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      8.5800000000000001, 
      8.7100000000000009, 
      8.8499999999999996, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      46.0, 
      46.0, 
      47.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      12.699999999999999, 
      12.07, 
      13.460000000000001, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.41999999999999998, 
      0.39000000000000001, 
      0.37, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      65.0, 
      64.0, 
      64.0, 
      -1.0
    ], 
    "population_rural": [
      22.210000000000001, 
      21.039999999999999, 
      19.670000000000002, 
      18.309999999999999, 
      17.879999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      2.0, 
      2.0, 
      2.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      9.5299999999999994, 
      9.6799999999999997, 
      9.8300000000000001, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      9.0, 
      8.0, 
      8.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      4.0, 
      4.0, 
      3.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      2.9500000000000002, 
      2.75, 
      2.5600000000000001, 
      -1.0
    ], 
    "population_total": [
      68.819999999999993, 
      68.700000000000003, 
      68.069999999999993, 
      67.459999999999994, 
      66.819999999999993
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      3.3700000000000001, 
      3.1499999999999999, 
      2.9300000000000002, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      10.0, 
      10.0, 
      9.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      1.0, 
      1.0, 
      1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      38.130000000000003, 
      38.719999999999999, 
      39.32, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      37.0, 
      38.0, 
      38.0, 
      -1.0
    ]
  }, 
  "Liberia": {
    "water_rural_unimproved": [
      783.0, 
      593.0, 
      723.0, 
      726.0, 
      741.0
    ], 
    "water_rural_improved_total": [
      403.0, 
      380.0, 
      569.0, 
      671.0, 
      770.0
    ], 
    "water_urban_improved_other": [
      637.0, 
      661.0, 
      1087.0, 
      1434.0, 
      1735.0
    ], 
    "sanitation_urban_unimproved_shared": [
      205.91999999999999, 
      223.41999999999999, 
      367.74000000000001, 
      484.26999999999998, 
      570.69000000000005
    ], 
    "sanitation_rural_improved": [
      35.590000000000003, 
      38.93, 
      51.689999999999998, 
      55.890000000000001, 
      60.43
    ], 
    "water_total_improved_other": [
      1004.0, 
      1022.0, 
      1630.0, 
      2091.0, 
      2505.0
    ], 
    "sanitation_total_improved": [
      242.0, 
      253.0, 
      404.0, 
      521.0, 
      631.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      421.64999999999998, 
      349.70999999999998, 
      459.68000000000001, 
      464.89999999999998, 
      456.55000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      954.0, 
      876.0, 
      1295.0, 
      1585.0, 
      1848.0
    ], 
    "sanitation_rural_unimproved_shared": [
      130.49000000000001, 
      107.06999999999999, 
      142.13999999999999, 
      167.66, 
      181.28
    ], 
    "population_urban": [
      980.58000000000004, 
      971.40999999999997, 
      1532.25, 
      1937.0799999999999, 
      2282.75
    ], 
    "water_total_improved_piped": [
      242.0, 
      174.0, 
      195.0, 
      130.0, 
      68.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      147.09, 
      184.56999999999999, 
      352.42000000000002, 
      523.00999999999999, 
      684.83000000000004
    ], 
    "water_urban_improved_total": [
      843.0, 
      816.0, 
      1256.0, 
      1550.0, 
      1803.0
    ], 
    "sanitation_total_unimproved_total": [
      1924.8800000000001, 
      1691.77, 
      2420.4299999999998, 
      2813.2199999999998, 
      3162.3899999999999
    ], 
    "sanitation_rural_unimproved_other": [
      213.53, 
      136.27000000000001, 
      155.06, 
      111.77, 
      105.73999999999999
    ], 
    "water_total_improved_total": [
      1246.0, 
      1196.0, 
      1825.0, 
      2221.0, 
      2573.0
    ], 
    "population_rural": [
      1186.3, 
      973.36000000000001, 
      1292.1800000000001, 
      1397.1400000000001, 
      1510.6400000000001
    ], 
    "sanitation_total_unimproved_shared": [
      336.0, 
      330.0, 
      510.0, 
      652.0, 
      752.0
    ], 
    "water_urban_unimproved": [
      138.0, 
      155.0, 
      276.0, 
      387.0, 
      480.0
    ], 
    "sanitation_urban_unimproved_total": [
      774.65999999999997, 
      757.70000000000005, 
      1179.8299999999999, 
      1472.1800000000001, 
      1712.0599999999999
    ], 
    "water_rural_improved_other": [
      367.0, 
      361.0, 
      543.0, 
      657.0, 
      770.0
    ], 
    "water_total_unimproved": [
      921.0, 
      748.0, 
      999.0, 
      1113.0, 
      1221.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      806.67999999999995, 
      691.08000000000004, 
      943.28999999999996, 
      1061.8299999999999, 
      1163.1900000000001
    ], 
    "population_total": [
      2166.8800000000001, 
      1944.77, 
      2824.4299999999998, 
      3334.2199999999998, 
      3793.3899999999999
    ], 
    "sanitation_rural_unimproved_total": [
      1150.71, 
      934.42999999999995, 
      1240.49, 
      1341.25, 
      1450.21
    ], 
    "water_rural_improved_piped": [
      36.0, 
      19.0, 
      26.0, 
      14.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      636.0, 
      486.0, 
      615.0, 
      577.0, 
      563.0
    ], 
    "sanitation_urban_improved": [
      205.91999999999999, 
      213.71000000000001, 
      352.42000000000002, 
      464.89999999999998, 
      570.69000000000005
    ], 
    "water_urban_improved_piped": [
      206.0, 
      155.0, 
      169.0, 
      116.0, 
      68.0
    ]
  }, 
  "Maldives": {
    "water_rural_unimproved": [
      21.0, 
      24.0, 
      26.0, 
      27.0, 
      26.0
    ], 
    "water_rural_improved_total": [
      139.0, 
      160.0, 
      171.0, 
      166.0, 
      163.0
    ], 
    "water_urban_improved_other": [
      30.0, 
      32.0, 
      24.0, 
      14.0, 
      4.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      92.700000000000003, 
      110.58, 
      145.63, 
      169.99000000000001, 
      181.86000000000001
    ], 
    "water_total_improved_other": [
      169.0, 
      192.0, 
      195.0, 
      178.0, 
      163.0
    ], 
    "sanitation_total_improved": [
      149.0, 
      175.0, 
      221.0, 
      269.0, 
      298.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      48.0, 
      52.0, 
      37.0, 
      21.0, 
      8.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      55.689999999999998, 
      63.539999999999999, 
      75.450000000000003, 
      99.230000000000004, 
      115.58
    ], 
    "water_total_improved_piped": [
      26.0, 
      32.0, 
      51.0, 
      86.0, 
      114.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      56.0, 
      64.0, 
      75.0, 
      98.0, 
      114.0
    ], 
    "sanitation_total_unimproved_total": [
      66.519999999999996, 
      72.840000000000003, 
      51.25, 
      23.399999999999999, 
      7.0300000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      19.18, 
      22.120000000000001, 
      13.779999999999999, 
      1.9299999999999999, 
      0.0
    ], 
    "water_total_improved_total": [
      195.0, 
      224.0, 
      246.0, 
      264.0, 
      277.0
    ], 
    "population_rural": [
      159.83000000000001, 
      184.30000000000001, 
      196.80000000000001, 
      193.16999999999999, 
      189.44
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      1.0, 
      2.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      139.0, 
      160.0, 
      171.0, 
      164.0, 
      159.0
    ], 
    "water_total_unimproved": [
      21.0, 
      24.0, 
      26.0, 
      28.0, 
      28.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      47.950000000000003, 
      51.600000000000001, 
      37.390000000000001, 
      21.25, 
      7.5800000000000001
    ], 
    "population_total": [
      215.52000000000001, 
      247.84, 
      272.25, 
      292.39999999999998, 
      305.02999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      67.129999999999995, 
      73.719999999999999, 
      51.170000000000002, 
      23.18, 
      7.5800000000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      2.0, 
      4.0
    ], 
    "sanitation_total_unimproved_other": [
      19.0, 
      22.0, 
      14.0, 
      2.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      55.689999999999998, 
      63.539999999999999, 
      75.450000000000003, 
      99.230000000000004, 
      115.58
    ], 
    "water_urban_improved_piped": [
      26.0, 
      32.0, 
      51.0, 
      84.0, 
      110.0
    ]
  }, 
  "Jamaica": {
    "water_rural_unimproved": [
      143.0, 
      146.0, 
      148.0, 
      152.0, 
      139.0
    ], 
    "water_rural_improved_total": [
      1052.0, 
      1072.0, 
      1089.0, 
      1111.0, 
      1127.0
    ], 
    "water_urban_improved_other": [
      105.0, 
      112.0, 
      107.0, 
      113.0, 
      101.0
    ], 
    "sanitation_urban_unimproved_shared": [
      187.02000000000001, 
      199.71000000000001, 
      212.86000000000001, 
      224.77000000000001, 
      230.69999999999999
    ], 
    "sanitation_rural_improved": [
      991.96000000000004, 
      1010.8099999999999, 
      1026.8900000000001, 
      1060.8199999999999, 
      1063.28
    ], 
    "water_total_improved_other": [
      763.0, 
      733.0, 
      689.0, 
      643.0, 
      633.0
    ], 
    "sanitation_total_improved": [
      1950.0, 
      2035.0, 
      2118.0, 
      2213.0, 
      2245.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      11.69, 
      24.960000000000001, 
      26.609999999999999, 
      28.100000000000001, 
      28.84
    ], 
    "sanitation_total_unimproved_opendefecation": [
      12.0, 
      0.0, 
      0.0, 
      13.0, 
      13.0
    ], 
    "sanitation_rural_unimproved_shared": [
      143.41999999999999, 
      146.13999999999999, 
      148.47, 
      151.55000000000001, 
      151.90000000000001
    ], 
    "population_urban": [
      1168.8499999999999, 
      1248.1800000000001, 
      1330.3599999999999, 
      1404.8, 
      1441.8599999999999
    ], 
    "water_total_improved_piped": [
      1434.0, 
      1562.0, 
      1704.0, 
      1845.0, 
      1907.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      11.69, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1145.0, 
      1223.0, 
      1304.0, 
      1377.0, 
      1413.0
    ], 
    "sanitation_total_unimproved_total": [
      413.99000000000001, 
      431.01999999999998, 
      449.57999999999998, 
      454.68000000000001, 
      462.66000000000003
    ], 
    "sanitation_rural_unimproved_other": [
      59.759999999999998, 
      60.890000000000001, 
      61.859999999999999, 
      37.890000000000001, 
      37.969999999999999
    ], 
    "water_total_improved_total": [
      2197.0, 
      2295.0, 
      2393.0, 
      2488.0, 
      2540.0
    ], 
    "population_rural": [
      1195.1400000000001, 
      1217.8499999999999, 
      1237.21, 
      1262.8800000000001, 
      1265.8
    ], 
    "sanitation_total_unimproved_shared": [
      330.0, 
      346.0, 
      361.0, 
      377.0, 
      383.0
    ], 
    "water_urban_unimproved": [
      24.0, 
      25.0, 
      26.0, 
      28.0, 
      29.0
    ], 
    "sanitation_urban_unimproved_total": [
      210.38999999999999, 
      224.66999999999999, 
      239.46000000000001, 
      252.86000000000001, 
      259.52999999999997
    ], 
    "water_rural_improved_other": [
      658.0, 
      621.0, 
      582.0, 
      530.0, 
      532.0
    ], 
    "water_total_unimproved": [
      167.0, 
      171.0, 
      174.0, 
      180.0, 
      168.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      12.630000000000001, 
      12.66
    ], 
    "population_total": [
      2363.9899999999998, 
      2466.02, 
      2567.5799999999999, 
      2667.6799999999998, 
      2707.6599999999999
    ], 
    "sanitation_rural_unimproved_total": [
      203.18000000000001, 
      207.03999999999999, 
      210.31999999999999, 
      202.06, 
      202.52000000000001
    ], 
    "water_rural_improved_piped": [
      394.0, 
      451.0, 
      507.0, 
      581.0, 
      595.0
    ], 
    "sanitation_total_unimproved_other": [
      72.0, 
      86.0, 
      89.0, 
      66.0, 
      67.0
    ], 
    "sanitation_urban_improved": [
      958.46000000000004, 
      1023.51, 
      1090.9000000000001, 
      1151.9400000000001, 
      1182.3299999999999
    ], 
    "water_urban_improved_piped": [
      1040.0, 
      1111.0, 
      1197.0, 
      1264.0, 
      1312.0
    ]
  }, 
  "Oman": {
    "water_rural_unimproved": [
      175.0, 
      172.0, 
      178.0, 
      179.0, 
      182.0
    ], 
    "water_rural_improved_total": [
      450.0, 
      443.0, 
      505.0, 
      567.0, 
      610.0
    ], 
    "water_urban_improved_other": [
      670.0, 
      809.0, 
      705.0, 
      580.0, 
      478.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      381.08999999999997, 
      375.32999999999998, 
      416.61000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      1083.0, 
      1209.0, 
      1135.0, 
      1035.0, 
      945.0
    ], 
    "sanitation_total_improved": [
      1563.0, 
      1885.0, 
      2085.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      12.18, 
      15.57, 
      17.190000000000001, 
      56.140000000000001, 
      59.810000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      224.0, 
      228.0, 
      253.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      1218.26, 
      1556.53, 
      1719.22, 
      1871.3599999999999, 
      1993.54
    ], 
    "water_total_improved_piped": [
      390.0, 
      541.0, 
      866.0, 
      1216.0, 
      1499.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      24.370000000000001, 
      31.129999999999999, 
      34.380000000000003, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      1023.0, 
      1307.0, 
      1496.0, 
      1684.0, 
      1834.0
    ], 
    "sanitation_total_unimproved_total": [
      280.0, 
      286.82999999999998, 
      317.18000000000001, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      43.729999999999997, 
      43.07, 
      47.810000000000002, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      1473.0, 
      1750.0, 
      2001.0, 
      2251.0, 
      2444.0
    ], 
    "population_rural": [
      624.74000000000001, 
      615.29999999999995, 
      682.97000000000003, 
      746.48000000000002, 
      791.82000000000005
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      195.0, 
      250.0, 
      223.0, 
      187.0, 
      160.0
    ], 
    "sanitation_urban_unimproved_total": [
      36.549999999999997, 
      46.700000000000003, 
      51.579999999999998, 
      56.140000000000001, 
      59.810000000000002
    ], 
    "water_rural_improved_other": [
      413.0, 
      400.0, 
      430.0, 
      455.0, 
      467.0
    ], 
    "water_total_unimproved": [
      370.0, 
      422.0, 
      401.0, 
      366.0, 
      342.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      199.91999999999999, 
      196.90000000000001, 
      218.55000000000001, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      1843.0, 
      2171.8299999999999, 
      2402.1799999999998, 
      2617.8299999999999, 
      2785.3600000000001
    ], 
    "sanitation_rural_unimproved_total": [
      243.65000000000001, 
      239.97, 
      266.36000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      37.0, 
      43.0, 
      75.0, 
      112.0, 
      143.0
    ], 
    "sanitation_total_unimproved_other": [
      56.0, 
      59.0, 
      65.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      1181.71, 
      1509.8299999999999, 
      1667.6400000000001, 
      1815.22, 
      1933.73
    ], 
    "water_urban_improved_piped": [
      353.0, 
      498.0, 
      791.0, 
      1104.0, 
      1356.0
    ]
  }, 
  "Martinique": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      4.0, 
      4.0, 
      4.0, 
      4.0, 
      4.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      25.309999999999999, 
      22.600000000000001, 
      19.5, 
      19.760000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      350.50999999999999, 
      361.54000000000002, 
      376.69999999999999, 
      389.91000000000003, 
      395.26999999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      351.0, 
      362.0, 
      377.0, 
      390.0, 
      395.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      8.5899999999999999, 
      8.4399999999999995, 
      8.3599999999999994, 
      8.2200000000000006, 
      8.0700000000000003
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      25.309999999999999, 
      22.600000000000001, 
      19.5, 
      19.760000000000002
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      359.10000000000002, 
      369.97000000000003, 
      385.06999999999999, 
      398.13, 
      403.33999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      336.23000000000002, 
      354.10000000000002, 
      370.41000000000003, 
      375.50999999999999
    ], 
    "water_urban_improved_piped": [
      347.0, 
      358.0, 
      373.0, 
      386.0, 
      391.0
    ]
  }, 
  "Seychelles": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      2.0699999999999998, 
      1.3100000000000001, 
      0.93999999999999995
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      35.490000000000002, 
      37.729999999999997, 
      41.420000000000002, 
      43.700000000000003, 
      47.100000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.40999999999999998, 
      0.44, 
      0.46999999999999997
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      35.0, 
      41.0, 
      47.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      36.520000000000003, 
      37.960000000000001, 
      39.710000000000001, 
      38.939999999999998, 
      36.729999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      6.0, 
      3.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      2.4900000000000002, 
      1.75, 
      1.4099999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      72.010000000000005, 
      75.700000000000003, 
      81.129999999999995, 
      82.629999999999995, 
      83.829999999999998
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      38.93, 
      41.950000000000003, 
      45.689999999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      35.0, 
      41.0, 
      47.0
    ]
  }, 
  "French Guiana": {
    "water_rural_unimproved": [
      -1.0, 
      10.0, 
      12.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      25.0, 
      29.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      5.0, 
      6.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      19.93, 
      23.460000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      7.0, 
      8.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      108.0, 
      128.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      15.56, 
      18.600000000000001, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      86.719999999999999, 
      103.76000000000001, 
      124.01000000000001, 
      152.66999999999999, 
      167.30000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      109.0, 
      130.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      91.0, 
      109.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      30.719999999999999, 
      37.159999999999997, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      15.029999999999999, 
      17.699999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      116.0, 
      138.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      29.66, 
      34.960000000000001, 
      41.149999999999999, 
      49.32, 
      52.799999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      13.0, 
      15.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      15.57, 
      18.600000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      2.0, 
      2.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      23.0, 
      27.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      116.37, 
      138.72, 
      165.16, 
      201.99000000000001, 
      220.09999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      15.029999999999999, 
      17.690000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      23.0, 
      27.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      31.0, 
      37.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      88.189999999999998, 
      105.41, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      86.0, 
      103.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Niue": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1.5900000000000001, 
      1.45, 
      1.25, 
      1.04, 
      0.91000000000000003
    ], 
    "water_urban_improved_other": [
      0.70999999999999996, 
      0.67000000000000004, 
      0.64000000000000001, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1.5900000000000001, 
      1.45, 
      1.25, 
      1.04, 
      0.91000000000000003
    ], 
    "water_total_improved_other": [
      2.2999999999999998, 
      2.1200000000000001, 
      0.89000000000000001, 
      1.6399999999999999, 
      1.52
    ], 
    "sanitation_total_improved": [
      2.2999999999999998, 
      2.1200000000000001, 
      1.8899999999999999, 
      1.6399999999999999, 
      1.52
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      0.70999999999999996, 
      0.67000000000000004, 
      0.64000000000000001, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      0.70999999999999996, 
      0.67000000000000004, 
      0.64000000000000001, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "sanitation_total_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      2.2999999999999998, 
      2.1200000000000001, 
      1.8899999999999999, 
      1.6399999999999999, 
      1.52
    ], 
    "population_rural": [
      1.5900000000000001, 
      1.45, 
      1.25, 
      1.04, 
      0.91000000000000003
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      1.5900000000000001, 
      1.45, 
      0.25, 
      0.0, 
      0.91000000000000003
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      2.2999999999999998, 
      2.1200000000000001, 
      1.8899999999999999, 
      1.6399999999999999, 
      1.52
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      0.0, 
      1.0, 
      1.04, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      0.70999999999999996, 
      0.67000000000000004, 
      0.64000000000000001, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Finland": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1924.0, 
      1973.0, 
      2011.0, 
      1974.0, 
      1948.0
    ], 
    "water_urban_improved_other": [
      123.0, 
      63.0, 
      31.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1923.52, 
      1972.8900000000001, 
      2011.1500000000001, 
      1973.5999999999999, 
      1947.96
    ], 
    "water_total_improved_other": [
      412.0, 
      300.0, 
      192.0, 
      158.0, 
      1948.0
    ], 
    "sanitation_total_improved": [
      4987.0, 
      5108.0, 
      5173.0, 
      5245.0, 
      5305.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3062.9200000000001, 
      3134.9099999999999, 
      3162.2199999999998, 
      3270.7399999999998, 
      3356.5100000000002
    ], 
    "water_total_improved_piped": [
      4575.0, 
      4808.0, 
      4981.0, 
      5087.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      3063.0, 
      3135.0, 
      3162.0, 
      3271.0, 
      3357.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.56000000000000005, 
      -0.20000000000000001, 
      0.37, 
      -0.66000000000000003, 
      -0.54000000000000004
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      4987.0, 
      5108.0, 
      5173.0, 
      5245.0, 
      5305.0
    ], 
    "population_rural": [
      1923.52, 
      1972.8900000000001, 
      2011.1500000000001, 
      1973.5999999999999, 
      1947.96
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      289.0, 
      237.0, 
      161.0, 
      158.0, 
      1948.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4986.4399999999996, 
      5107.8000000000002, 
      5173.3699999999999, 
      5244.3400000000001, 
      5304.46
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      1635.0, 
      1736.0, 
      1850.0, 
      1816.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      3062.9200000000001, 
      3134.9099999999999, 
      3162.2199999999998, 
      3270.7399999999998, 
      3356.5100000000002
    ], 
    "water_urban_improved_piped": [
      2940.0, 
      3072.0, 
      3131.0, 
      3271.0, 
      3357.0
    ]
  }, 
  "Monaco": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      29.23, 
      30.620000000000001, 
      32.0, 
      32.450000000000003, 
      32.719999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      29.0, 
      31.0, 
      32.0, 
      32.0, 
      33.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      29.23, 
      30.620000000000001, 
      32.0, 
      32.450000000000003, 
      32.719999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      29.23, 
      30.620000000000001, 
      32.0, 
      32.450000000000003, 
      32.719999999999999
    ], 
    "water_urban_improved_piped": [
      29.0, 
      31.0, 
      32.0, 
      32.0, 
      33.0
    ]
  }, 
  "New Zealand": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      517.0, 
      541.0, 
      554.0, 
      567.0, 
      569.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      454.58999999999997, 
      475.66000000000003, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2869.0300000000002, 
      3144.8000000000002, 
      3314.1599999999999, 
      3543.6500000000001, 
      3660.6500000000001
    ], 
    "water_total_improved_piped": [
      3386.0, 
      3686.0, 
      3868.0, 
      4111.0, 
      4230.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      2869.0, 
      3145.0, 
      3314.0, 
      3544.0, 
      3661.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      61.990000000000002, 
      64.859999999999999, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      3386.0, 
      3686.0, 
      3868.0, 
      4111.0, 
      4230.0
    ], 
    "population_rural": [
      516.58000000000004, 
      540.52999999999997, 
      554.03999999999996, 
      566.92999999999995, 
      569.36000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      3385.6100000000001, 
      3685.3200000000002, 
      3868.1999999999998, 
      4110.5799999999999, 
      4230.0100000000002
    ], 
    "sanitation_rural_unimproved_total": [
      61.990000000000002, 
      64.870000000000005, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      517.0, 
      541.0, 
      554.0, 
      567.0, 
      569.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      2869.0, 
      3145.0, 
      3314.0, 
      3544.0, 
      3661.0
    ]
  }, 
  "Yemen": {
    "water_rural_unimproved": [
      -1.0, 
      4734.0, 
      5496.0, 
      6275.0, 
      6836.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      7101.0, 
      7910.0, 
      8665.0, 
      9062.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      701.0, 
      907.0, 
      1035.0, 
      1263.0
    ], 
    "sanitation_urban_unimproved_shared": [
      25.77, 
      36.880000000000003, 
      95.519999999999996, 
      121.67, 
      140.38999999999999
    ], 
    "sanitation_rural_improved": [
      584.16999999999996, 
      1656.8599999999999, 
      2815.25, 
      4332.6800000000003, 
      5246.29
    ], 
    "water_total_improved_other": [
      -1.0, 
      5198.0, 
      6136.0, 
      7011.0, 
      7622.0
    ], 
    "sanitation_total_improved": [
      2234.0, 
      4349.0, 
      6683.0, 
      9747.0, 
      11844.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      747.42999999999995, 
      774.52999999999997, 
      620.85000000000002, 
      304.17000000000002, 
      70.200000000000003
    ], 
    "sanitation_total_unimproved_opendefecation": [
      5413.0, 
      5983.0, 
      5956.0, 
      5920.0, 
      5775.0
    ], 
    "sanitation_rural_unimproved_shared": [
      97.359999999999999, 
      118.34999999999999, 
      268.12, 
      448.20999999999998, 
      476.94
    ], 
    "population_urban": [
      2577.3600000000001, 
      3688.2600000000002, 
      4775.8000000000002, 
      6083.4200000000001, 
      7019.6300000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      5149.0, 
      5690.0, 
      6217.0, 
      6494.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      154.63999999999999, 
      184.41, 
      191.03, 
      243.34, 
      210.59
    ], 
    "water_urban_improved_total": [
      -1.0, 
      3246.0, 
      3916.0, 
      4563.0, 
      5054.0
    ], 
    "sanitation_total_unimproved_total": [
      10079.58, 
      11173.959999999999, 
      11498.73, 
      11276.690000000001, 
      11073.49
    ], 
    "sanitation_rural_unimproved_other": [
      3797.1300000000001, 
      4260.4899999999998, 
      4558.0200000000004, 
      4482.0799999999999, 
      4610.3800000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      10347.0, 
      11826.0, 
      13228.0, 
      14116.0
    ], 
    "population_rural": [
      9736.2199999999993, 
      11834.700000000001, 
      13405.940000000001, 
      14940.280000000001, 
      15897.860000000001
    ], 
    "sanitation_total_unimproved_shared": [
      123.0, 
      155.0, 
      364.0, 
      570.0, 
      617.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      442.0, 
      860.0, 
      1520.0, 
      1966.0
    ], 
    "sanitation_urban_unimproved_total": [
      927.85000000000002, 
      995.83000000000004, 
      907.40999999999997, 
      669.17999999999995, 
      421.18000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      4497.0, 
      5229.0, 
      5976.0, 
      6359.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      5176.0, 
      6356.0, 
      7795.0, 
      8802.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      5257.5600000000004, 
      5799.0, 
      5764.5500000000002, 
      5677.3000000000002, 
      5564.25
    ], 
    "population_total": [
      12313.58, 
      15522.959999999999, 
      18181.73, 
      21023.689999999999, 
      22917.490000000002
    ], 
    "sanitation_rural_unimproved_total": [
      9152.0499999999993, 
      10177.84, 
      10590.690000000001, 
      10607.6, 
      10651.57
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      2604.0, 
      2681.0, 
      2689.0, 
      2703.0
    ], 
    "sanitation_total_unimproved_other": [
      4544.0, 
      5035.0, 
      5179.0, 
      4786.0, 
      4680.0
    ], 
    "sanitation_urban_improved": [
      1649.51, 
      2692.4299999999998, 
      3868.3899999999999, 
      5414.2399999999998, 
      6598.4499999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      2545.0, 
      3009.0, 
      3528.0, 
      3791.0
    ]
  }, 
  "Andorra": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      3.0, 
      4.0, 
      5.0, 
      7.0, 
      8.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      2.7599999999999998, 
      4.25, 
      5.0800000000000001, 
      7.4800000000000004, 
      8.2200000000000006
    ], 
    "water_total_improved_other": [
      3.0, 
      4.0, 
      5.0, 
      7.0, 
      8.0
    ], 
    "sanitation_total_improved": [
      53.0, 
      64.0, 
      66.0, 
      79.0, 
      84.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      50.020000000000003, 
      60.450000000000003, 
      61.340000000000003, 
      72.290000000000006, 
      76.189999999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      50.0, 
      60.0, 
      61.0, 
      72.0, 
      76.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.22, 
      0.69999999999999996, 
      0.41999999999999998, 
      0.78000000000000003, 
      0.40999999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      53.0, 
      64.0, 
      66.0, 
      79.0, 
      84.0
    ], 
    "population_rural": [
      2.7599999999999998, 
      4.25, 
      5.0800000000000001, 
      7.4800000000000004, 
      8.2200000000000006
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      3.0, 
      4.0, 
      5.0, 
      7.0, 
      8.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      52.780000000000001, 
      64.700000000000003, 
      66.420000000000002, 
      79.780000000000001, 
      84.409999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      50.020000000000003, 
      60.450000000000003, 
      61.340000000000003, 
      72.290000000000006, 
      76.189999999999998
    ], 
    "water_urban_improved_piped": [
      50.0, 
      60.0, 
      61.0, 
      72.0, 
      76.0
    ]
  }, 
  "Albania": {
    "water_rural_unimproved": [
      -1.0, 
      114.0, 
      89.0, 
      52.0, 
      34.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1800.0, 
      1698.0, 
      1665.0, 
      1642.0
    ], 
    "water_urban_improved_other": [
      24.0, 
      24.0, 
      38.0, 
      70.0, 
      73.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      24.390000000000001, 
      25.609999999999999, 
      27.879999999999999, 
      29.359999999999999
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      1550.6500000000001, 
      1519.0599999999999, 
      1648.0599999999999, 
      1641.99
    ], 
    "water_total_improved_other": [
      -1.0, 
      1192.0, 
      968.0, 
      585.0, 
      341.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      2734.0, 
      2761.0, 
      3000.0, 
      3080.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      12.19, 
      12.800000000000001, 
      13.94, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      19.140000000000001, 
      17.870000000000001, 
      17.170000000000002, 
      16.760000000000002
    ], 
    "population_urban": [
      1198.29, 
      1219.3800000000001, 
      1280.4300000000001, 
      1393.8499999999999, 
      1467.79
    ], 
    "water_total_improved_piped": [
      -1.0, 
      1827.0, 
      2010.0, 
      2446.0, 
      2710.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      1198.0, 
      1219.0, 
      1280.0, 
      1366.0, 
      1409.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      399.75999999999999, 
      306.56, 
      110.58, 
      63.299999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      344.58999999999997, 
      250.19999999999999, 
      51.5, 
      16.760000000000002
    ], 
    "water_total_improved_total": [
      -1.0, 
      3019.0, 
      2978.0, 
      3031.0, 
      3051.0
    ], 
    "population_rural": [
      2091.1900000000001, 
      1914.3800000000001, 
      1787.1300000000001, 
      1716.73, 
      1675.51
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      43.0, 
      44.0, 
      45.0, 
      46.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      28.0, 
      59.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      36.579999999999998, 
      38.409999999999997, 
      41.82, 
      29.350000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1168.0, 
      930.0, 
      515.0, 
      268.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      114.0, 
      89.0, 
      80.0, 
      93.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      3289.48, 
      3133.7600000000002, 
      3067.5599999999999, 
      3110.5799999999999, 
      3143.3000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      363.73000000000002, 
      268.06999999999999, 
      68.670000000000002, 
      33.520000000000003
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      632.0, 
      768.0, 
      1150.0, 
      1374.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      357.0, 
      263.0, 
      66.0, 
      17.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      1182.8, 
      1242.02, 
      1352.03, 
      1438.4400000000001
    ], 
    "water_urban_improved_piped": [
      1174.0, 
      1195.0, 
      1242.0, 
      1296.0, 
      1336.0
    ]
  }, 
  "Samoa": {
    "water_rural_unimproved": [
      14.0, 
      16.0, 
      17.0, 
      18.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      113.0, 
      116.0, 
      121.0, 
      121.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      34.0, 
      8.0, 
      7.0, 
      6.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      124.59, 
      130.80000000000001, 
      137.91, 
      138.86000000000001, 
      137.83000000000001
    ], 
    "water_total_improved_other": [
      147.0, 
      55.0, 
      56.0, 
      55.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      159.0, 
      167.0, 
      177.0, 
      179.0, 
      179.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      34.200000000000003, 
      36.159999999999997, 
      38.649999999999999, 
      40.109999999999999, 
      41.039999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      96.0, 
      101.0, 
      102.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      34.0, 
      35.0, 
      36.0, 
      36.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      2.3300000000000001, 
      1.29, 
      -0.44, 
      -0.029999999999999999, 
      -0.13
    ], 
    "sanitation_rural_unimproved_other": [
      2.54, 
      1.3200000000000001, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      147.0, 
      151.0, 
      157.0, 
      157.0, 
      -1.0
    ], 
    "population_rural": [
      127.13, 
      132.12, 
      137.91, 
      138.86000000000001, 
      137.83000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      1.0, 
      3.0, 
      4.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      113.0, 
      47.0, 
      49.0, 
      49.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      14.0, 
      17.0, 
      20.0, 
      22.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      161.33000000000001, 
      168.28999999999999, 
      176.56, 
      178.97, 
      178.87
    ], 
    "sanitation_rural_unimproved_total": [
      2.54, 
      1.3200000000000001, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      69.0, 
      72.0, 
      72.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      3.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      34.200000000000003, 
      36.159999999999997, 
      38.649999999999999, 
      40.109999999999999, 
      41.039999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      27.0, 
      29.0, 
      30.0, 
      -1.0
    ]
  }, 
  "United Arab Emirates": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      391.0, 
      526.0, 
      718.0, 
      911.0, 
      993.0
    ], 
    "water_urban_improved_other": [
      1476.0, 
      1905.0, 
      504.0, 
      636.0, 
      698.0
    ], 
    "sanitation_urban_unimproved_shared": [
      29.530000000000001, 
      38.109999999999999, 
      50.399999999999999, 
      63.549999999999997, 
      69.840000000000003
    ], 
    "sanitation_rural_improved": [
      371.19, 
      499.74000000000001, 
      682.28999999999996, 
      865.78999999999996, 
      943.26999999999998
    ], 
    "water_total_improved_other": [
      1867.0, 
      2431.0, 
      719.0, 
      909.0, 
      996.0
    ], 
    "sanitation_total_improved": [
      1818.0, 
      2367.0, 
      3151.0, 
      3980.0, 
      4365.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      19.539999999999999, 
      26.300000000000001, 
      35.909999999999997, 
      45.57, 
      49.649999999999999
    ], 
    "population_urban": [
      1476.3599999999999, 
      1905.5, 
      2519.8499999999999, 
      3177.6700000000001, 
      3492.02
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      2519.0, 
      3180.0, 
      3489.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1476.0, 
      1905.0, 
      2520.0, 
      3178.0, 
      3492.0
    ], 
    "sanitation_total_unimproved_total": [
      49.079999999999998, 
      64.530000000000001, 
      87.049999999999997, 
      109.03, 
      119.93000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      1867.0, 
      2431.0, 
      3238.0, 
      4089.0, 
      4485.0
    ], 
    "population_rural": [
      390.72000000000003, 
      526.03999999999996, 
      718.20000000000005, 
      911.36000000000001, 
      992.91999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      50.0, 
      64.0, 
      86.0, 
      110.0, 
      120.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      29.530000000000001, 
      38.109999999999999, 
      50.390000000000001, 
      63.549999999999997, 
      69.849999999999994
    ], 
    "water_rural_improved_other": [
      391.0, 
      526.0, 
      215.0, 
      273.0, 
      298.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      1867.0799999999999, 
      2431.5300000000002, 
      3238.0500000000002, 
      4089.0300000000002, 
      4484.9300000000003
    ], 
    "sanitation_rural_unimproved_total": [
      19.530000000000001, 
      26.300000000000001, 
      35.909999999999997, 
      45.57, 
      49.649999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      503.0, 
      638.0, 
      695.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      1446.8299999999999, 
      1867.3900000000001, 
      2469.46, 
      3114.1199999999999, 
      3422.1700000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      2016.0, 
      2542.0, 
      2794.0
    ]
  }, 
  "Guam": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      12.0, 
      12.0, 
      11.0, 
      12.0, 
      12.0
    ], 
    "water_urban_improved_other": [
      122.0, 
      134.0, 
      144.0, 
      157.0, 
      163.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      12.08, 
      11.33, 
      10.49, 
      11.390000000000001, 
      11.82
    ], 
    "water_total_improved_other": [
      134.0, 
      146.0, 
      155.0, 
      169.0, 
      175.0
    ], 
    "sanitation_total_improved": [
      132.0, 
      144.0, 
      153.0, 
      166.0, 
      174.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      1.22, 
      1.3400000000000001, 
      1.4399999999999999, 
      1.5700000000000001, 
      1.6299999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      121.59, 
      133.99000000000001, 
      144.44999999999999, 
      156.94, 
      163.49000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      122.0, 
      134.0, 
      144.0, 
      157.0, 
      163.0
    ], 
    "sanitation_total_unimproved_total": [
      1.9099999999999999, 
      1.5600000000000001, 
      2.1499999999999999, 
      2.5699999999999998, 
      1.55
    ], 
    "sanitation_rural_unimproved_other": [
      0.25, 
      0.23000000000000001, 
      0.20999999999999999, 
      0.23000000000000001, 
      0.23999999999999999
    ], 
    "water_total_improved_total": [
      134.0, 
      146.0, 
      155.0, 
      169.0, 
      175.0
    ], 
    "population_rural": [
      12.33, 
      11.57, 
      10.699999999999999, 
      11.630000000000001, 
      12.06
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      1.22, 
      1.3400000000000001, 
      1.4399999999999999, 
      1.5700000000000001, 
      1.6299999999999999
    ], 
    "water_rural_improved_other": [
      12.0, 
      12.0, 
      11.0, 
      12.0, 
      12.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      133.91, 
      145.56, 
      155.15000000000001, 
      168.56999999999999, 
      175.55000000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.25, 
      0.23999999999999999, 
      0.20999999999999999, 
      0.23999999999999999, 
      0.23999999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      1.0, 
      1.0, 
      1.0, 
      2.0, 
      2.0
    ], 
    "sanitation_urban_improved": [
      120.37, 
      132.65000000000001, 
      143.00999999999999, 
      155.37, 
      161.86000000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "India": {
    "water_rural_unimproved": [
      218248.0, 
      202906.0, 
      180997.0, 
      153167.0, 
      133332.0
    ], 
    "water_rural_improved_total": [
      423657.0, 
      496771.0, 
      573160.0, 
      652975.0, 
      699989.0
    ], 
    "water_urban_improved_other": [
      83698.0, 
      101388.0, 
      124026.0, 
      149259.0, 
      167084.0
    ], 
    "sanitation_urban_unimproved_shared": [
      41848.720000000001, 
      48159.419999999998, 
      57686.5, 
      64895.199999999997, 
      73099.149999999994
    ], 
    "sanitation_rural_improved": [
      44933.360000000001, 
      69967.729999999996, 
      105582.03999999999, 
      145105.51999999999, 
      174997.35000000001
    ], 
    "water_total_improved_other": [
      456003.0, 
      542185.0, 
      629312.0, 
      713558.0, 
      775408.0
    ], 
    "sanitation_total_improved": [
      152859.0, 
      196703.0, 
      255567.0, 
      320323.0, 
      362966.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      8810.2600000000002, 
      15208.24, 
      17305.950000000001, 
      19468.560000000001, 
      24366.380000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      639387.0, 
      658094.0, 
      659239.0, 
      653378.0, 
      637647.0
    ], 
    "sanitation_rural_unimproved_shared": [
      6419.0500000000002, 
      13993.549999999999, 
      22624.720000000001, 
      32245.669999999998, 
      33332.830000000002
    ], 
    "population_urban": [
      220256.42000000001, 
      253470.60999999999, 
      288432.48999999999, 
      324475.98999999999, 
      348091.21000000002
    ], 
    "water_total_improved_piped": [
      165885.0, 
      185244.0, 
      212090.0, 
      247669.0, 
      258749.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      61671.800000000003, 
      63367.650000000001, 
      63455.150000000001, 
      64895.199999999997, 
      62656.419999999998
    ], 
    "water_urban_improved_total": [
      198231.0, 
      230658.0, 
      268242.0, 
      308252.0, 
      334168.0
    ], 
    "sanitation_total_unimproved_total": [
      709302.56999999995, 
      756444.87, 
      787022.89000000001, 
      810294.76000000001, 
      818445.91000000003
    ], 
    "sanitation_rural_unimproved_other": [
      12838.1, 
      20990.32, 
      30166.299999999999, 
      40307.089999999997, 
      49999.239999999998
    ], 
    "water_total_improved_total": [
      621888.0, 
      727429.0, 
      841402.0, 
      961227.0, 
      1034157.0
    ], 
    "population_rural": [
      641905.16000000003, 
      699677.26000000001, 
      754157.40000000002, 
      806141.77000000002, 
      833320.70999999996
    ], 
    "sanitation_total_unimproved_shared": [
      48268.0, 
      62153.0, 
      80311.0, 
      97141.0, 
      106432.0
    ], 
    "water_urban_unimproved": [
      22025.0, 
      22813.0, 
      20190.0, 
      16224.0, 
      13923.0
    ], 
    "sanitation_urban_unimproved_total": [
      112330.78, 
      126735.3, 
      138447.59, 
      149258.95999999999, 
      160121.95999999999
    ], 
    "water_rural_improved_other": [
      372305.0, 
      440797.0, 
      505286.0, 
      564299.0, 
      608324.0
    ], 
    "water_total_unimproved": [
      240273.0, 
      225719.0, 
      201187.0, 
      169391.0, 
      147255.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      577714.64000000001, 
      594725.67000000004, 
      595784.33999999997, 
      588483.48999999999, 
      574991.29000000004
    ], 
    "population_total": [
      862161.56999999995, 
      953147.87, 
      1042589.89, 
      1130617.76, 
      1181411.9099999999
    ], 
    "sanitation_rural_unimproved_total": [
      596971.80000000005, 
      629709.53000000003, 
      648575.35999999999, 
      661036.25, 
      658323.35999999999
    ], 
    "water_rural_improved_piped": [
      51352.0, 
      55974.0, 
      67874.0, 
      88676.0, 
      91665.0
    ], 
    "sanitation_total_unimproved_other": [
      21648.0, 
      36198.0, 
      47472.0, 
      59776.0, 
      74365.0
    ], 
    "sanitation_urban_improved": [
      107925.64, 
      126735.31, 
      149984.89999999999, 
      175217.03, 
      187969.25
    ], 
    "water_urban_improved_piped": [
      114533.0, 
      129270.0, 
      144216.0, 
      158993.0, 
      167084.0
    ]
  }, 
  "Azerbaijan": {
    "water_rural_unimproved": [
      1701.0, 
      1786.0, 
      1625.0, 
      1393.0, 
      1218.0
    ], 
    "water_rural_improved_total": [
      1634.0, 
      1934.0, 
      2339.0, 
      2704.0, 
      2984.0
    ], 
    "water_urban_improved_other": [
      814.0, 
      772.0, 
      665.0, 
      522.0, 
      453.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      325.08999999999997, 
      332.63, 
      304.92000000000002, 
      271.69
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      744.03999999999996, 
      951.25999999999999, 
      1392.9400000000001, 
      1638.95
    ], 
    "water_total_improved_other": [
      1881.0, 
      2074.0, 
      2291.0, 
      2448.0, 
      2597.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      3426.0, 
      3570.0, 
      3789.0, 
      3948.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      1056.54, 
      1205.77, 
      1611.73, 
      1856.52
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      372.0, 
      595.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      37.200000000000003, 
      39.640000000000001, 
      40.969999999999999, 
      42.020000000000003
    ], 
    "population_urban": [
      3876.21, 
      4063.5999999999999, 
      4157.8400000000001, 
      4356.04, 
      4528.0900000000001
    ], 
    "water_total_improved_piped": [
      3164.0, 
      3436.0, 
      3707.0, 
      4089.0, 
      4372.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      43.560000000000002, 
      90.560000000000002
    ], 
    "water_urban_improved_total": [
      3411.0, 
      3576.0, 
      3659.0, 
      3833.0, 
      3985.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      4357.7799999999997, 
      4551.4099999999999, 
      4663.9099999999999, 
      4782.5299999999997
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      2938.9400000000001, 
      2972.6799999999998, 
      2335.2199999999998, 
      2017.1700000000001
    ], 
    "water_total_improved_total": [
      5045.0, 
      5510.0, 
      5998.0, 
      6537.0, 
      6969.0
    ], 
    "population_rural": [
      3335.48, 
      3720.1799999999998, 
      3963.5700000000002, 
      4096.8699999999999, 
      4202.4399999999996
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      362.0, 
      373.0, 
      346.0, 
      314.0
    ], 
    "water_urban_unimproved": [
      465.0, 
      488.0, 
      499.0, 
      523.0, 
      543.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      1381.6199999999999, 
      1538.4000000000001, 
      1960.22, 
      2218.7600000000002
    ], 
    "water_rural_improved_other": [
      1067.0, 
      1302.0, 
      1626.0, 
      1926.0, 
      2144.0
    ], 
    "water_total_unimproved": [
      2166.0, 
      2274.0, 
      2124.0, 
      1916.0, 
      1761.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      327.75, 
      504.29000000000002
    ], 
    "population_total": [
      7211.6899999999996, 
      7783.7799999999997, 
      8121.4099999999999, 
      8452.9099999999999, 
      8730.5300000000007
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      2976.1399999999999, 
      3012.3099999999999, 
      2703.9299999999998, 
      2563.4899999999998
    ], 
    "water_rural_improved_piped": [
      567.0, 
      632.0, 
      713.0, 
      778.0, 
      840.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      3996.0, 
      4179.0, 
      3947.0, 
      3874.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      2681.98, 
      2619.4400000000001, 
      2395.8200000000002, 
      2309.3299999999999
    ], 
    "water_urban_improved_piped": [
      2597.0, 
      2804.0, 
      2994.0, 
      3311.0, 
      3532.0
    ]
  }, 
  "Lesotho": {
    "water_rural_unimproved": [
      593.0, 
      587.0, 
      468.0, 
      322.0, 
      291.0
    ], 
    "water_rural_improved_total": [
      786.0, 
      846.0, 
      1043.0, 
      1209.0, 
      1238.0
    ], 
    "water_urban_improved_other": [
      154.0, 
      196.0, 
      200.0, 
      186.0, 
      198.0
    ], 
    "sanitation_urban_unimproved_shared": [
      55.950000000000003, 
      76.069999999999993, 
      113.15000000000001, 
      157.88999999999999, 
      182.31999999999999
    ], 
    "sanitation_rural_improved": [
      441.13, 
      444.26999999999998, 
      423.18000000000001, 
      382.69, 
      382.13
    ], 
    "water_total_improved_other": [
      926.0, 
      1013.0, 
      1198.0, 
      1318.0, 
      1360.0
    ], 
    "sanitation_total_improved": [
      506.0, 
      532.0, 
      555.0, 
      564.0, 
      590.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      82.810000000000002, 
      102.41, 
      101.84, 
      88.230000000000004, 
      88.549999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      723.0, 
      757.0, 
      801.0, 
      818.0, 
      822.0
    ], 
    "sanitation_rural_unimproved_shared": [
      55.140000000000001, 
      57.32, 
      60.450000000000003, 
      45.920000000000002, 
      45.859999999999999
    ], 
    "population_urban": [
      223.80000000000001, 
      292.58999999999997, 
      377.18000000000001, 
      464.38999999999999, 
      520.89999999999998
    ], 
    "water_total_improved_piped": [
      57.0, 
      93.0, 
      192.0, 
      337.0, 
      383.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      20.140000000000001, 
      26.329999999999998, 
      30.170000000000002, 
      37.149999999999999, 
      41.670000000000002
    ], 
    "water_urban_improved_total": [
      197.0, 
      260.0, 
      347.0, 
      446.0, 
      505.0
    ], 
    "sanitation_total_unimproved_total": [
      1096.3399999999999, 
      1193.71, 
      1333.52, 
      1431.1600000000001, 
      1459.4300000000001
    ], 
    "sanitation_rural_unimproved_other": [
      179.21000000000001, 
      200.63999999999999, 
      256.93000000000001, 
      321.45999999999998, 
      320.99000000000001
    ], 
    "water_total_improved_total": [
      983.0, 
      1106.0, 
      1390.0, 
      1655.0, 
      1743.0
    ], 
    "population_rural": [
      1378.54, 
      1433.1099999999999, 
      1511.3499999999999, 
      1530.77, 
      1528.53
    ], 
    "sanitation_total_unimproved_shared": [
      111.0, 
      133.0, 
      173.0, 
      204.0, 
      228.0
    ], 
    "water_urban_unimproved": [
      27.0, 
      33.0, 
      30.0, 
      18.0, 
      16.0
    ], 
    "sanitation_urban_unimproved_total": [
      158.90000000000001, 
      204.81, 
      245.16999999999999, 
      283.27999999999997, 
      312.54000000000002
    ], 
    "water_rural_improved_other": [
      772.0, 
      817.0, 
      998.0, 
      1132.0, 
      1162.0
    ], 
    "water_total_unimproved": [
      620.0, 
      620.0, 
      498.0, 
      340.0, 
      307.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      703.04999999999995, 
      730.88999999999999, 
      770.78999999999996, 
      780.69000000000005, 
      779.54999999999995
    ], 
    "population_total": [
      1602.3399999999999, 
      1725.71, 
      1888.52, 
      1995.1600000000001, 
      2049.4299999999998
    ], 
    "sanitation_rural_unimproved_total": [
      937.40999999999997, 
      988.84000000000003, 
      1088.1700000000001, 
      1148.0799999999999, 
      1146.4000000000001
    ], 
    "water_rural_improved_piped": [
      14.0, 
      29.0, 
      45.0, 
      77.0, 
      76.0
    ], 
    "sanitation_total_unimproved_other": [
      262.0, 
      303.0, 
      359.0, 
      409.0, 
      410.0
    ], 
    "sanitation_urban_improved": [
      64.900000000000006, 
      87.780000000000001, 
      132.00999999999999, 
      181.11000000000001, 
      208.36000000000001
    ], 
    "water_urban_improved_piped": [
      43.0, 
      64.0, 
      147.0, 
      260.0, 
      307.0
    ]
  }, 
  "Saint Vincent and the Grenadines": {
    "water_rural_unimproved": [
      -1.0, 
      5.0, 
      4.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      57.0, 
      56.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      61.229999999999997, 
      59.079999999999998, 
      57.530000000000001, 
      56.43, 
      55.520000000000003
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      43.649999999999999, 
      46.509999999999998, 
      47.93, 
      49.93, 
      51.280000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      2.5499999999999998, 
      2.46, 
      2.3999999999999999, 
      2.3500000000000001, 
      2.3100000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      63.780000000000001, 
      61.539999999999999, 
      59.93, 
      58.780000000000001, 
      57.840000000000003
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      12.0, 
      12.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      107.42, 
      108.06, 
      107.86, 
      108.72, 
      109.12
    ], 
    "sanitation_rural_unimproved_total": [
      2.5499999999999998, 
      2.46, 
      2.3999999999999999, 
      2.3500000000000001, 
      2.3199999999999998
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      45.0, 
      44.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Kenya": {
    "water_rural_unimproved": [
      13031.0, 
      13812.0, 
      14385.0, 
      14761.0, 
      14597.0
    ], 
    "water_rural_improved_total": [
      6132.0, 
      8466.0, 
      10852.0, 
      13626.0, 
      15814.0
    ], 
    "water_urban_improved_other": [
      1452.0, 
      1878.0, 
      2357.0, 
      2897.0, 
      3258.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1921.72, 
      2450.6500000000001, 
      2977.8600000000001, 
      3714.7399999999998, 
      4260.6999999999998
    ], 
    "sanitation_rural_improved": [
      5173.9799999999996, 
      6237.8199999999997, 
      7571.0299999999997, 
      8800.0699999999997, 
      9731.5200000000004
    ], 
    "water_total_improved_other": [
      5668.0, 
      7893.0, 
      10433.0, 
      13117.0, 
      15423.0
    ], 
    "sanitation_total_improved": [
      6199.0, 
      7542.0, 
      9184.0, 
      10806.0, 
      11988.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      1195.74, 
      1303.54, 
      1426.8900000000001, 
      1560.1900000000001, 
      1670.8599999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      3386.0, 
      3943.0, 
      4729.0, 
      5259.0, 
      5641.0
    ], 
    "sanitation_rural_unimproved_shared": [
      2874.4299999999998, 
      3564.4699999999998, 
      4037.8800000000001, 
      4825.8400000000001, 
      5473.9799999999996
    ], 
    "population_urban": [
      4270.5, 
      5214.1499999999996, 
      6203.8699999999999, 
      7429.4799999999996, 
      8354.3099999999995
    ], 
    "water_total_improved_piped": [
      4350.0, 
      5214.0, 
      5816.0, 
      6824.0, 
      7325.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      128.11000000000001, 
      156.41999999999999, 
      186.12, 
      148.59, 
      167.09
    ], 
    "water_urban_improved_total": [
      3886.0, 
      4641.0, 
      5397.0, 
      6315.0, 
      6934.0
    ], 
    "sanitation_total_unimproved_total": [
      17234.369999999999, 
      19950.080000000002, 
      22256.639999999999, 
      25010.779999999999, 
      26777.310000000001
    ], 
    "sanitation_rural_unimproved_other": [
      7856.7799999999997, 
      8688.3899999999994, 
      9085.2399999999998, 
      9651.6800000000003, 
      9731.5200000000004
    ], 
    "water_total_improved_total": [
      10018.0, 
      13107.0, 
      16249.0, 
      19941.0, 
      22748.0
    ], 
    "population_rural": [
      19162.869999999999, 
      22277.939999999999, 
      25236.77, 
      28387.310000000001, 
      30411.0
    ], 
    "sanitation_total_unimproved_shared": [
      4796.0, 
      6015.0, 
      7016.0, 
      8541.0, 
      9735.0
    ], 
    "water_urban_unimproved": [
      384.0, 
      573.0, 
      807.0, 
      1114.0, 
      1420.0
    ], 
    "sanitation_urban_unimproved_total": [
      3245.5799999999999, 
      3910.6100000000001, 
      4590.8599999999997, 
      5423.5200000000004, 
      6098.6499999999996
    ], 
    "water_rural_improved_other": [
      4216.0, 
      6015.0, 
      8076.0, 
      10220.0, 
      12165.0
    ], 
    "water_total_unimproved": [
      13415.0, 
      14385.0, 
      15192.0, 
      15875.0, 
      16017.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      3257.6900000000001, 
      3787.25, 
      4542.6199999999999, 
      5109.7200000000003, 
      5473.9799999999996
    ], 
    "population_total": [
      23433.369999999999, 
      27492.080000000002, 
      31440.639999999999, 
      35816.779999999999, 
      38765.309999999998
    ], 
    "sanitation_rural_unimproved_total": [
      13988.889999999999, 
      16040.120000000001, 
      17665.740000000002, 
      19587.240000000002, 
      20679.48
    ], 
    "water_rural_improved_piped": [
      1916.0, 
      2451.0, 
      2776.0, 
      3406.0, 
      3649.0
    ], 
    "sanitation_total_unimproved_other": [
      9053.0, 
      9992.0, 
      10512.0, 
      11212.0, 
      11403.0
    ], 
    "sanitation_urban_improved": [
      1024.9200000000001, 
      1303.54, 
      1613.01, 
      2005.96, 
      2255.6599999999999
    ], 
    "water_urban_improved_piped": [
      2434.0, 
      2763.0, 
      3040.0, 
      3418.0, 
      3676.0
    ]
  }, 
  "Tajikistan": {
    "water_rural_unimproved": [
      -1.0, 
      2259.0, 
      2314.0, 
      2068.0, 
      1962.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1848.0, 
      2223.0, 
      2742.0, 
      3069.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      251.0, 
      229.0, 
      207.0, 
      199.0
    ], 
    "sanitation_urban_unimproved_shared": [
      67.159999999999997, 
      66.75, 
      65.430000000000007, 
      69.019999999999996, 
      72.209999999999994
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      3572.8800000000001, 
      4038.0, 
      4425.3400000000001, 
      4729.0900000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      1360.0, 
      1545.0, 
      1843.0, 
      2010.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      5125.0, 
      5576.0, 
      6064.0, 
      6444.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      50.369999999999997, 
      50.060000000000002, 
      32.719999999999999, 
      17.25, 
      18.050000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      82.0, 
      91.0, 
      48.0, 
      50.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      123.2, 
      136.11000000000001, 
      144.30000000000001, 
      150.93000000000001
    ], 
    "population_urban": [
      1679.0799999999999, 
      1668.71, 
      1635.8199999999999, 
      1725.3800000000001, 
      1805.1400000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      2007.0, 
      2183.0, 
      2504.0, 
      2756.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      1519.0, 
      1505.0, 
      1605.0, 
      1697.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      650.47000000000003, 
      596.88999999999999, 
      471.54000000000002, 
      392.07999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      328.54000000000002, 
      272.22000000000003, 
      192.41, 
      100.62
    ], 
    "water_total_improved_total": [
      -1.0, 
      3367.0, 
      3728.0, 
      4347.0, 
      4766.0
    ], 
    "population_rural": [
      3624.0700000000002, 
      4106.7600000000002, 
      4537.0799999999999, 
      4810.1599999999999, 
      5030.9499999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      190.0, 
      201.0, 
      213.0, 
      223.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      150.0, 
      131.0, 
      120.0, 
      108.0
    ], 
    "sanitation_urban_unimproved_total": [
      117.53, 
      116.81, 
      98.150000000000006, 
      86.269999999999996, 
      90.260000000000005
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1109.0, 
      1316.0, 
      1636.0, 
      1811.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      2409.0, 
      2445.0, 
      2188.0, 
      2070.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      82.140000000000001, 
      90.739999999999995, 
      48.100000000000001, 
      50.310000000000002
    ], 
    "population_total": [
      5303.1499999999996, 
      5775.4700000000003, 
      6172.8900000000003, 
      6535.54, 
      6836.0799999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      533.88, 
      499.07999999999998, 
      384.81999999999999, 
      301.86000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      739.0, 
      907.0, 
      1106.0, 
      1258.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      379.0, 
      305.0, 
      209.0, 
      119.0
    ], 
    "sanitation_urban_improved": [
      1561.55, 
      1551.9000000000001, 
      1537.6700000000001, 
      1639.1099999999999, 
      1714.8800000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1268.0, 
      1276.0, 
      1398.0, 
      1498.0
    ]
  }, 
  "C\u00f4te d'Ivoire": {
    "water_rural_unimproved": [
      2508.0, 
      2898.0, 
      3220.0, 
      3376.0, 
      3372.0
    ], 
    "water_rural_improved_total": [
      5091.0, 
      5885.0, 
      6537.0, 
      6855.0, 
      7165.0
    ], 
    "water_urban_improved_other": [
      2054.0, 
      2293.0, 
      2484.0, 
      2523.0, 
      2614.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1252.8599999999999, 
      1487.49, 
      1805.8900000000001, 
      2163.25, 
      2412.9400000000001
    ], 
    "sanitation_rural_improved": [
      607.89999999999998, 
      790.47000000000003, 
      975.70000000000005, 
      1125.45, 
      1159.1099999999999
    ], 
    "water_total_improved_other": [
      6765.0, 
      7475.0, 
      8045.0, 
      8048.0, 
      8304.0
    ], 
    "sanitation_total_improved": [
      2512.0, 
      3145.0, 
      3760.0, 
      4460.0, 
      4778.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      1553.55, 
      1983.3199999999999, 
      2483.0900000000001, 
      3064.5999999999999, 
      3518.8699999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      4556.0, 
      5115.0, 
      5525.0, 
      5567.0, 
      5561.0
    ], 
    "sanitation_rural_unimproved_shared": [
      607.89999999999998, 
      790.47000000000003, 
      975.70000000000005, 
      1125.45, 
      1264.49
    ], 
    "population_urban": [
      5011.4399999999996, 
      6197.8800000000001, 
      7524.5299999999997, 
      9013.5300000000007, 
      10053.91
    ], 
    "water_total_improved_piped": [
      2836.0, 
      4050.0, 
      5415.0, 
      7099.0, 
      8211.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      300.69, 
      371.87, 
      451.47000000000003, 
      450.68000000000001, 
      502.69999999999999
    ], 
    "water_urban_improved_total": [
      4510.0, 
      5640.0, 
      6923.0, 
      8292.0, 
      9350.0
    ], 
    "sanitation_total_unimproved_total": [
      10098.25, 
      11835.85, 
      13521.48, 
      14784.870000000001, 
      15813.299999999999
    ], 
    "sanitation_rural_unimproved_other": [
      2127.6700000000001, 
      2459.23, 
      2731.9499999999998, 
      2864.7800000000002, 
      3055.8400000000001
    ], 
    "water_total_improved_total": [
      9601.0, 
      11525.0, 
      13460.0, 
      15147.0, 
      16515.0
    ], 
    "population_rural": [
      7598.8100000000004, 
      8782.9799999999996, 
      9756.9500000000007, 
      10231.34, 
      10537.389999999999
    ], 
    "sanitation_total_unimproved_shared": [
      1861.0, 
      2277.0, 
      2782.0, 
      3288.0, 
      3677.0
    ], 
    "water_urban_unimproved": [
      501.0, 
      558.0, 
      602.0, 
      722.0, 
      704.0
    ], 
    "sanitation_urban_unimproved_total": [
      3107.0900000000001, 
      3842.6900000000001, 
      4740.4499999999998, 
      5678.5299999999997, 
      6434.5
    ], 
    "water_rural_improved_other": [
      4711.0, 
      5182.0, 
      5561.0, 
      5525.0, 
      5690.0
    ], 
    "water_total_unimproved": [
      3009.0, 
      3456.0, 
      3822.0, 
      4098.0, 
      4076.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      4255.3299999999999, 
      4742.8100000000004, 
      5073.6099999999997, 
      5115.6700000000001, 
      5057.9499999999998
    ], 
    "population_total": [
      12610.25, 
      14980.85, 
      17281.48, 
      19244.869999999999, 
      20591.299999999999
    ], 
    "sanitation_rural_unimproved_total": [
      6990.9099999999999, 
      7992.5100000000002, 
      8781.25, 
      9105.8899999999994, 
      9378.2800000000007
    ], 
    "water_rural_improved_piped": [
      380.0, 
      703.0, 
      976.0, 
      1330.0, 
      1475.0
    ], 
    "sanitation_total_unimproved_other": [
      3682.0, 
      4442.0, 
      5215.0, 
      5930.0, 
      6575.0
    ], 
    "sanitation_urban_improved": [
      1904.3499999999999, 
      2355.1900000000001, 
      2784.0799999999999, 
      3335.0, 
      3619.4099999999999
    ], 
    "water_urban_improved_piped": [
      2456.0, 
      3347.0, 
      4439.0, 
      5769.0, 
      6736.0
    ]
  }, 
  "Turkey": {
    "water_rural_unimproved": [
      6178.0, 
      4868.0, 
      3515.0, 
      1863.0, 
      924.0
    ], 
    "water_rural_improved_total": [
      16703.0, 
      18315.0, 
      19918.0, 
      21420.0, 
      22196.0
    ], 
    "water_urban_improved_other": [
      996.0, 
      761.0, 
      861.0, 
      957.0, 
      1016.0
    ], 
    "sanitation_urban_unimproved_shared": [
      332.05000000000001, 
      380.23000000000002, 
      860.52999999999997, 
      957.72000000000003, 
      1015.88
    ], 
    "sanitation_rural_improved": [
      15101.780000000001, 
      15764.459999999999, 
      16637.419999999998, 
      16996.549999999999, 
      17340.290000000001
    ], 
    "water_total_improved_other": [
      5343.0, 
      4471.0, 
      3439.0, 
      2586.0, 
      1941.0
    ], 
    "sanitation_total_improved": [
      46979.0, 
      52266.0, 
      57943.0, 
      63447.0, 
      66610.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      996.13999999999999, 
      1140.6900000000001, 
      860.52999999999997, 
      478.86000000000001, 
      507.94
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1144.0, 
      927.0, 
      703.0, 
      466.0, 
      231.0
    ], 
    "sanitation_rural_unimproved_shared": [
      457.63, 
      463.66000000000003, 
      702.99000000000001, 
      698.49000000000001, 
      693.61000000000001
    ], 
    "population_urban": [
      33204.699999999997, 
      38023.07, 
      43026.599999999999, 
      47886.089999999997, 
      50793.879999999997
    ], 
    "water_total_improved_piped": [
      42572.0, 
      49966.0, 
      58215.0, 
      66241.0, 
      71049.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      31212.0, 
      36122.0, 
      41736.0, 
      47407.0, 
      50794.0
    ], 
    "sanitation_total_unimproved_total": [
      9107.1800000000003, 
      8940.1000000000004, 
      8516.5799999999999, 
      7722.04, 
      7304.2600000000002
    ], 
    "sanitation_rural_unimproved_other": [
      6178.0, 
      6027.5900000000001, 
      5389.5900000000001, 
      5122.25, 
      4855.2799999999997
    ], 
    "water_total_improved_total": [
      47915.0, 
      54437.0, 
      61654.0, 
      68827.0, 
      72990.0
    ], 
    "population_rural": [
      22881.48, 
      23183.029999999999, 
      23432.98, 
      23282.950000000001, 
      23120.380000000001
    ], 
    "sanitation_total_unimproved_shared": [
      790.0, 
      844.0, 
      1564.0, 
      1656.0, 
      1710.0
    ], 
    "water_urban_unimproved": [
      1993.0, 
      1901.0, 
      1291.0, 
      479.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      1328.1800000000001, 
      1520.9300000000001, 
      1721.0699999999999, 
      1436.5899999999999, 
      1523.8199999999999
    ], 
    "water_rural_improved_other": [
      4347.0, 
      3710.0, 
      2578.0, 
      1629.0, 
      925.0
    ], 
    "water_total_unimproved": [
      8171.0, 
      6769.0, 
      4806.0, 
      2342.0, 
      924.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1144.0699999999999, 
      927.32000000000005, 
      702.99000000000001, 
      465.66000000000003, 
      231.19999999999999
    ], 
    "population_total": [
      56086.18, 
      61206.099999999999, 
      66459.580000000002, 
      71169.039999999994, 
      73914.259999999995
    ], 
    "sanitation_rural_unimproved_total": [
      7779.6999999999998, 
      7418.5699999999997, 
      6795.5600000000004, 
      6286.3999999999996, 
      5780.0900000000001
    ], 
    "water_rural_improved_piped": [
      12356.0, 
      14605.0, 
      17340.0, 
      19791.0, 
      21271.0
    ], 
    "sanitation_total_unimproved_other": [
      7174.0, 
      7169.0, 
      6251.0, 
      5601.0, 
      5363.0
    ], 
    "sanitation_urban_improved": [
      31876.52, 
      36502.139999999999, 
      41305.529999999999, 
      46449.5, 
      49270.059999999998
    ], 
    "water_urban_improved_piped": [
      30216.0, 
      35361.0, 
      40875.0, 
      46450.0, 
      49778.0
    ]
  }, 
  "Afghanistan": {
    "water_rural_unimproved": [
      -1.0, 
      14366.0, 
      13417.0, 
      12660.0, 
      12615.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      145.0, 
      2748.0, 
      6235.0, 
      8066.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      215.0, 
      1136.0, 
      2918.0, 
      4047.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      3917.9499999999998, 
      4526.3100000000004, 
      5479.5600000000004, 
      6204.2299999999996
    ], 
    "water_total_improved_other": [
      -1.0, 
      360.0, 
      3884.0, 
      9153.0, 
      12113.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      5204.0, 
      6536.0, 
      8623.0, 
      10121.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      1643.49, 
      1879.28, 
      2244.73, 
      2480.4699999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      6447.0, 
      5654.0, 
      4759.0, 
      4267.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2304.23, 
      3572.8099999999999, 
      4370.4300000000003, 
      5611.8199999999997, 
      6527.5500000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      214.0, 
      437.0, 
      786.0, 
      1044.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      643.11000000000001, 
      480.75, 
      224.47, 
      130.55000000000001
    ], 
    "water_urban_improved_total": [
      -1.0, 
      429.0, 
      1573.0, 
      3704.0, 
      5091.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      12879.75, 
      13999.809999999999, 
      15883.84, 
      17087.330000000002
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      4788.6099999999997, 
      6466.1499999999996, 
      8880.6599999999999, 
      10340.389999999999
    ], 
    "water_total_improved_total": [
      -1.0, 
      574.0, 
      4321.0, 
      9939.0, 
      13157.0
    ], 
    "population_rural": [
      10276.18, 
      14510.940000000001, 
      16165.379999999999, 
      18895.02, 
      20680.779999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      3144.0, 
      2797.0, 
      1908.0, 
      1437.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      2286.5999999999999, 
      2360.0300000000002, 
      2469.1999999999998, 
      2611.02
    ], 
    "water_rural_improved_other": [
      -1.0, 
      145.0, 
      2748.0, 
      6235.0, 
      8066.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      17510.0, 
      16214.0, 
      14568.0, 
      14052.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      5804.3800000000001, 
      5172.9200000000001, 
      4534.8000000000002, 
      4136.1599999999999
    ], 
    "population_total": [
      12580.41, 
      18083.75, 
      20535.810000000001, 
      24506.84, 
      27208.330000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      10592.99, 
      11639.07, 
      13415.459999999999, 
      14476.549999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      6432.0, 
      8345.0, 
      11126.0, 
      12820.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      1286.21, 
      2010.4000000000001, 
      3142.6199999999999, 
      3916.5300000000002
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      214.0, 
      437.0, 
      786.0, 
      1044.0
    ]
  }, 
  "Bangladesh": {
    "water_rural_unimproved": [
      22254.0, 
      24073.0, 
      24739.0, 
      25039.0, 
      25671.0
    ], 
    "water_rural_improved_total": [
      70470.0, 
      76228.0, 
      82821.0, 
      88774.0, 
      91017.0
    ], 
    "water_urban_improved_other": [
      13745.0, 
      16672.0, 
      19924.0, 
      23586.0, 
      26420.0
    ], 
    "sanitation_urban_unimproved_shared": [
      6185.1300000000001, 
      7502.1599999999999, 
      8633.7999999999993, 
      10220.469999999999, 
      11261.129999999999
    ], 
    "sanitation_rural_improved": [
      31526.25, 
      37111.239999999998, 
      46250.800000000003, 
      54630.019999999997, 
      60677.809999999998
    ], 
    "water_total_improved_other": [
      84215.0, 
      92900.0, 
      102745.0, 
      112360.0, 
      117437.0
    ], 
    "sanitation_total_improved": [
      45042.0, 
      53227.0, 
      65179.0, 
      77036.0, 
      84933.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      1603.55, 
      2500.7199999999998, 
      3984.8299999999999, 
      5110.2299999999996, 
      6496.8100000000004
    ], 
    "sanitation_total_unimproved_opendefecation": [
      38694.0, 
      35769.0, 
      27474.0, 
      17506.0, 
      10634.0
    ], 
    "sanitation_rural_unimproved_shared": [
      14835.879999999999, 
      17051.110000000001, 
      21512.0, 
      25038.759999999998, 
      28005.139999999999
    ], 
    "population_urban": [
      22907.889999999999, 
      27785.790000000001, 
      33206.910000000003, 
      39309.489999999998, 
      43312.040000000001
    ], 
    "water_total_improved_piped": [
      6414.0, 
      7502.0, 
      8634.0, 
      9827.0, 
      10395.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      1603.55, 
      1667.1500000000001, 
      1660.3499999999999, 
      1572.3800000000001, 
      1299.3599999999999
    ], 
    "water_urban_improved_total": [
      20159.0, 
      24174.0, 
      28558.0, 
      33413.0, 
      36815.0
    ], 
    "sanitation_total_unimproved_total": [
      70590.149999999994, 
      74859.440000000002, 
      75587.910000000003, 
      76086.039999999994, 
      75067.130000000005
    ], 
    "sanitation_rural_unimproved_other": [
      9272.4300000000003, 
      12036.08, 
      13982.799999999999, 
      18210.009999999998, 
      18670.099999999999
    ], 
    "water_total_improved_total": [
      90629.0, 
      100402.0, 
      111379.0, 
      122187.0, 
      127832.0
    ], 
    "population_rural": [
      92724.270000000004, 
      100300.64999999999, 
      107560.0, 
      113812.55, 
      116688.09
    ], 
    "sanitation_total_unimproved_shared": [
      21021.0, 
      24553.0, 
      30146.0, 
      35259.0, 
      39266.0
    ], 
    "water_urban_unimproved": [
      2749.0, 
      3612.0, 
      4649.0, 
      5896.0, 
      6497.0
    ], 
    "sanitation_urban_unimproved_total": [
      9392.2399999999998, 
      11670.030000000001, 
      14278.969999999999, 
      16903.080000000002, 
      19057.299999999999
    ], 
    "water_rural_improved_other": [
      70470.0, 
      76228.0, 
      82821.0, 
      88774.0, 
      91017.0
    ], 
    "water_total_unimproved": [
      25003.0, 
      27685.0, 
      29388.0, 
      30935.0, 
      32168.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      37089.709999999999, 
      34102.220000000001, 
      25814.400000000001, 
      15933.76, 
      9335.0499999999993
    ], 
    "population_total": [
      115632.14999999999, 
      128086.44, 
      140766.91, 
      153122.04000000001, 
      160000.13
    ], 
    "sanitation_rural_unimproved_total": [
      61198.019999999997, 
      63189.410000000003, 
      61309.199999999997, 
      59182.529999999999, 
      56010.279999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      10876.0, 
      14537.0, 
      17968.0, 
      23320.0, 
      25167.0
    ], 
    "sanitation_urban_improved": [
      13515.65, 
      16115.76, 
      18927.939999999999, 
      22406.41, 
      24254.740000000002
    ], 
    "water_urban_improved_piped": [
      6414.0, 
      7502.0, 
      8634.0, 
      9827.0, 
      10395.0
    ]
  }, 
  "Mauritania": {
    "water_rural_unimproved": [
      887.0, 
      929.0, 
      985.0, 
      1014.0, 
      1007.0
    ], 
    "water_rural_improved_total": [
      312.0, 
      437.0, 
      578.0, 
      765.0, 
      892.0
    ], 
    "water_urban_improved_other": [
      166.0, 
      181.0, 
      198.0, 
      217.0, 
      236.0
    ], 
    "sanitation_urban_unimproved_shared": [
      78.859999999999999, 
      99.439999999999998, 
      145.77000000000001, 
      192.96000000000001, 
      236.94
    ], 
    "sanitation_rural_improved": [
      95.939999999999998, 
      122.90000000000001, 
      140.63, 
      160.13, 
      170.88
    ], 
    "water_total_improved_other": [
      478.0, 
      563.0, 
      651.0, 
      786.0, 
      862.0
    ], 
    "sanitation_total_improved": [
      325.0, 
      403.0, 
      537.0, 
      703.0, 
      829.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      299.68000000000001, 
      325.43000000000001, 
      291.54000000000002, 
      265.31, 
      210.61000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      877.0, 
      1032.0, 
      1271.0, 
      1539.0, 
      1711.0
    ], 
    "sanitation_rural_unimproved_shared": [
      35.979999999999997, 
      40.969999999999999, 
      62.5, 
      71.170000000000002, 
      75.950000000000003
    ], 
    "population_urban": [
      788.63, 
      903.96000000000004, 
      1041.21, 
      1205.97, 
      1316.3399999999999
    ], 
    "water_total_improved_piped": [
      118.0, 
      245.0, 
      396.0, 
      570.0, 
      714.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      181.38, 
      198.87, 
      208.24000000000001, 
      205.02000000000001, 
      210.61000000000001
    ], 
    "water_urban_improved_total": [
      284.0, 
      371.0, 
      469.0, 
      591.0, 
      684.0
    ], 
    "sanitation_total_unimproved_total": [
      1662.9200000000001, 
      1866.55, 
      2066.7399999999998, 
      2282.2199999999998, 
      2386.04
    ], 
    "sanitation_rural_unimproved_other": [
      371.77999999999997, 
      368.70999999999998, 
      296.88, 
      213.50999999999999, 
      151.90000000000001
    ], 
    "water_total_improved_total": [
      596.0, 
      808.0, 
      1047.0, 
      1356.0, 
      1576.0
    ], 
    "population_rural": [
      1199.3, 
      1365.5899999999999, 
      1562.53, 
      1779.25, 
      1898.7
    ], 
    "sanitation_total_unimproved_shared": [
      115.0, 
      140.0, 
      209.0, 
      264.0, 
      313.0
    ], 
    "water_urban_unimproved": [
      505.0, 
      533.0, 
      572.0, 
      615.0, 
      632.0
    ], 
    "sanitation_urban_unimproved_total": [
      559.92999999999995, 
      623.73000000000002, 
      645.54999999999995, 
      663.27999999999997, 
      658.16999999999996
    ], 
    "water_rural_improved_other": [
      312.0, 
      382.0, 
      453.0, 
      569.0, 
      626.0
    ], 
    "water_total_unimproved": [
      1392.0, 
      1462.0, 
      1557.0, 
      1629.0, 
      1639.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      695.59000000000003, 
      833.00999999999999, 
      1062.52, 
      1334.4400000000001, 
      1499.98
    ], 
    "population_total": [
      1987.9200000000001, 
      2269.5500000000002, 
      2603.7399999999998, 
      2985.2199999999998, 
      3215.04
    ], 
    "sanitation_rural_unimproved_total": [
      1103.3599999999999, 
      1242.6900000000001, 
      1421.9000000000001, 
      1619.1199999999999, 
      1727.8199999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      55.0, 
      125.0, 
      196.0, 
      266.0
    ], 
    "sanitation_total_unimproved_other": [
      672.0, 
      694.0, 
      589.0, 
      479.0, 
      363.0
    ], 
    "sanitation_urban_improved": [
      228.69999999999999, 
      280.23000000000002, 
      395.66000000000003, 
      542.69000000000005, 
      658.16999999999996
    ], 
    "water_urban_improved_piped": [
      118.0, 
      190.0, 
      271.0, 
      374.0, 
      448.0
    ]
  }, 
  "Iran (Islamic Republic of)": {
    "water_rural_unimproved": [
      4211.0, 
      4205.0, 
      4071.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      20564.0, 
      20530.0, 
      19880.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      640.0, 
      749.0, 
      859.0, 
      947.0, 
      1004.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      19324.799999999999, 
      19293.34, 
      18681.959999999999, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      4109.0, 
      4212.0, 
      4213.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      46809.0, 
      51517.0, 
      55620.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      4474.0900000000001, 
      5245.7399999999998, 
      6013.2299999999996, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      31957.799999999999, 
      37469.589999999997, 
      42951.650000000001, 
      47366.480000000003, 
      50215.650000000001
    ], 
    "water_total_improved_piped": [
      47774.0, 
      53038.0, 
      57760.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      31319.0, 
      36720.0, 
      42093.0, 
      46419.0, 
      49211.0
    ], 
    "sanitation_total_unimproved_total": [
      9924.1800000000003, 
      10687.639999999999, 
      11282.879999999999, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      5450.5799999999999, 
      5441.71, 
      5269.2700000000004, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      51883.0, 
      57250.0, 
      61973.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      24775.380000000001, 
      24735.049999999999, 
      23951.23, 
      23398.41, 
      23096.150000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      639.0, 
      750.0, 
      859.0, 
      947.0, 
      1005.0
    ], 
    "sanitation_urban_unimproved_total": [
      4474.0900000000001, 
      5245.7399999999998, 
      6013.2299999999996, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      3469.0, 
      3463.0, 
      3354.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      4850.0, 
      4955.0, 
      4930.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      56733.18, 
      62204.639999999999, 
      66902.880000000005, 
      70764.899999999994, 
      73311.800000000003
    ], 
    "sanitation_rural_unimproved_total": [
      5450.5799999999999, 
      5441.71, 
      5269.2700000000004, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      17095.0, 
      17067.0, 
      16526.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      9925.0, 
      10688.0, 
      11282.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      27483.709999999999, 
      32223.849999999999, 
      36938.419999999998, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      30679.0, 
      35971.0, 
      41234.0, 
      45472.0, 
      48207.0
    ]
  }, 
  "Turks and Caicos Islands": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      7.0, 
      9.0, 
      11.0, 
      17.0, 
      17.0
    ], 
    "water_urban_improved_other": [
      5.0, 
      2.0, 
      2.0, 
      13.0, 
      15.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      8.1999999999999993, 
      10.02, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      12.0, 
      6.0, 
      7.0, 
      30.0, 
      32.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      14.0, 
      18.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.10000000000000001, 
      0.13, 
      0.16, 
      0.27000000000000002, 
      0.31
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      4.9199999999999999, 
      6.5999999999999996, 
      8.2100000000000009, 
      13.460000000000001, 
      15.32
    ], 
    "water_total_improved_piped": [
      -1.0, 
      10.0, 
      12.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      5.0, 
      7.0, 
      8.0, 
      13.0, 
      15.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      1.3300000000000001, 
      0.87, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.52000000000000002, 
      0.64000000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      12.0, 
      16.0, 
      19.0, 
      30.0, 
      32.0
    ], 
    "population_rural": [
      6.6200000000000001, 
      8.7300000000000004, 
      10.66, 
      17.07, 
      17.350000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.10000000000000001, 
      0.13, 
      0.17000000000000001, 
      0.27000000000000002, 
      0.31
    ], 
    "water_rural_improved_other": [
      7.0, 
      4.0, 
      5.0, 
      17.0, 
      17.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      11.539999999999999, 
      15.33, 
      18.870000000000001, 
      30.530000000000001, 
      32.659999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      0.53000000000000003, 
      0.64000000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      5.0, 
      6.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      1.0, 
      1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      4.8200000000000003, 
      6.4699999999999998, 
      8.0399999999999991, 
      13.19, 
      15.01
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      5.0, 
      6.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Saint Lucia": {
    "water_rural_unimproved": [
      2.0, 
      2.0, 
      2.0, 
      3.0, 
      2.0
    ], 
    "water_rural_improved_total": [
      96.0, 
      102.0, 
      111.0, 
      117.0, 
      121.0
    ], 
    "water_urban_improved_other": [
      40.0, 
      10.0, 
      10.0, 
      45.0, 
      46.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      92.239999999999995, 
      100.77, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      136.0, 
      34.0, 
      36.0, 
      162.0, 
      167.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      131.0, 
      140.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      4.79, 
      4.8300000000000001, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      40.619999999999997, 
      43.579999999999998, 
      43.939999999999998, 
      45.590000000000003, 
      47.280000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      111.0, 
      118.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      40.0, 
      43.0, 
      43.0, 
      45.0, 
      46.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      16.219999999999999, 
      17.16, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      11.4, 
      12.449999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      136.0, 
      145.0, 
      154.0, 
      162.0, 
      167.0
    ], 
    "population_rural": [
      97.780000000000001, 
      103.65000000000001, 
      113.22, 
      119.59999999999999, 
      123.13
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      4.7999999999999998, 
      4.8399999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      96.0, 
      24.0, 
      26.0, 
      117.0, 
      121.0
    ], 
    "water_total_unimproved": [
      3.0, 
      3.0, 
      3.0, 
      4.0, 
      3.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      138.38999999999999, 
      147.22, 
      157.16, 
      165.19999999999999, 
      170.41
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      11.41, 
      12.449999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      78.0, 
      85.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      16.0, 
      17.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      38.780000000000001, 
      39.100000000000001, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      33.0, 
      33.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "San Marino": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      21.77, 
      23.030000000000001, 
      25.190000000000001, 
      29.390000000000001, 
      29.41
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      2.3900000000000001, 
      2.6699999999999999, 
      1.76, 
      0.84999999999999998, 
      1.78
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      24.16, 
      25.699999999999999, 
      26.949999999999999, 
      30.239999999999998, 
      31.18
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Mongolia": {
    "water_rural_unimproved": [
      695.0, 
      705.0, 
      653.0, 
      607.0, 
      578.0
    ], 
    "water_rural_improved_total": [
      257.0, 
      275.0, 
      384.0, 
      497.0, 
      555.0
    ], 
    "water_urban_improved_other": [
      367.0, 
      412.0, 
      622.0, 
      853.0, 
      980.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      412.60000000000002, 
      432.56, 
      448.29000000000002, 
      467.42000000000002
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      245.11000000000001, 
      269.73000000000002, 
      331.10000000000002, 
      362.69
    ], 
    "water_total_improved_other": [
      624.0, 
      687.0, 
      996.0, 
      1328.0, 
      1512.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      1109.0, 
      1162.0, 
      1257.0, 
      1328.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      12.890000000000001, 
      27.039999999999999, 
      43.380000000000003, 
      30.16
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      382.0, 
      373.0, 
      349.0, 
      340.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      186.28999999999999, 
      207.49000000000001, 
      253.84999999999999, 
      272.01999999999998
    ], 
    "population_urban": [
      1263.9000000000001, 
      1289.3800000000001, 
      1351.76, 
      1446.1099999999999, 
      1507.8199999999999
    ], 
    "water_total_improved_piped": [
      657.0, 
      645.0, 
      578.0, 
      528.0, 
      506.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      28.920000000000002, 
      45.229999999999997
    ], 
    "water_urban_improved_total": [
      1024.0, 
      1057.0, 
      1190.0, 
      1359.0, 
      1463.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      1160.8299999999999, 
      1227.2, 
      1292.78, 
      1313.22
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      166.68000000000001, 
      186.74000000000001, 
      198.66, 
      204.00999999999999
    ], 
    "water_total_improved_total": [
      1281.0, 
      1332.0, 
      1574.0, 
      1856.0, 
      2018.0
    ], 
    "population_rural": [
      952.17999999999995, 
      980.45000000000005, 
      1037.4400000000001, 
      1103.6700000000001, 
      1133.4000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      599.0, 
      640.0, 
      702.0, 
      739.0
    ], 
    "water_urban_unimproved": [
      240.0, 
      232.0, 
      162.0, 
      87.0, 
      45.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      425.5, 
      459.60000000000002, 
      520.60000000000002, 
      542.82000000000005
    ], 
    "water_rural_improved_other": [
      257.0, 
      275.0, 
      374.0, 
      475.0, 
      532.0
    ], 
    "water_total_unimproved": [
      935.0, 
      937.0, 
      815.0, 
      694.0, 
      623.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      382.38, 
      373.48000000000002, 
      320.06999999999999, 
      294.68000000000001
    ], 
    "population_total": [
      2216.0799999999999, 
      2269.8299999999999, 
      2389.1999999999998, 
      2549.7800000000002, 
      2641.2199999999998
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      735.34000000000003, 
      767.71000000000004, 
      772.57000000000005, 
      770.71000000000004
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      10.0, 
      22.0, 
      23.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      180.0, 
      214.0, 
      242.0, 
      234.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      863.88, 
      892.15999999999997, 
      925.50999999999999, 
      965.0
    ], 
    "water_urban_improved_piped": [
      657.0, 
      645.0, 
      568.0, 
      506.0, 
      483.0
    ]
  }, 
  "France": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      14747.0, 
      14551.0, 
      14334.0, 
      14215.0, 
      14062.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      14747.09, 
      14550.9, 
      14334.42, 
      14214.85, 
      14061.700000000001
    ], 
    "water_total_improved_other": [
      737.0, 
      437.0, 
      143.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      56842.0, 
      58000.0, 
      59128.0, 
      61013.0, 
      62036.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      42094.919999999998, 
      43448.529999999999, 
      44793.660000000003, 
      46798.339999999997, 
      47974.300000000003
    ], 
    "water_total_improved_piped": [
      56105.0, 
      57563.0, 
      58985.0, 
      61013.0, 
      62036.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      42095.0, 
      43449.0, 
      44794.0, 
      46798.0, 
      47974.0
    ], 
    "sanitation_total_unimproved_total": [
      0.02, 
      -0.56999999999999995, 
      0.080000000000000002, 
      0.20000000000000001, 
      0.0
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      56842.0, 
      58000.0, 
      59128.0, 
      61013.0, 
      62036.0
    ], 
    "population_rural": [
      14747.09, 
      14550.9, 
      14334.42, 
      14214.85, 
      14061.700000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      737.0, 
      437.0, 
      143.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      56842.019999999997, 
      57999.43, 
      59128.080000000002, 
      61013.199999999997, 
      62036.0
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      14010.0, 
      14114.0, 
      14191.0, 
      14215.0, 
      14062.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      42094.919999999998, 
      43448.529999999999, 
      44793.660000000003, 
      46798.339999999997, 
      47974.300000000003
    ], 
    "water_urban_improved_piped": [
      42095.0, 
      43449.0, 
      44794.0, 
      46798.0, 
      47974.0
    ]
  }, 
  "Syrian Arab Republic": {
    "water_rural_unimproved": [
      1624.0, 
      1752.0, 
      1677.0, 
      1611.0, 
      1557.0
    ], 
    "water_rural_improved_total": [
      4872.0, 
      5545.0, 
      6310.0, 
      7340.0, 
      8174.0
    ], 
    "water_urban_improved_other": [
      186.0, 
      219.0, 
      171.0, 
      204.0, 
      115.0
    ], 
    "sanitation_urban_unimproved_shared": [
      248.97999999999999, 
      292.55000000000001, 
      340.94999999999999, 
      406.81, 
      459.82999999999998
    ], 
    "sanitation_rural_improved": [
      4677.4399999999996, 
      5326.5900000000001, 
      6549.4499999999998, 
      8056.0200000000004, 
      9244.7099999999991
    ], 
    "water_total_improved_other": [
      1745.0, 
      1970.0, 
      1769.0, 
      1547.0, 
      1380.0
    ], 
    "sanitation_total_improved": [
      10528.0, 
      12275.0, 
      14647.0, 
      17820.0, 
      20281.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      124.48999999999999, 
      73.140000000000001, 
      85.239999999999995, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1234.0, 
      1313.0, 
      799.0, 
      179.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      259.86000000000001, 
      291.87, 
      399.36000000000001, 
      447.56, 
      486.56
    ], 
    "population_urban": [
      6224.4700000000003, 
      7313.6499999999996, 
      8523.7299999999996, 
      10170.32, 
      11495.65
    ], 
    "water_total_improved_piped": [
      9102.0, 
      10596.0, 
      12639.0, 
      15455.0, 
      17600.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      5975.0, 
      7021.0, 
      8098.0, 
      9662.0, 
      10806.0
    ], 
    "sanitation_total_unimproved_total": [
      2192.9200000000001, 
      2335.3499999999999, 
      1863.8599999999999, 
      1301.45, 
      945.91999999999996
    ], 
    "sanitation_rural_unimproved_other": [
      324.81999999999999, 
      364.83999999999997, 
      239.61000000000001, 
      268.52999999999997, 
      0.0
    ], 
    "water_total_improved_total": [
      10847.0, 
      12566.0, 
      14408.0, 
      17002.0, 
      18980.0
    ], 
    "population_rural": [
      6496.4499999999998, 
      7296.6999999999998, 
      7987.1300000000001, 
      8951.1399999999994, 
      9731.2700000000004
    ], 
    "sanitation_total_unimproved_shared": [
      509.0, 
      585.0, 
      740.0, 
      855.0, 
      947.0
    ], 
    "water_urban_unimproved": [
      249.0, 
      293.0, 
      426.0, 
      508.0, 
      690.0
    ], 
    "sanitation_urban_unimproved_total": [
      373.47000000000003, 
      365.68000000000001, 
      426.18000000000001, 
      406.81, 
      459.82999999999998
    ], 
    "water_rural_improved_other": [
      1559.0, 
      1751.0, 
      1598.0, 
      1343.0, 
      1265.0
    ], 
    "water_total_unimproved": [
      1873.0, 
      2045.0, 
      2103.0, 
      2119.0, 
      2247.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1234.3199999999999, 
      1313.4100000000001, 
      798.71000000000004, 
      179.02000000000001, 
      0.0
    ], 
    "population_total": [
      12720.92, 
      14610.35, 
      16510.860000000001, 
      19121.450000000001, 
      21226.919999999998
    ], 
    "sanitation_rural_unimproved_total": [
      1819.01, 
      1970.1099999999999, 
      1437.6800000000001, 
      895.12, 
      486.56
    ], 
    "water_rural_improved_piped": [
      3313.0, 
      3794.0, 
      4712.0, 
      5997.0, 
      6909.0
    ], 
    "sanitation_total_unimproved_other": [
      449.0, 
      438.0, 
      325.0, 
      269.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      5851.0, 
      6947.9700000000003, 
      8097.5500000000002, 
      9763.5100000000002, 
      11035.82
    ], 
    "water_urban_improved_piped": [
      5789.0, 
      6802.0, 
      7927.0, 
      9458.0, 
      10691.0
    ]
  }, 
  "Rwanda": {
    "water_rural_unimproved": [
      2299.0, 
      1746.0, 
      2470.0, 
      2744.0, 
      3018.0
    ], 
    "water_rural_improved_total": [
      4464.0, 
      3243.0, 
      4392.0, 
      4671.0, 
      4925.0
    ], 
    "water_urban_improved_other": [
      248.0, 
      289.0, 
      691.0, 
      978.0, 
      1102.0
    ], 
    "sanitation_urban_unimproved_shared": [
      46.469999999999999, 
      63.170000000000002, 
      164.38999999999999, 
      268.11000000000001, 
      319.99000000000001
    ], 
    "sanitation_rural_improved": [
      1487.8699999999999, 
      1546.6600000000001, 
      2744.7399999999998, 
      3633.3499999999999, 
      4368.6300000000001
    ], 
    "water_total_improved_other": [
      4712.0, 
      3532.0, 
      5083.0, 
      5649.0, 
      5948.0
    ], 
    "sanitation_total_improved": [
      1624.0, 
      1723.0, 
      3216.0, 
      4374.0, 
      5258.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      193.63, 
      198.53999999999999, 
      438.38, 
      536.22000000000003, 
      551.09000000000003
    ], 
    "sanitation_total_unimproved_opendefecation": [
      485.0, 
      313.0, 
      365.0, 
      329.0, 
      256.0
    ], 
    "sanitation_rural_unimproved_shared": [
      135.25999999999999, 
      149.68000000000001, 
      274.47000000000003, 
      370.75, 
      476.57999999999998
    ], 
    "population_urban": [
      387.25999999999999, 
      451.23000000000002, 
      1095.95, 
      1577.1300000000001, 
      1777.72
    ], 
    "water_total_improved_piped": [
      124.0, 
      122.0, 
      241.0, 
      284.0, 
      346.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      11.619999999999999, 
      13.539999999999999, 
      21.920000000000002, 
      31.539999999999999, 
      17.780000000000001
    ], 
    "water_urban_improved_total": [
      372.0, 
      411.0, 
      932.0, 
      1262.0, 
      1369.0
    ], 
    "sanitation_total_unimproved_total": [
      5526.3000000000002, 
      3717.4400000000001, 
      4741.8000000000002, 
      4618.1400000000003, 
      4462.6899999999996
    ], 
    "sanitation_rural_unimproved_other": [
      4666.5, 
      2993.5300000000002, 
      3499.54, 
      3114.3000000000002, 
      2859.4699999999998
    ], 
    "water_total_improved_total": [
      4836.0, 
      3654.0, 
      5324.0, 
      5933.0, 
      6294.0
    ], 
    "population_rural": [
      6763.04, 
      4989.21, 
      6861.8500000000004, 
      7415.0100000000002, 
      7942.9700000000003
    ], 
    "sanitation_total_unimproved_shared": [
      181.0, 
      213.0, 
      438.0, 
      639.0, 
      797.0
    ], 
    "water_urban_unimproved": [
      15.0, 
      40.0, 
      164.0, 
      315.0, 
      409.0
    ], 
    "sanitation_urban_unimproved_total": [
      251.72, 
      275.25, 
      624.69000000000005, 
      835.88, 
      888.86000000000001
    ], 
    "water_rural_improved_other": [
      4464.0, 
      3243.0, 
      4392.0, 
      4671.0, 
      4846.0
    ], 
    "water_total_unimproved": [
      2314.0, 
      1786.0, 
      2634.0, 
      3059.0, 
      3427.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      473.41000000000003, 
      299.35000000000002, 
      343.08999999999997, 
      296.60000000000002, 
      238.28999999999999
    ], 
    "population_total": [
      7150.3000000000002, 
      5440.4399999999996, 
      7957.8000000000002, 
      8992.1399999999994, 
      9720.6900000000005
    ], 
    "sanitation_rural_unimproved_total": [
      5275.1700000000001, 
      3442.5500000000002, 
      4117.1099999999997, 
      3781.6599999999999, 
      3574.3400000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      79.0
    ], 
    "sanitation_total_unimproved_other": [
      4860.0, 
      3193.0, 
      3938.0, 
      3650.0, 
      3410.0
    ], 
    "sanitation_urban_improved": [
      135.53999999999999, 
      175.97999999999999, 
      471.25999999999999, 
      741.25, 
      888.86000000000001
    ], 
    "water_urban_improved_piped": [
      124.0, 
      122.0, 
      241.0, 
      284.0, 
      267.0
    ]
  }, 
  "Namibia": {
    "water_rural_unimproved": [
      502.0, 
      432.0, 
      346.0, 
      234.0, 
      161.0
    ], 
    "water_rural_improved_total": [
      523.0, 
      705.0, 
      888.0, 
      1070.0, 
      1185.0
    ], 
    "water_urban_improved_other": [
      67.0, 
      96.0, 
      130.0, 
      177.0, 
      212.0
    ], 
    "sanitation_urban_unimproved_shared": [
      70.530000000000001, 
      86.950000000000003, 
      100.38, 
      119.77, 
      133.19999999999999
    ], 
    "sanitation_rural_improved": [
      92.25, 
      125.09, 
      160.36000000000001, 
      195.66999999999999, 
      228.88
    ], 
    "water_total_improved_other": [
      446.0, 
      608.0, 
      759.0, 
      921.0, 
      1033.0
    ], 
    "sanitation_total_improved": [
      351.0, 
      434.0, 
      532.0, 
      626.0, 
      699.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      19.59, 
      24.149999999999999, 
      29.52, 
      35.229999999999997, 
      39.18
    ], 
    "sanitation_total_unimproved_opendefecation": [
      894.0, 
      973.0, 
      1039.0, 
      1085.0, 
      1124.0
    ], 
    "sanitation_rural_unimproved_shared": [
      20.5, 
      22.739999999999998, 
      37.009999999999998, 
      39.130000000000003, 
      53.850000000000001
    ], 
    "population_urban": [
      391.86000000000001, 
      483.02999999999997, 
      590.48000000000002, 
      704.54999999999995, 
      783.52999999999997
    ], 
    "water_total_improved_piped": [
      465.0, 
      575.0, 
      714.0, 
      847.0, 
      928.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      43.100000000000001, 
      62.789999999999999, 
      88.569999999999993, 
      119.77, 
      141.03999999999999
    ], 
    "water_urban_improved_total": [
      388.0, 
      478.0, 
      585.0, 
      698.0, 
      776.0
    ], 
    "sanitation_total_unimproved_total": [
      1065.9000000000001, 
      1186.21, 
      1292.0, 
      1383.03, 
      1430.8599999999999
    ], 
    "sanitation_rural_unimproved_other": [
      61.5, 
      79.599999999999994, 
      86.349999999999994, 
      104.36, 
      80.780000000000001
    ], 
    "water_total_improved_total": [
      911.0, 
      1183.0, 
      1473.0, 
      1768.0, 
      1961.0
    ], 
    "population_rural": [
      1025.04, 
      1137.1800000000001, 
      1233.51, 
      1304.48, 
      1346.3199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      92.0, 
      110.0, 
      137.0, 
      159.0, 
      187.0
    ], 
    "water_urban_unimproved": [
      4.0, 
      5.0, 
      5.0, 
      7.0, 
      8.0
    ], 
    "sanitation_urban_unimproved_total": [
      133.22999999999999, 
      173.88999999999999, 
      218.47999999999999, 
      274.77999999999997, 
      313.41000000000003
    ], 
    "water_rural_improved_other": [
      379.0, 
      512.0, 
      629.0, 
      744.0, 
      821.0
    ], 
    "water_total_unimproved": [
      506.0, 
      437.0, 
      351.0, 
      241.0, 
      169.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      850.77999999999997, 
      909.74000000000001, 
      949.80999999999995, 
      965.32000000000005, 
      982.82000000000005
    ], 
    "population_total": [
      1416.9000000000001, 
      1620.21, 
      1824.0, 
      2009.03, 
      2129.8600000000001
    ], 
    "sanitation_rural_unimproved_total": [
      932.78999999999996, 
      1012.09, 
      1073.1500000000001, 
      1108.8099999999999, 
      1117.4400000000001
    ], 
    "water_rural_improved_piped": [
      144.0, 
      193.0, 
      259.0, 
      326.0, 
      364.0
    ], 
    "sanitation_total_unimproved_other": [
      82.0, 
      104.0, 
      116.0, 
      139.0, 
      120.0
    ], 
    "sanitation_urban_improved": [
      258.63, 
      309.13999999999999, 
      372.0, 
      429.76999999999998, 
      470.12
    ], 
    "water_urban_improved_piped": [
      321.0, 
      382.0, 
      455.0, 
      521.0, 
      564.0
    ]
  }, 
  "Somalia": {
    "water_rural_unimproved": [
      -1.0, 
      3578.0, 
      4097.0, 
      4819.0, 
      5158.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      894.0, 
      839.0, 
      596.0, 
      510.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      390.0, 
      664.0, 
      559.0, 
      521.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      491.79000000000002, 
      639.16999999999996, 
      852.44000000000005, 
      977.49000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      536.59000000000003, 
      493.57999999999998, 
      379.01999999999998, 
      340.07999999999998
    ], 
    "water_total_improved_other": [
      -1.0, 
      1284.0, 
      1503.0, 
      1155.0, 
      1031.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      1398.0, 
      1600.0, 
      1849.0, 
      2034.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      327.86000000000001, 
      393.33999999999997, 
      440.92000000000002, 
      488.74000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      3410.0, 
      3874.0, 
      4508.0, 
      4802.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      491.87, 
      444.23000000000002, 
      379.01999999999998, 
      340.07999999999998
    ], 
    "population_urban": [
      1956.24, 
      2049.1300000000001, 
      2458.3499999999999, 
      2939.4400000000001, 
      3258.29
    ], 
    "water_total_improved_piped": [
      -1.0, 
      61.0, 
      221.0, 
      1146.0, 
      1662.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      368.83999999999997, 
      319.58999999999997, 
      176.37, 
      97.75
    ], 
    "water_urban_improved_total": [
      -1.0, 
      451.0, 
      885.0, 
      1705.0, 
      2183.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      5122.6999999999998, 
      5794.1999999999998, 
      6505.0, 
      6892.3299999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      402.44, 
      444.23000000000002, 
      324.87, 
      283.39999999999998
    ], 
    "water_total_improved_total": [
      -1.0, 
      1345.0, 
      1724.0, 
      2301.0, 
      2693.0
    ], 
    "population_rural": [
      4639.75, 
      4471.5699999999997, 
      4935.8500000000004, 
      5414.5600000000004, 
      5668.04
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      984.0, 
      1083.0, 
      1231.0, 
      1317.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      1598.0, 
      1573.0, 
      1234.0, 
      1075.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      1188.5, 
      1352.0899999999999, 
      1469.72, 
      1563.98
    ], 
    "water_rural_improved_other": [
      -1.0, 
      894.0, 
      839.0, 
      596.0, 
      510.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      5176.0, 
      5670.0, 
      6053.0, 
      6233.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      3040.6700000000001, 
      3553.8099999999999, 
      4331.6499999999996, 
      4704.4700000000003
    ], 
    "population_total": [
      6595.9899999999998, 
      6520.6999999999998, 
      7394.1999999999998, 
      8354.0, 
      8926.3299999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      3934.98, 
      4442.2700000000004, 
      5035.54, 
      5327.96
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      730.0, 
      837.0, 
      766.0, 
      772.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      860.63, 
      1106.26, 
      1469.72, 
      1694.3099999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      61.0, 
      221.0, 
      1146.0, 
      1662.0
    ]
  }, 
  "Peru": {
    "water_rural_unimproved": [
      3725.0, 
      3559.0, 
      3506.0, 
      3378.0, 
      3218.0
    ], 
    "water_rural_improved_total": [
      3047.0, 
      3560.0, 
      4116.0, 
      4665.0, 
      5032.0
    ], 
    "water_urban_improved_other": [
      2250.0, 
      2188.0, 
      2022.0, 
      1584.0, 
      1235.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1200.3099999999999, 
      1345.9400000000001, 
      1470.5699999999999, 
      1781.3699999999999, 
      1852.8399999999999
    ], 
    "sanitation_rural_improved": [
      1083.54, 
      1566.1900000000001, 
      2057.96, 
      2654.1599999999999, 
      2969.8600000000001
    ], 
    "water_total_improved_other": [
      4281.0, 
      4324.0, 
      4156.0, 
      3675.0, 
      3380.0
    ], 
    "sanitation_total_improved": [
      11737.0, 
      14016.0, 
      16212.0, 
      18290.0, 
      19646.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      750.20000000000005, 
      1009.45, 
      1286.75, 
      1781.3699999999999, 
      1852.8399999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      7412.0, 
      6433.0, 
      5282.0, 
      3731.0, 
      2763.0
    ], 
    "sanitation_rural_unimproved_shared": [
      67.719999999999999, 
      142.38, 
      152.44, 
      241.28999999999999, 
      247.49000000000001
    ], 
    "population_urban": [
      15003.93, 
      16824.220000000001, 
      18382.080000000002, 
      19793.009999999998, 
      20587.099999999999
    ], 
    "water_total_improved_piped": [
      11969.0, 
      14210.0, 
      16504.0, 
      18804.0, 
      20180.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      2400.6300000000001, 
      2018.9100000000001, 
      1470.5699999999999, 
      593.78999999999996, 
      205.87
    ], 
    "water_urban_improved_total": [
      13203.0, 
      14974.0, 
      16544.0, 
      17814.0, 
      18528.0
    ], 
    "sanitation_total_unimproved_total": [
      10039.059999999999, 
      9927.2800000000007, 
      9792.1599999999999, 
      9545.9300000000003, 
      9190.7000000000007
    ], 
    "sanitation_rural_unimproved_other": [
      609.49000000000001, 
      996.66999999999996, 
      1600.6400000000001, 
      2010.73, 
      2474.8800000000001
    ], 
    "water_total_improved_total": [
      16250.0, 
      18534.0, 
      20660.0, 
      22479.0, 
      23560.0
    ], 
    "population_rural": [
      6772.1400000000003, 
      7119.0500000000002, 
      7622.0799999999999, 
      8042.9099999999999, 
      8249.6000000000004
    ], 
    "sanitation_total_unimproved_shared": [
      1268.0, 
      1488.0, 
      1623.0, 
      2022.0, 
      2100.0
    ], 
    "water_urban_unimproved": [
      1801.0, 
      1850.0, 
      1838.0, 
      1979.0, 
      2059.0
    ], 
    "sanitation_urban_unimproved_total": [
      4351.1400000000003, 
      4374.3000000000002, 
      4227.8800000000001, 
      4156.5299999999997, 
      3911.5500000000002
    ], 
    "water_rural_improved_other": [
      2031.0, 
      2136.0, 
      2134.0, 
      2091.0, 
      2145.0
    ], 
    "water_total_unimproved": [
      5526.0, 
      5409.0, 
      5344.0, 
      5357.0, 
      5277.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      5011.3800000000001, 
      4413.8100000000004, 
      3811.04, 
      3136.7399999999998, 
      2557.3800000000001
    ], 
    "population_total": [
      21776.060000000001, 
      23943.279999999999, 
      26004.16, 
      27835.93, 
      28836.700000000001
    ], 
    "sanitation_rural_unimproved_total": [
      5688.6000000000004, 
      5552.8599999999997, 
      5564.1199999999999, 
      5388.75, 
      5279.7399999999998
    ], 
    "water_rural_improved_piped": [
      1016.0, 
      1424.0, 
      1982.0, 
      2574.0, 
      2887.0
    ], 
    "sanitation_total_unimproved_other": [
      1359.0, 
      2006.0, 
      2888.0, 
      3792.0, 
      4328.0
    ], 
    "sanitation_urban_improved": [
      10652.790000000001, 
      12449.92, 
      14154.200000000001, 
      15636.48, 
      16675.549999999999
    ], 
    "water_urban_improved_piped": [
      10953.0, 
      12786.0, 
      14522.0, 
      16230.0, 
      17293.0
    ]
  }, 
  "Vanuatu": {
    "water_rural_unimproved": [
      61.0, 
      57.0, 
      51.0, 
      43.0, 
      37.0
    ], 
    "water_rural_improved_total": [
      60.0, 
      80.0, 
      98.0, 
      123.0, 
      139.0
    ], 
    "water_urban_improved_other": [
      3.0, 
      5.0, 
      5.0, 
      8.0, 
      9.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      7.9900000000000002, 
      10.289999999999999, 
      13.710000000000001, 
      16.739999999999998
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      41.25, 
      53.479999999999997, 
      71.239999999999995, 
      84.560000000000002
    ], 
    "water_total_improved_other": [
      30.0, 
      45.0, 
      57.0, 
      78.0, 
      90.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      59.0, 
      76.0, 
      103.0, 
      123.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      8.3300000000000001, 
      7.4100000000000001, 
      5.0800000000000001, 
      2.8900000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      11.0, 
      14.859999999999999, 
      19.879999999999999, 
      22.899999999999999
    ], 
    "population_urban": [
      27.969999999999999, 
      34.729999999999997, 
      41.159999999999997, 
      50.759999999999998, 
      57.710000000000001
    ], 
    "water_total_improved_piped": [
      55.0, 
      67.0, 
      79.0, 
      93.0, 
      104.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      25.0, 
      32.0, 
      38.0, 
      48.0, 
      55.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      113.22, 
      113.72, 
      113.44, 
      110.87
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      85.25, 
      75.769999999999996, 
      69.579999999999998, 
      63.420000000000002
    ], 
    "water_total_improved_total": [
      85.0, 
      112.0, 
      136.0, 
      171.0, 
      194.0
    ], 
    "population_rural": [
      121.48, 
      137.49000000000001, 
      148.56, 
      165.66999999999999, 
      176.16
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      19.0, 
      25.0, 
      34.0, 
      40.0
    ], 
    "water_urban_unimproved": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      3.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      16.329999999999998, 
      17.699999999999999, 
      18.780000000000001, 
      19.620000000000001
    ], 
    "water_rural_improved_other": [
      27.0, 
      40.0, 
      52.0, 
      70.0, 
      81.0
    ], 
    "water_total_unimproved": [
      64.0, 
      60.0, 
      54.0, 
      46.0, 
      40.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      4.46, 
      4.9699999999999998, 
      5.2800000000000002
    ], 
    "population_total": [
      149.44999999999999, 
      172.22, 
      189.72, 
      216.44, 
      233.87
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      96.239999999999995, 
      95.079999999999998, 
      94.430000000000007, 
      91.599999999999994
    ], 
    "water_rural_improved_piped": [
      33.0, 
      40.0, 
      46.0, 
      53.0, 
      58.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      93.0, 
      83.0, 
      75.0, 
      66.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      18.399999999999999, 
      23.460000000000001, 
      31.98, 
      38.090000000000003
    ], 
    "water_urban_improved_piped": [
      22.0, 
      27.0, 
      33.0, 
      40.0, 
      46.0
    ]
  }, 
  "Nauru": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      9.0, 
      9.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      2.3300000000000001, 
      2.3399999999999999
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      2.6299999999999999, 
      2.6499999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      9.1500000000000004, 
      9.9700000000000006, 
      10.039999999999999, 
      10.109999999999999, 
      10.18
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.10000000000000001, 
      0.10000000000000001
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      9.0, 
      9.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      5.0499999999999998, 
      5.0899999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      9.1500000000000004, 
      9.9700000000000006, 
      10.039999999999999, 
      10.109999999999999, 
      10.18
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      5.0599999999999996, 
      5.0899999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Norway": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1189.0, 
      1144.0, 
      1073.0, 
      1052.0, 
      1074.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1189.48, 
      1143.6800000000001, 
      1072.52, 
      1052.02, 
      1074.3399999999999
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      4241.0, 
      4360.0, 
      4484.0, 
      4635.0, 
      4766.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3052.0, 
      3215.5100000000002, 
      3411.4400000000001, 
      3583.46, 
      3692.2399999999998
    ], 
    "water_total_improved_piped": [
      4241.0, 
      4360.0, 
      4484.0, 
      4635.0, 
      4766.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      3052.0, 
      3216.0, 
      3411.0, 
      3583.0, 
      3692.0
    ], 
    "sanitation_total_unimproved_total": [
      0.48999999999999999, 
      -0.81999999999999995, 
      -0.040000000000000001, 
      0.47999999999999998, 
      0.57999999999999996
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      4241.0, 
      4360.0, 
      4484.0, 
      4635.0, 
      4766.0
    ], 
    "population_rural": [
      1189.48, 
      1143.6800000000001, 
      1072.52, 
      1052.02, 
      1074.3399999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4241.4899999999998, 
      4359.1800000000003, 
      4483.96, 
      4635.4799999999996, 
      4766.5799999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      1189.0, 
      1144.0, 
      1073.0, 
      1052.0, 
      1074.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      3052.0, 
      3215.5100000000002, 
      3411.4400000000001, 
      3583.46, 
      3692.2399999999998
    ], 
    "water_urban_improved_piped": [
      3052.0, 
      3216.0, 
      3411.0, 
      3583.0, 
      3692.0
    ]
  }, 
  "Malawi": {
    "water_rural_unimproved": [
      5601.0, 
      4840.0, 
      4215.0, 
      3386.0, 
      2774.0
    ], 
    "water_rural_improved_total": [
      2758.0, 
      3959.0, 
      5821.0, 
      7901.0, 
      9287.0
    ], 
    "water_urban_improved_other": [
      491.0, 
      700.0, 
      1060.0, 
      1539.0, 
      1922.0
    ], 
    "sanitation_urban_unimproved_shared": [
      447.95999999999998, 
      551.62, 
      754.13, 
      994.20000000000005, 
      1169.8199999999999
    ], 
    "sanitation_rural_improved": [
      3427.1500000000001, 
      4047.3699999999999, 
      5017.9499999999998, 
      6208.0299999999997, 
      6874.71
    ], 
    "water_total_improved_other": [
      3082.0, 
      4483.0, 
      6680.0, 
      9214.0, 
      10968.0
    ], 
    "sanitation_total_improved": [
      3973.0, 
      4720.0, 
      5934.0, 
      7415.0, 
      8295.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      54.630000000000003, 
      80.719999999999999, 
      71.819999999999993, 
      118.36, 
      139.25999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2970.0, 
      2504.0, 
      2262.0, 
      1740.0, 
      1383.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1421.01, 
      1671.74, 
      2107.54, 
      2596.0900000000001, 
      2894.6100000000001
    ], 
    "population_urban": [
      1092.5899999999999, 
      1345.4000000000001, 
      1795.54, 
      2367.1399999999999, 
      2785.29
    ], 
    "water_total_improved_piped": [
      659.0, 
      714.0, 
      811.0, 
      912.0, 
      965.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      43.700000000000003, 
      40.359999999999999, 
      53.869999999999997, 
      47.340000000000003, 
      55.710000000000001
    ], 
    "water_urban_improved_total": [
      983.0, 
      1238.0, 
      1670.0, 
      2225.0, 
      2646.0
    ], 
    "sanitation_total_unimproved_total": [
      5478.4899999999998, 
      5424.0299999999997, 
      5897.4300000000003, 
      6239.4799999999996, 
      6551.1800000000003
    ], 
    "sanitation_rural_unimproved_other": [
      585.12, 
      615.89999999999998, 
      702.50999999999999, 
      790.11000000000001, 
      964.87
    ], 
    "water_total_improved_total": [
      3741.0, 
      5197.0, 
      7491.0, 
      10126.0, 
      11933.0
    ], 
    "population_rural": [
      8358.8999999999996, 
      8798.6299999999992, 
      10035.889999999999, 
      11287.34, 
      12060.889999999999
    ], 
    "sanitation_total_unimproved_shared": [
      1869.0, 
      2224.0, 
      2862.0, 
      3590.0, 
      4065.0
    ], 
    "water_urban_unimproved": [
      110.0, 
      107.0, 
      126.0, 
      142.0, 
      139.0
    ], 
    "sanitation_urban_unimproved_total": [
      546.28999999999996, 
      672.70000000000005, 
      879.82000000000005, 
      1159.9000000000001, 
      1364.79
    ], 
    "water_rural_improved_other": [
      2591.0, 
      3783.0, 
      5620.0, 
      7675.0, 
      9046.0
    ], 
    "water_total_unimproved": [
      5711.0, 
      4947.0, 
      4341.0, 
      3528.0, 
      2913.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2925.6100000000001, 
      2463.6199999999999, 
      2207.9000000000001, 
      1693.0999999999999, 
      1326.7
    ], 
    "population_total": [
      9451.4899999999998, 
      10144.030000000001, 
      11831.43, 
      13654.48, 
      14846.18
    ], 
    "sanitation_rural_unimproved_total": [
      4931.75, 
      4751.2600000000002, 
      5017.9399999999996, 
      5079.3100000000004, 
      5186.1800000000003
    ], 
    "water_rural_improved_piped": [
      167.0, 
      176.0, 
      201.0, 
      226.0, 
      241.0
    ], 
    "sanitation_total_unimproved_other": [
      640.0, 
      697.0, 
      775.0, 
      908.0, 
      1104.0
    ], 
    "sanitation_urban_improved": [
      546.29999999999995, 
      672.70000000000005, 
      915.72000000000003, 
      1207.24, 
      1420.5
    ], 
    "water_urban_improved_piped": [
      492.0, 
      538.0, 
      610.0, 
      686.0, 
      724.0
    ]
  }, 
  "Cook Islands": {
    "water_rural_unimproved": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      7.0, 
      7.0, 
      5.0, 
      5.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      10.0, 
      11.0, 
      11.0, 
      13.0, 
      14.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      6.9800000000000004, 
      7.0300000000000002, 
      6.0499999999999998, 
      5.6500000000000004, 
      5.7800000000000002
    ], 
    "water_total_improved_other": [
      17.0, 
      18.0, 
      16.0, 
      18.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      17.0, 
      18.0, 
      17.0, 
      19.0, 
      20.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      10.109999999999999, 
      10.869999999999999, 
      11.449999999999999, 
      13.43, 
      13.91
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      10.0, 
      11.0, 
      11.0, 
      13.0, 
      14.0
    ], 
    "sanitation_total_unimproved_total": [
      0.77000000000000002, 
      0.51000000000000001, 
      0.56999999999999995, 
      0.080000000000000002, 
      -0.32000000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.68999999999999995, 
      0.60999999999999999, 
      0.059999999999999998, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      17.0, 
      18.0, 
      16.0, 
      18.0, 
      -1.0
    ], 
    "population_rural": [
      7.6699999999999999, 
      7.6399999999999997, 
      6.1100000000000003, 
      5.6500000000000004, 
      5.7800000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      7.0, 
      7.0, 
      5.0, 
      5.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      17.77, 
      18.510000000000002, 
      17.57, 
      19.079999999999998, 
      19.68
    ], 
    "sanitation_rural_unimproved_total": [
      0.68999999999999995, 
      0.60999999999999999, 
      0.059999999999999998, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      1.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      10.109999999999999, 
      10.869999999999999, 
      11.449999999999999, 
      13.43, 
      13.91
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Benin": {
    "water_rural_unimproved": [
      1665.0, 
      1702.0, 
      1684.0, 
      1652.0, 
      1579.0
    ], 
    "water_rural_improved_total": [
      1477.0, 
      1918.0, 
      2423.0, 
      3068.0, 
      3515.0
    ], 
    "water_urban_improved_other": [
      877.0, 
      1136.0, 
      1404.0, 
      1825.0, 
      2069.0
    ], 
    "sanitation_urban_unimproved_shared": [
      330.72000000000003, 
      504.91000000000003, 
      714.75999999999999, 
      1007.36, 
      1213.0
    ], 
    "sanitation_rural_improved": [
      31.420000000000002, 
      72.390000000000001, 
      123.2, 
      141.59, 
      203.78
    ], 
    "water_total_improved_other": [
      2354.0, 
      3018.0, 
      3745.0, 
      4799.0, 
      5482.0
    ], 
    "sanitation_total_improved": [
      263.0, 
      430.0, 
      608.0, 
      835.0, 
      1060.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      248.03999999999999, 
      273.49000000000001, 
      331.85000000000002, 
      346.27999999999997, 
      392.44
    ], 
    "sanitation_total_unimproved_opendefecation": [
      3827.0, 
      4262.0, 
      4594.0, 
      5019.0, 
      5182.0
    ], 
    "sanitation_rural_unimproved_shared": [
      31.420000000000002, 
      144.78, 
      246.40000000000001, 
      377.56999999999999, 
      509.44
    ], 
    "population_urban": [
      1653.5899999999999, 
      2103.77, 
      2552.7199999999998, 
      3148.0, 
      3567.6500000000001
    ], 
    "water_total_improved_piped": [
      314.0, 
      478.0, 
      669.0, 
      850.0, 
      1030.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      843.33000000000004, 
      967.73000000000002, 
      1021.09, 
      1101.8, 
      1105.97
    ], 
    "water_urban_improved_total": [
      1191.0, 
      1578.0, 
      1991.0, 
      2581.0, 
      2997.0
    ], 
    "sanitation_total_unimproved_total": [
      4532.0900000000001, 
      5293.3000000000002, 
      6051.3299999999999, 
      7032.6300000000001, 
      7602.0900000000001
    ], 
    "sanitation_rural_unimproved_other": [
      94.25, 
      108.59, 
      164.25999999999999, 
      283.18000000000001, 
      305.67000000000002
    ], 
    "water_total_improved_total": [
      2668.0, 
      3496.0, 
      4414.0, 
      5649.0, 
      6512.0
    ], 
    "population_rural": [
      3141.5, 
      3619.5300000000002, 
      4106.6099999999997, 
      4719.6300000000001, 
      5094.4399999999996
    ], 
    "sanitation_total_unimproved_shared": [
      362.0, 
      650.0, 
      961.0, 
      1385.0, 
      1722.0
    ], 
    "water_urban_unimproved": [
      463.0, 
      526.0, 
      562.0, 
      567.0, 
      571.0
    ], 
    "sanitation_urban_unimproved_total": [
      1422.0899999999999, 
      1746.1300000000001, 
      2067.6999999999998, 
      2455.4400000000001, 
      2711.4099999999999
    ], 
    "water_rural_improved_other": [
      1477.0, 
      1882.0, 
      2341.0, 
      2974.0, 
      3413.0
    ], 
    "water_total_unimproved": [
      2128.0, 
      2228.0, 
      2246.0, 
      2219.0, 
      2150.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2984.4299999999998, 
      3293.77, 
      3572.75, 
      3917.29, 
      4075.5500000000002
    ], 
    "population_total": [
      4795.0900000000001, 
      5723.3000000000002, 
      6659.3299999999999, 
      7867.6300000000001, 
      8662.0900000000001
    ], 
    "sanitation_rural_unimproved_total": [
      3110.0799999999999, 
      3547.1399999999999, 
      3983.4099999999999, 
      4578.04, 
      4890.6599999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      36.0, 
      82.0, 
      94.0, 
      102.0
    ], 
    "sanitation_total_unimproved_other": [
      342.0, 
      382.0, 
      496.0, 
      629.0, 
      698.0
    ], 
    "sanitation_urban_improved": [
      231.5, 
      357.63999999999999, 
      485.01999999999998, 
      692.55999999999995, 
      856.24000000000001
    ], 
    "water_urban_improved_piped": [
      314.0, 
      442.0, 
      587.0, 
      756.0, 
      928.0
    ]
  }, 
  "Cuba": {
    "water_rural_unimproved": [
      1325.0, 
      1038.0, 
      730.0, 
      464.0, 
      300.0
    ], 
    "water_rural_improved_total": [
      1495.0, 
      1768.0, 
      1975.0, 
      2267.0, 
      2429.0
    ], 
    "water_urban_improved_other": [
      1242.0, 
      1296.0, 
      1258.0, 
      1185.0, 
      1186.0
    ], 
    "sanitation_urban_unimproved_shared": [
      388.36000000000001, 
      405.19, 
      419.07999999999998, 
      423.10000000000002, 
      423.75999999999999
    ], 
    "sanitation_rural_improved": [
      1804.79, 
      1936.4200000000001, 
      1974.79, 
      2130.29, 
      2210.8699999999999
    ], 
    "water_total_improved_other": [
      1891.0, 
      2026.0, 
      2043.0, 
      2086.0, 
      2141.0
    ], 
    "sanitation_total_improved": [
      8485.0, 
      9067.0, 
      9518.0, 
      9915.0, 
      10178.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      621.37, 
      486.22000000000003, 
      335.26999999999998, 
      169.24000000000001, 
      84.75
    ], 
    "sanitation_total_unimproved_opendefecation": [
      247.0, 
      249.0, 
      219.0, 
      167.0, 
      55.0
    ], 
    "sanitation_rural_unimproved_shared": [
      282.0, 
      308.70999999999998, 
      324.62, 
      327.74000000000001, 
      354.82999999999998
    ], 
    "population_urban": [
      7767.1300000000001, 
      8103.71, 
      8381.6499999999996, 
      8462.0499999999993, 
      8475.2600000000002
    ], 
    "water_total_improved_piped": [
      6827.0, 
      7359.0, 
      7895.0, 
      8220.0, 
      8424.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      77.670000000000002, 
      81.040000000000006, 
      83.819999999999993, 
      84.620000000000005, 
      0.0
    ], 
    "water_urban_improved_total": [
      7223.0, 
      7617.0, 
      7963.0, 
      8039.0, 
      8136.0
    ], 
    "sanitation_total_unimproved_total": [
      2102.1199999999999, 
      1843.1199999999999, 
      1568.8299999999999, 
      1278.1900000000001, 
      1026.73
    ], 
    "sanitation_rural_unimproved_other": [
      564.0, 
      392.89999999999998, 
      270.51999999999998, 
      191.18000000000001, 
      109.18000000000001
    ], 
    "water_total_improved_total": [
      8718.0, 
      9385.0, 
      9938.0, 
      10306.0, 
      10565.0
    ], 
    "population_rural": [
      2819.98, 
      2806.4099999999999, 
      2705.1900000000001, 
      2731.1399999999999, 
      2729.4699999999998
    ], 
    "sanitation_total_unimproved_shared": [
      670.0, 
      714.0, 
      744.0, 
      751.0, 
      779.0
    ], 
    "water_urban_unimproved": [
      544.0, 
      487.0, 
      419.0, 
      423.0, 
      339.0
    ], 
    "sanitation_urban_unimproved_total": [
      1087.4000000000001, 
      972.44000000000005, 
      838.16999999999996, 
      676.96000000000004, 
      508.50999999999999
    ], 
    "water_rural_improved_other": [
      649.0, 
      730.0, 
      785.0, 
      901.0, 
      955.0
    ], 
    "water_total_unimproved": [
      1869.0, 
      1525.0, 
      1149.0, 
      887.0, 
      639.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      169.19999999999999, 
      168.38, 
      135.25999999999999, 
      81.930000000000007, 
      54.590000000000003
    ], 
    "population_total": [
      10587.120000000001, 
      10910.120000000001, 
      11086.83, 
      11193.190000000001, 
      11204.73
    ], 
    "sanitation_rural_unimproved_total": [
      1015.1900000000001, 
      869.99000000000001, 
      730.39999999999998, 
      600.85000000000002, 
      518.60000000000002
    ], 
    "water_rural_improved_piped": [
      846.0, 
      1038.0, 
      1190.0, 
      1366.0, 
      1474.0
    ], 
    "sanitation_total_unimproved_other": [
      1185.0, 
      879.0, 
      606.0, 
      360.0, 
      194.0
    ], 
    "sanitation_urban_improved": [
      6679.7299999999996, 
      7131.2700000000004, 
      7543.4799999999996, 
      7785.0900000000001, 
      7966.75
    ], 
    "water_urban_improved_piped": [
      5981.0, 
      6321.0, 
      6705.0, 
      6854.0, 
      6950.0
    ]
  }, 
  "Montenegro": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      11.0, 
      9.0, 
      10.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      263.0, 
      233.0, 
      239.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      8.0, 
      7.0, 
      8.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      11.6, 
      11.470000000000001, 
      11.210000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      235.53, 
      208.37, 
      213.74000000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      90.0, 
      80.0, 
      83.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      607.0, 
      575.0, 
      573.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      3.8700000000000001, 
      3.8199999999999998, 
      3.7400000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      3.0, 
      2.0, 
      2.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      8.2200000000000006, 
      7.2699999999999996, 
      7.46
    ], 
    "population_urban": [
      281.95999999999998, 
      332.86000000000001, 
      386.75999999999999, 
      382.31999999999999, 
      373.81999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      560.0, 
      535.0, 
      530.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      387.0, 
      382.0, 
      374.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      53.630000000000003, 
      49.619999999999997, 
      49.350000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      27.390000000000001, 
      24.23, 
      24.850000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      650.0, 
      615.0, 
      613.0
    ], 
    "population_rural": [
      305.0, 
      290.88, 
      273.87, 
      242.30000000000001, 
      248.53
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      20.0, 
      18.0, 
      18.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      15.470000000000001, 
      15.289999999999999, 
      14.960000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      82.0, 
      73.0, 
      75.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      11.0, 
      9.0, 
      10.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      2.7400000000000002, 
      2.4199999999999999, 
      2.4900000000000002
    ], 
    "population_total": [
      586.95000000000005, 
      623.73000000000002, 
      660.63, 
      624.62, 
      622.35000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      38.340000000000003, 
      33.93, 
      34.789999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      181.0, 
      160.0, 
      164.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      31.0, 
      28.0, 
      29.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      371.29000000000002, 
      367.02999999999997, 
      358.86000000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      379.0, 
      375.0, 
      366.0
    ]
  }, 
  "Saint Kitts and Nevis": {
    "water_rural_unimproved": [
      1.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      26.0, 
      28.0, 
      31.0, 
      33.0, 
      33.0
    ], 
    "water_urban_improved_other": [
      14.0, 
      4.0, 
      4.0, 
      16.0, 
      18.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      25.559999999999999, 
      27.420000000000002, 
      29.719999999999999, 
      31.989999999999998, 
      31.66
    ], 
    "water_total_improved_other": [
      40.0, 
      11.0, 
      13.0, 
      49.0, 
      51.0
    ], 
    "sanitation_total_improved": [
      40.0, 
      41.0, 
      44.0, 
      47.0, 
      49.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.56000000000000005, 
      0.57999999999999996, 
      0.59999999999999998, 
      0.63, 
      0.71999999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      14.09, 
      14.529999999999999, 
      15.1, 
      15.81, 
      18.079999999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      31.0, 
      33.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      14.0, 
      14.0, 
      15.0, 
      16.0, 
      18.0
    ], 
    "sanitation_total_unimproved_total": [
      0.70999999999999996, 
      2.1000000000000001, 
      2.0499999999999998, 
      2.1400000000000001, 
      2.0699999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      1.0600000000000001, 
      1.1399999999999999, 
      1.24, 
      1.3300000000000001, 
      1.3200000000000001
    ], 
    "water_total_improved_total": [
      40.0, 
      42.0, 
      46.0, 
      49.0, 
      51.0
    ], 
    "population_rural": [
      26.620000000000001, 
      28.559999999999999, 
      30.960000000000001, 
      33.329999999999998, 
      32.979999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.56000000000000005, 
      0.57999999999999996, 
      0.60999999999999999, 
      0.63, 
      0.71999999999999997
    ], 
    "water_rural_improved_other": [
      26.0, 
      7.0, 
      9.0, 
      33.0, 
      33.0
    ], 
    "water_total_unimproved": [
      1.0, 
      2.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      40.710000000000001, 
      43.100000000000001, 
      46.049999999999997, 
      49.140000000000001, 
      51.07
    ], 
    "sanitation_rural_unimproved_total": [
      1.0600000000000001, 
      1.1399999999999999, 
      1.24, 
      1.3400000000000001, 
      1.3200000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      21.0, 
      22.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      2.0, 
      2.0, 
      2.0, 
      2.0, 
      2.0
    ], 
    "sanitation_urban_improved": [
      13.529999999999999, 
      13.949999999999999, 
      14.49, 
      15.18, 
      17.359999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      10.0, 
      11.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Togo": {
    "water_rural_unimproved": [
      1756.0, 
      1864.0, 
      2032.0, 
      2159.0, 
      2209.0
    ], 
    "water_rural_improved_total": [
      988.0, 
      1095.0, 
      1299.0, 
      1439.0, 
      1535.0
    ], 
    "water_urban_improved_other": [
      769.0, 
      987.0, 
      1342.0, 
      1747.0, 
      2036.0
    ], 
    "sanitation_urban_unimproved_shared": [
      543.65999999999997, 
      677.63, 
      862.55999999999995, 
      1053.1800000000001, 
      1194.6300000000001
    ], 
    "sanitation_rural_improved": [
      219.53, 
      207.12, 
      166.53, 
      143.94, 
      112.31
    ], 
    "water_total_improved_other": [
      1757.0, 
      2082.0, 
      2641.0, 
      3186.0, 
      3534.0
    ], 
    "sanitation_total_improved": [
      515.0, 
      575.0, 
      627.0, 
      718.0, 
      764.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      59.090000000000003, 
      73.659999999999997, 
      153.34, 
      215.41999999999999, 
      244.36000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2315.0, 
      2573.0, 
      2972.0, 
      3322.0, 
      3544.0
    ], 
    "sanitation_rural_unimproved_shared": [
      439.05000000000001, 
      384.66000000000003, 
      333.06999999999999, 
      251.88999999999999, 
      224.61000000000001
    ], 
    "population_urban": [
      1181.8699999999999, 
      1473.1199999999999, 
      1916.8, 
      2393.5999999999999, 
      2715.0700000000002
    ], 
    "water_total_improved_piped": [
      165.0, 
      206.0, 
      249.0, 
      311.0, 
      363.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      283.64999999999998, 
      353.55000000000001, 
      440.86000000000001, 
      550.52999999999997, 
      624.47000000000003
    ], 
    "water_urban_improved_total": [
      934.0, 
      1193.0, 
      1591.0, 
      2058.0, 
      2362.0
    ], 
    "sanitation_total_unimproved_total": [
      3410.9400000000001, 
      3857.0300000000002, 
      4620.4899999999998, 
      5274.0799999999999, 
      5694.6099999999997
    ], 
    "sanitation_rural_unimproved_other": [
      54.880000000000003, 
      147.94999999999999, 
      299.75999999999999, 
      431.81999999999999, 
      486.66000000000003
    ], 
    "water_total_improved_total": [
      1922.0, 
      2288.0, 
      2890.0, 
      3497.0, 
      3897.0
    ], 
    "population_rural": [
      2744.0700000000002, 
      2958.9099999999999, 
      3330.6799999999998, 
      3598.48, 
      3743.54
    ], 
    "sanitation_total_unimproved_shared": [
      983.0, 
      1063.0, 
      1196.0, 
      1305.0, 
      1420.0
    ], 
    "water_urban_unimproved": [
      248.0, 
      280.0, 
      326.0, 
      336.0, 
      353.0
    ], 
    "sanitation_urban_unimproved_total": [
      886.39999999999998, 
      1104.8399999999999, 
      1456.77, 
      1819.1400000000001, 
      2063.4499999999998
    ], 
    "water_rural_improved_other": [
      988.0, 
      1095.0, 
      1299.0, 
      1439.0, 
      1498.0
    ], 
    "water_total_unimproved": [
      2004.0, 
      2144.0, 
      2358.0, 
      2495.0, 
      2562.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2030.6099999999999, 
      2219.1799999999998, 
      2531.3200000000002, 
      2770.8299999999999, 
      2919.96
    ], 
    "population_total": [
      3925.9400000000001, 
      4432.0299999999997, 
      5247.4899999999998, 
      5992.0799999999999, 
      6458.6099999999997
    ], 
    "sanitation_rural_unimproved_total": [
      2524.54, 
      2751.79, 
      3164.1500000000001, 
      3454.54, 
      3631.23
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      37.0
    ], 
    "sanitation_total_unimproved_other": [
      114.0, 
      222.0, 
      453.0, 
      647.0, 
      731.0
    ], 
    "sanitation_urban_improved": [
      295.47000000000003, 
      368.27999999999997, 
      460.02999999999997, 
      574.46000000000004, 
      651.62
    ], 
    "water_urban_improved_piped": [
      165.0, 
      206.0, 
      249.0, 
      311.0, 
      326.0
    ]
  }, 
  "China": {
    "water_rural_unimproved": [
      364829.0, 
      307574.0, 
      244099.0, 
      172017.0, 
      136867.0
    ], 
    "water_rural_improved_total": [
      464328.0, 
      523708.0, 
      569564.0, 
      609876.0, 
      623505.0
    ], 
    "water_urban_improved_other": [
      34423.0, 
      30375.0, 
      27198.0, 
      21214.0, 
      11541.0
    ], 
    "sanitation_urban_unimproved_shared": [
      78233.160000000003, 
      102515.56, 
      126921.41, 
      159108.06, 
      173111.82999999999
    ], 
    "sanitation_rural_improved": [
      315079.76000000001, 
      349138.37, 
      374285.01000000001, 
      390946.42999999999, 
      395393.31
    ], 
    "water_total_improved_other": [
      150505.0, 
      130129.0, 
      116701.0, 
      99403.0, 
      79975.0
    ], 
    "sanitation_total_improved": [
      465288.0, 
      546575.0, 
      623595.0, 
      698555.0, 
      730076.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      75103.830000000002, 
      64546.830000000002, 
      54394.889999999999, 
      31821.610000000001, 
      34622.370000000003
    ], 
    "sanitation_total_unimproved_opendefecation": [
      84012.0, 
      73377.0, 
      71485.0, 
      63098.0, 
      49829.0
    ], 
    "sanitation_rural_unimproved_shared": [
      49749.440000000002, 
      49876.910000000003, 
      56956.419999999998, 
      62551.43, 
      60829.739999999998
    ], 
    "population_urban": [
      312932.63, 
      379687.25, 
      453290.72999999998, 
      530360.19999999995, 
      577039.43000000005
    ], 
    "water_total_improved_piped": [
      617368.0, 
      761876.0, 
      897088.0, 
      1030226.0, 
      1109029.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      9387.9799999999996, 
      15187.49, 
      22664.540000000001, 
      31821.610000000001, 
      34622.370000000003
    ], 
    "water_urban_improved_total": [
      303545.0, 
      368297.0, 
      444225.0, 
      519753.0, 
      565499.0
    ], 
    "sanitation_total_unimproved_total": [
      676801.90000000002, 
      664394.07999999996, 
      643358.81000000006, 
      613698.06000000006, 
      607335.17000000004
    ], 
    "sanitation_rural_unimproved_other": [
      389703.91999999998, 
      374076.82000000001, 
      333601.85999999999, 
      297119.28999999998, 
      288941.26000000001
    ], 
    "water_total_improved_total": [
      767873.0, 
      892005.0, 
      1013789.0, 
      1129629.0, 
      1189004.0
    ], 
    "population_rural": [
      829157.27000000002, 
      831281.82999999996, 
      813663.07999999996, 
      781892.85999999999, 
      760371.75
    ], 
    "sanitation_total_unimproved_shared": [
      127982.0, 
      152393.0, 
      183877.0, 
      221659.0, 
      233942.0
    ], 
    "water_urban_unimproved": [
      9388.0, 
      11390.0, 
      9066.0, 
      10607.0, 
      11540.0
    ], 
    "sanitation_urban_unimproved_total": [
      162724.97, 
      182249.88, 
      203980.82999999999, 
      222751.29000000001, 
      242356.56
    ], 
    "water_rural_improved_other": [
      116082.0, 
      99754.0, 
      89503.0, 
      78189.0, 
      68434.0
    ], 
    "water_total_unimproved": [
      374217.0, 
      318964.0, 
      253165.0, 
      182624.0, 
      148407.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      74624.149999999994, 
      58189.730000000003, 
      48819.779999999999, 
      31275.709999999999, 
      15207.43
    ], 
    "population_total": [
      1142089.8999999999, 
      1210969.0800000001, 
      1266953.8100000001, 
      1312253.0600000001, 
      1337411.1699999999
    ], 
    "sanitation_rural_unimproved_total": [
      514077.51000000001, 
      482143.46000000002, 
      439378.07000000001, 
      390946.42999999999, 
      364978.44
    ], 
    "water_rural_improved_piped": [
      348246.0, 
      423954.0, 
      480061.0, 
      531687.0, 
      555071.0
    ], 
    "sanitation_total_unimproved_other": [
      464808.0, 
      438624.0, 
      387997.0, 
      328941.0, 
      323563.0
    ], 
    "sanitation_urban_improved": [
      150207.66, 
      197437.37, 
      249309.89999999999, 
      307608.90999999997, 
      334682.87
    ], 
    "water_urban_improved_piped": [
      269122.0, 
      337922.0, 
      417027.0, 
      498539.0, 
      553958.0
    ]
  }, 
  "Armenia": {
    "water_rural_unimproved": [
      -1.0, 
      239.0, 
      182.0, 
      121.0, 
      78.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      847.0, 
      891.0, 
      980.0, 
      1037.0
    ], 
    "water_urban_improved_other": [
      71.0, 
      64.0, 
      60.0, 
      59.0, 
      20.0
    ], 
    "sanitation_urban_unimproved_shared": [
      95.650000000000006, 
      85.469999999999999, 
      80.099999999999994, 
      78.540000000000006, 
      78.489999999999995
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      814.87, 
      826.53999999999996, 
      870.07000000000005, 
      891.88
    ], 
    "water_total_improved_other": [
      -1.0, 
      248.0, 
      264.0, 
      290.0, 
      277.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      2845.0, 
      2729.0, 
      2735.0, 
      2756.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      23.91, 
      21.370000000000001, 
      20.02, 
      19.640000000000001, 
      19.620000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      32.590000000000003, 
      32.200000000000003, 
      33.039999999999999, 
      33.450000000000003
    ], 
    "population_urban": [
      2391.29, 
      2136.6700000000001, 
      2002.3800000000001, 
      1963.5799999999999, 
      1962.23
    ], 
    "water_total_improved_piped": [
      2977.0, 
      2714.0, 
      2609.0, 
      2634.0, 
      2683.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2367.0, 
      2115.0, 
      1982.0, 
      1944.0, 
      1923.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      378.17000000000002, 
      346.81, 
      329.93000000000001, 
      321.07999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      239.03, 
      214.69, 
      198.24000000000001, 
      189.53
    ], 
    "water_total_improved_total": [
      -1.0, 
      2962.0, 
      2873.0, 
      2924.0, 
      2960.0
    ], 
    "population_rural": [
      1153.4100000000001, 
      1086.5, 
      1073.4300000000001, 
      1101.3499999999999, 
      1114.8599999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      118.0, 
      112.0, 
      112.0, 
      111.0
    ], 
    "water_urban_unimproved": [
      24.0, 
      22.0, 
      20.0, 
      20.0, 
      39.0
    ], 
    "sanitation_urban_unimproved_total": [
      119.56999999999999, 
      106.83, 
      100.12, 
      98.180000000000007, 
      98.109999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      184.0, 
      204.0, 
      231.0, 
      257.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      261.0, 
      202.0, 
      141.0, 
      117.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      3544.6999999999998, 
      3223.1700000000001, 
      3075.8099999999999, 
      3064.9299999999998, 
      3077.0799999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      271.63, 
      246.88999999999999, 
      231.28, 
      222.97999999999999
    ], 
    "water_rural_improved_piped": [
      681.0, 
      663.0, 
      687.0, 
      749.0, 
      780.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      260.0, 
      235.0, 
      218.0, 
      210.0
    ], 
    "sanitation_urban_improved": [
      2271.7199999999998, 
      2029.8399999999999, 
      1902.26, 
      1865.4000000000001, 
      1864.1199999999999
    ], 
    "water_urban_improved_piped": [
      2296.0, 
      2051.0, 
      1922.0, 
      1885.0, 
      1903.0
    ]
  }, 
  "Republic of Korea": {
    "water_rural_unimproved": [
      -1.0, 
      3207.0, 
      2366.0, 
      1553.0, 
      1070.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      6510.0, 
      7096.0, 
      7585.0, 
      7848.0
    ], 
    "water_urban_improved_other": [
      317.0, 
      350.0, 
      370.0, 
      385.0, 
      392.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      11242.6, 
      9716.5499999999993, 
      9461.8299999999999, 
      9138.4599999999991, 
      8917.8099999999995
    ], 
    "water_total_improved_other": [
      -1.0, 
      3459.0, 
      3114.0, 
      2761.0, 
      2533.0
    ], 
    "sanitation_total_improved": [
      42983.0, 
      44652.0, 
      46429.0, 
      47566.0, 
      48152.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      31740.259999999998, 
      34934.660000000003, 
      36967.489999999998, 
      38427.970000000001, 
      39234.489999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      36938.0, 
      40210.0, 
      42868.0, 
      44549.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      30788.0, 
      33887.0, 
      36228.0, 
      38044.0, 
      39234.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.14999999999999999, 
      -0.79000000000000004, 
      0.32000000000000001, 
      0.42999999999999999, 
      0.29999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      40397.0, 
      43324.0, 
      45629.0, 
      47082.0
    ], 
    "population_rural": [
      11242.6, 
      9716.5499999999993, 
      9461.8299999999999, 
      9138.4599999999991, 
      8917.8099999999995
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      952.0, 
      1048.0, 
      739.0, 
      384.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      3109.0, 
      2744.0, 
      2376.0, 
      2141.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      4255.0, 
      3105.0, 
      1937.0, 
      1070.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      42982.849999999999, 
      44651.209999999999, 
      46429.32, 
      47566.43, 
      48152.300000000003
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      3401.0, 
      4352.0, 
      5209.0, 
      5707.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      31740.259999999998, 
      34934.660000000003, 
      36967.489999999998, 
      38427.970000000001, 
      39234.489999999998
    ], 
    "water_urban_improved_piped": [
      30471.0, 
      33537.0, 
      35858.0, 
      37659.0, 
      38842.0
    ]
  }, 
  "Dominican Republic": {
    "water_rural_unimproved": [
      792.0, 
      755.0, 
      664.0, 
      539.0, 
      492.0
    ], 
    "water_rural_improved_total": [
      2509.0, 
      2675.0, 
      2654.0, 
      2630.0, 
      2587.0
    ], 
    "water_urban_improved_other": [
      163.0, 
      235.0, 
      331.0, 
      382.0, 
      481.0
    ], 
    "sanitation_urban_unimproved_shared": [
      366.5, 
      469.38999999999999, 
      551.22000000000003, 
      636.44000000000005, 
      687.33000000000004
    ], 
    "sanitation_rural_improved": [
      2013.9100000000001, 
      2229.3800000000001, 
      2289.1700000000001, 
      2281.6900000000001, 
      2278.73
    ], 
    "water_total_improved_other": [
      1153.0, 
      1264.0, 
      1326.0, 
      1332.0, 
      1405.0
    ], 
    "sanitation_total_improved": [
      5394.0, 
      6172.0, 
      6974.0, 
      7755.0, 
      8259.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      203.61000000000001, 
      140.81999999999999, 
      110.23999999999999, 
      127.29000000000001, 
      68.730000000000004
    ], 
    "sanitation_total_unimproved_opendefecation": [
      782.0, 
      724.0, 
      596.0, 
      444.0, 
      353.0
    ], 
    "sanitation_rural_unimproved_shared": [
      363.16000000000003, 
      411.57999999999998, 
      398.12, 
      411.97000000000003, 
      400.31999999999999
    ], 
    "population_urban": [
      4072.1799999999998, 
      4693.8500000000004, 
      5512.1999999999998, 
      6364.4300000000003, 
      6873.3400000000001
    ], 
    "water_total_improved_piped": [
      5347.0, 
      5870.0, 
      6399.0, 
      6962.0, 
      7162.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      122.17, 
      140.81999999999999, 
      165.37, 
      127.29000000000001, 
      137.47
    ], 
    "water_urban_improved_total": [
      3991.0, 
      4459.0, 
      5071.0, 
      5664.0, 
      5980.0
    ], 
    "sanitation_total_unimproved_total": [
      1979.6700000000001, 
      1951.6700000000001, 
      1855.8299999999999, 
      1778.4400000000001, 
      1693.71
    ], 
    "sanitation_rural_unimproved_other": [
      264.12, 
      205.78999999999999, 
      199.06, 
      158.44999999999999, 
      184.75999999999999
    ], 
    "water_total_improved_total": [
      6500.0, 
      7134.0, 
      7725.0, 
      8294.0, 
      8567.0
    ], 
    "population_rural": [
      3301.4899999999998, 
      3429.8099999999999, 
      3317.6300000000001, 
      3169.0100000000002, 
      3079.3699999999999
    ], 
    "sanitation_total_unimproved_shared": [
      729.0, 
      881.0, 
      949.0, 
      1048.0, 
      1087.0
    ], 
    "water_urban_unimproved": [
      81.0, 
      235.0, 
      441.0, 
      700.0, 
      893.0
    ], 
    "sanitation_urban_unimproved_total": [
      692.26999999999998, 
      751.00999999999999, 
      826.83000000000004, 
      891.01999999999998, 
      893.52999999999997
    ], 
    "water_rural_improved_other": [
      990.0, 
      1029.0, 
      995.0, 
      950.0, 
      924.0
    ], 
    "water_total_unimproved": [
      873.0, 
      990.0, 
      1105.0, 
      1239.0, 
      1385.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      660.29999999999995, 
      583.07000000000005, 
      431.29000000000002, 
      316.89999999999998, 
      215.56
    ], 
    "population_total": [
      7373.6700000000001, 
      8123.6700000000001, 
      8829.8299999999999, 
      9533.4400000000005, 
      9952.7099999999991
    ], 
    "sanitation_rural_unimproved_total": [
      1287.5799999999999, 
      1200.4300000000001, 
      1028.46, 
      887.32000000000005, 
      800.63999999999999
    ], 
    "water_rural_improved_piped": [
      1519.0, 
      1646.0, 
      1659.0, 
      1680.0, 
      1663.0
    ], 
    "sanitation_total_unimproved_other": [
      468.0, 
      347.0, 
      309.0, 
      285.0, 
      254.0
    ], 
    "sanitation_urban_improved": [
      3379.9099999999999, 
      3942.8400000000001, 
      4685.3699999999999, 
      5473.4099999999999, 
      5979.8100000000004
    ], 
    "water_urban_improved_piped": [
      3828.0, 
      4224.0, 
      4740.0, 
      5282.0, 
      5499.0
    ]
  }, 
  "Ukraine": {
    "water_rural_unimproved": [
      -1.0, 
      1519.0, 
      1284.0, 
      756.0, 
      443.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      15357.0, 
      14772.0, 
      14362.0, 
      14301.0
    ], 
    "water_urban_improved_other": [
      2066.0, 
      2051.0, 
      2297.0, 
      3182.0, 
      3438.0
    ], 
    "sanitation_urban_unimproved_shared": [
      688.70000000000005, 
      683.74000000000001, 
      656.27999999999997, 
      636.36000000000001, 
      624.97000000000003
    ], 
    "sanitation_rural_improved": [
      15604.370000000001, 
      15357.01, 
      14611.219999999999, 
      13606.360000000001, 
      13269.4
    ], 
    "water_total_improved_other": [
      -1.0, 
      7789.0, 
      9041.0, 
      12253.0, 
      14053.0
    ], 
    "sanitation_total_improved": [
      49006.0, 
      48519.0, 
      46440.0, 
      44470.0, 
      43580.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      344.35000000000002, 
      341.87, 
      328.13999999999999, 
      318.18000000000001, 
      312.49000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      685.90999999999997, 
      675.02999999999997, 
      642.25, 
      604.73000000000002, 
      589.75
    ], 
    "population_urban": [
      34435.110000000001, 
      34187.230000000003, 
      32813.860000000001, 
      31818.110000000001, 
      31248.599999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      41413.0, 
      38217.0, 
      33609.0, 
      30872.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      34091.0, 
      33845.0, 
      32486.0, 
      31500.0, 
      30624.0
    ], 
    "sanitation_total_unimproved_total": [
      2576.77, 
      2544.0599999999999, 
      2430.1399999999999, 
      2466.2800000000002, 
      2412.3800000000001
    ], 
    "sanitation_rural_unimproved_other": [
      857.38, 
      843.78999999999996, 
      802.80999999999995, 
      907.09000000000003, 
      884.63
    ], 
    "water_total_improved_total": [
      -1.0, 
      49202.0, 
      47258.0, 
      45862.0, 
      44925.0
    ], 
    "population_rural": [
      17147.66, 
      16875.830000000002, 
      16056.280000000001, 
      15118.18, 
      14743.780000000001
    ], 
    "sanitation_total_unimproved_shared": [
      1375.0, 
      1359.0, 
      1298.0, 
      1241.0, 
      1215.0
    ], 
    "water_urban_unimproved": [
      344.0, 
      342.0, 
      328.0, 
      318.0, 
      625.0
    ], 
    "sanitation_urban_unimproved_total": [
      1033.05, 
      1025.6199999999999, 
      984.41999999999996, 
      954.54999999999995, 
      937.46000000000004
    ], 
    "water_rural_improved_other": [
      -1.0, 
      5738.0, 
      6744.0, 
      9071.0, 
      10615.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      1861.0, 
      1612.0, 
      1074.0, 
      1068.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      51582.769999999997, 
      51063.059999999998, 
      48870.139999999999, 
      46936.279999999999, 
      45992.379999999997
    ], 
    "sanitation_rural_unimproved_total": [
      1543.29, 
      1518.8199999999999, 
      1445.0599999999999, 
      1511.8199999999999, 
      1474.3800000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      9619.0, 
      8028.0, 
      5291.0, 
      3686.0
    ], 
    "sanitation_total_unimproved_other": [
      1201.0, 
      1186.0, 
      1131.0, 
      1225.0, 
      1197.0
    ], 
    "sanitation_urban_improved": [
      33402.059999999998, 
      33161.610000000001, 
      31829.439999999999, 
      30863.560000000001, 
      30311.139999999999
    ], 
    "water_urban_improved_piped": [
      32025.0, 
      31794.0, 
      30189.0, 
      28318.0, 
      27186.0
    ]
  }, 
  "Bahrain": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      434.49000000000001, 
      510.61000000000001, 
      574.42999999999995, 
      643.30999999999995, 
      686.52999999999997
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      434.0, 
      511.0, 
      574.0, 
      643.0, 
      687.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      58.460000000000001, 
      67.079999999999998, 
      75.579999999999998, 
      84.269999999999996, 
      89.049999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      492.94999999999999, 
      577.69000000000005, 
      650.00999999999999, 
      727.57000000000005, 
      775.58000000000004
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      434.49000000000001, 
      510.61000000000001, 
      574.42999999999995, 
      643.30999999999995, 
      686.52999999999997
    ], 
    "water_urban_improved_piped": [
      434.0, 
      511.0, 
      574.0, 
      643.0, 
      687.0
    ]
  }, 
  "Tonga": {
    "water_rural_unimproved": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      75.0, 
      76.0, 
      77.0, 
      78.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      6.0, 
      7.0, 
      6.0, 
      26.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      70.180000000000007, 
      72.109999999999999, 
      72.730000000000004, 
      74.370000000000005, 
      74.840000000000003
    ], 
    "water_total_improved_other": [
      -1.0, 
      24.0, 
      25.0, 
      24.0, 
      104.0
    ], 
    "sanitation_total_improved": [
      91.0, 
      94.0, 
      95.0, 
      98.0, 
      100.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.42999999999999999, 
      0.45000000000000001, 
      0.46000000000000002, 
      0.48999999999999999, 
      0.51000000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      21.469999999999999, 
      22.27, 
      22.829999999999998, 
      24.41, 
      25.600000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      73.0, 
      74.0, 
      77.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      22.0, 
      23.0, 
      24.0, 
      26.0
    ], 
    "sanitation_total_unimproved_total": [
      3.5699999999999998, 
      3.3799999999999999, 
      3.5899999999999999, 
      3.8799999999999999, 
      3.5699999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      2.9199999999999999, 
      3.0, 
      3.0299999999999998, 
      3.1000000000000001, 
      3.1200000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      97.0, 
      99.0, 
      101.0, 
      104.0
    ], 
    "population_rural": [
      73.099999999999994, 
      75.109999999999999, 
      75.760000000000005, 
      77.469999999999999, 
      77.959999999999994
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.42999999999999999, 
      0.45000000000000001, 
      0.46000000000000002, 
      0.48999999999999999, 
      0.51000000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      18.0, 
      18.0, 
      18.0, 
      78.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      94.569999999999993, 
      97.379999999999995, 
      98.590000000000003, 
      101.88, 
      103.56999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2.9199999999999999, 
      3.0, 
      3.0299999999999998, 
      3.1000000000000001, 
      3.1200000000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      57.0, 
      58.0, 
      59.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      4.0
    ], 
    "sanitation_urban_improved": [
      21.039999999999999, 
      21.82, 
      22.370000000000001, 
      23.920000000000002, 
      25.09
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      16.0, 
      16.0, 
      18.0, 
      -1.0
    ]
  }, 
  "Cayman Islands": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      14.0, 
      11.0, 
      7.0, 
      2.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      1.05, 
      1.3200000000000001, 
      1.6200000000000001, 
      2.1000000000000001, 
      2.23
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      26.140000000000001, 
      32.920000000000002, 
      40.409999999999997, 
      52.579999999999998, 
      55.649999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      31.0, 
      38.0, 
      50.0, 
      53.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      2.0, 
      2.0, 
      3.0, 
      3.0
    ], 
    "sanitation_urban_unimproved_total": [
      1.04, 
      1.3200000000000001, 
      1.6200000000000001, 
      2.1000000000000001, 
      2.2200000000000002
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      26.140000000000001, 
      32.920000000000002, 
      40.409999999999997, 
      52.579999999999998, 
      55.649999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      25.100000000000001, 
      31.600000000000001, 
      38.789999999999999, 
      50.479999999999997, 
      53.43
    ], 
    "water_urban_improved_piped": [
      10.0, 
      17.0, 
      27.0, 
      43.0, 
      51.0
    ]
  }, 
  "Western Sahara": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      190.21000000000001, 
      225.75, 
      264.43000000000001, 
      355.83999999999997, 
      404.43000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      30.559999999999999, 
      33.280000000000001, 
      50.890000000000001, 
      84.590000000000003, 
      92.319999999999993
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      220.78, 
      259.02999999999997, 
      315.31, 
      440.43000000000001, 
      496.75
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Indonesia": {
    "water_rural_unimproved": [
      46791.0, 
      43195.0, 
      39288.0, 
      34104.0, 
      31943.0
    ], 
    "water_rural_improved_total": [
      76343.0, 
      80220.0, 
      79766.0, 
      79578.0, 
      78206.0
    ], 
    "water_urban_improved_other": [
      36891.0, 
      42895.0, 
      50873.0, 
      58040.0, 
      60942.0
    ], 
    "sanitation_urban_unimproved_shared": [
      4340.1199999999999, 
      5446.9099999999999, 
      6898.0699999999997, 
      9497.5100000000002, 
      10547.68
    ], 
    "sanitation_rural_improved": [
      27089.41, 
      32087.889999999999, 
      35716.300000000003, 
      37515.209999999999, 
      39653.529999999999
    ], 
    "water_total_improved_other": [
      110771.0, 
      118178.0, 
      124686.0, 
      129660.0, 
      130336.0
    ], 
    "sanitation_total_improved": [
      58555.0, 
      72940.0, 
      90038.0, 
      107163.0, 
      118176.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      8680.2399999999998, 
      10212.959999999999, 
      10347.110000000001, 
      9497.5100000000002, 
      9375.7099999999991
    ], 
    "sanitation_total_unimproved_opendefecation": [
      68869.0, 
      67112.0, 
      64661.0, 
      60083.0, 
      58405.0
    ], 
    "sanitation_rural_unimproved_shared": [
      8619.3600000000006, 
      9873.2000000000007, 
      10714.889999999999, 
      11368.25, 
      12116.360000000001
    ], 
    "population_urban": [
      54251.470000000001, 
      68086.389999999999, 
      86225.929999999993, 
      105527.84, 
      117196.39
    ], 
    "water_total_improved_piped": [
      15483.0, 
      24001.0, 
      32683.0, 
      44893.0, 
      52175.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      9765.2700000000004, 
      11574.690000000001, 
      14658.41, 
      16884.450000000001, 
      18751.419999999998
    ], 
    "water_urban_improved_total": [
      49911.0, 
      61959.0, 
      77603.0, 
      94975.0, 
      104305.0
    ], 
    "sanitation_total_unimproved_total": [
      118830.14999999999, 
      118561.35000000001, 
      115242.27, 
      112047.28999999999, 
      109169.08
    ], 
    "sanitation_rural_unimproved_other": [
      28320.740000000002, 
      25917.139999999999, 
      22620.330000000002, 
      21599.669999999998, 
      18725.279999999999
    ], 
    "water_total_improved_total": [
      126254.0, 
      142179.0, 
      157369.0, 
      174553.0, 
      182511.0
    ], 
    "population_rural": [
      123133.67, 
      123414.96000000001, 
      119054.35000000001, 
      113682.46000000001, 
      110148.69
    ], 
    "sanitation_total_unimproved_shared": [
      12959.0, 
      15320.0, 
      17613.0, 
      20866.0, 
      22664.0
    ], 
    "water_urban_unimproved": [
      4340.0, 
      6127.0, 
      8623.0, 
      10553.0, 
      12891.0
    ], 
    "sanitation_urban_unimproved_total": [
      22785.619999999999, 
      27234.560000000001, 
      31903.599999999999, 
      35879.470000000001, 
      38674.809999999998
    ], 
    "water_rural_improved_other": [
      73880.0, 
      75283.0, 
      73813.0, 
      71620.0, 
      69394.0
    ], 
    "water_total_unimproved": [
      51131.0, 
      49322.0, 
      47911.0, 
      44657.0, 
      44834.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      59104.160000000003, 
      55536.730000000003, 
      50002.82, 
      43199.330000000002, 
      39653.529999999999
    ], 
    "population_total": [
      177385.14999999999, 
      191501.35000000001, 
      205280.26999999999, 
      219210.29000000001, 
      227345.07999999999
    ], 
    "sanitation_rural_unimproved_total": [
      96044.259999999995, 
      91327.070000000007, 
      83338.050000000003, 
      76167.25, 
      70495.160000000003
    ], 
    "water_rural_improved_piped": [
      2463.0, 
      4937.0, 
      5953.0, 
      7958.0, 
      8812.0
    ], 
    "sanitation_total_unimproved_other": [
      37001.0, 
      36130.0, 
      32967.0, 
      31098.0, 
      28101.0
    ], 
    "sanitation_urban_improved": [
      31465.849999999999, 
      40851.830000000002, 
      54322.330000000002, 
      69648.369999999995, 
      78521.580000000002
    ], 
    "water_urban_improved_piped": [
      13020.0, 
      19064.0, 
      26730.0, 
      36935.0, 
      43363.0
    ]
  }, 
  "Central African Republic": {
    "water_rural_unimproved": [
      980.0, 
      1088.0, 
      1191.0, 
      1270.0, 
      1308.0
    ], 
    "water_rural_improved_total": [
      870.0, 
      1005.0, 
      1145.0, 
      1270.0, 
      1360.0
    ], 
    "water_urban_improved_other": [
      755.0, 
      919.0, 
      1099.0, 
      1281.0, 
      1438.0
    ], 
    "sanitation_urban_unimproved_shared": [
      129.41, 
      173.81, 
      253.77000000000001, 
      343.51999999999998, 
      401.19999999999999
    ], 
    "sanitation_rural_improved": [
      92.5, 
      188.37, 
      373.74000000000001, 
      584.20000000000005, 
      746.92999999999995
    ], 
    "water_total_improved_other": [
      1625.0, 
      1924.0, 
      2244.0, 
      2551.0, 
      2798.0
    ], 
    "sanitation_total_improved": [
      319.0, 
      498.0, 
      825.0, 
      1193.0, 
      1466.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      614.69000000000005, 
      657.98000000000002, 
      620.34000000000003, 
      546.51999999999998, 
      501.5
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1015.0, 
      1041.0, 
      1019.0, 
      926.0, 
      877.0
    ], 
    "sanitation_rural_unimproved_shared": [
      37.0, 
      104.65000000000001, 
      186.87, 
      304.80000000000001, 
      373.45999999999998
    ], 
    "population_urban": [
      1078.4100000000001, 
      1241.47, 
      1409.8499999999999, 
      1561.48, 
      1671.6600000000001
    ], 
    "water_total_improved_piped": [
      86.0, 
      87.0, 
      99.0, 
      109.0, 
      100.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      107.84, 
      99.319999999999993, 
      84.590000000000003, 
      62.460000000000001, 
      50.149999999999999
    ], 
    "water_urban_improved_total": [
      841.0, 
      1006.0, 
      1198.0, 
      1390.0, 
      1538.0
    ], 
    "sanitation_total_unimproved_total": [
      2609.46, 
      2836.5100000000002, 
      2920.73, 
      2908.48, 
      2873.2600000000002
    ], 
    "sanitation_rural_unimproved_other": [
      814.02999999999997, 
      858.14999999999998, 
      840.90999999999997, 
      787.39999999999998, 
      720.25
    ], 
    "water_total_improved_total": [
      1711.0, 
      2011.0, 
      2343.0, 
      2660.0, 
      2898.0
    ], 
    "population_rural": [
      1850.0599999999999, 
      2093.04, 
      2335.8699999999999, 
      2540.0100000000002, 
      2667.5999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      166.0, 
      279.0, 
      441.0, 
      649.0, 
      774.0
    ], 
    "water_urban_unimproved": [
      237.0, 
      235.0, 
      212.0, 
      171.0, 
      134.0
    ], 
    "sanitation_urban_unimproved_total": [
      851.94000000000005, 
      931.10000000000002, 
      958.70000000000005, 
      952.5, 
      952.85000000000002
    ], 
    "water_rural_improved_other": [
      870.0, 
      1005.0, 
      1145.0, 
      1270.0, 
      1360.0
    ], 
    "water_total_unimproved": [
      1217.0, 
      1323.0, 
      1403.0, 
      1441.0, 
      1442.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      906.52999999999997, 
      941.87, 
      934.35000000000002, 
      863.60000000000002, 
      826.96000000000004
    ], 
    "population_total": [
      2928.46, 
      3334.5100000000002, 
      3745.73, 
      4101.4799999999996, 
      4339.2600000000002
    ], 
    "sanitation_rural_unimproved_total": [
      1757.5599999999999, 
      1904.6700000000001, 
      1962.1300000000001, 
      1955.8099999999999, 
      1920.6700000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      1429.0, 
      1516.0, 
      1461.0, 
      1334.0, 
      1221.0
    ], 
    "sanitation_urban_improved": [
      226.47, 
      310.37, 
      451.14999999999998, 
      608.98000000000002, 
      718.80999999999995
    ], 
    "water_urban_improved_piped": [
      86.0, 
      87.0, 
      99.0, 
      109.0, 
      100.0
    ]
  }, 
  "Mauritius": {
    "water_rural_unimproved": [
      6.0, 
      6.0, 
      7.0, 
      8.0, 
      8.0
    ], 
    "water_rural_improved_total": [
      587.0, 
      634.0, 
      678.0, 
      715.0, 
      730.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      32.460000000000001, 
      34.189999999999998, 
      35.689999999999998, 
      37.07, 
      37.960000000000001
    ], 
    "sanitation_rural_improved": [
      533.32000000000005, 
      576.03999999999996, 
      616.48000000000002, 
      650.39999999999998, 
      663.80999999999995
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      964.0, 
      1030.0, 
      1090.0, 
      1143.0, 
      1168.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      41.479999999999997, 
      44.799999999999997, 
      47.950000000000003, 
      50.590000000000003, 
      51.630000000000003
    ], 
    "population_urban": [
      463.70999999999998, 
      488.45999999999998, 
      509.81999999999999, 
      529.62, 
      542.24000000000001
    ], 
    "water_total_improved_piped": [
      1051.0, 
      1122.0, 
      1188.0, 
      1245.0, 
      1272.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      464.0, 
      488.0, 
      510.0, 
      530.0, 
      542.0
    ], 
    "sanitation_total_unimproved_total": [
      92.280000000000001, 
      98.510000000000005, 
      104.8, 
      109.29000000000001, 
      111.8
    ], 
    "sanitation_rural_unimproved_other": [
      17.780000000000001, 
      19.199999999999999, 
      20.550000000000001, 
      21.68, 
      22.129999999999999
    ], 
    "water_total_improved_total": [
      1051.0, 
      1122.0, 
      1188.0, 
      1245.0, 
      1272.0
    ], 
    "population_rural": [
      592.57000000000005, 
      640.04999999999995, 
      684.98000000000002, 
      722.66999999999996, 
      737.55999999999995
    ], 
    "sanitation_total_unimproved_shared": [
      73.0, 
      79.0, 
      84.0, 
      88.0, 
      90.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      32.460000000000001, 
      34.189999999999998, 
      35.689999999999998, 
      37.079999999999998, 
      37.960000000000001
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      6.0, 
      6.0, 
      7.0, 
      8.0, 
      8.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      1056.28, 
      1128.51, 
      1194.8, 
      1252.29, 
      1279.8
    ], 
    "sanitation_rural_unimproved_total": [
      59.25, 
      64.010000000000005, 
      68.5, 
      72.269999999999996, 
      73.75
    ], 
    "water_rural_improved_piped": [
      587.0, 
      634.0, 
      678.0, 
      715.0, 
      730.0
    ], 
    "sanitation_total_unimproved_other": [
      18.0, 
      19.0, 
      21.0, 
      22.0, 
      22.0
    ], 
    "sanitation_urban_improved": [
      431.25, 
      454.26999999999998, 
      474.13, 
      492.54000000000002, 
      504.27999999999997
    ], 
    "water_urban_improved_piped": [
      464.0, 
      488.0, 
      510.0, 
      530.0, 
      542.0
    ]
  }, 
  "Sweden": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1446.0, 
      1428.0, 
      1415.0, 
      1422.0, 
      1425.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1446.4400000000001, 
      1427.8499999999999, 
      1415.3199999999999, 
      1421.71, 
      1424.8699999999999
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      8558.0, 
      8827.0, 
      8860.0, 
      9067.0, 
      9205.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      7112.3900000000003, 
      7399.1000000000004, 
      7444.8400000000001, 
      7644.7299999999996, 
      7779.7299999999996
    ], 
    "water_total_improved_piped": [
      8558.0, 
      8827.0, 
      8860.0, 
      9067.0, 
      9205.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      7112.0, 
      7399.0, 
      7445.0, 
      7645.0, 
      7780.0
    ], 
    "sanitation_total_unimproved_total": [
      0.82999999999999996, 
      -0.050000000000000003, 
      0.16, 
      -0.56000000000000005, 
      -0.40000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      8558.0, 
      8827.0, 
      8860.0, 
      9067.0, 
      9205.0
    ], 
    "population_rural": [
      1446.4400000000001, 
      1427.8499999999999, 
      1415.3199999999999, 
      1421.71, 
      1424.8699999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      8558.8299999999999, 
      8826.9500000000007, 
      8860.1599999999999, 
      9066.4400000000005, 
      9204.6000000000004
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      1446.0, 
      1428.0, 
      1415.0, 
      1422.0, 
      1425.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      7112.3900000000003, 
      7399.1000000000004, 
      7444.8400000000001, 
      7644.7299999999996, 
      7779.7299999999996
    ], 
    "water_urban_improved_piped": [
      7112.0, 
      7399.0, 
      7445.0, 
      7645.0, 
      7780.0
    ]
  }, 
  "Belarus": {
    "water_rural_unimproved": [
      35.0, 
      33.0, 
      30.0, 
      28.0, 
      26.0
    ], 
    "water_rural_improved_total": [
      3455.0, 
      3261.0, 
      2993.0, 
      2706.0, 
      2545.0
    ], 
    "water_urban_improved_other": [
      6769.0, 
      907.0, 
      773.0, 
      496.0, 
      356.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      558.05999999999995, 
      562.41999999999996, 
      566.62, 
      568.62
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      3162.0999999999999, 
      2902.3699999999999, 
      2651.6500000000001, 
      2493.96
    ], 
    "water_total_improved_other": [
      10224.0, 
      3674.0, 
      2859.0, 
      1671.0, 
      1050.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      9510.0, 
      9300.0, 
      9097.0, 
      8962.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      69.760000000000005, 
      70.299999999999997, 
      70.829999999999998, 
      71.079999999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      65.879999999999995, 
      60.469999999999999, 
      54.670000000000002, 
      51.420000000000002
    ], 
    "population_urban": [
      6769.4499999999998, 
      6975.6999999999998, 
      7030.2399999999998, 
      7082.6999999999998, 
      7107.7600000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      6563.0, 
      7164.0, 
      8118.0, 
      8603.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      6769.0, 
      6976.0, 
      7030.0, 
      7083.0, 
      7108.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      759.55999999999995, 
      753.54999999999995, 
      719.35000000000002, 
      716.85000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      65.879999999999995, 
      60.469999999999999, 
      27.34, 
      25.710000000000001
    ], 
    "water_total_improved_total": [
      10224.0, 
      10237.0, 
      10023.0, 
      9789.0, 
      9653.0
    ], 
    "population_rural": [
      3490.25, 
      3293.8600000000001, 
      3023.3000000000002, 
      2733.6599999999999, 
      2571.0900000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      624.0, 
      622.0, 
      622.0, 
      620.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      627.80999999999995, 
      632.72000000000003, 
      637.45000000000005, 
      639.70000000000005
    ], 
    "water_rural_improved_other": [
      3455.0, 
      2767.0, 
      2086.0, 
      1175.0, 
      694.0
    ], 
    "water_total_unimproved": [
      35.0, 
      33.0, 
      30.0, 
      28.0, 
      26.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      10259.700000000001, 
      10269.559999999999, 
      10053.549999999999, 
      9816.3500000000004, 
      9678.8500000000004
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      131.75999999999999, 
      120.93000000000001, 
      82.010000000000005, 
      77.129999999999995
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      494.0, 
      907.0, 
      1531.0, 
      1851.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      136.0, 
      130.0, 
      98.0, 
      97.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      6347.8900000000003, 
      6397.5200000000004, 
      6445.25, 
      6468.0600000000004
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      6069.0, 
      6257.0, 
      6587.0, 
      6752.0
    ]
  }, 
  "Occupied Palestinian Territory": {
    "water_rural_unimproved": [
      -1.0, 
      124.0, 
      107.0, 
      97.0, 
      105.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      650.0, 
      791.0, 
      972.0, 
      1063.0
    ], 
    "water_urban_improved_other": [
      1462.0, 
      148.0, 
      157.0, 
      189.0, 
      208.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      650.41999999999996, 
      754.72000000000003, 
      897.69000000000005, 
      981.45000000000005
    ], 
    "water_total_improved_other": [
      -1.0, 
      310.0, 
      373.0, 
      477.0, 
      523.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      2327.0, 
      2803.0, 
      3349.0, 
      3691.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      129.0, 
      180.08000000000001, 
      242.40000000000001, 
      268.05000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      91.0, 
      41.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      1462.1099999999999, 
      1842.8499999999999, 
      2250.9699999999998, 
      2693.3299999999999, 
      2978.3899999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      2183.0, 
      2556.0, 
      2946.0, 
      3250.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      36.859999999999999, 
      22.510000000000002, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1462.0, 
      1843.0, 
      2138.0, 
      2451.0, 
      2710.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      290.16000000000003, 
      346.44999999999999, 
      413.00999999999999, 
      455.77999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      69.689999999999998, 
      125.79000000000001, 
      170.99000000000001, 
      186.94
    ], 
    "water_total_improved_total": [
      -1.0, 
      2493.0, 
      2929.0, 
      3423.0, 
      3773.0
    ], 
    "population_rural": [
      692.36000000000001, 
      774.30999999999995, 
      898.47000000000003, 
      1068.6700000000001, 
      1168.4000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      113.0, 
      242.0, 
      268.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      165.86000000000001, 
      202.58000000000001, 
      242.40000000000001, 
      268.06
    ], 
    "water_rural_improved_other": [
      -1.0, 
      162.0, 
      216.0, 
      288.0, 
      315.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      124.0, 
      220.0, 
      339.0, 
      373.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      54.200000000000003, 
      17.969999999999999, 
      0.0, 
      0.0
    ], 
    "population_total": [
      2154.4699999999998, 
      2617.1599999999999, 
      3149.4499999999998, 
      3762.0100000000002, 
      4146.7799999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      123.89, 
      143.75, 
      170.97999999999999, 
      186.94999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      488.0, 
      575.0, 
      684.0, 
      748.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      199.0, 
      306.0, 
      413.0, 
      455.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      1676.99, 
      2048.3899999999999, 
      2450.9299999999998, 
      2710.3299999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1695.0, 
      1981.0, 
      2262.0, 
      2502.0
    ]
  }, 
  "Mali": {
    "water_rural_unimproved": [
      5176.0, 
      5121.0, 
      5010.0, 
      4937.0, 
      4827.0
    ], 
    "water_rural_improved_total": [
      1460.0, 
      1991.0, 
      2581.0, 
      3291.0, 
      3793.0
    ], 
    "water_urban_improved_other": [
      747.0, 
      974.0, 
      1261.0, 
      1658.0, 
      1920.0
    ], 
    "sanitation_urban_unimproved_shared": [
      403.69, 
      511.73000000000002, 
      674.36000000000001, 
      865.09000000000003, 
      1021.41
    ], 
    "sanitation_rural_improved": [
      1526.3299999999999, 
      1778.04, 
      2125.46, 
      2550.7800000000002, 
      2758.4299999999998
    ], 
    "water_total_improved_other": [
      2207.0, 
      2894.0, 
      3766.0, 
      4867.0, 
      5627.0
    ], 
    "sanitation_total_improved": [
      2253.0, 
      2728.0, 
      3327.0, 
      4137.0, 
      4597.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      807.37, 
      877.25, 
      938.24000000000001, 
      1009.27, 
      1062.27
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2470.0, 
      2373.0, 
      2242.0, 
      2119.0, 
      1973.0
    ], 
    "sanitation_rural_unimproved_shared": [
      663.62, 
      782.34000000000003, 
      910.90999999999997, 
      1151.97, 
      1206.8099999999999
    ], 
    "population_urban": [
      2018.4400000000001, 
      2436.8000000000002, 
      2932.0100000000002, 
      3604.52, 
      4085.6599999999999
    ], 
    "water_total_improved_piped": [
      343.0, 
      583.0, 
      838.0, 
      1199.0, 
      1475.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      80.739999999999995, 
      97.469999999999999, 
      117.28, 
      144.18000000000001, 
      163.43000000000001
    ], 
    "water_urban_improved_total": [
      1090.0, 
      1486.0, 
      2023.0, 
      2775.0, 
      3309.0
    ], 
    "sanitation_total_unimproved_total": [
      6401.6400000000003, 
      6820.9700000000003, 
      7195.9399999999996, 
      7695.8500000000004, 
      8108.7399999999998
    ], 
    "sanitation_rural_unimproved_other": [
      2057.2199999999998, 
      2275.8899999999999, 
      2429.0999999999999, 
      2550.7800000000002, 
      2844.6300000000001
    ], 
    "water_total_improved_total": [
      2550.0, 
      3477.0, 
      4604.0, 
      6066.0, 
      7102.0
    ], 
    "population_rural": [
      6636.1999999999998, 
      7112.1700000000001, 
      7590.9300000000003, 
      8228.3199999999997, 
      8620.0799999999999
    ], 
    "sanitation_total_unimproved_shared": [
      1068.0, 
      1294.0, 
      1585.0, 
      2017.0, 
      2228.0
    ], 
    "water_urban_unimproved": [
      928.0, 
      951.0, 
      909.0, 
      830.0, 
      777.0
    ], 
    "sanitation_urban_unimproved_total": [
      1291.8, 
      1486.45, 
      1729.8900000000001, 
      2018.53, 
      2247.1100000000001
    ], 
    "water_rural_improved_other": [
      1460.0, 
      1920.0, 
      2505.0, 
      3209.0, 
      3707.0
    ], 
    "water_total_unimproved": [
      6104.0, 
      6072.0, 
      5919.0, 
      5767.0, 
      5604.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2389.0300000000002, 
      2275.8899999999999, 
      2125.46, 
      1974.8, 
      1810.22
    ], 
    "population_total": [
      8654.6399999999994, 
      9548.9699999999993, 
      10522.940000000001, 
      11832.85, 
      12705.74
    ], 
    "sanitation_rural_unimproved_total": [
      5109.8699999999999, 
      5334.1300000000001, 
      5465.4700000000003, 
      5677.54, 
      5861.6499999999996
    ], 
    "water_rural_improved_piped": [
      0.0, 
      71.0, 
      76.0, 
      82.0, 
      86.0
    ], 
    "sanitation_total_unimproved_other": [
      2864.0, 
      3153.0, 
      3367.0, 
      3560.0, 
      3907.0
    ], 
    "sanitation_urban_improved": [
      726.63999999999999, 
      950.35000000000002, 
      1202.1199999999999, 
      1585.99, 
      1838.55
    ], 
    "water_urban_improved_piped": [
      343.0, 
      512.0, 
      762.0, 
      1117.0, 
      1389.0
    ]
  }, 
  "Bulgaria": {
    "water_rural_unimproved": [
      29.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      2936.0, 
      2694.0, 
      2493.0, 
      2305.0, 
      2195.0
    ], 
    "water_urban_improved_other": [
      234.0, 
      226.0, 
      221.0, 
      218.0, 
      216.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      2905.8800000000001, 
      2666.5700000000002, 
      2493.3299999999999, 
      2304.5500000000002, 
      2194.6199999999999
    ], 
    "water_total_improved_other": [
      1035.0, 
      981.0, 
      919.0, 
      2523.0, 
      2411.0
    ], 
    "sanitation_total_improved": [
      8760.0, 
      8330.0, 
      8006.0, 
      7740.0, 
      7593.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      5853.7299999999996, 
      5663.1199999999999, 
      5512.7399999999998, 
      5434.8100000000004, 
      5397.8999999999996
    ], 
    "water_total_improved_piped": [
      7755.0, 
      7376.0, 
      7087.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      5854.0, 
      5663.0, 
      5513.0, 
      5435.0, 
      5398.0
    ], 
    "sanitation_total_unimproved_total": [
      58.920000000000002, 
      26.620000000000001, 
      0.070000000000000007, 
      -0.64000000000000001, 
      -0.47999999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      59.299999999999997, 
      26.940000000000001, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      8790.0, 
      8357.0, 
      8006.0, 
      7740.0, 
      7593.0
    ], 
    "population_rural": [
      2965.1799999999998, 
      2693.5100000000002, 
      2493.3299999999999, 
      2304.5500000000002, 
      2194.6199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      801.0, 
      755.0, 
      698.0, 
      2305.0, 
      2195.0
    ], 
    "water_total_unimproved": [
      29.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      8818.9200000000001, 
      8356.6200000000008, 
      8006.0699999999997, 
      7739.3599999999997, 
      7592.5200000000004
    ], 
    "sanitation_rural_unimproved_total": [
      59.299999999999997, 
      26.940000000000001, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      2135.0, 
      1939.0, 
      1795.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      59.0, 
      27.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      5853.7299999999996, 
      5663.1199999999999, 
      5512.7399999999998, 
      5434.8100000000004, 
      5397.8999999999996
    ], 
    "water_urban_improved_piped": [
      5620.0, 
      5437.0, 
      5292.0, 
      5217.0, 
      5182.0
    ]
  }, 
  "Romania": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      370.5, 
      367.20999999999998, 
      355.25, 
      348.26999999999998, 
      347.29000000000002
    ], 
    "sanitation_rural_improved": [
      5645.5299999999997, 
      5533.46, 
      5559.8900000000003, 
      5413.8900000000003, 
      5283.8800000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      16514.0, 
      16305.0, 
      15981.0, 
      15630.0, 
      15471.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      1111.49, 
      1101.6400000000001, 
      1065.76, 
      1044.8099999999999, 
      1041.8699999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      108.56999999999999, 
      104.40000000000001, 
      102.95999999999999, 
      100.26000000000001, 
      97.849999999999994
    ], 
    "population_urban": [
      12349.92, 
      12240.459999999999, 
      11841.77, 
      11608.950000000001, 
      11576.32
    ], 
    "water_total_improved_piped": [
      10823.0, 
      11589.0, 
      12068.0, 
      12654.0, 
      13078.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      6692.7200000000003, 
      6375.9499999999998, 
      6156.8699999999999, 
      6004.6700000000001, 
      5890.29
    ], 
    "sanitation_rural_unimproved_other": [
      5102.6999999999998, 
      4802.6300000000001, 
      4633.25, 
      4511.5799999999999, 
      4403.2399999999998
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      10856.799999999999, 
      10440.5, 
      10296.1, 
      10025.719999999999, 
      9784.9699999999993
    ], 
    "sanitation_total_unimproved_shared": [
      479.0, 
      471.0, 
      458.0, 
      448.0, 
      445.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      1481.99, 
      1468.8599999999999, 
      1421.01, 
      1393.0699999999999, 
      1389.1600000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      23206.720000000001, 
      22680.950000000001, 
      22137.869999999999, 
      21634.669999999998, 
      21361.290000000001
    ], 
    "sanitation_rural_unimproved_total": [
      5211.2700000000004, 
      4907.04, 
      4736.21, 
      4611.8299999999999, 
      4501.0900000000001
    ], 
    "water_rural_improved_piped": [
      326.0, 
      940.0, 
      1647.0, 
      2206.0, 
      2544.0
    ], 
    "sanitation_total_unimproved_other": [
      6214.0, 
      5905.0, 
      5699.0, 
      5557.0, 
      5445.0
    ], 
    "sanitation_urban_improved": [
      10867.93, 
      10771.6, 
      10420.76, 
      10215.879999999999, 
      10187.16
    ], 
    "water_urban_improved_piped": [
      10497.0, 
      10649.0, 
      10421.0, 
      10448.0, 
      10534.0
    ]
  }, 
  "Angola": {
    "water_rural_unimproved": [
      4020.0, 
      4214.0, 
      4370.0, 
      4667.0, 
      4833.0
    ], 
    "water_rural_improved_total": [
      2681.0, 
      2809.0, 
      2914.0, 
      2984.0, 
      2962.0
    ], 
    "water_urban_improved_other": [
      1148.0, 
      1710.0, 
      2169.0, 
      2511.0, 
      2658.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      402.07999999999998, 
      491.63999999999999, 
      801.28999999999996, 
      1147.71, 
      1403.0699999999999
    ], 
    "water_total_improved_other": [
      3829.0, 
      4519.0, 
      5010.0, 
      5418.0, 
      5542.0
    ], 
    "sanitation_total_improved": [
      2699.0, 
      3801.0, 
      5698.0, 
      8321.0, 
      10197.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      277.20999999999998, 
      386.10000000000002, 
      699.50999999999999, 
      1075.9400000000001, 
      1329.3599999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6546.0, 
      7088.0, 
      6280.0, 
      5155.0, 
      4233.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3960.0900000000001, 
      5515.71, 
      6995.1099999999997, 
      8966.1900000000005, 
      10225.83
    ], 
    "water_total_improved_piped": [
      40.0, 
      55.0, 
      912.0, 
      2408.0, 
      3555.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      1386.03, 
      1820.1900000000001, 
      1399.02, 
      717.28999999999996, 
      102.26000000000001
    ], 
    "water_urban_improved_total": [
      1188.0, 
      1765.0, 
      3008.0, 
      4842.0, 
      6135.0
    ], 
    "sanitation_total_unimproved_total": [
      7962.46, 
      8738.1299999999992, 
      8581.5200000000004, 
      8296.5900000000001, 
      7823.6700000000001
    ], 
    "sanitation_rural_unimproved_other": [
      1139.23, 
      1264.22, 
      1602.5699999999999, 
      2065.8800000000001, 
      2260.5
    ], 
    "water_total_improved_total": [
      3869.0, 
      4574.0, 
      5922.0, 
      7826.0, 
      9097.0
    ], 
    "population_rural": [
      6701.3699999999999, 
      7023.4200000000001, 
      7284.4099999999999, 
      7651.3999999999996, 
      7794.8400000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      2772.0, 
      3751.0, 
      3987.0, 
      4124.0, 
      4091.0
    ], 
    "sanitation_urban_unimproved_total": [
      1663.24, 
      2206.2800000000002, 
      2098.54, 
      1793.24, 
      1431.6199999999999
    ], 
    "water_rural_improved_other": [
      2681.0, 
      2809.0, 
      2841.0, 
      2907.0, 
      2884.0
    ], 
    "water_total_unimproved": [
      6792.0, 
      7965.0, 
      8357.0, 
      8791.0, 
      8924.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      5160.0500000000002, 
      5267.5600000000004, 
      4880.5600000000004, 
      4437.8100000000004, 
      4131.2600000000002
    ], 
    "population_total": [
      10661.459999999999, 
      12539.129999999999, 
      14279.52, 
      16617.59, 
      18020.669999999998
    ], 
    "sanitation_rural_unimproved_total": [
      6299.29, 
      6531.7799999999997, 
      6483.1199999999999, 
      6503.6899999999996, 
      6391.7700000000004
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      73.0, 
      77.0, 
      78.0
    ], 
    "sanitation_total_unimproved_other": [
      1416.0, 
      1650.0, 
      2303.0, 
      3142.0, 
      3590.0
    ], 
    "sanitation_urban_improved": [
      2296.8499999999999, 
      3309.4299999999998, 
      4896.5699999999997, 
      7172.9499999999998, 
      8794.2099999999991
    ], 
    "water_urban_improved_piped": [
      40.0, 
      55.0, 
      839.0, 
      2331.0, 
      3477.0
    ]
  }, 
  "Portugal": {
    "water_rural_unimproved": [
      312.0, 
      197.0, 
      93.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      4886.0, 
      4711.0, 
      4570.0, 
      4470.0, 
      4326.0
    ], 
    "water_urban_improved_other": [
      143.0, 
      52.0, 
      55.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      4522.0200000000004, 
      4515.0299999999997, 
      4476.6899999999996, 
      4380.2700000000004, 
      4325.5900000000001
    ], 
    "water_total_improved_other": [
      871.0, 
      444.0, 
      195.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      9160.0, 
      9543.0, 
      9984.0, 
      10457.0, 
      10677.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      47.82, 
      51.299999999999997, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      720.0, 
      444.0, 
      243.0, 
      89.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      4781.5900000000001, 
      5130.2799999999997, 
      5562.9099999999999, 
      6076.9700000000003, 
      6351.4499999999998
    ], 
    "water_total_improved_piped": [
      8701.0, 
      9295.0, 
      9882.0, 
      10486.0, 
      10614.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      95.629999999999995, 
      51.299999999999997, 
      55.630000000000003, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      4686.0, 
      5028.0, 
      5507.0, 
      6016.0, 
      6288.0
    ], 
    "sanitation_total_unimproved_total": [
      819.30999999999995, 
      494.91000000000003, 
      242.12, 
      89.629999999999995, 
      0.040000000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      51.979999999999997, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      9572.0, 
      9739.0, 
      10077.0, 
      10486.0, 
      10614.0
    ], 
    "population_rural": [
      5197.7299999999996, 
      4907.6400000000003, 
      4663.2200000000003, 
      4469.6599999999999, 
      4325.5900000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      96.0, 
      102.0, 
      56.0, 
      61.0, 
      63.0
    ], 
    "sanitation_urban_unimproved_total": [
      143.44999999999999, 
      102.61, 
      55.630000000000003, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      728.0, 
      392.0, 
      140.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      408.0, 
      299.0, 
      149.0, 
      61.0, 
      63.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      623.73000000000002, 
      392.61000000000001, 
      186.53, 
      89.390000000000001, 
      0.0
    ], 
    "population_total": [
      9979.3099999999995, 
      10037.91, 
      10226.120000000001, 
      10546.629999999999, 
      10677.040000000001
    ], 
    "sanitation_rural_unimproved_total": [
      675.71000000000004, 
      392.61000000000001, 
      186.53, 
      89.390000000000001, 
      0.0
    ], 
    "water_rural_improved_piped": [
      4158.0, 
      4319.0, 
      4430.0, 
      4470.0, 
      4326.0
    ], 
    "sanitation_total_unimproved_other": [
      100.0, 
      51.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      4638.1400000000003, 
      5027.6700000000001, 
      5507.2799999999997, 
      6076.9700000000003, 
      6351.4499999999998
    ], 
    "water_urban_improved_piped": [
      4543.0, 
      4976.0, 
      5452.0, 
      6016.0, 
      6288.0
    ]
  }, 
  "Trinidad and Tobago": {
    "water_rural_unimproved": [
      134.0, 
      114.0, 
      104.0, 
      81.0, 
      81.0
    ], 
    "water_rural_improved_total": [
      981.0, 
      1029.0, 
      1051.0, 
      1076.0, 
      1077.0
    ], 
    "water_urban_improved_other": [
      12.0, 
      13.0, 
      14.0, 
      14.0, 
      17.0
    ], 
    "sanitation_urban_unimproved_shared": [
      7.2800000000000002, 
      8.5199999999999996, 
      9.8200000000000003, 
      11.289999999999999, 
      12.31
    ], 
    "sanitation_rural_improved": [
      1036.74, 
      1051.51, 
      1062.4200000000001, 
      1064.52, 
      1064.97
    ], 
    "water_total_improved_other": [
      235.0, 
      253.0, 
      245.0, 
      245.0, 
      237.0
    ], 
    "sanitation_total_improved": [
      1134.0, 
      1164.0, 
      1191.0, 
      1213.0, 
      1227.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      1.22, 
      1.3999999999999999, 
      1.6100000000000001, 
      1.76
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      78.030000000000001, 
      80.010000000000005, 
      80.840000000000003, 
      81.0, 
      81.030000000000001
    ], 
    "population_urban": [
      104.01000000000001, 
      121.68000000000001, 
      140.30000000000001, 
      161.22, 
      175.81
    ], 
    "water_total_improved_piped": [
      842.0, 
      890.0, 
      939.0, 
      987.0, 
      1012.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      96.0, 
      114.0, 
      133.0, 
      156.0, 
      172.0
    ], 
    "sanitation_total_unimproved_total": [
      84.780000000000001, 
      100.62, 
      104.09999999999999, 
      105.3, 
      106.39
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      11.43, 
      11.550000000000001, 
      11.57, 
      11.58
    ], 
    "water_total_improved_total": [
      1077.0, 
      1143.0, 
      1184.0, 
      1232.0, 
      1249.0
    ], 
    "population_rural": [
      1114.77, 
      1142.9400000000001, 
      1154.8, 
      1157.0899999999999, 
      1157.5799999999999
    ], 
    "sanitation_total_unimproved_shared": [
      85.0, 
      89.0, 
      91.0, 
      92.0, 
      93.0
    ], 
    "water_urban_unimproved": [
      8.0, 
      8.0, 
      7.0, 
      5.0, 
      4.0
    ], 
    "sanitation_urban_unimproved_total": [
      7.2800000000000002, 
      9.7300000000000004, 
      11.23, 
      12.9, 
      14.07
    ], 
    "water_rural_improved_other": [
      223.0, 
      240.0, 
      231.0, 
      231.0, 
      220.0
    ], 
    "water_total_unimproved": [
      142.0, 
      122.0, 
      111.0, 
      86.0, 
      85.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      1218.78, 
      1264.6199999999999, 
      1295.0999999999999, 
      1318.3, 
      1333.3900000000001
    ], 
    "sanitation_rural_unimproved_total": [
      78.030000000000001, 
      91.430000000000007, 
      92.379999999999995, 
      92.569999999999993, 
      92.609999999999999
    ], 
    "water_rural_improved_piped": [
      758.0, 
      789.0, 
      820.0, 
      845.0, 
      857.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      12.0, 
      13.0, 
      14.0, 
      14.0
    ], 
    "sanitation_urban_improved": [
      96.730000000000004, 
      111.95, 
      129.06999999999999, 
      148.31999999999999, 
      161.74000000000001
    ], 
    "water_urban_improved_piped": [
      84.0, 
      101.0, 
      119.0, 
      142.0, 
      155.0
    ]
  }, 
  "Tokelau": {
    "water_rural_unimproved": [
      1.0, 
      0.0, 
      1.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      0.66000000000000003, 
      0.67000000000000004, 
      0.96999999999999997, 
      0.98999999999999999, 
      1.1000000000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      0.94999999999999996, 
      0.81999999999999995, 
      0.56999999999999995, 
      0.22, 
      0.080000000000000002
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      1.6100000000000001, 
      1.5, 
      1.53, 
      1.21, 
      1.1899999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      1.6100000000000001, 
      1.5, 
      1.53, 
      1.21, 
      1.1899999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.94999999999999996, 
      0.82999999999999996, 
      0.56000000000000005, 
      0.22, 
      0.089999999999999997
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Cyprus": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      226.0, 
      234.0, 
      247.0, 
      256.0, 
      260.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      226.12, 
      233.80000000000001, 
      246.62, 
      256.44999999999999, 
      259.94
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      680.0, 
      732.0, 
      787.0, 
      836.0, 
      862.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      454.47000000000003, 
      497.69, 
      539.99000000000001, 
      579.54999999999995, 
      602.5
    ], 
    "water_total_improved_piped": [
      680.0, 
      732.0, 
      787.0, 
      836.0, 
      862.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      454.0, 
      498.0, 
      540.0, 
      580.0, 
      602.0
    ], 
    "sanitation_total_unimproved_total": [
      0.59999999999999998, 
      -0.51000000000000001, 
      -0.39000000000000001, 
      0.0, 
      0.42999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      680.0, 
      732.0, 
      787.0, 
      836.0, 
      862.0
    ], 
    "population_rural": [
      226.12, 
      233.80000000000001, 
      246.62, 
      256.44999999999999, 
      259.94
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      680.60000000000002, 
      731.49000000000001, 
      786.61000000000001, 
      836.0, 
      862.42999999999995
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      226.0, 
      234.0, 
      247.0, 
      256.0, 
      260.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      454.47000000000003, 
      497.69, 
      539.99000000000001, 
      579.54999999999995, 
      602.5
    ], 
    "water_urban_improved_piped": [
      454.0, 
      498.0, 
      540.0, 
      580.0, 
      602.0
    ]
  }, 
  "Brunei Darussalam": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      169.19, 
      202.44999999999999, 
      237.25, 
      272.02999999999997, 
      293.50999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      87.810000000000002, 
      92.510000000000005, 
      96.219999999999999, 
      98.040000000000006, 
      98.769999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      257.0, 
      294.95999999999998, 
      333.47000000000003, 
      370.07999999999998, 
      392.27999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Qatar": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      36.0, 
      31.0, 
      31.0, 
      41.0, 
      55.0
    ], 
    "water_urban_improved_other": [
      431.0, 
      495.0, 
      586.0, 
      845.0, 
      1225.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      36.390000000000001, 
      31.129999999999999, 
      31.18, 
      40.539999999999999, 
      55.390000000000001
    ], 
    "water_total_improved_other": [
      467.0, 
      526.0, 
      617.0, 
      886.0, 
      1280.0
    ], 
    "sanitation_total_improved": [
      467.0, 
      526.0, 
      617.0, 
      886.0, 
      1280.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      431.02999999999997, 
      494.60000000000002, 
      585.63999999999999, 
      844.89999999999998, 
      1225.48
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      431.0, 
      495.0, 
      586.0, 
      845.0, 
      1225.0
    ], 
    "sanitation_total_unimproved_total": [
      0.42999999999999999, 
      -0.26000000000000001, 
      -0.17999999999999999, 
      -0.56000000000000005, 
      0.85999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      467.0, 
      526.0, 
      617.0, 
      886.0, 
      1280.0
    ], 
    "population_rural": [
      36.390000000000001, 
      31.129999999999999, 
      31.18, 
      40.539999999999999, 
      55.390000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      36.0, 
      31.0, 
      31.0, 
      41.0, 
      55.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      467.43000000000001, 
      525.74000000000001, 
      616.82000000000005, 
      885.44000000000005, 
      1280.8599999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      431.02999999999997, 
      494.60000000000002, 
      585.63999999999999, 
      844.89999999999998, 
      1225.48
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Malaysia": {
    "water_rural_unimproved": [
      1636.0, 
      1095.0, 
      619.0, 
      83.0, 
      80.0
    ], 
    "water_rural_improved_total": [
      7453.0, 
      8031.0, 
      8230.0, 
      8218.0, 
      7897.0
    ], 
    "water_urban_improved_other": [
      722.0, 
      574.0, 
      577.0, 
      173.0, 
      191.0
    ], 
    "sanitation_urban_unimproved_shared": [
      360.57999999999998, 
      458.73000000000002, 
      576.97000000000003, 
      693.27999999999997, 
      761.50999999999999
    ], 
    "sanitation_rural_improved": [
      7362.0600000000004, 
      7756.75, 
      7964.3900000000003, 
      7886.3000000000002, 
      7577.6999999999998
    ], 
    "water_total_improved_other": [
      2813.0, 
      2217.0, 
      1728.0, 
      837.0, 
      829.0
    ], 
    "sanitation_total_improved": [
      15295.0, 
      18193.0, 
      21523.0, 
      24525.0, 
      25854.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      631.00999999999999, 
      458.73000000000002, 
      144.24000000000001, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      908.0, 
      663.0, 
      498.0, 
      83.0, 
      80.0
    ], 
    "sanitation_rural_unimproved_shared": [
      272.67000000000002, 
      365.01999999999998, 
      353.97000000000003, 
      332.05000000000001, 
      319.06
    ], 
    "population_urban": [
      9014.3799999999992, 
      11468.360000000001, 
      14424.290000000001, 
      17332.009999999998, 
      19037.810000000001
    ], 
    "water_total_improved_piped": [
      13114.0, 
      16824.0, 
      20782.0, 
      24713.0, 
      26106.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      90.140000000000001, 
      114.68000000000001, 
      144.24000000000001, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      8474.0, 
      11010.0, 
      14280.0, 
      17332.0, 
      19038.0
    ], 
    "sanitation_total_unimproved_total": [
      2808.3400000000001, 
      2400.9499999999998, 
      1750.6199999999999, 
      1108.3800000000001, 
      1160.3399999999999
    ], 
    "sanitation_rural_unimproved_other": [
      636.23000000000002, 
      456.27999999999997, 
      176.99000000000001, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      15927.0, 
      19041.0, 
      22510.0, 
      25550.0, 
      26935.0
    ], 
    "population_rural": [
      9088.9599999999991, 
      9125.5900000000001, 
      8849.3299999999999, 
      8301.3700000000008, 
      7976.5299999999997
    ], 
    "sanitation_total_unimproved_shared": [
      634.0, 
      824.0, 
      931.0, 
      1025.0, 
      1081.0
    ], 
    "water_urban_unimproved": [
      540.0, 
      458.0, 
      144.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      1081.73, 
      1032.1500000000001, 
      865.46000000000004, 
      693.27999999999997, 
      761.50999999999999
    ], 
    "water_rural_improved_other": [
      2091.0, 
      1643.0, 
      1151.0, 
      664.0, 
      638.0
    ], 
    "water_total_unimproved": [
      2176.0, 
      1553.0, 
      763.0, 
      83.0, 
      80.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      818.00999999999999, 
      547.53999999999996, 
      353.97000000000003, 
      83.010000000000005, 
      79.769999999999996
    ], 
    "population_total": [
      18103.34, 
      20593.950000000001, 
      23273.619999999999, 
      25633.380000000001, 
      27014.34
    ], 
    "sanitation_rural_unimproved_total": [
      1726.9000000000001, 
      1368.8399999999999, 
      884.94000000000005, 
      415.06999999999999, 
      398.82999999999998
    ], 
    "water_rural_improved_piped": [
      5362.0, 
      6388.0, 
      7079.0, 
      7554.0, 
      7259.0
    ], 
    "sanitation_total_unimproved_other": [
      1267.0, 
      915.0, 
      321.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      7932.6499999999996, 
      10436.209999999999, 
      13558.83, 
      16638.73, 
      18276.299999999999
    ], 
    "water_urban_improved_piped": [
      7752.0, 
      10436.0, 
      13703.0, 
      17159.0, 
      18847.0
    ]
  }, 
  "Austria": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      2626.0, 
      2714.0, 
      2738.0, 
      2758.0, 
      2742.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      2626.0, 
      2713.98, 
      2737.6100000000001, 
      2757.9000000000001, 
      2742.3099999999999
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      7671.0, 
      7936.0, 
      8005.0, 
      8232.0, 
      8337.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      5044.5100000000002, 
      5221.6400000000003, 
      5267.1000000000004, 
      5474.3800000000001, 
      5595.0
    ], 
    "water_total_improved_piped": [
      7671.0, 
      7936.0, 
      8005.0, 
      8232.0, 
      8337.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      5045.0, 
      5222.0, 
      5267.0, 
      5474.0, 
      5595.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.48999999999999999, 
      -0.38, 
      -0.28999999999999998, 
      0.28000000000000003, 
      0.29999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      7671.0, 
      7936.0, 
      8005.0, 
      8232.0, 
      8337.0
    ], 
    "population_rural": [
      2626.0, 
      2713.98, 
      2737.6100000000001, 
      2757.9000000000001, 
      2742.3099999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      7670.5100000000002, 
      7935.6199999999999, 
      8004.71, 
      8232.2800000000007, 
      8337.2999999999993
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      2626.0, 
      2714.0, 
      2738.0, 
      2758.0, 
      2742.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      5044.5100000000002, 
      5221.6400000000003, 
      5267.1000000000004, 
      5474.3800000000001, 
      5595.0
    ], 
    "water_urban_improved_piped": [
      5045.0, 
      5222.0, 
      5267.0, 
      5474.0, 
      5595.0
    ]
  }, 
  "Mozambique": {
    "water_rural_unimproved": [
      7908.0, 
      8705.0, 
      9233.0, 
      9690.0, 
      10034.0
    ], 
    "water_rural_improved_total": [
      2778.0, 
      3059.0, 
      3415.0, 
      3957.0, 
      4099.0
    ], 
    "water_urban_improved_other": [
      1457.0, 
      2132.0, 
      3025.0, 
      4025.0, 
      4702.0
    ], 
    "sanitation_urban_unimproved_shared": [
      200.0, 
      292.67000000000002, 
      392.06999999999999, 
      503.14999999999998, 
      577.45000000000005
    ], 
    "sanitation_rural_improved": [
      427.44999999999999, 
      470.57999999999998, 
      505.94, 
      545.86000000000001, 
      565.33000000000004
    ], 
    "water_total_improved_other": [
      4128.0, 
      5073.0, 
      6314.0, 
      7846.0, 
      8660.0
    ], 
    "sanitation_total_improved": [
      1456.0, 
      1976.0, 
      2578.0, 
      3206.0, 
      3700.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      714.26999999999998, 
      1087.0699999999999, 
      1736.29, 
      2731.3899999999999, 
      3382.2199999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      8822.0, 
      9884.0, 
      10001.0, 
      9755.0, 
      9494.0
    ], 
    "sanitation_rural_unimproved_shared": [
      106.86, 
      117.64, 
      126.48, 
      136.47, 
      141.33000000000001
    ], 
    "population_urban": [
      2857.0799999999999, 
      4181.0500000000002, 
      5600.9300000000003, 
      7187.8599999999997, 
      8249.3099999999995
    ], 
    "water_total_improved_piped": [
      736.0, 
      1038.0, 
      1302.0, 
      1574.0, 
      1791.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      914.25999999999999, 
      1296.1300000000001, 
      1400.23, 
      1293.8099999999999, 
      1154.9000000000001
    ], 
    "water_urban_improved_total": [
      2086.0, 
      3052.0, 
      4201.0, 
      5463.0, 
      6352.0
    ], 
    "sanitation_total_unimproved_total": [
      12087.219999999999, 
      13969.440000000001, 
      15671.42, 
      17628.380000000001, 
      18682.540000000001
    ], 
    "sanitation_rural_unimproved_other": [
      2244.0900000000001, 
      2588.1700000000001, 
      3415.0900000000001, 
      4503.3500000000004, 
      5087.96
    ], 
    "water_total_improved_total": [
      4864.0, 
      6111.0, 
      7616.0, 
      9420.0, 
      10451.0
    ], 
    "population_rural": [
      10686.15, 
      11764.389999999999, 
      12648.49, 
      13646.52, 
      14133.23
    ], 
    "sanitation_total_unimproved_shared": [
      307.0, 
      411.0, 
      518.0, 
      639.0, 
      718.0
    ], 
    "water_urban_unimproved": [
      771.0, 
      1129.0, 
      1400.0, 
      1725.0, 
      1897.0
    ], 
    "sanitation_urban_unimproved_total": [
      1828.53, 
      2675.8699999999999, 
      3528.5900000000001, 
      4528.3500000000004, 
      5114.5699999999997
    ], 
    "water_rural_improved_other": [
      2671.0, 
      2941.0, 
      3289.0, 
      3821.0, 
      3958.0
    ], 
    "water_total_unimproved": [
      8679.0, 
      9834.0, 
      10633.0, 
      11415.0, 
      11931.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      7907.75, 
      8588.0, 
      8600.9699999999993, 
      8460.8400000000001, 
      8338.6100000000006
    ], 
    "population_total": [
      13543.219999999999, 
      15945.440000000001, 
      18249.419999999998, 
      20834.380000000001, 
      22382.540000000001
    ], 
    "sanitation_rural_unimproved_total": [
      10258.700000000001, 
      11293.809999999999, 
      12142.549999999999, 
      13100.66, 
      13567.9
    ], 
    "water_rural_improved_piped": [
      107.0, 
      118.0, 
      126.0, 
      136.0, 
      141.0
    ], 
    "sanitation_total_unimproved_other": [
      2958.0, 
      3675.0, 
      5151.0, 
      7234.0, 
      8470.0
    ], 
    "sanitation_urban_improved": [
      1028.55, 
      1505.1800000000001, 
      2072.3400000000001, 
      2659.5100000000002, 
      3134.7399999999998
    ], 
    "water_urban_improved_piped": [
      629.0, 
      920.0, 
      1176.0, 
      1438.0, 
      1650.0
    ]
  }, 
  "Uganda": {
    "water_rural_unimproved": [
      9618.0, 
      9996.0, 
      10096.0, 
      10039.0, 
      9920.0
    ], 
    "water_rural_improved_total": [
      6149.0, 
      8514.0, 
      11385.0, 
      15059.0, 
      17635.0
    ], 
    "water_urban_improved_other": [
      1355.0, 
      1710.0, 
      2096.0, 
      2593.0, 
      2953.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1021.21, 
      1295.22, 
      1594.0699999999999, 
      1980.6500000000001, 
      2296.8200000000002
    ], 
    "sanitation_rural_improved": [
      6306.8000000000002, 
      7959.1999999999998, 
      9666.3899999999994, 
      12047.07, 
      13502.15
    ], 
    "water_total_improved_other": [
      7504.0, 
      10224.0, 
      13481.0, 
      17401.0, 
      20312.0
    ], 
    "sanitation_total_improved": [
      6994.0, 
      8839.0, 
      10758.0, 
      13379.0, 
      15061.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      176.75, 
      195.50999999999999, 
      206.63999999999999, 
      216.06999999999999, 
      164.06
    ], 
    "sanitation_total_unimproved_opendefecation": [
      4494.0, 
      4330.0, 
      4140.0, 
      3586.0, 
      3113.0
    ], 
    "sanitation_rural_unimproved_shared": [
      2838.0599999999999, 
      3516.8600000000001, 
      4296.1700000000001, 
      5521.5799999999999, 
      6062.1899999999996
    ], 
    "population_urban": [
      1963.8699999999999, 
      2443.8200000000002, 
      2951.98, 
      3601.1799999999998, 
      4101.46
    ], 
    "water_total_improved_piped": [
      177.0, 
      269.0, 
      413.0, 
      863.0, 
      1055.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      78.549999999999997, 
      73.310000000000002, 
      59.039999999999999, 
      72.019999999999996, 
      82.030000000000001
    ], 
    "water_urban_improved_total": [
      1532.0, 
      1979.0, 
      2509.0, 
      3205.0, 
      3732.0
    ], 
    "sanitation_total_unimproved_total": [
      10736.870000000001, 
      12114.59, 
      13674.84, 
      15320.26, 
      16595.869999999999
    ], 
    "sanitation_rural_unimproved_other": [
      2207.3800000000001, 
      2776.4699999999998, 
      3436.9400000000001, 
      4015.6900000000001, 
      4959.9700000000003
    ], 
    "water_total_improved_total": [
      7681.0, 
      10493.0, 
      13894.0, 
      18264.0, 
      21367.0
    ], 
    "population_rural": [
      15767.0, 
      18509.77, 
      21480.869999999999, 
      25098.07, 
      27555.400000000001
    ], 
    "sanitation_total_unimproved_shared": [
      3859.0, 
      4812.0, 
      5890.0, 
      7503.0, 
      8359.0
    ], 
    "water_urban_unimproved": [
      432.0, 
      465.0, 
      443.0, 
      396.0, 
      369.0
    ], 
    "sanitation_urban_unimproved_total": [
      1276.52, 
      1564.05, 
      1859.75, 
      2268.7399999999998, 
      2542.9000000000001
    ], 
    "water_rural_improved_other": [
      6149.0, 
      8514.0, 
      11385.0, 
      14808.0, 
      17359.0
    ], 
    "water_total_unimproved": [
      10050.0, 
      10461.0, 
      10539.0, 
      10435.0, 
      10289.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      4414.7600000000002, 
      4257.25, 
      4081.3600000000001, 
      3513.73, 
      3031.0900000000001
    ], 
    "population_total": [
      17730.869999999999, 
      20953.59, 
      24432.84, 
      28699.259999999998, 
      31656.869999999999
    ], 
    "sanitation_rural_unimproved_total": [
      9460.2000000000007, 
      10550.57, 
      11814.48, 
      13051.0, 
      14053.25
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      251.0, 
      276.0
    ], 
    "sanitation_total_unimproved_other": [
      2384.0, 
      2972.0, 
      3644.0, 
      4232.0, 
      5124.0
    ], 
    "sanitation_urban_improved": [
      687.35000000000002, 
      879.76999999999998, 
      1092.23, 
      1332.4400000000001, 
      1558.5599999999999
    ], 
    "water_urban_improved_piped": [
      177.0, 
      269.0, 
      413.0, 
      612.0, 
      779.0
    ]
  }, 
  "Hungary": {
    "water_rural_unimproved": [
      319.0, 
      216.0, 
      73.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      3222.0, 
      3379.0, 
      3546.0, 
      3396.0, 
      3253.0
    ], 
    "water_urban_improved_other": [
      273.0, 
      337.0, 
      330.0, 
      334.0, 
      338.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      3540.8400000000001, 
      3594.7199999999998, 
      3618.5799999999999, 
      3396.1199999999999, 
      3252.8899999999999
    ], 
    "water_total_improved_other": [
      946.0, 
      876.0, 
      764.0, 
      572.0, 
      566.0
    ], 
    "sanitation_total_improved": [
      10365.0, 
      10333.0, 
      10215.0, 
      10077.0, 
      10012.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      6824.0, 
      6737.6000000000004, 
      6596.1800000000003, 
      6681.3900000000003, 
      6759.3400000000001
    ], 
    "water_total_improved_piped": [
      8964.0, 
      9173.0, 
      9378.0, 
      9505.0, 
      9446.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      6688.0, 
      6670.0, 
      6596.0, 
      6681.0, 
      6759.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.16, 
      -0.68000000000000005, 
      -0.23999999999999999, 
      0.52000000000000002, 
      0.23999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      9910.0, 
      10049.0, 
      10142.0, 
      10077.0, 
      10012.0
    ], 
    "population_rural": [
      3540.8400000000001, 
      3594.7199999999998, 
      3618.5799999999999, 
      3396.1199999999999, 
      3252.8899999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      136.0, 
      68.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      673.0, 
      539.0, 
      434.0, 
      238.0, 
      228.0
    ], 
    "water_total_unimproved": [
      455.0, 
      284.0, 
      73.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      10364.84, 
      10332.32, 
      10214.76, 
      10077.52, 
      10012.24
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      2549.0, 
      2840.0, 
      3112.0, 
      3158.0, 
      3025.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      6824.0, 
      6737.6000000000004, 
      6596.1800000000003, 
      6681.3900000000003, 
      6759.3400000000001
    ], 
    "water_urban_improved_piped": [
      6415.0, 
      6333.0, 
      6266.0, 
      6347.0, 
      6421.0
    ]
  }, 
  "Niger": {
    "water_rural_unimproved": [
      4615.0, 
      5250.0, 
      6010.0, 
      6909.0, 
      7492.0
    ], 
    "water_rural_improved_total": [
      2074.0, 
      2585.0, 
      3236.0, 
      4058.0, 
      4791.0
    ], 
    "water_urban_improved_other": [
      437.0, 
      617.0, 
      857.0, 
      1174.0, 
      1428.0
    ], 
    "sanitation_urban_unimproved_shared": [
      170.05000000000001, 
      249.41999999999999, 
      357.10000000000002, 
      490.92000000000002, 
      605.23000000000002
    ], 
    "sanitation_rural_improved": [
      133.78999999999999, 
      156.69, 
      277.37, 
      438.69999999999999, 
      491.33999999999997
    ], 
    "water_total_improved_other": [
      2511.0, 
      3202.0, 
      4001.0, 
      5122.0, 
      6096.0
    ], 
    "sanitation_total_improved": [
      365.0, 
      494.0, 
      759.0, 
      1122.0, 
      1314.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      498.01999999999998, 
      528.17999999999995, 
      553.5, 
      512.25999999999999, 
      508.38999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6671.0, 
      7717.0, 
      8991.0, 
      10428.0, 
      11662.0
    ], 
    "sanitation_rural_unimproved_shared": [
      66.890000000000001, 
      78.349999999999994, 
      92.459999999999994, 
      109.67, 
      245.66999999999999
    ], 
    "population_urban": [
      1214.6800000000001, 
      1467.1800000000001, 
      1785.49, 
      2134.4400000000001, 
      2420.9200000000001
    ], 
    "water_total_improved_piped": [
      255.0, 
      381.0, 
      628.0, 
      836.0, 
      1019.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      315.81999999999999, 
      352.12, 
      392.81, 
      448.23000000000002, 
      484.18000000000001
    ], 
    "water_urban_improved_total": [
      692.0, 
      998.0, 
      1393.0, 
      1900.0, 
      2324.0
    ], 
    "sanitation_total_unimproved_total": [
      7538.9399999999996, 
      8807.8299999999999, 
      10272.049999999999, 
      11979.940000000001, 
      13390.32
    ], 
    "sanitation_rural_unimproved_other": [
      133.78999999999999, 
      235.03999999999999, 
      277.37, 
      438.69999999999999, 
      368.5
    ], 
    "water_total_improved_total": [
      2766.0, 
      3583.0, 
      4629.0, 
      5958.0, 
      7115.0
    ], 
    "population_rural": [
      6689.2700000000004, 
      7834.6499999999996, 
      9245.5599999999995, 
      10967.5, 
      12283.4
    ], 
    "sanitation_total_unimproved_shared": [
      237.0, 
      327.0, 
      449.0, 
      601.0, 
      851.0
    ], 
    "water_urban_unimproved": [
      523.0, 
      469.0, 
      392.0, 
      234.0, 
      97.0
    ], 
    "sanitation_urban_unimproved_total": [
      983.88999999999999, 
      1129.73, 
      1303.4100000000001, 
      1451.4200000000001, 
      1597.8099999999999
    ], 
    "water_rural_improved_other": [
      2074.0, 
      2585.0, 
      3144.0, 
      3948.0, 
      4668.0
    ], 
    "water_total_unimproved": [
      5138.0, 
      5719.0, 
      6402.0, 
      7143.0, 
      7589.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      6354.8000000000002, 
      7364.5699999999997, 
      8598.3700000000008, 
      9980.4200000000001, 
      11177.889999999999
    ], 
    "population_total": [
      7903.9399999999996, 
      9301.8299999999999, 
      11031.049999999999, 
      13101.940000000001, 
      14704.32
    ], 
    "sanitation_rural_unimproved_total": [
      6555.4799999999996, 
      7677.96, 
      8968.1900000000005, 
      10528.799999999999, 
      11792.059999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      92.0, 
      110.0, 
      123.0
    ], 
    "sanitation_total_unimproved_other": [
      632.0, 
      763.0, 
      831.0, 
      951.0, 
      877.0
    ], 
    "sanitation_urban_improved": [
      230.78999999999999, 
      337.44999999999999, 
      482.07999999999998, 
      683.01999999999998, 
      823.11000000000001
    ], 
    "water_urban_improved_piped": [
      255.0, 
      381.0, 
      536.0, 
      726.0, 
      896.0
    ]
  }, 
  "Brazil": {
    "water_rural_unimproved": [
      13189.0, 
      10784.0, 
      8190.0, 
      5575.0, 
      4396.0
    ], 
    "water_rural_improved_total": [
      24494.0, 
      25163.0, 
      24569.0, 
      23767.0, 
      23079.0
    ], 
    "water_urban_improved_other": [
      4475.0, 
      5029.0, 
      2828.0, 
      3135.0, 
      4935.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      13188.98, 
      12581.58, 
      11793.139999999999, 
      10856.58, 
      10165.74
    ], 
    "water_total_improved_other": [
      15780.0, 
      15094.0, 
      11018.0, 
      10177.0, 
      10980.0
    ], 
    "sanitation_total_improved": [
      103818.0, 
      115693.0, 
      130582.0, 
      145647.0, 
      153278.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      16783.150000000001, 
      17604.25, 
      16969.889999999999, 
      17240.580000000002, 
      16449.650000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      19549.0, 
      18331.0, 
      16795.0, 
      13798.0, 
      13177.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      111887.7, 
      125744.63, 
      141415.72, 
      156732.53, 
      164496.54000000001
    ], 
    "water_total_improved_piped": [
      116126.0, 
      132041.0, 
      150724.0, 
      167188.0, 
      174951.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      4475.5100000000002, 
      5029.79, 
      5656.6300000000001, 
      4701.9799999999996, 
      4934.8999999999996
    ], 
    "water_urban_improved_total": [
      107412.0, 
      121972.0, 
      137173.0, 
      153598.0, 
      162852.0
    ], 
    "sanitation_total_unimproved_total": [
      45752.489999999998, 
      45998.989999999998, 
      43592.449999999997, 
      40427.629999999997, 
      38693.510000000002
    ], 
    "sanitation_rural_unimproved_other": [
      9420.7000000000007, 
      10065.26, 
      9827.6200000000008, 
      9389.4699999999993, 
      9066.7399999999998
    ], 
    "water_total_improved_total": [
      131906.0, 
      147135.0, 
      161742.0, 
      177365.0, 
      185931.0
    ], 
    "population_rural": [
      37682.790000000001, 
      35947.360000000001, 
      32758.73, 
      29342.110000000001, 
      27474.970000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      4476.0, 
      3773.0, 
      4243.0, 
      3135.0, 
      1645.0
    ], 
    "sanitation_urban_unimproved_total": [
      21258.669999999998, 
      22634.029999999999, 
      22626.52, 
      21942.560000000001, 
      21384.549999999999
    ], 
    "water_rural_improved_other": [
      11305.0, 
      10065.0, 
      8190.0, 
      7042.0, 
      6045.0
    ], 
    "water_total_unimproved": [
      17665.0, 
      14557.0, 
      12433.0, 
      8710.0, 
      6041.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      15073.120000000001, 
      13300.52, 
      11137.969999999999, 
      9096.0499999999993, 
      8242.4899999999998
    ], 
    "population_total": [
      149570.48999999999, 
      161691.98999999999, 
      174174.45000000001, 
      186074.63, 
      191971.51000000001
    ], 
    "sanitation_rural_unimproved_total": [
      24493.810000000001, 
      23365.779999999999, 
      20965.59, 
      18485.529999999999, 
      17309.23
    ], 
    "water_rural_improved_piped": [
      13189.0, 
      15098.0, 
      16379.0, 
      16725.0, 
      17034.0
    ], 
    "sanitation_total_unimproved_other": [
      26204.0, 
      27669.0, 
      26798.0, 
      26630.0, 
      25517.0
    ], 
    "sanitation_urban_improved": [
      90629.029999999999, 
      103110.60000000001, 
      118789.2, 
      134789.97, 
      143111.98999999999
    ], 
    "water_urban_improved_piped": [
      102937.0, 
      116943.0, 
      134345.0, 
      150463.0, 
      157917.0
    ]
  }, 
  "Guinea": {
    "water_rural_unimproved": [
      2743.0, 
      2901.0, 
      2833.0, 
      2656.0, 
      2517.0
    ], 
    "water_rural_improved_total": [
      1681.0, 
      2373.0, 
      2948.0, 
      3522.0, 
      3937.0
    ], 
    "water_urban_improved_other": [
      1137.0, 
      1455.0, 
      1666.0, 
      1947.0, 
      2128.0
    ], 
    "sanitation_urban_unimproved_shared": [
      396.24000000000001, 
      617.20000000000005, 
      858.94000000000005, 
      1186.5699999999999, 
      1419.1500000000001
    ], 
    "sanitation_rural_improved": [
      265.45999999999998, 
      421.93000000000001, 
      520.25999999999999, 
      617.83000000000004, 
      709.95000000000005
    ], 
    "water_total_improved_other": [
      2818.0, 
      3828.0, 
      4614.0, 
      5407.0, 
      6000.0
    ], 
    "sanitation_total_improved": [
      575.0, 
      929.0, 
      1223.0, 
      1561.0, 
      1859.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      913.07000000000005, 
      969.88, 
      963.04999999999995, 
      851.89999999999998, 
      777.14999999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2492.0, 
      2642.0, 
      2506.0, 
      2347.0, 
      2164.0
    ], 
    "sanitation_rural_unimproved_shared": [
      176.97, 
      210.97, 
      289.04000000000002, 
      370.69999999999999, 
      387.25
    ], 
    "population_urban": [
      1722.77, 
      2204.27, 
      2602.8400000000001, 
      3042.4899999999998, 
      3378.9299999999998
    ], 
    "water_total_improved_piped": [
      362.0, 
      485.0, 
      625.0, 
      823.0, 
      944.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      103.37, 
      110.20999999999999, 
      78.090000000000003, 
      60.850000000000001, 
      33.789999999999999
    ], 
    "water_urban_improved_total": [
      1499.0, 
      1940.0, 
      2291.0, 
      2708.0, 
      3007.0
    ], 
    "sanitation_total_unimproved_total": [
      5572.0500000000002, 
      6549.4300000000003, 
      7160.5500000000002, 
      7659.7700000000004, 
      7974.0600000000004
    ], 
    "sanitation_rural_unimproved_other": [
      1592.74, 
      2109.6700000000001, 
      2543.5100000000002, 
      2903.79, 
      3227.0599999999999
    ], 
    "water_total_improved_total": [
      3180.0, 
      4313.0, 
      5239.0, 
      6230.0, 
      6944.0
    ], 
    "population_rural": [
      4424.2799999999997, 
      5274.1599999999999, 
      5780.71, 
      6178.2799999999997, 
      6454.1199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      573.0, 
      828.0, 
      1148.0, 
      1558.0, 
      1806.0
    ], 
    "water_urban_unimproved": [
      224.0, 
      264.0, 
      312.0, 
      334.0, 
      372.0
    ], 
    "sanitation_urban_unimproved_total": [
      1412.6700000000001, 
      1697.29, 
      1900.0699999999999, 
      2099.3200000000002, 
      2230.0900000000001
    ], 
    "water_rural_improved_other": [
      1681.0, 
      2373.0, 
      2948.0, 
      3460.0, 
      3872.0
    ], 
    "water_total_unimproved": [
      2967.0, 
      3165.0, 
      3145.0, 
      2990.0, 
      2889.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2389.1100000000001, 
      2531.5999999999999, 
      2427.9000000000001, 
      2285.96, 
      2129.8600000000001
    ], 
    "population_total": [
      6147.0500000000002, 
      7478.4300000000003, 
      8383.5499999999993, 
      9220.7700000000004, 
      9833.0599999999995
    ], 
    "sanitation_rural_unimproved_total": [
      4158.8199999999997, 
      4852.2299999999996, 
      5260.4499999999998, 
      5560.4499999999998, 
      5744.1700000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      62.0, 
      65.0
    ], 
    "sanitation_total_unimproved_other": [
      2506.0, 
      3080.0, 
      3507.0, 
      3756.0, 
      4004.0
    ], 
    "sanitation_urban_improved": [
      310.10000000000002, 
      506.98000000000002, 
      702.76999999999998, 
      943.16999999999996, 
      1148.8399999999999
    ], 
    "water_urban_improved_piped": [
      362.0, 
      485.0, 
      625.0, 
      761.0, 
      879.0
    ]
  }, 
  "Panama": {
    "water_rural_unimproved": [
      378.0, 
      310.0, 
      233.0, 
      161.0, 
      154.0
    ], 
    "water_rural_improved_total": [
      735.0, 
      760.0, 
      777.0, 
      783.0, 
      753.0
    ], 
    "water_urban_improved_other": [
      26.0, 
      32.0, 
      39.0, 
      91.0, 
      100.0
    ], 
    "sanitation_urban_unimproved_shared": [
      142.94999999999999, 
      176.31999999999999, 
      213.53999999999999, 
      251.66999999999999, 
      274.08999999999997
    ], 
    "sanitation_rural_improved": [
      445.19999999999999, 
      460.0, 
      474.49000000000001, 
      481.30000000000001, 
      462.61000000000001
    ], 
    "water_total_improved_other": [
      93.0, 
      86.0, 
      89.0, 
      128.0, 
      136.0
    ], 
    "sanitation_total_improved": [
      1394.0, 
      1646.0, 
      1911.0, 
      2197.0, 
      2332.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      194.93000000000001, 
      208.38, 
      252.36000000000001, 
      274.55000000000001, 
      299.00999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      291.0, 
      257.0, 
      211.0, 
      169.0, 
      168.0
    ], 
    "sanitation_rural_unimproved_shared": [
      44.520000000000003, 
      42.789999999999999, 
      40.380000000000003, 
      47.189999999999998, 
      45.350000000000001
    ], 
    "population_urban": [
      1299.55, 
      1602.9200000000001, 
      1941.24, 
      2287.8899999999999, 
      2491.75
    ], 
    "water_total_improved_piped": [
      1929.0, 
      2245.0, 
      2571.0, 
      2874.0, 
      3034.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      13.0, 
      32.060000000000002, 
      38.82, 
      45.759999999999998, 
      49.829999999999998
    ], 
    "water_urban_improved_total": [
      1287.0, 
      1571.0, 
      1883.0, 
      2219.0, 
      2417.0
    ], 
    "sanitation_total_unimproved_total": [
      1018.55, 
      1026.7, 
      1039.8, 
      1034.6199999999999, 
      1066.8199999999999
    ], 
    "sanitation_rural_unimproved_other": [
      345.02999999999997, 
      342.32999999999998, 
      323.06, 
      292.56, 
      281.19
    ], 
    "water_total_improved_total": [
      2022.0, 
      2331.0, 
      2660.0, 
      3002.0, 
      3170.0
    ], 
    "population_rural": [
      1113.01, 
      1069.78, 
      1009.5599999999999, 
      943.73000000000002, 
      907.08000000000004
    ], 
    "sanitation_total_unimproved_shared": [
      188.0, 
      219.0, 
      254.0, 
      299.0, 
      319.0
    ], 
    "water_urban_unimproved": [
      13.0, 
      32.0, 
      58.0, 
      69.0, 
      75.0
    ], 
    "sanitation_urban_unimproved_total": [
      350.88, 
      416.75999999999999, 
      504.72000000000003, 
      571.97000000000003, 
      622.94000000000005
    ], 
    "water_rural_improved_other": [
      67.0, 
      54.0, 
      50.0, 
      37.0, 
      36.0
    ], 
    "water_total_unimproved": [
      391.0, 
      342.0, 
      291.0, 
      230.0, 
      229.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      278.25, 
      224.65000000000001, 
      171.62, 
      122.69, 
      117.92
    ], 
    "population_total": [
      2412.5500000000002, 
      2672.6999999999998, 
      2950.8000000000002, 
      3231.6199999999999, 
      3398.8200000000002
    ], 
    "sanitation_rural_unimproved_total": [
      667.80999999999995, 
      609.77999999999997, 
      535.07000000000005, 
      462.43000000000001, 
      444.47000000000003
    ], 
    "water_rural_improved_piped": [
      668.0, 
      706.0, 
      727.0, 
      746.0, 
      717.0
    ], 
    "sanitation_total_unimproved_other": [
      540.0, 
      550.0, 
      575.0, 
      568.0, 
      580.0
    ], 
    "sanitation_urban_improved": [
      948.66999999999996, 
      1186.1600000000001, 
      1436.52, 
      1715.9200000000001, 
      1868.8099999999999
    ], 
    "water_urban_improved_piped": [
      1261.0, 
      1539.0, 
      1844.0, 
      2128.0, 
      2317.0
    ]
  }, 
  "Republic of Moldova": {
    "water_rural_unimproved": [
      -1.0, 
      256.0, 
      273.0, 
      324.0, 
      318.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      2074.0, 
      1999.0, 
      1834.0, 
      1802.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      401.0, 
      347.0, 
      272.0, 
      257.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      127.98, 
      112.08, 
      105.94
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      1681.27, 
      1597.01, 
      1568.72
    ], 
    "water_total_improved_other": [
      -1.0, 
      2289.0, 
      2142.0, 
      1847.0, 
      1783.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      3235.0, 
      2958.0, 
      2855.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      146.25999999999999, 
      128.09999999999999, 
      121.08
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      113.59999999999999, 
      107.91, 
      105.98999999999999
    ], 
    "population_urban": [
      2040.6700000000001, 
      2008.5799999999999, 
      1828.26, 
      1601.21, 
      1513.48
    ], 
    "water_total_improved_piped": [
      -1.0, 
      1753.0, 
      1630.0, 
      1524.0, 
      1472.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      1968.0, 
      1773.0, 
      1537.0, 
      1453.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      865.25999999999999, 
      801.33000000000004, 
      778.37
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      477.12, 
      453.19999999999999, 
      445.18000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      4042.0, 
      3772.0, 
      3371.0, 
      3255.0
    ], 
    "population_rural": [
      2323.2800000000002, 
      2330.1700000000001, 
      2271.9899999999998, 
      2158.1199999999999, 
      2119.8899999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      242.0, 
      220.0, 
      212.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      41.0, 
      55.0, 
      64.0, 
      60.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      274.24000000000001, 
      240.18000000000001, 
      227.02000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1888.0, 
      1795.0, 
      1575.0, 
      1526.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      297.0, 
      328.0, 
      388.0, 
      378.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4363.9499999999998, 
      4338.75, 
      4100.2600000000002, 
      3759.3299999999999, 
      3633.3699999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      590.72000000000003, 
      561.11000000000001, 
      551.16999999999996
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      186.0, 
      204.0, 
      259.0, 
      276.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      623.0, 
      581.0, 
      566.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      1554.02, 
      1361.03, 
      1286.46
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1567.0, 
      1426.0, 
      1265.0, 
      1196.0
    ]
  }, 
  "Costa Rica": {
    "water_rural_unimproved": [
      213.0, 
      185.0, 
      177.0, 
      166.0, 
      149.0
    ], 
    "water_rural_improved_total": [
      1305.0, 
      1353.0, 
      1434.0, 
      1492.0, 
      1510.0
    ], 
    "water_urban_improved_other": [
      110.0, 
      97.0, 
      46.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      62.409999999999997, 
      77.629999999999995, 
      92.769999999999996, 
      106.83, 
      114.40000000000001
    ], 
    "sanitation_rural_improved": [
      1381.3499999999999, 
      1414.9100000000001, 
      1514.8099999999999, 
      1574.75, 
      1592.79
    ], 
    "water_total_improved_other": [
      337.0, 
      281.0, 
      175.0, 
      66.0, 
      33.0
    ], 
    "sanitation_total_improved": [
      2848.0, 
      3259.0, 
      3718.0, 
      4112.0, 
      4310.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      15.6, 
      0.0, 
      0.0, 
      26.710000000000001, 
      28.600000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      77.0, 
      65.0, 
      55.0, 
      17.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      60.719999999999999, 
      61.520000000000003, 
      64.459999999999994, 
      66.310000000000002, 
      66.370000000000005
    ], 
    "population_urban": [
      1560.3199999999999, 
      1940.7, 
      2319.3699999999999, 
      2670.73, 
      2859.9699999999998
    ], 
    "water_total_improved_piped": [
      2513.0, 
      2993.0, 
      3555.0, 
      4097.0, 
      4337.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      15.6, 
      19.41, 
      23.190000000000001, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1545.0, 
      1921.0, 
      2296.0, 
      2671.0, 
      2860.0
    ], 
    "sanitation_total_unimproved_total": [
      230.28999999999999, 
      219.63999999999999, 
      212.86000000000001, 
      216.36000000000001, 
      209.13
    ], 
    "sanitation_rural_unimproved_other": [
      15.18, 
      15.380000000000001, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      2850.0, 
      3274.0, 
      3730.0, 
      4163.0, 
      4370.0
    ], 
    "population_rural": [
      1517.97, 
      1537.9400000000001, 
      1611.5, 
      1657.6300000000001, 
      1659.1500000000001
    ], 
    "sanitation_total_unimproved_shared": [
      123.0, 
      140.0, 
      157.0, 
      173.0, 
      180.0
    ], 
    "water_urban_unimproved": [
      15.0, 
      20.0, 
      23.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      93.620000000000005, 
      97.030000000000001, 
      115.97, 
      133.53999999999999, 
      142.99000000000001
    ], 
    "water_rural_improved_other": [
      227.0, 
      184.0, 
      129.0, 
      66.0, 
      33.0
    ], 
    "water_total_unimproved": [
      228.0, 
      205.0, 
      200.0, 
      166.0, 
      149.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      60.719999999999999, 
      46.140000000000001, 
      32.229999999999997, 
      16.579999999999998, 
      0.0
    ], 
    "population_total": [
      3078.29, 
      3478.6399999999999, 
      3930.8600000000001, 
      4328.3599999999997, 
      4519.1300000000001
    ], 
    "sanitation_rural_unimproved_total": [
      136.62, 
      123.03, 
      96.689999999999998, 
      82.879999999999995, 
      66.359999999999999
    ], 
    "water_rural_improved_piped": [
      1078.0, 
      1169.0, 
      1305.0, 
      1426.0, 
      1477.0
    ], 
    "sanitation_total_unimproved_other": [
      31.0, 
      15.0, 
      0.0, 
      27.0, 
      29.0
    ], 
    "sanitation_urban_improved": [
      1466.7, 
      1843.6700000000001, 
      2203.4000000000001, 
      2537.1900000000001, 
      2716.98
    ], 
    "water_urban_improved_piped": [
      1435.0, 
      1824.0, 
      2250.0, 
      2671.0, 
      2860.0
    ]
  }, 
  "Luxembourg": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      73.0, 
      70.0, 
      71.0, 
      80.0, 
      84.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      72.760000000000005, 
      69.890000000000001, 
      70.989999999999995, 
      79.709999999999994, 
      84.489999999999995
    ], 
    "water_total_improved_other": [
      2.0, 
      2.0, 
      1.0, 
      2.0, 
      1.0
    ], 
    "sanitation_total_improved": [
      382.0, 
      409.0, 
      437.0, 
      464.0, 
      480.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      309.10000000000002, 
      338.67000000000002, 
      365.93000000000001, 
      384.31999999999999, 
      396.12
    ], 
    "water_total_improved_piped": [
      380.0, 
      407.0, 
      436.0, 
      462.0, 
      479.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      309.0, 
      339.0, 
      366.0, 
      384.0, 
      396.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.14000000000000001, 
      -0.44, 
      -0.080000000000000002, 
      0.029999999999999999, 
      0.59999999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      382.0, 
      409.0, 
      437.0, 
      464.0, 
      480.0
    ], 
    "population_rural": [
      72.760000000000005, 
      69.890000000000001, 
      70.989999999999995, 
      79.709999999999994, 
      84.489999999999995
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      2.0, 
      2.0, 
      1.0, 
      2.0, 
      1.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      381.86000000000001, 
      408.56, 
      436.92000000000002, 
      464.02999999999997, 
      480.60000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      71.0, 
      68.0, 
      70.0, 
      78.0, 
      83.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      309.10000000000002, 
      338.67000000000002, 
      365.93000000000001, 
      384.31999999999999, 
      396.12
    ], 
    "water_urban_improved_piped": [
      309.0, 
      339.0, 
      366.0, 
      384.0, 
      396.0
    ]
  }, 
  "Bahamas": {
    "water_rural_unimproved": [
      -1.0, 
      8.0, 
      8.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      46.0, 
      47.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      200.0, 
      66.0, 
      72.0, 
      265.0, 
      277.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      51.539999999999999, 
      53.549999999999997, 
      54.759999999999998, 
      55.079999999999998, 
      55.060000000000002
    ], 
    "water_total_improved_other": [
      -1.0, 
      69.0, 
      75.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      256.0, 
      282.0, 
      305.0, 
      325.0, 
      338.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      204.06999999999999, 
      227.69999999999999, 
      250.05000000000001, 
      270.42000000000002, 
      282.60000000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      200.0, 
      217.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      200.0, 
      223.0, 
      245.0, 
      265.0, 
      277.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.40000000000000002, 
      -0.76000000000000001, 
      -0.19, 
      0.5, 
      -0.33000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      269.0, 
      292.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      51.539999999999999, 
      53.549999999999997, 
      54.759999999999998, 
      55.079999999999998, 
      55.060000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      4.0, 
      5.0, 
      5.0, 
      5.0, 
      6.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      3.0, 
      3.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      13.0, 
      13.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      255.59999999999999, 
      281.24000000000001, 
      304.81, 
      325.5, 
      337.67000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      43.0, 
      44.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      204.06999999999999, 
      227.69999999999999, 
      250.05000000000001, 
      270.42000000000002, 
      282.60000000000002
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      157.0, 
      173.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "British Virgin Islands": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      8.0, 
      8.0, 
      9.0, 
      9.0, 
      9.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      1.0, 
      0.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      8.2200000000000006, 
      8.5, 
      8.7699999999999996, 
      8.6999999999999993, 
      8.9600000000000009
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_total_improved": [
      16.0, 
      18.0, 
      21.0, 
      22.0, 
      23.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      8.2899999999999991, 
      9.9600000000000009, 
      11.75, 
      13.32, 
      13.83
    ], 
    "water_total_improved_piped": [
      16.0, 
      18.0, 
      20.0, 
      21.0, 
      22.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      8.0, 
      10.0, 
      12.0, 
      13.0, 
      14.0
    ], 
    "sanitation_total_unimproved_total": [
      0.51000000000000001, 
      0.46000000000000002, 
      -0.47999999999999998, 
      0.01, 
      -0.20999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      16.0, 
      18.0, 
      21.0, 
      22.0, 
      23.0
    ], 
    "population_rural": [
      8.2200000000000006, 
      8.5, 
      8.7699999999999996, 
      8.6999999999999993, 
      8.9600000000000009
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      1.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      16.510000000000002, 
      18.460000000000001, 
      20.52, 
      22.010000000000002, 
      22.789999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      8.0, 
      8.0, 
      9.0, 
      8.0, 
      9.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      8.2899999999999991, 
      9.9600000000000009, 
      11.75, 
      13.32, 
      13.83
    ], 
    "water_urban_improved_piped": [
      8.0, 
      10.0, 
      11.0, 
      13.0, 
      13.0
    ]
  }, 
  "Ireland": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1515.0, 
      1519.0, 
      1554.0, 
      1655.0, 
      1716.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1484.3099999999999, 
      1488.23, 
      1522.9300000000001, 
      1621.77, 
      1681.5
    ], 
    "water_total_improved_other": [
      16.0, 
      16.0, 
      16.0, 
      17.0, 
      17.0
    ], 
    "sanitation_total_improved": [
      3484.0, 
      3578.0, 
      3773.0, 
      4154.0, 
      4403.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2000.04, 
      2090.25, 
      2249.8099999999999, 
      2532.2399999999998, 
      2721.1500000000001
    ], 
    "water_total_improved_piped": [
      3499.0, 
      3593.0, 
      3788.0, 
      4170.0, 
      4420.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2000.0, 
      2090.0, 
      2250.0, 
      2532.0, 
      2721.0
    ], 
    "sanitation_total_unimproved_total": [
      30.640000000000001, 
      30.850000000000001, 
      30.82, 
      33.109999999999999, 
      33.969999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      30.289999999999999, 
      30.370000000000001, 
      31.079999999999998, 
      33.100000000000001, 
      34.32
    ], 
    "water_total_improved_total": [
      3515.0, 
      3609.0, 
      3804.0, 
      4187.0, 
      4437.0
    ], 
    "population_rural": [
      1514.5999999999999, 
      1518.5999999999999, 
      1554.01, 
      1654.8699999999999, 
      1715.8199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      16.0, 
      16.0, 
      16.0, 
      17.0, 
      17.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      3514.6399999999999, 
      3608.8499999999999, 
      3803.8200000000002, 
      4187.1099999999997, 
      4436.9700000000003
    ], 
    "sanitation_rural_unimproved_total": [
      30.289999999999999, 
      30.370000000000001, 
      31.079999999999998, 
      33.100000000000001, 
      34.32
    ], 
    "water_rural_improved_piped": [
      1499.0, 
      1503.0, 
      1538.0, 
      1638.0, 
      1699.0
    ], 
    "sanitation_total_unimproved_other": [
      30.0, 
      30.0, 
      31.0, 
      33.0, 
      34.0
    ], 
    "sanitation_urban_improved": [
      2000.04, 
      2090.25, 
      2249.8099999999999, 
      2532.2399999999998, 
      2721.1500000000001
    ], 
    "water_urban_improved_piped": [
      2000.0, 
      2090.0, 
      2250.0, 
      2532.0, 
      2721.0
    ]
  }, 
  "Pakistan": {
    "water_rural_unimproved": [
      15271.0, 
      15110.0, 
      14850.0, 
      15118.0, 
      14697.0
    ], 
    "water_rural_improved_total": [
      65105.0, 
      73774.0, 
      84147.0, 
      92865.0, 
      98351.0
    ], 
    "water_urban_improved_other": [
      13806.0, 
      16191.0, 
      19163.0, 
      23134.0, 
      25562.0
    ], 
    "sanitation_urban_unimproved_shared": [
      2123.98, 
      2490.8000000000002, 
      2948.1300000000001, 
      3469.9899999999998, 
      3834.27
    ], 
    "sanitation_rural_improved": [
      6430.1099999999997, 
      12443.77, 
      19799.369999999999, 
      26995.639999999999, 
      32783.809999999998
    ], 
    "water_total_improved_other": [
      71677.0, 
      79299.0, 
      88460.0, 
      95482.0, 
      101303.0
    ], 
    "sanitation_total_improved": [
      32272.0, 
      42749.0, 
      55177.0, 
      68636.0, 
      78795.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      4955.9499999999998, 
      5811.8599999999997, 
      7861.6800000000003, 
      9831.6499999999996, 
      10863.76
    ], 
    "sanitation_total_unimproved_opendefecation": [
      59545.0, 
      58014.0, 
      56406.0, 
      51484.0, 
      48414.0
    ], 
    "sanitation_rural_unimproved_shared": [
      803.75999999999999, 
      1777.6800000000001, 
      2969.9099999999999, 
      4319.3000000000002, 
      5652.3800000000001
    ], 
    "population_urban": [
      35399.669999999998, 
      41513.309999999998, 
      49135.510000000002, 
      57833.220000000001, 
      63904.489999999998
    ], 
    "water_total_improved_piped": [
      27412.0, 
      33913.0, 
      42366.0, 
      52325.0, 
      57757.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      2477.98, 
      2905.9299999999998, 
      2948.1300000000001, 
      2891.6599999999999, 
      3195.2199999999998
    ], 
    "water_urban_improved_total": [
      33984.0, 
      39438.0, 
      46679.0, 
      54942.0, 
      60709.0
    ], 
    "sanitation_total_unimproved_total": [
      83503.979999999996, 
      87648.380000000005, 
      92955.369999999995, 
      97179.770000000004, 
      98157.119999999995
    ], 
    "sanitation_rural_unimproved_other": [
      16075.26, 
      19554.490000000002, 
      22769.279999999999, 
      28075.459999999999, 
      29392.380000000001
    ], 
    "water_total_improved_total": [
      99089.0, 
      113212.0, 
      130826.0, 
      147807.0, 
      159060.0
    ], 
    "population_rural": [
      80376.320000000007, 
      88884.070000000007, 
      98996.860000000001, 
      107982.53999999999, 
      113047.63
    ], 
    "sanitation_total_unimproved_shared": [
      2928.0, 
      4269.0, 
      5918.0, 
      7789.0, 
      9486.0
    ], 
    "water_urban_unimproved": [
      1416.0, 
      2075.0, 
      2457.0, 
      2891.0, 
      3195.0
    ], 
    "sanitation_urban_unimproved_total": [
      9557.9099999999999, 
      11208.59, 
      13757.950000000001, 
      16193.299999999999, 
      17893.259999999998
    ], 
    "water_rural_improved_other": [
      57871.0, 
      63108.0, 
      69297.0, 
      72348.0, 
      75741.0
    ], 
    "water_total_unimproved": [
      16687.0, 
      17185.0, 
      17307.0, 
      18009.0, 
      17892.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      57067.190000000002, 
      55108.120000000003, 
      53458.300000000003, 
      48592.139999999999, 
      45219.050000000003
    ], 
    "population_total": [
      115775.98, 
      130397.38, 
      148132.37, 
      165815.76999999999, 
      176952.12
    ], 
    "sanitation_rural_unimproved_total": [
      73946.210000000006, 
      76440.300000000003, 
      79197.490000000005, 
      80986.899999999994, 
      80263.820000000007
    ], 
    "water_rural_improved_piped": [
      7234.0, 
      10666.0, 
      14850.0, 
      20517.0, 
      22610.0
    ], 
    "sanitation_total_unimproved_other": [
      21031.0, 
      25366.0, 
      30631.0, 
      37907.0, 
      40256.0
    ], 
    "sanitation_urban_improved": [
      25841.759999999998, 
      30304.720000000001, 
      35377.559999999998, 
      41639.919999999998, 
      46011.230000000003
    ], 
    "water_urban_improved_piped": [
      20178.0, 
      23247.0, 
      27516.0, 
      31808.0, 
      35147.0
    ]
  }, 
  "Palau": {
    "water_rural_unimproved": [
      1.0, 
      0.0, 
      0.0, 
      0.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      4.0, 
      5.0, 
      6.0, 
      6.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      8.0, 
      9.0, 
      10.0, 
      11.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      2.4500000000000002, 
      2.5800000000000001, 
      3.0499999999999998, 
      3.1800000000000002, 
      -1.0
    ], 
    "water_total_improved_other": [
      12.0, 
      14.0, 
      16.0, 
      17.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      10.0, 
      13.0, 
      15.0, 
      16.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      2.4900000000000002, 
      2.3100000000000001, 
      1.0700000000000001, 
      0.56000000000000005, 
      0.56999999999999995
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      10.390000000000001, 
      12.18, 
      13.42, 
      14.02, 
      14.369999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      8.0, 
      9.0, 
      10.0, 
      11.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      4.9299999999999997, 
      4.0599999999999996, 
      4.2800000000000002, 
      4.1299999999999999, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      2.0899999999999999, 
      2.29, 
      2.8100000000000001, 
      2.9300000000000002, 
      -1.0
    ], 
    "water_total_improved_total": [
      12.0, 
      14.0, 
      16.0, 
      17.0, 
      -1.0
    ], 
    "population_rural": [
      4.54, 
      4.8700000000000001, 
      5.8600000000000003, 
      6.1100000000000003, 
      6.0199999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      2.0, 
      3.0, 
      3.0, 
      3.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      2.4900000000000002, 
      2.3100000000000001, 
      1.0800000000000001, 
      0.56000000000000005, 
      0.57999999999999996
    ], 
    "water_rural_improved_other": [
      4.0, 
      5.0, 
      6.0, 
      6.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      14.93, 
      17.059999999999999, 
      19.280000000000001, 
      20.129999999999999, 
      20.379999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2.0899999999999999, 
      2.29, 
      2.8100000000000001, 
      2.9300000000000002, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      4.0, 
      4.0, 
      4.0, 
      4.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      7.9000000000000004, 
      9.8699999999999992, 
      12.34, 
      13.460000000000001, 
      13.789999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Nigeria": {
    "water_rural_unimproved": [
      44096.0, 
      45237.0, 
      45929.0, 
      45497.0, 
      45292.0
    ], 
    "water_rural_improved_total": [
      18899.0, 
      22281.0, 
      25835.0, 
      30332.0, 
      32797.0
    ], 
    "water_urban_improved_other": [
      16141.0, 
      22325.0, 
      30254.0, 
      40330.0, 
      46798.0
    ], 
    "sanitation_urban_unimproved_shared": [
      14424.01, 
      17601.98, 
      21231.189999999999, 
      25369.220000000001, 
      27786.82
    ], 
    "sanitation_rural_improved": [
      22678.34, 
      22956.009999999998, 
      22964.599999999999, 
      21990.5, 
      21864.93
    ], 
    "water_total_improved_other": [
      32520.0, 
      42580.0, 
      54654.0, 
      69145.0, 
      78033.0
    ], 
    "sanitation_total_improved": [
      36072.0, 
      39270.0, 
      42604.0, 
      45408.0, 
      48189.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      3777.7199999999998, 
      5151.8000000000002, 
      6900.1400000000003, 
      9106.8999999999996, 
      10237.25
    ], 
    "sanitation_total_unimproved_opendefecation": [
      24165.0, 
      26145.0, 
      28273.0, 
      31420.0, 
      32983.0
    ], 
    "sanitation_rural_unimproved_shared": [
      11339.17, 
      11478.0, 
      11482.299999999999, 
      11374.4, 
      10932.459999999999
    ], 
    "population_urban": [
      34342.889999999999, 
      42931.660000000003, 
      53077.980000000003, 
      65049.269999999997, 
      73123.220000000001
    ], 
    "water_total_improved_piped": [
      13510.0, 
      13188.0, 
      12051.0, 
      10624.0, 
      9606.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      2747.4299999999998, 
      3863.8499999999999, 
      5307.8000000000002, 
      7155.4200000000001, 
      8774.7900000000009
    ], 
    "water_urban_improved_total": [
      27131.0, 
      33487.0, 
      40870.0, 
      49437.0, 
      54842.0
    ], 
    "sanitation_total_unimproved_total": [
      61266.279999999999, 
      71179.330000000002, 
      82238.369999999995, 
      95470.580000000002, 
      103023.25999999999
    ], 
    "sanitation_rural_unimproved_other": [
      7559.4499999999998, 
      10802.83, 
      14352.879999999999, 
      18199.029999999999, 
      21084.040000000001
    ], 
    "water_total_improved_total": [
      46030.0, 
      55768.0, 
      66705.0, 
      79769.0, 
      87639.0
    ], 
    "population_rural": [
      62995.389999999999, 
      67517.679999999993, 
      71764.389999999999, 
      75829.300000000003, 
      78089.039999999994
    ], 
    "sanitation_total_unimproved_shared": [
      25763.0, 
      29080.0, 
      32713.0, 
      36743.0, 
      38719.0
    ], 
    "water_urban_unimproved": [
      7212.0, 
      9445.0, 
      12208.0, 
      15612.0, 
      18281.0
    ], 
    "sanitation_urban_unimproved_total": [
      20949.16, 
      26617.630000000001, 
      33439.129999999997, 
      41631.529999999999, 
      46798.860000000001
    ], 
    "water_rural_improved_other": [
      16379.0, 
      20255.0, 
      24400.0, 
      28815.0, 
      31235.0
    ], 
    "water_total_unimproved": [
      51308.0, 
      54682.0, 
      58137.0, 
      61109.0, 
      63573.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      21418.43, 
      22280.830000000002, 
      22964.599999999999, 
      24265.380000000001, 
      24207.599999999999
    ], 
    "population_total": [
      97338.279999999999, 
      110449.33, 
      124842.37, 
      140878.57999999999, 
      151212.26000000001
    ], 
    "sanitation_rural_unimproved_total": [
      40317.050000000003, 
      44561.669999999998, 
      48799.790000000001, 
      53838.800000000003, 
      56224.110000000001
    ], 
    "water_rural_improved_piped": [
      2520.0, 
      2026.0, 
      1435.0, 
      1517.0, 
      1562.0
    ], 
    "sanitation_total_unimproved_other": [
      11337.0, 
      15955.0, 
      21253.0, 
      27306.0, 
      31321.0
    ], 
    "sanitation_urban_improved": [
      13393.73, 
      16314.030000000001, 
      19638.849999999999, 
      23417.740000000002, 
      26324.360000000001
    ], 
    "water_urban_improved_piped": [
      10990.0, 
      11162.0, 
      10616.0, 
      9107.0, 
      8044.0
    ]
  }, 
  "Ecuador": {
    "water_rural_unimproved": [
      1754.0, 
      1446.0, 
      1075.0, 
      665.0, 
      556.0
    ], 
    "water_rural_improved_total": [
      2862.0, 
      3372.0, 
      3812.0, 
      4088.0, 
      4074.0
    ], 
    "water_urban_improved_other": [
      850.0, 
      725.0, 
      445.0, 
      166.0, 
      89.0
    ], 
    "sanitation_urban_unimproved_shared": [
      113.25, 
      131.78, 
      222.69, 
      249.28, 
      265.54000000000002
    ], 
    "sanitation_rural_improved": [
      2215.71, 
      2842.3400000000001, 
      3421.1199999999999, 
      3850.1900000000001, 
      3889.1399999999999
    ], 
    "water_total_improved_other": [
      2604.0, 
      2170.0, 
      1569.0, 
      879.0, 
      737.0
    ], 
    "sanitation_total_improved": [
      7086.0, 
      8706.0, 
      10250.0, 
      11744.0, 
      12386.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      283.12, 
      263.56999999999999, 
      148.46000000000001, 
      83.090000000000003, 
      88.510000000000005
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2196.0, 
      1822.0, 
      1298.0, 
      653.0, 
      417.0
    ], 
    "sanitation_rural_unimproved_shared": [
      92.319999999999993, 
      144.53, 
      146.62, 
      190.13, 
      185.19999999999999
    ], 
    "population_urban": [
      5662.4200000000001, 
      6589.2299999999996, 
      7423.0, 
      8309.1900000000005, 
      8851.5
    ], 
    "water_total_improved_piped": [
      4845.0, 
      6869.0, 
      8998.0, 
      11186.0, 
      11923.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      396.37, 
      329.45999999999998, 
      222.69, 
      83.090000000000003, 
      0.0
    ], 
    "water_urban_improved_total": [
      4587.0, 
      5667.0, 
      6755.0, 
      7977.0, 
      8586.0
    ], 
    "sanitation_total_unimproved_total": [
      3192.4899999999998, 
      2700.7600000000002, 
      2060.3099999999999, 
      1318.51, 
      1095.4300000000001
    ], 
    "sanitation_rural_unimproved_other": [
      507.76999999999998, 
      337.23000000000002, 
      244.37, 
      142.59999999999999, 
      138.90000000000001
    ], 
    "water_total_improved_total": [
      7449.0, 
      9039.0, 
      10567.0, 
      12065.0, 
      12660.0
    ], 
    "population_rural": [
      4616.0699999999997, 
      4817.5299999999997, 
      4887.3199999999997, 
      4753.3199999999997, 
      4629.9300000000003
    ], 
    "sanitation_total_unimproved_shared": [
      205.0, 
      277.0, 
      370.0, 
      439.0, 
      451.0
    ], 
    "water_urban_unimproved": [
      1075.0, 
      922.0, 
      668.0, 
      332.0, 
      265.0
    ], 
    "sanitation_urban_unimproved_total": [
      792.74000000000001, 
      724.80999999999995, 
      593.84000000000003, 
      415.45999999999998, 
      354.06
    ], 
    "water_rural_improved_other": [
      1754.0, 
      1445.0, 
      1124.0, 
      713.0, 
      648.0
    ], 
    "water_total_unimproved": [
      2829.0, 
      2368.0, 
      1743.0, 
      997.0, 
      821.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1800.27, 
      1493.4400000000001, 
      1075.21, 
      570.39999999999998, 
      416.69
    ], 
    "population_total": [
      10278.49, 
      11406.76, 
      12310.309999999999, 
      13062.51, 
      13481.43
    ], 
    "sanitation_rural_unimproved_total": [
      2400.3600000000001, 
      1975.1900000000001, 
      1466.2, 
      903.13, 
      740.78999999999996
    ], 
    "water_rural_improved_piped": [
      1108.0, 
      1927.0, 
      2688.0, 
      3375.0, 
      3426.0
    ], 
    "sanitation_total_unimproved_other": [
      791.0, 
      601.0, 
      392.0, 
      226.0, 
      228.0
    ], 
    "sanitation_urban_improved": [
      4869.6800000000003, 
      5864.4200000000001, 
      6829.1599999999999, 
      7893.7299999999996, 
      8497.4400000000005
    ], 
    "water_urban_improved_piped": [
      3737.0, 
      4942.0, 
      6310.0, 
      7811.0, 
      8497.0
    ]
  }, 
  "Czech Republic": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      2553.0, 
      2617.0, 
      2660.0, 
      2700.0, 
      2737.0
    ], 
    "water_urban_improved_other": [
      232.0, 
      231.0, 
      227.0, 
      225.0, 
      227.0
    ], 
    "sanitation_urban_unimproved_shared": [
      0.0, 
      0.0, 
      75.650000000000006, 
      74.950000000000003, 
      75.819999999999993
    ], 
    "sanitation_rural_improved": [
      2502.0900000000001, 
      2564.3499999999999, 
      2579.7800000000002, 
      2618.5700000000002, 
      2655.1799999999998
    ], 
    "water_total_improved_other": [
      2785.0, 
      2848.0, 
      467.0, 
      468.0, 
      473.0
    ], 
    "sanitation_total_improved": [
      10252.0, 
      10267.0, 
      10069.0, 
      10039.0, 
      10161.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      51.060000000000002, 
      52.329999999999998, 
      79.790000000000006, 
      80.989999999999995, 
      82.120000000000005
    ], 
    "population_urban": [
      7750.1400000000003, 
      7702.6899999999996, 
      7564.8299999999999, 
      7495.1599999999999, 
      7582.0100000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      9758.0, 
      9727.0, 
      9846.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      7750.0, 
      7703.0, 
      7565.0, 
      7495.0, 
      7582.0
    ], 
    "sanitation_total_unimproved_total": [
      51.289999999999999, 
      52.380000000000003, 
      155.40000000000001, 
      155.72, 
      158.31
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      10303.0, 
      10320.0, 
      10225.0, 
      10195.0, 
      10319.0
    ], 
    "population_rural": [
      2553.1599999999999, 
      2616.6900000000001, 
      2659.5700000000002, 
      2699.5599999999999, 
      2737.3000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      51.0, 
      52.0, 
      156.0, 
      156.0, 
      158.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      75.650000000000006, 
      74.950000000000003, 
      75.819999999999993
    ], 
    "water_rural_improved_other": [
      2553.0, 
      2617.0, 
      240.0, 
      243.0, 
      246.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      10303.290000000001, 
      10319.379999999999, 
      10224.4, 
      10194.719999999999, 
      10319.309999999999
    ], 
    "sanitation_rural_unimproved_total": [
      51.07, 
      52.340000000000003, 
      79.790000000000006, 
      80.989999999999995, 
      82.120000000000005
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      2420.0, 
      2457.0, 
      2491.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      7750.1400000000003, 
      7702.6899999999996, 
      7489.1800000000003, 
      7420.21, 
      7506.1899999999996
    ], 
    "water_urban_improved_piped": [
      7518.0, 
      7472.0, 
      7338.0, 
      7270.0, 
      7355.0
    ]
  }, 
  "Viet Nam": {
    "water_rural_unimproved": [
      25886.0, 
      21568.0, 
      15487.0, 
      9281.0, 
      5029.0
    ], 
    "water_rural_improved_total": [
      26943.0, 
      35188.0, 
      44078.0, 
      52591.0, 
      57833.0
    ], 
    "water_urban_improved_other": [
      5770.0, 
      6966.0, 
      8213.0, 
      9547.0, 
      10420.0
    ], 
    "sanitation_urban_unimproved_shared": [
      402.55000000000001, 
      648.05999999999995, 
      763.95000000000005, 
      1110.1099999999999, 
      1211.6800000000001
    ], 
    "sanitation_rural_improved": [
      15320.42, 
      22702.240000000002, 
      29782.310000000001, 
      37741.800000000003, 
      42117.769999999997
    ], 
    "water_total_improved_other": [
      32713.0, 
      41019.0, 
      49313.0, 
      57807.0, 
      62595.0
    ], 
    "sanitation_total_improved": [
      23505.0, 
      34043.0, 
      44870.0, 
      57280.0, 
      64898.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      1341.8399999999999, 
      1296.1300000000001, 
      1336.9100000000001, 
      1110.1099999999999, 
      242.34
    ], 
    "sanitation_total_unimproved_opendefecation": [
      27790.0, 
      22780.0, 
      16801.0, 
      9106.0, 
      5029.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1056.5799999999999, 
      1135.1099999999999, 
      1786.9400000000001, 
      2474.8699999999999, 
      2514.4899999999998
    ], 
    "population_urban": [
      13418.43, 
      16201.610000000001, 
      19098.66, 
      22202.290000000001, 
      24233.57
    ], 
    "water_total_improved_piped": [
      6038.0, 
      8912.0, 
      12718.0, 
      16320.0, 
      19229.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      3488.79, 
      2916.29, 
      1909.8699999999999, 
      444.05000000000001, 
      0.0
    ], 
    "water_urban_improved_total": [
      11808.0, 
      14743.0, 
      17953.0, 
      21536.0, 
      23991.0
    ], 
    "sanitation_total_unimproved_total": [
      42742.470000000001, 
      38914.209999999999, 
      33793.269999999997, 
      26794.09, 
      22197.91
    ], 
    "sanitation_rural_unimproved_other": [
      12150.68, 
      13053.790000000001, 
      13104.209999999999, 
      12993.08, 
      13201.09
    ], 
    "water_total_improved_total": [
      38751.0, 
      49931.0, 
      62031.0, 
      74127.0, 
      81824.0
    ], 
    "population_rural": [
      52829.050000000003, 
      56755.610000000001, 
      59564.610000000001, 
      61871.809999999998, 
      62862.349999999999
    ], 
    "sanitation_total_unimproved_shared": [
      1460.0, 
      1783.0, 
      2551.0, 
      3585.0, 
      3726.0
    ], 
    "water_urban_unimproved": [
      1610.0, 
      1459.0, 
      1146.0, 
      666.0, 
      243.0
    ], 
    "sanitation_urban_unimproved_total": [
      5233.1899999999996, 
      4860.4799999999996, 
      4010.7199999999998, 
      2664.2800000000002, 
      1454.02
    ], 
    "water_rural_improved_other": [
      26943.0, 
      34053.0, 
      41100.0, 
      48260.0, 
      52175.0
    ], 
    "water_total_unimproved": [
      27496.0, 
      23027.0, 
      16633.0, 
      9947.0, 
      5272.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      24301.360000000001, 
      19864.459999999999, 
      14891.15, 
      8662.0499999999993, 
      5028.9899999999998
    ], 
    "population_total": [
      66247.470000000001, 
      72957.210000000006, 
      78663.270000000004, 
      84074.089999999997, 
      87095.910000000003
    ], 
    "sanitation_rural_unimproved_total": [
      37508.629999999997, 
      34053.370000000003, 
      29782.299999999999, 
      24130.009999999998, 
      20744.580000000002
    ], 
    "water_rural_improved_piped": [
      0.0, 
      1135.0, 
      2978.0, 
      4331.0, 
      5658.0
    ], 
    "sanitation_total_unimproved_other": [
      13493.0, 
      14350.0, 
      14441.0, 
      14103.0, 
      13443.0
    ], 
    "sanitation_urban_improved": [
      8185.2399999999998, 
      11341.129999999999, 
      15087.940000000001, 
      19538.009999999998, 
      22779.549999999999
    ], 
    "water_urban_improved_piped": [
      6038.0, 
      7777.0, 
      9740.0, 
      11989.0, 
      13571.0
    ]
  }, 
  "Australia": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      2495.0, 
      2517.0, 
      2461.0, 
      2408.0, 
      2370.0
    ], 
    "water_urban_improved_other": [
      14596.0, 
      15601.0, 
      16710.0, 
      17987.0, 
      18705.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      2495.3200000000002, 
      2517.3400000000001, 
      2460.5900000000001, 
      2408.0100000000002, 
      2369.8099999999999
    ], 
    "water_total_improved_other": [
      17091.0, 
      18118.0, 
      19171.0, 
      20395.0, 
      21075.0
    ], 
    "sanitation_total_improved": [
      17091.0, 
      18118.0, 
      19171.0, 
      20395.0, 
      21075.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      14595.93, 
      15600.870000000001, 
      16710.349999999999, 
      17986.75, 
      18704.57
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      14596.0, 
      15601.0, 
      16710.0, 
      17987.0, 
      18705.0
    ], 
    "sanitation_total_unimproved_total": [
      0.25, 
      0.20999999999999999, 
      -0.059999999999999998, 
      -0.25, 
      -0.62
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      17091.0, 
      18118.0, 
      19171.0, 
      20395.0, 
      21075.0
    ], 
    "population_rural": [
      2495.3200000000002, 
      2517.3400000000001, 
      2460.5900000000001, 
      2408.0100000000002, 
      2369.8099999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      2495.0, 
      2517.0, 
      2461.0, 
      2408.0, 
      2370.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      17091.25, 
      18118.209999999999, 
      19170.939999999999, 
      20394.75, 
      21074.380000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      14595.93, 
      15600.870000000001, 
      16710.349999999999, 
      17986.75, 
      18704.57
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Algeria": {
    "water_rural_unimproved": [
      1454.0, 
      1742.0, 
      1961.0, 
      2289.0, 
      2508.0
    ], 
    "water_rural_improved_total": [
      10660.0, 
      10696.0, 
      10299.0, 
      9761.0, 
      9431.0
    ], 
    "water_urban_improved_other": [
      1711.0, 
      1899.0, 
      1642.0, 
      1248.0, 
      1122.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      9327.8700000000008, 
      9701.3099999999995, 
      10053.51, 
      10363.049999999999, 
      10505.950000000001
    ], 
    "water_total_improved_other": [
      6556.0, 
      6501.0, 
      5566.0, 
      4381.0, 
      3867.0
    ], 
    "sanitation_total_improved": [
      22365.0, 
      25370.0, 
      28117.0, 
      30751.0, 
      32492.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      131.68000000000001, 
      158.28, 
      0.0, 
      208.03999999999999, 
      224.34999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1817.0, 
      1866.0, 
      1898.0, 
      1654.0, 
      1418.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      13168.4, 
      15827.719999999999, 
      18245.669999999998, 
      20804.48, 
      22434.849999999999
    ], 
    "water_total_improved_piped": [
      17272.0, 
      19706.0, 
      21701.0, 
      23688.0, 
      24634.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      182.46000000000001, 
      208.03999999999999, 
      224.34999999999999
    ], 
    "water_urban_improved_total": [
      13168.0, 
      15511.0, 
      16968.0, 
      18308.0, 
      19070.0
    ], 
    "sanitation_total_unimproved_total": [
      2917.52, 
      2895.29, 
      2389.0500000000002, 
      2103.54, 
      1881.4300000000001
    ], 
    "sanitation_rural_unimproved_other": [
      969.13, 
      870.63, 
      490.42000000000002, 
      241.0, 
      238.77000000000001
    ], 
    "water_total_improved_total": [
      23828.0, 
      26207.0, 
      27267.0, 
      28069.0, 
      28501.0
    ], 
    "population_rural": [
      12114.120000000001, 
      12437.58, 
      12260.379999999999, 
      12050.059999999999, 
      11938.58
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      317.0, 
      1278.0, 
      2496.0, 
      3365.0
    ], 
    "sanitation_urban_unimproved_total": [
      131.69, 
      158.28, 
      182.46000000000001, 
      416.08999999999997, 
      448.69999999999999
    ], 
    "water_rural_improved_other": [
      4845.0, 
      4602.0, 
      3924.0, 
      3133.0, 
      2745.0
    ], 
    "water_total_unimproved": [
      1454.0, 
      2059.0, 
      3239.0, 
      4785.0, 
      5873.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1817.1199999999999, 
      1865.6400000000001, 
      1716.45, 
      1446.01, 
      1193.8599999999999
    ], 
    "population_total": [
      25282.52, 
      28265.290000000001, 
      30506.049999999999, 
      32854.540000000001, 
      34373.43
    ], 
    "sanitation_rural_unimproved_total": [
      2786.25, 
      2736.27, 
      2206.8699999999999, 
      1687.01, 
      1432.6300000000001
    ], 
    "water_rural_improved_piped": [
      5815.0, 
      6094.0, 
      6375.0, 
      6628.0, 
      6686.0
    ], 
    "sanitation_total_unimproved_other": [
      1101.0, 
      1029.0, 
      490.0, 
      449.0, 
      463.0
    ], 
    "sanitation_urban_improved": [
      13036.709999999999, 
      15669.440000000001, 
      18063.209999999999, 
      20388.389999999999, 
      21986.150000000001
    ], 
    "water_urban_improved_piped": [
      11457.0, 
      13612.0, 
      15326.0, 
      17060.0, 
      17948.0
    ]
  }, 
  "El Salvador": {
    "water_rural_unimproved": [
      1137.0, 
      976.0, 
      791.0, 
      658.0, 
      579.0
    ], 
    "water_rural_improved_total": [
      1569.0, 
      1661.0, 
      1682.0, 
      1780.0, 
      1834.0
    ], 
    "water_urban_improved_other": [
      473.0, 
      525.0, 
      555.0, 
      543.0, 
      521.0
    ], 
    "sanitation_urban_unimproved_shared": [
      209.91999999999999, 
      247.31, 
      277.76999999999998, 
      289.64999999999998, 
      297.63999999999999
    ], 
    "sanitation_rural_improved": [
      1677.55, 
      1793.1099999999999, 
      1830.21, 
      1926.0, 
      2003.1099999999999
    ], 
    "water_total_improved_other": [
      1663.0, 
      1606.0, 
      1520.0, 
      1421.0, 
      1341.0
    ], 
    "sanitation_total_improved": [
      3987.0, 
      4513.0, 
      4920.0, 
      5148.0, 
      5314.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      26.239999999999998, 
      30.91, 
      0.0, 
      0.0, 
      37.210000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      999.0, 
      831.0, 
      648.0, 
      499.0, 
      364.0
    ], 
    "sanitation_rural_unimproved_shared": [
      81.170000000000002, 
      105.48, 
      98.930000000000007, 
      97.519999999999996, 
      120.67
    ], 
    "population_urban": [
      2623.9699999999998, 
      3091.4099999999999, 
      3472.0700000000002, 
      3620.6100000000001, 
      3720.52
    ], 
    "water_total_improved_piped": [
      2268.0, 
      2868.0, 
      3356.0, 
      3762.0, 
      3990.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      78.719999999999999, 
      92.739999999999995, 
      104.16, 
      108.62, 
      74.409999999999997
    ], 
    "water_urban_improved_total": [
      2362.0, 
      2813.0, 
      3194.0, 
      3403.0, 
      3497.0
    ], 
    "sanitation_total_unimproved_total": [
      1342.7, 
      1215.3399999999999, 
      1025.3199999999999, 
      910.58000000000004, 
      819.90999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      27.059999999999999, 
      0.0, 
      0.0, 
      24.379999999999999, 
      0.0
    ], 
    "water_total_improved_total": [
      3931.0, 
      4474.0, 
      4876.0, 
      5183.0, 
      5331.0
    ], 
    "population_rural": [
      2705.73, 
      2636.9299999999998, 
      2473.25, 
      2437.9699999999998, 
      2413.3899999999999
    ], 
    "sanitation_total_unimproved_shared": [
      291.0, 
      352.0, 
      377.0, 
      388.0, 
      419.0
    ], 
    "water_urban_unimproved": [
      262.0, 
      278.0, 
      278.0, 
      218.0, 
      224.0
    ], 
    "sanitation_urban_unimproved_total": [
      314.87, 
      370.97000000000003, 
      381.93000000000001, 
      398.26999999999998, 
      409.25
    ], 
    "water_rural_improved_other": [
      1190.0, 
      1081.0, 
      965.0, 
      878.0, 
      820.0
    ], 
    "water_total_unimproved": [
      1399.0, 
      1254.0, 
      1069.0, 
      876.0, 
      803.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      919.95000000000005, 
      738.34000000000003, 
      544.12, 
      390.07999999999998, 
      289.61000000000001
    ], 
    "population_total": [
      5329.6999999999998, 
      5728.3400000000001, 
      5945.3199999999997, 
      6058.5799999999999, 
      6133.9099999999999
    ], 
    "sanitation_rural_unimproved_total": [
      1028.1800000000001, 
      843.82000000000005, 
      643.03999999999996, 
      511.97000000000003, 
      410.27999999999997
    ], 
    "water_rural_improved_piped": [
      379.0, 
      580.0, 
      717.0, 
      902.0, 
      1014.0
    ], 
    "sanitation_total_unimproved_other": [
      53.0, 
      31.0, 
      0.0, 
      24.0, 
      37.0
    ], 
    "sanitation_urban_improved": [
      2309.0999999999999, 
      2720.4400000000001, 
      3090.1399999999999, 
      3222.3400000000001, 
      3311.27
    ], 
    "water_urban_improved_piped": [
      1889.0, 
      2288.0, 
      2639.0, 
      2860.0, 
      2976.0
    ]
  }, 
  "Tuvalu": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      5.0, 
      5.0, 
      5.0, 
      5.0, 
      5.0
    ], 
    "water_urban_improved_other": [
      3.0, 
      4.0, 
      4.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      4.0099999999999998, 
      4.0300000000000002, 
      4.0700000000000003, 
      4.0499999999999998, 
      4.0899999999999999
    ], 
    "water_total_improved_other": [
      8.0, 
      9.0, 
      9.0, 
      5.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      7.0, 
      7.0, 
      8.0, 
      8.0, 
      8.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.51000000000000001, 
      0.56999999999999995, 
      0.56999999999999995, 
      0.52000000000000002, 
      0.47999999999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3.6200000000000001, 
      4.0499999999999998, 
      4.3899999999999997, 
      4.7000000000000002, 
      4.8399999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      10.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.089999999999999997, 
      0.10000000000000001
    ], 
    "water_urban_improved_total": [
      3.0, 
      4.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "sanitation_total_unimproved_total": [
      1.8999999999999999, 
      2.2200000000000002, 
      1.54, 
      1.76, 
      1.8899999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      1.27, 
      1.1399999999999999, 
      1.0800000000000001, 
      0.66000000000000003, 
      0.60999999999999999
    ], 
    "water_total_improved_total": [
      8.0, 
      9.0, 
      9.0, 
      10.0, 
      10.0
    ], 
    "population_rural": [
      5.2800000000000002, 
      5.1600000000000001, 
      5.1500000000000004, 
      5.0599999999999996, 
      5.0499999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.51000000000000001, 
      0.56000000000000005, 
      0.56999999999999995, 
      0.60999999999999999, 
      0.57999999999999996
    ], 
    "water_rural_improved_other": [
      5.0, 
      5.0, 
      5.0, 
      5.0, 
      0.0
    ], 
    "water_total_unimproved": [
      1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.34999999999999998, 
      0.34999999999999998
    ], 
    "population_total": [
      8.9000000000000004, 
      9.2200000000000006, 
      9.5399999999999991, 
      9.7599999999999998, 
      9.8900000000000006
    ], 
    "sanitation_rural_unimproved_total": [
      1.27, 
      1.1299999999999999, 
      1.0800000000000001, 
      1.01, 
      0.95999999999999996
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      5.0
    ], 
    "sanitation_total_unimproved_other": [
      2.0, 
      2.0, 
      2.0, 
      2.0, 
      1.0
    ], 
    "sanitation_urban_improved": [
      3.1099999999999999, 
      3.4900000000000002, 
      3.8199999999999998, 
      4.0899999999999999, 
      4.2599999999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      5.0, 
      5.0
    ]
  }, 
  "Solomon Islands": {
    "water_rural_unimproved": [
      -1.0, 
      108.0, 
      122.0, 
      137.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      201.0, 
      228.0, 
      256.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      10.0, 
      11.0, 
      15.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      55.579999999999998, 
      63.049999999999997, 
      70.810000000000002, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      208.0, 
      235.0, 
      267.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      108.0, 
      127.0, 
      150.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      0.85999999999999999, 
      1.0600000000000001, 
      1.3100000000000001, 
      1.6100000000000001, 
      1.8300000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      42.899999999999999, 
      53.060000000000002, 
      65.290000000000006, 
      80.359999999999999, 
      91.269999999999996
    ], 
    "water_total_improved_piped": [
      -1.0, 
      43.0, 
      54.0, 
      65.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      50.0, 
      61.0, 
      76.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      253.84999999999999, 
      288.54000000000002, 
      323.75999999999999, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      253.21000000000001, 
      287.20999999999998, 
      322.58999999999997, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      251.0, 
      289.0, 
      332.0, 
      -1.0
    ], 
    "population_rural": [
      270.73000000000002, 
      308.79000000000002, 
      350.25999999999999, 
      393.39999999999998, 
      419.39999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      3.0, 
      4.0, 
      4.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.85999999999999999, 
      1.0600000000000001, 
      1.3100000000000001, 
      1.6100000000000001, 
      1.8300000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      198.0, 
      224.0, 
      252.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      111.0, 
      126.0, 
      141.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      313.63, 
      361.85000000000002, 
      415.54000000000002, 
      473.75999999999999, 
      510.67000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      253.21000000000001, 
      287.20999999999998, 
      322.58999999999997, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      3.0, 
      4.0, 
      4.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      254.0, 
      288.0, 
      325.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      42.039999999999999, 
      52.0, 
      63.979999999999997, 
      78.75, 
      89.439999999999998
    ], 
    "water_urban_improved_piped": [
      33.0, 
      40.0, 
      50.0, 
      61.0, 
      -1.0
    ]
  }, 
  "Marshall Islands": {
    "water_rural_unimproved": [
      1.0, 
      1.0, 
      1.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      16.0, 
      17.0, 
      17.0, 
      19.0, 
      19.0
    ], 
    "water_urban_improved_other": [
      29.0, 
      31.0, 
      32.0, 
      35.0, 
      38.0
    ], 
    "sanitation_urban_unimproved_shared": [
      3.3700000000000001, 
      3.6600000000000001, 
      4.1200000000000001, 
      4.54, 
      4.96
    ], 
    "sanitation_rural_improved": [
      6.8499999999999996, 
      7.7999999999999998, 
      8.5500000000000007, 
      9.6400000000000006, 
      10.25
    ], 
    "water_total_improved_other": [
      45.0, 
      48.0, 
      49.0, 
      54.0, 
      57.0
    ], 
    "sanitation_total_improved": [
      31.0, 
      34.0, 
      36.0, 
      41.0, 
      44.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      3.6699999999999999, 
      3.3300000000000001, 
      2.75, 
      0.76000000000000001, 
      0.40999999999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      9.0, 
      9.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1.5, 
      1.77, 
      1.96, 
      2.0800000000000001, 
      2.3199999999999998
    ], 
    "population_urban": [
      30.59, 
      33.289999999999999, 
      34.329999999999998, 
      37.82, 
      41.310000000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      1.51, 
      1.6499999999999999
    ], 
    "water_urban_improved_total": [
      29.0, 
      31.0, 
      32.0, 
      35.0, 
      38.0
    ], 
    "sanitation_total_unimproved_total": [
      16.289999999999999, 
      17.010000000000002, 
      16.140000000000001, 
      15.720000000000001, 
      16.66
    ], 
    "sanitation_rural_unimproved_other": [
      8.3499999999999996, 
      8.1500000000000004, 
      7.2999999999999998, 
      0.56999999999999995, 
      0.0
    ], 
    "water_total_improved_total": [
      45.0, 
      48.0, 
      49.0, 
      54.0, 
      57.0
    ], 
    "population_rural": [
      16.699999999999999, 
      17.719999999999999, 
      17.809999999999999, 
      18.899999999999999, 
      19.350000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      5.0, 
      6.0, 
      6.0, 
      7.0, 
      7.0
    ], 
    "water_urban_unimproved": [
      2.0, 
      2.0, 
      2.0, 
      3.0, 
      3.0
    ], 
    "sanitation_urban_unimproved_total": [
      7.0300000000000002, 
      6.9900000000000002, 
      6.8700000000000001, 
      6.8099999999999996, 
      7.0199999999999996
    ], 
    "water_rural_improved_other": [
      16.0, 
      17.0, 
      17.0, 
      19.0, 
      19.0
    ], 
    "water_total_unimproved": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      3.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      6.6200000000000001, 
      6.7699999999999996
    ], 
    "population_total": [
      47.289999999999999, 
      51.009999999999998, 
      52.140000000000001, 
      56.719999999999999, 
      60.659999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      9.8499999999999996, 
      9.9199999999999999, 
      9.2599999999999998, 
      9.2599999999999998, 
      9.0999999999999996
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      12.0, 
      11.0, 
      10.0, 
      2.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      23.559999999999999, 
      26.300000000000001, 
      27.460000000000001, 
      31.010000000000002, 
      34.289999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      0.0, 
      0.0
    ]
  }, 
  "Chile": {
    "water_rural_unimproved": [
      1148.0, 
      968.0, 
      737.0, 
      503.0, 
      484.0
    ], 
    "water_rural_improved_total": [
      1059.0, 
      1284.0, 
      1430.0, 
      1512.0, 
      1450.0
    ], 
    "water_urban_improved_other": [
      220.0, 
      121.0, 
      132.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1059.1900000000001, 
      1328.6800000000001, 
      1538.53, 
      1672.74, 
      1605.1900000000001
    ], 
    "water_total_improved_other": [
      794.0, 
      729.0, 
      717.0, 
      565.0, 
      541.0
    ], 
    "sanitation_total_improved": [
      11054.0, 
      12636.0, 
      14261.0, 
      15670.0, 
      16178.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      439.35000000000002, 
      364.74000000000001, 
      265.04000000000002, 
      142.81999999999999, 
      148.69999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      703.0, 
      599.0, 
      352.0, 
      183.0, 
      188.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      10983.870000000001, 
      12158.02, 
      13251.76, 
      14282.15, 
      14869.99
    ], 
    "water_total_improved_piped": [
      11139.0, 
      12591.0, 
      13832.0, 
      15086.0, 
      15630.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      549.19000000000005, 
      486.31999999999999, 
      265.04000000000002, 
      142.81999999999999, 
      148.69999999999999
    ], 
    "water_urban_improved_total": [
      10874.0, 
      12036.0, 
      13119.0, 
      14139.0, 
      14721.0
    ], 
    "sanitation_total_unimproved_total": [
      2136.52, 
      1774.02, 
      1157.7, 
      627.49000000000001, 
      625.95000000000005
    ], 
    "sanitation_rural_unimproved_other": [
      992.99000000000001, 
      810.72000000000003, 
      541.74000000000001, 
      302.30000000000001, 
      290.10000000000002
    ], 
    "water_total_improved_total": [
      11933.0, 
      13320.0, 
      14549.0, 
      15651.0, 
      16171.0
    ], 
    "population_rural": [
      2206.6399999999999, 
      2252.0, 
      2166.9499999999998, 
      2015.3499999999999, 
      1933.97
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      110.0, 
      122.0, 
      133.0, 
      143.0, 
      149.0
    ], 
    "sanitation_urban_unimproved_total": [
      988.53999999999996, 
      851.05999999999995, 
      530.07000000000005, 
      285.64999999999998, 
      297.39999999999998
    ], 
    "water_rural_improved_other": [
      574.0, 
      608.0, 
      585.0, 
      565.0, 
      541.0
    ], 
    "water_total_unimproved": [
      1258.0, 
      1090.0, 
      870.0, 
      646.0, 
      633.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      154.46000000000001, 
      112.59999999999999, 
      86.680000000000007, 
      40.310000000000002, 
      38.68
    ], 
    "population_total": [
      13190.52, 
      14410.02, 
      15418.700000000001, 
      16297.49, 
      16803.950000000001
    ], 
    "sanitation_rural_unimproved_total": [
      1147.45, 
      923.32000000000005, 
      628.41999999999996, 
      342.61000000000001, 
      328.77999999999997
    ], 
    "water_rural_improved_piped": [
      485.0, 
      676.0, 
      845.0, 
      947.0, 
      909.0
    ], 
    "sanitation_total_unimproved_other": [
      1432.0, 
      1176.0, 
      807.0, 
      445.0, 
      439.0
    ], 
    "sanitation_urban_improved": [
      9995.3299999999999, 
      11306.959999999999, 
      12721.690000000001, 
      13996.5, 
      14572.59
    ], 
    "water_urban_improved_piped": [
      10654.0, 
      11915.0, 
      12987.0, 
      14139.0, 
      14721.0
    ]
  }, 
  "Puerto Rico": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2546.0500000000002, 
      3224.6199999999999, 
      3614.3299999999999, 
      3820.6999999999998, 
      3903.29
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      981.75, 
      476.26999999999998, 
      204.41999999999999, 
      92.189999999999998, 
      61.539999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      3527.8000000000002, 
      3700.8899999999999, 
      3818.7399999999998, 
      3912.8899999999999, 
      3964.8200000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Belgium": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      360.0, 
      325.0, 
      294.0, 
      283.0, 
      278.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      359.88, 
      325.00999999999999, 
      293.87, 
      283.39999999999998, 
      278.31
    ], 
    "water_total_improved_other": [
      15.0, 
      6.0, 
      3.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      9933.0, 
      10084.0, 
      10193.0, 
      10415.0, 
      10590.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      9573.1800000000003, 
      9759.0599999999995, 
      9899.2299999999996, 
      10131.83, 
      10312.059999999999
    ], 
    "water_total_improved_piped": [
      9918.0, 
      10078.0, 
      10190.0, 
      10415.0, 
      10590.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      9573.0, 
      9759.0, 
      9899.0, 
      10132.0, 
      10312.0
    ], 
    "sanitation_total_unimproved_total": [
      0.059999999999999998, 
      0.070000000000000007, 
      0.089999999999999997, 
      0.23000000000000001, 
      0.38
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      9933.0, 
      10084.0, 
      10193.0, 
      10415.0, 
      10590.0
    ], 
    "population_rural": [
      359.88, 
      325.00999999999999, 
      293.87, 
      283.39999999999998, 
      278.31
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      15.0, 
      6.0, 
      3.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      9933.0599999999995, 
      10084.07, 
      10193.09, 
      10415.23, 
      10590.379999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      345.0, 
      319.0, 
      291.0, 
      283.0, 
      278.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      9573.1800000000003, 
      9759.0599999999995, 
      9899.2299999999996, 
      10131.83, 
      10312.059999999999
    ], 
    "water_urban_improved_piped": [
      9573.0, 
      9759.0, 
      9899.0, 
      10132.0, 
      10312.0
    ]
  }, 
  "Kiribati": {
    "water_rural_unimproved": [
      32.0, 
      29.0, 
      24.0, 
      22.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      15.0, 
      20.0, 
      24.0, 
      26.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      7.0, 
      9.0, 
      11.0, 
      13.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1.76, 
      2.25, 
      3.25, 
      4.3600000000000003, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      9.8100000000000005, 
      10.32, 
      10.539999999999999, 
      10.65, 
      -1.0
    ], 
    "water_total_improved_other": [
      16.0, 
      21.0, 
      25.0, 
      28.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      19.0, 
      22.0, 
      28.0, 
      32.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      4.0199999999999996, 
      2.8100000000000001, 
      1.0800000000000001, 
      0.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      40.0, 
      41.0, 
      41.0, 
      44.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      0.93000000000000005, 
      0.97999999999999998, 
      0.95999999999999996, 
      0.96999999999999997, 
      -1.0
    ], 
    "population_urban": [
      25.149999999999999, 
      28.120000000000001, 
      36.119999999999997, 
      43.609999999999999, 
      47.979999999999997
    ], 
    "water_total_improved_piped": [
      18.0, 
      21.0, 
      27.0, 
      32.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      10.31, 
      11.529999999999999, 
      14.81, 
      17.879999999999999, 
      -1.0
    ], 
    "water_urban_improved_total": [
      19.0, 
      22.0, 
      28.0, 
      34.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      52.850000000000001, 
      55.259999999999998, 
      56.020000000000003, 
      60.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      5.5999999999999996, 
      8.3499999999999996, 
      10.06, 
      11.130000000000001, 
      -1.0
    ], 
    "water_total_improved_total": [
      34.0, 
      42.0, 
      52.0, 
      60.0, 
      -1.0
    ], 
    "population_rural": [
      46.700000000000003, 
      49.140000000000001, 
      47.899999999999999, 
      48.390000000000001, 
      48.579999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      3.0, 
      3.0, 
      4.0, 
      5.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      6.0, 
      6.0, 
      8.0, 
      10.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      16.100000000000001, 
      16.59, 
      19.140000000000001, 
      22.239999999999998, 
      -1.0
    ], 
    "water_rural_improved_other": [
      9.0, 
      12.0, 
      14.0, 
      15.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      38.0, 
      35.0, 
      32.0, 
      32.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      30.350000000000001, 
      29.48, 
      26.350000000000001, 
      25.649999999999999, 
      -1.0
    ], 
    "population_total": [
      71.849999999999994, 
      77.260000000000005, 
      84.019999999999996, 
      92.0, 
      96.560000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      36.890000000000001, 
      38.82, 
      37.359999999999999, 
      37.740000000000002, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      6.0, 
      8.0, 
      10.0, 
      11.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      10.0, 
      11.0, 
      11.0, 
      11.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      9.0500000000000007, 
      11.529999999999999, 
      16.98, 
      21.370000000000001, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      12.0, 
      13.0, 
      17.0, 
      21.0, 
      -1.0
    ]
  }, 
  "Haiti": {
    "water_rural_unimproved": [
      2998.0, 
      2914.0, 
      2840.0, 
      2532.0, 
      2358.0
    ], 
    "water_rural_improved_total": [
      2083.0, 
      2385.0, 
      2729.0, 
      2855.0, 
      2883.0
    ], 
    "water_urban_improved_other": [
      709.0, 
      1025.0, 
      1324.0, 
      1931.0, 
      2318.0
    ], 
    "sanitation_urban_unimproved_shared": [
      911.90999999999997, 
      1075.96, 
      1077.53, 
      1126.3499999999999, 
      1112.4200000000001
    ], 
    "sanitation_rural_improved": [
      965.47000000000003, 
      953.79999999999995, 
      835.38, 
      646.48000000000002, 
      524.13
    ], 
    "water_total_improved_other": [
      2690.0, 
      3251.0, 
      3886.0, 
      4624.0, 
      4991.0
    ], 
    "sanitation_total_improved": [
      1857.0, 
      1979.0, 
      1882.0, 
      1772.0, 
      1636.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      20.260000000000002, 
      204.94, 
      646.51999999999998, 
      1367.71, 
      1993.0899999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      3353.0, 
      3382.0, 
      3427.0, 
      3203.0, 
      2985.0
    ], 
    "sanitation_rural_unimproved_shared": [
      609.76999999999998, 
      582.88, 
      501.23000000000002, 
      377.11000000000001, 
      314.48000000000002
    ], 
    "population_urban": [
      2026.46, 
      2561.8099999999999, 
      3078.6399999999999, 
      4022.6799999999998, 
      4635.0900000000001
    ], 
    "water_total_improved_piped": [
      649.0, 
      799.0, 
      906.0, 
      1047.0, 
      1183.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      202.65000000000001, 
      256.18000000000001, 
      307.86000000000001, 
      402.26999999999998, 
      417.16000000000003
    ], 
    "water_urban_improved_total": [
      1256.0, 
      1665.0, 
      2063.0, 
      2816.0, 
      3291.0
    ], 
    "sanitation_total_unimproved_total": [
      5250.8999999999996, 
      5881.7299999999996, 
      6765.8699999999999, 
      7637.9899999999998, 
      8240.3999999999996
    ], 
    "sanitation_rural_unimproved_other": [
      355.69999999999999, 
      635.87, 
      1113.8499999999999, 
      1562.3199999999999, 
      1834.46
    ], 
    "water_total_improved_total": [
      3339.0, 
      4050.0, 
      4792.0, 
      5671.0, 
      6174.0
    ], 
    "population_rural": [
      5081.4399999999996, 
      5298.9200000000001, 
      5569.2299999999996, 
      5387.3100000000004, 
      5241.3100000000004
    ], 
    "sanitation_total_unimproved_shared": [
      1522.0, 
      1659.0, 
      1579.0, 
      1503.0, 
      1426.0
    ], 
    "water_urban_unimproved": [
      770.0, 
      897.0, 
      1016.0, 
      1207.0, 
      1344.0
    ], 
    "sanitation_urban_unimproved_total": [
      1134.8199999999999, 
      1537.0899999999999, 
      2031.9000000000001, 
      2896.3299999999999, 
      3522.6700000000001
    ], 
    "water_rural_improved_other": [
      1981.0, 
      2226.0, 
      2562.0, 
      2693.0, 
      2673.0
    ], 
    "water_total_unimproved": [
      3768.0, 
      3811.0, 
      3856.0, 
      3739.0, 
      3702.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      3150.4899999999998, 
      3126.3600000000001, 
      3118.77, 
      2801.4000000000001, 
      2568.2399999999998
    ], 
    "population_total": [
      7107.8999999999996, 
      7860.7299999999996, 
      8647.8700000000008, 
      9409.9899999999998, 
      9876.3999999999996
    ], 
    "sanitation_rural_unimproved_total": [
      4115.9700000000003, 
      4345.1199999999999, 
      4733.8500000000004, 
      4740.8299999999999, 
      4717.1800000000003
    ], 
    "water_rural_improved_piped": [
      102.0, 
      159.0, 
      167.0, 
      162.0, 
      210.0
    ], 
    "sanitation_total_unimproved_other": [
      376.0, 
      841.0, 
      1761.0, 
      2930.0, 
      3827.0
    ], 
    "sanitation_urban_improved": [
      891.63999999999999, 
      1024.72, 
      1046.74, 
      1126.3499999999999, 
      1112.4200000000001
    ], 
    "water_urban_improved_piped": [
      547.0, 
      640.0, 
      739.0, 
      885.0, 
      973.0
    ]
  }, 
  "Belize": {
    "water_rural_unimproved": [
      37.0, 
      32.0, 
      22.0, 
      9.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      63.0, 
      84.0, 
      109.0, 
      132.0, 
      145.0
    ], 
    "water_urban_improved_other": [
      11.0, 
      12.0, 
      15.0, 
      17.0, 
      19.0
    ], 
    "sanitation_urban_unimproved_shared": [
      4.5, 
      6.2800000000000002, 
      7.21, 
      9.9199999999999999, 
      10.880000000000001
    ], 
    "sanitation_rural_improved": [
      74.790000000000006, 
      90.230000000000004, 
      106.42, 
      118.09, 
      124.90000000000001
    ], 
    "water_total_improved_other": [
      54.0, 
      60.0, 
      69.0, 
      73.0, 
      75.0
    ], 
    "sanitation_total_improved": [
      141.0, 
      173.0, 
      207.0, 
      244.0, 
      270.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      15.32, 
      11.51, 
      9.6099999999999994, 
      4.25, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      17.0, 
      14.0, 
      11.0, 
      7.0, 
      3.0
    ], 
    "sanitation_rural_unimproved_shared": [
      5.9800000000000004, 
      6.9400000000000004, 
      7.8799999999999999, 
      9.8399999999999999, 
      10.17
    ], 
    "population_urban": [
      90.099999999999994, 
      104.59999999999999, 
      120.14, 
      141.71000000000001, 
      155.41
    ], 
    "water_total_improved_piped": [
      89.0, 
      120.0, 
      154.0, 
      196.0, 
      224.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      4.5, 
      4.1799999999999997, 
      2.3999999999999999, 
      1.4199999999999999, 
      0.0
    ], 
    "water_urban_improved_total": [
      80.0, 
      96.0, 
      114.0, 
      137.0, 
      154.0
    ], 
    "sanitation_total_unimproved_total": [
      48.82, 
      47.280000000000001, 
      44.520000000000003, 
      38.289999999999999, 
      30.640000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      6.9800000000000004, 
      8.0999999999999996, 
      7.8799999999999999, 
      7.0300000000000002, 
      7.2599999999999998
    ], 
    "water_total_improved_total": [
      143.0, 
      180.0, 
      223.0, 
      269.0, 
      299.0
    ], 
    "population_rural": [
      99.719999999999999, 
      115.68000000000001, 
      131.38, 
      140.58000000000001, 
      145.24000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      11.0, 
      13.0, 
      15.0, 
      20.0, 
      21.0
    ], 
    "water_urban_unimproved": [
      10.0, 
      9.0, 
      6.0, 
      5.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_total": [
      24.329999999999998, 
      21.969999999999999, 
      19.219999999999999, 
      15.59, 
      10.880000000000001
    ], 
    "water_rural_improved_other": [
      43.0, 
      48.0, 
      54.0, 
      56.0, 
      56.0
    ], 
    "water_total_unimproved": [
      47.0, 
      41.0, 
      28.0, 
      14.0, 
      1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      11.970000000000001, 
      10.41, 
      9.1999999999999993, 
      5.6200000000000001, 
      2.8999999999999999
    ], 
    "population_total": [
      189.81999999999999, 
      220.28, 
      251.52000000000001, 
      282.29000000000002, 
      300.63999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      24.93, 
      25.449999999999999, 
      24.960000000000001, 
      22.489999999999998, 
      20.34
    ], 
    "water_rural_improved_piped": [
      20.0, 
      36.0, 
      55.0, 
      76.0, 
      89.0
    ], 
    "sanitation_total_unimproved_other": [
      22.0, 
      20.0, 
      18.0, 
      11.0, 
      7.0
    ], 
    "sanitation_urban_improved": [
      65.769999999999996, 
      82.629999999999995, 
      100.92, 
      126.12, 
      144.53
    ], 
    "water_urban_improved_piped": [
      69.0, 
      84.0, 
      99.0, 
      120.0, 
      135.0
    ]
  }, 
  "Sierra Leone": {
    "water_rural_unimproved": [
      -1.0, 
      1338.0, 
      1527.0, 
      2161.0, 
      2563.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1286.0, 
      1200.0, 
      1065.0, 
      900.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      559.0, 
      706.0, 
      1166.0, 
      1488.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      545.75999999999999, 
      615.5, 
      846.22000000000003, 
      985.57000000000005
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      104.97, 
      136.34999999999999, 
      193.59, 
      207.77000000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      1793.0, 
      1851.0, 
      2166.0, 
      2353.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      392.0, 
      451.0, 
      627.0, 
      711.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      436.61000000000001, 
      480.38999999999999, 
      507.73000000000002, 
      524.24000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      988.0, 
      1017.0, 
      1223.0, 
      1331.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      314.89999999999998, 
      354.50999999999999, 
      516.24000000000001, 
      623.32000000000005
    ], 
    "population_urban": [
      1344.9000000000001, 
      1364.4000000000001, 
      1501.22, 
      1880.49, 
      2096.9499999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      475.0, 
      475.0, 
      441.0, 
      350.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      95.510000000000005, 
      90.069999999999993, 
      94.019999999999996, 
      83.879999999999995
    ], 
    "water_urban_improved_total": [
      -1.0, 
      982.0, 
      1126.0, 
      1542.0, 
      1803.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      3596.5300000000002, 
      3777.1799999999998, 
      4479.9799999999996, 
      4848.8500000000004
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      1312.0699999999999, 
      1308.9400000000001, 
      1387.3900000000001, 
      1385.1600000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      2268.0, 
      2326.0, 
      2607.0, 
      2703.0
    ], 
    "population_rural": [
      2738.5999999999999, 
      2624.1399999999999, 
      2726.96, 
      3226.4899999999998, 
      3462.9000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      861.0, 
      970.0, 
      1362.0, 
      1609.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      382.0, 
      375.0, 
      338.0, 
      294.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      1077.8800000000001, 
      1185.96, 
      1447.98, 
      1593.6800000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1234.0, 
      1145.0, 
      1000.0, 
      865.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      1720.0, 
      1902.0, 
      2499.0, 
      2857.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      892.21000000000004, 
      927.16999999999996, 
      1129.27, 
      1246.6400000000001
    ], 
    "population_total": [
      4083.5, 
      3988.5300000000002, 
      4228.1800000000003, 
      5106.9799999999996, 
      5559.8500000000004
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      2519.1700000000001, 
      2590.6100000000001, 
      3032.9000000000001, 
      3255.1300000000001
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      52.0, 
      55.0, 
      65.0, 
      35.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      1749.0, 
      1789.0, 
      1895.0, 
      1909.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      286.51999999999998, 
      315.25999999999999, 
      432.50999999999999, 
      503.26999999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      423.0, 
      420.0, 
      376.0, 
      315.0
    ]
  }, 
  "Georgia": {
    "water_rural_unimproved": [
      834.0, 
      725.0, 
      450.0, 
      170.0, 
      82.0
    ], 
    "water_rural_improved_total": [
      1620.0, 
      1614.0, 
      1796.0, 
      1952.0, 
      1956.0
    ], 
    "water_urban_improved_other": [
      391.0, 
      327.0, 
      275.0, 
      211.0, 
      181.0
    ], 
    "sanitation_urban_unimproved_shared": [
      90.180000000000007, 
      81.909999999999997, 
      74.969999999999999, 
      70.280000000000001, 
      68.079999999999998
    ], 
    "sanitation_rural_improved": [
      2331.4000000000001, 
      2221.6599999999999, 
      2110.8600000000001, 
      1994.51, 
      1894.9300000000001
    ], 
    "water_total_improved_other": [
      1545.0, 
      1427.0, 
      1307.0, 
      1187.0, 
      1098.0
    ], 
    "sanitation_total_improved": [
      5247.0, 
      4870.0, 
      4510.0, 
      4244.0, 
      4074.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      24.989999999999998, 
      23.43, 
      22.690000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      49.0, 
      47.0, 
      45.0, 
      42.0, 
      41.0
    ], 
    "sanitation_rural_unimproved_shared": [
      24.539999999999999, 
      23.390000000000001, 
      22.460000000000001, 
      21.219999999999999, 
      20.379999999999999
    ], 
    "population_urban": [
      3005.8899999999999, 
      2730.3099999999999, 
      2499.1599999999999, 
      2342.7199999999998, 
      2269.4499999999998
    ], 
    "water_total_improved_piped": [
      2901.0, 
      2753.0, 
      2913.0, 
      3084.0, 
      3127.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2826.0, 
      2566.0, 
      2424.0, 
      2319.0, 
      2269.0
    ], 
    "sanitation_total_unimproved_total": [
      213.0, 
      198.90000000000001, 
      234.75, 
      220.53999999999999, 
      233.00999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      49.079999999999998, 
      46.770000000000003, 
      67.370000000000005, 
      63.649999999999999, 
      81.5
    ], 
    "water_total_improved_total": [
      4446.0, 
      4180.0, 
      4220.0, 
      4271.0, 
      4225.0
    ], 
    "population_rural": [
      2454.1100000000001, 
      2338.5900000000001, 
      2245.5999999999999, 
      2121.8200000000002, 
      2037.5599999999999
    ], 
    "sanitation_total_unimproved_shared": [
      115.0, 
      105.0, 
      97.0, 
      91.0, 
      88.0
    ], 
    "water_urban_unimproved": [
      180.0, 
      164.0, 
      75.0, 
      24.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      90.170000000000002, 
      81.909999999999997, 
      99.969999999999999, 
      93.700000000000003, 
      90.780000000000001
    ], 
    "water_rural_improved_other": [
      1154.0, 
      1100.0, 
      1032.0, 
      976.0, 
      917.0
    ], 
    "water_total_unimproved": [
      1014.0, 
      889.0, 
      525.0, 
      194.0, 
      82.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      49.079999999999998, 
      46.770000000000003, 
      44.909999999999997, 
      42.439999999999998, 
      40.75
    ], 
    "population_total": [
      5460.0, 
      5068.8999999999996, 
      4744.75, 
      4464.54, 
      4307.0100000000002
    ], 
    "sanitation_rural_unimproved_total": [
      122.70999999999999, 
      116.93000000000001, 
      134.74000000000001, 
      127.31, 
      142.63
    ], 
    "water_rural_improved_piped": [
      466.0, 
      514.0, 
      764.0, 
      976.0, 
      1039.0
    ], 
    "sanitation_total_unimproved_other": [
      49.0, 
      47.0, 
      92.0, 
      87.0, 
      105.0
    ], 
    "sanitation_urban_improved": [
      2915.7199999999998, 
      2648.4000000000001, 
      2399.1900000000001, 
      2249.02, 
      2178.6700000000001
    ], 
    "water_urban_improved_piped": [
      2435.0, 
      2239.0, 
      2149.0, 
      2108.0, 
      2088.0
    ]
  }, 
  "Lao People's Democratic Republic": {
    "water_rural_unimproved": [
      -1.0, 
      2503.0, 
      2530.0, 
      2263.0, 
      2102.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1470.0, 
      1686.0, 
      2007.0, 
      2188.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      401.0, 
      498.0, 
      419.0, 
      326.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      25.07, 
      47.5, 
      80.510000000000005, 
      95.75
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      397.30000000000001, 
      674.52999999999997, 
      1280.8800000000001, 
      1630.3199999999999
    ], 
    "water_total_improved_other": [
      -1.0, 
      1672.0, 
      1973.0, 
      2255.0, 
      2342.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      865.0, 
      1411.0, 
      2521.0, 
      3277.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      83.560000000000002, 
      95.0, 
      80.510000000000005, 
      57.450000000000003
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      3477.0, 
      3471.0, 
      2813.0, 
      2346.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      39.729999999999997, 
      42.159999999999997, 
      85.390000000000001, 
      85.810000000000002
    ], 
    "population_urban": [
      649.37, 
      835.64999999999998, 
      1187.48, 
      1610.26, 
      1915.03
    ], 
    "water_total_improved_piped": [
      -1.0, 
      450.0, 
      627.0, 
      944.0, 
      1225.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      259.05000000000001, 
      308.74000000000001, 
      209.33000000000001, 
      114.90000000000001
    ], 
    "water_urban_improved_total": [
      -1.0, 
      652.0, 
      914.0, 
      1192.0, 
      1379.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      3943.6500000000001, 
      3992.2600000000002, 
      3358.8800000000001, 
      2928.3400000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      317.83999999999997, 
      337.25999999999999, 
      298.87, 
      343.22000000000003
    ], 
    "water_total_improved_total": [
      -1.0, 
      2122.0, 
      2600.0, 
      3199.0, 
      3567.0
    ], 
    "population_rural": [
      3557.2199999999998, 
      3973.0, 
      4215.79, 
      4269.6199999999999, 
      4290.3100000000004
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      65.0, 
      89.0, 
      166.0, 
      182.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      184.0, 
      273.0, 
      418.0, 
      536.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      367.69, 
      451.25, 
      370.36000000000001, 
      268.10000000000002
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1271.0, 
      1475.0, 
      1836.0, 
      2016.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      2687.0, 
      2803.0, 
      2681.0, 
      2638.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      3218.1300000000001, 
      3161.8400000000001, 
      2604.4699999999998, 
      2230.96
    ], 
    "population_total": [
      4206.5900000000001, 
      4808.6499999999996, 
      5403.2600000000002, 
      5879.8800000000001, 
      6205.3400000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      3575.6999999999998, 
      3541.2600000000002, 
      2988.7399999999998, 
      2659.9899999999998
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      199.0, 
      211.0, 
      171.0, 
      172.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      402.0, 
      432.0, 
      380.0, 
      400.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      467.95999999999998, 
      736.23000000000002, 
      1239.9000000000001, 
      1646.9300000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      251.0, 
      416.0, 
      773.0, 
      1053.0
    ]
  }, 
  "Gambia": {
    "water_rural_unimproved": [
      182.0, 
      170.0, 
      153.0, 
      120.0, 
      101.0
    ], 
    "water_rural_improved_total": [
      370.0, 
      439.0, 
      510.0, 
      584.0, 
      621.0
    ], 
    "water_urban_improved_other": [
      210.0, 
      262.0, 
      320.0, 
      362.0, 
      385.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      118.91, 
      159.78999999999999, 
      213.84999999999999, 
      253.34
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      353.37, 
      404.20999999999998, 
      443.27999999999997, 
      469.25
    ], 
    "water_total_improved_other": [
      580.0, 
      689.0, 
      810.0, 
      918.0, 
      970.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      653.0, 
      819.0, 
      994.0, 
      1107.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      47.560000000000002, 
      57.530000000000001, 
      49.350000000000001, 
      37.530000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      71.0, 
      66.0, 
      64.0, 
      60.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      73.109999999999999, 
      86.140000000000001, 
      91.469999999999999, 
      101.06999999999999
    ], 
    "population_urban": [
      343.10000000000002, 
      475.63, 
      639.17999999999995, 
      822.50999999999999, 
      938.27999999999997
    ], 
    "water_total_improved_piped": [
      82.0, 
      169.0, 
      282.0, 
      439.0, 
      552.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      9.5099999999999998, 
      6.3899999999999997, 
      8.2300000000000004, 
      9.3800000000000008
    ], 
    "water_urban_improved_total": [
      292.0, 
      419.0, 
      582.0, 
      773.0, 
      901.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      431.88999999999999, 
      482.81, 
      532.13999999999999, 
      553.20000000000005
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      121.84999999999999, 
      112.65000000000001, 
      112.58, 
      101.06999999999999
    ], 
    "water_total_improved_total": [
      662.0, 
      858.0, 
      1092.0, 
      1357.0, 
      1522.0
    ], 
    "population_rural": [
      552.42999999999995, 
      609.25999999999999, 
      662.63, 
      703.63, 
      721.91999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      192.0, 
      246.0, 
      305.0, 
      354.0
    ], 
    "water_urban_unimproved": [
      51.0, 
      57.0, 
      57.0, 
      50.0, 
      37.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      175.99000000000001, 
      223.72, 
      271.43000000000001, 
      300.25
    ], 
    "water_rural_improved_other": [
      370.0, 
      427.0, 
      490.0, 
      556.0, 
      585.0
    ], 
    "water_total_unimproved": [
      233.0, 
      227.0, 
      210.0, 
      170.0, 
      138.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      60.93, 
      59.640000000000001, 
      56.289999999999999, 
      50.530000000000001
    ], 
    "population_total": [
      895.52999999999997, 
      1084.8900000000001, 
      1301.8099999999999, 
      1526.1400000000001, 
      1660.2
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      255.88999999999999, 
      258.42000000000002, 
      260.35000000000002, 
      252.66999999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      12.0, 
      20.0, 
      28.0, 
      36.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      170.0, 
      171.0, 
      162.0, 
      139.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      299.63999999999999, 
      415.45999999999998, 
      551.08000000000004, 
      638.02999999999997
    ], 
    "water_urban_improved_piped": [
      82.0, 
      157.0, 
      262.0, 
      411.0, 
      516.0
    ]
  }, 
  "Philippines": {
    "water_rural_unimproved": [
      7675.0, 
      6755.0, 
      5797.0, 
      4782.0, 
      4114.0
    ], 
    "water_rural_improved_total": [
      24303.0, 
      25413.0, 
      26407.0, 
      27099.0, 
      27535.0
    ], 
    "water_urban_improved_other": [
      16138.0, 
      17764.0, 
      19104.0, 
      19301.0, 
      19370.0
    ], 
    "sanitation_urban_unimproved_shared": [
      4262.9499999999998, 
      5291.6099999999997, 
      6822.8400000000001, 
      8042.1700000000001, 
      9391.8999999999996
    ], 
    "sanitation_rural_improved": [
      14709.809999999999, 
      16727.27, 
      19000.240000000002, 
      20722.93, 
      21837.849999999999
    ], 
    "water_total_improved_other": [
      37883.0, 
      38995.0, 
      39714.0, 
      39067.0, 
      38993.0
    ], 
    "sanitation_total_improved": [
      36025.0, 
      44319.0, 
      53569.0, 
      62542.0, 
      68798.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      2435.9699999999998, 
      2267.8299999999999, 
      1364.5699999999999, 
      1072.29, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      9791.0, 
      9401.0, 
      8526.0, 
      7463.0, 
      6779.0
    ], 
    "sanitation_rural_unimproved_shared": [
      2878.0100000000002, 
      3216.7800000000002, 
      3864.46, 
      4144.5900000000001, 
      4430.8699999999999
    ], 
    "population_urban": [
      30449.630000000001, 
      37797.220000000001, 
      45485.57, 
      53614.489999999998, 
      58699.379999999997
    ], 
    "water_total_improved_piped": [
      14738.0, 
      21569.0, 
      28995.0, 
      37893.0, 
      43132.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      2435.9699999999998, 
      2645.8099999999999, 
      2729.1300000000001, 
      2680.7199999999998, 
      2347.98
    ], 
    "water_urban_improved_total": [
      28318.0, 
      35151.0, 
      42302.0, 
      49861.0, 
      54590.0
    ], 
    "sanitation_total_unimproved_total": [
      26402.48, 
      25646.049999999999, 
      24120.369999999999, 
      22953.919999999998, 
      21550.439999999999
    ], 
    "sanitation_rural_unimproved_other": [
      7035.1300000000001, 
      5468.5299999999997, 
      3542.4200000000001, 
      2231.6999999999998, 
      949.47000000000003
    ], 
    "water_total_improved_total": [
      52621.0, 
      60564.0, 
      68709.0, 
      76960.0, 
      82125.0
    ], 
    "population_rural": [
      31977.849999999999, 
      32167.830000000002, 
      32203.799999999999, 
      31881.43, 
      31649.060000000001
    ], 
    "sanitation_total_unimproved_shared": [
      7141.0, 
      8509.0, 
      10687.0, 
      12187.0, 
      13823.0
    ], 
    "water_urban_unimproved": [
      2132.0, 
      2646.0, 
      3184.0, 
      3753.0, 
      4109.0
    ], 
    "sanitation_urban_unimproved_total": [
      9134.8899999999994, 
      10205.25, 
      10916.540000000001, 
      11795.190000000001, 
      11739.879999999999
    ], 
    "water_rural_improved_other": [
      21745.0, 
      21231.0, 
      20610.0, 
      19766.0, 
      19623.0
    ], 
    "water_total_unimproved": [
      9807.0, 
      9401.0, 
      8981.0, 
      8535.0, 
      8223.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      7354.9099999999999, 
      6755.2399999999998, 
      5796.6800000000003, 
      4782.21, 
      4430.8699999999999
    ], 
    "population_total": [
      62427.480000000003, 
      69965.050000000003, 
      77689.369999999995, 
      85495.919999999998, 
      90348.440000000002
    ], 
    "sanitation_rural_unimproved_total": [
      17268.040000000001, 
      15440.559999999999, 
      13203.559999999999, 
      11158.5, 
      9811.2099999999991
    ], 
    "water_rural_improved_piped": [
      2558.0, 
      4182.0, 
      5797.0, 
      7333.0, 
      7912.0
    ], 
    "sanitation_total_unimproved_other": [
      9471.0, 
      7737.0, 
      4907.0, 
      3304.0, 
      949.0
    ], 
    "sanitation_urban_improved": [
      21314.740000000002, 
      27591.970000000001, 
      34569.029999999999, 
      41819.300000000003, 
      46959.5
    ], 
    "water_urban_improved_piped": [
      12180.0, 
      17387.0, 
      23198.0, 
      30560.0, 
      35220.0
    ]
  }, 
  "Morocco": {
    "water_rural_unimproved": [
      5761.0, 
      5728.0, 
      5650.0, 
      5493.0, 
      5562.0
    ], 
    "water_rural_improved_total": [
      7042.0, 
      7291.0, 
      7802.0, 
      8239.0, 
      8343.0
    ], 
    "water_urban_improved_other": [
      2401.0, 
      2369.0, 
      2153.0, 
      1844.0, 
      1770.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1680.6600000000001, 
      1950.3800000000001, 
      2152.4899999999998, 
      2346.8299999999999, 
      2478.1500000000001
    ], 
    "sanitation_rural_improved": [
      3456.8200000000002, 
      4556.75, 
      5784.4300000000003, 
      6865.9499999999998, 
      7230.3800000000001
    ], 
    "water_total_improved_other": [
      8803.0, 
      8488.0, 
      8206.0, 
      7886.0, 
      7471.0
    ], 
    "sanitation_total_improved": [
      13181.0, 
      15981.0, 
      18391.0, 
      20779.0, 
      21922.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      139.31, 
      307.5, 
      502.88999999999999, 
      531.02999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      9434.0, 
      8099.0, 
      7033.0, 
      5493.0, 
      5284.0
    ], 
    "sanitation_rural_unimproved_shared": [
      384.08999999999997, 
      520.76999999999998, 
      672.61000000000001, 
      823.90999999999997, 
      834.26999999999998
    ], 
    "population_urban": [
      12004.719999999999, 
      13931.309999999999, 
      15374.940000000001, 
      16763.099999999999, 
      17701.040000000001
    ], 
    "water_total_improved_piped": [
      9523.0, 
      12038.0, 
      14356.0, 
      16613.0, 
      18219.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      600.24000000000001, 
      417.94, 
      307.5, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      11284.0, 
      13235.0, 
      14760.0, 
      16260.0, 
      17347.0
    ], 
    "sanitation_total_unimproved_total": [
      11626.74, 
      10969.610000000001, 
      10436.120000000001, 
      9715.9899999999998, 
      9683.6200000000008
    ], 
    "sanitation_rural_unimproved_other": [
      128.03, 
      260.38999999999999, 
      269.04000000000002, 
      549.27999999999997, 
      556.17999999999995
    ], 
    "water_total_improved_total": [
      18326.0, 
      20526.0, 
      22562.0, 
      24499.0, 
      25690.0
    ], 
    "population_rural": [
      12803.030000000001, 
      13019.299999999999, 
      13452.17, 
      13731.889999999999, 
      13904.58
    ], 
    "sanitation_total_unimproved_shared": [
      2065.0, 
      2471.0, 
      2825.0, 
      3171.0, 
      3312.0
    ], 
    "water_urban_unimproved": [
      721.0, 
      696.0, 
      615.0, 
      503.0, 
      354.0
    ], 
    "sanitation_urban_unimproved_total": [
      2280.9000000000001, 
      2507.6399999999999, 
      2767.4899999999998, 
      2849.73, 
      3009.1799999999998
    ], 
    "water_rural_improved_other": [
      6402.0, 
      6119.0, 
      6053.0, 
      6042.0, 
      5701.0
    ], 
    "water_total_unimproved": [
      6482.0, 
      6424.0, 
      6265.0, 
      5996.0, 
      5916.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      8834.0900000000001, 
      7681.3900000000003, 
      6726.0900000000001, 
      5492.7600000000002, 
      5283.7399999999998
    ], 
    "population_total": [
      24807.740000000002, 
      26950.610000000001, 
      28827.119999999999, 
      30494.990000000002, 
      31605.619999999999
    ], 
    "sanitation_rural_unimproved_total": [
      9346.2099999999991, 
      8462.5499999999993, 
      7667.7399999999998, 
      6865.9399999999996, 
      6674.1999999999998
    ], 
    "water_rural_improved_piped": [
      640.0, 
      1172.0, 
      1749.0, 
      2197.0, 
      2642.0
    ], 
    "sanitation_total_unimproved_other": [
      128.0, 
      399.0, 
      576.0, 
      1052.0, 
      1087.0
    ], 
    "sanitation_urban_improved": [
      9723.8199999999997, 
      11423.67, 
      12607.450000000001, 
      13913.370000000001, 
      14691.860000000001
    ], 
    "water_urban_improved_piped": [
      8883.0, 
      10866.0, 
      12607.0, 
      14416.0, 
      15577.0
    ]
  }, 
  "Croatia": {
    "water_rural_unimproved": [
      -1.0, 
      63.0, 
      60.0, 
      58.0, 
      56.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      2043.0, 
      1941.0, 
      1876.0, 
      1837.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      102.0, 
      100.0, 
      101.0, 
      101.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      25.629999999999999, 
      25.050000000000001, 
      25.09, 
      25.289999999999999
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      2063.79, 
      1960.5799999999999, 
      1895.5999999999999, 
      1855.46
    ], 
    "water_total_improved_other": [
      -1.0, 
      2145.0, 
      501.0, 
      488.0, 
      480.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      4601.0, 
      4441.0, 
      4380.0, 
      4359.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      21.0, 
      20.0, 
      19.0, 
      19.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      21.059999999999999, 
      20.010000000000002, 
      19.34, 
      18.93
    ], 
    "population_urban": [
      2441.0500000000002, 
      2563.0999999999999, 
      2504.8299999999999, 
      2508.6599999999999, 
      2529.1900000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      3945.0, 
      3897.0, 
      3886.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      2563.0, 
      2505.0, 
      2509.0, 
      2529.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      68.0, 
      64.420000000000002, 
      62.950000000000003, 
      63.509999999999998
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      4606.0, 
      4446.0, 
      4385.0, 
      4366.0
    ], 
    "population_rural": [
      2076.1500000000001, 
      2105.9099999999999, 
      2000.5899999999999, 
      1934.28, 
      1893.3199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      47.0, 
      45.0, 
      44.0, 
      44.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      25.640000000000001, 
      25.039999999999999, 
      25.079999999999998, 
      25.289999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      2043.0, 
      401.0, 
      387.0, 
      379.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      63.0, 
      60.0, 
      58.0, 
      56.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      21.059999999999999, 
      20.010000000000002, 
      19.34, 
      18.93
    ], 
    "population_total": [
      4517.1999999999998, 
      4669.0, 
      4505.4200000000001, 
      4442.9499999999998, 
      4422.5100000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      42.119999999999997, 
      40.009999999999998, 
      38.68, 
      37.859999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      1540.0, 
      1489.0, 
      1458.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      2537.46, 
      2479.79, 
      2483.5799999999999, 
      2503.9000000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      2461.0, 
      2405.0, 
      2408.0, 
      2428.0
    ]
  }, 
  "French Polynesia": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      86.0, 
      100.0, 
      112.0, 
      123.0, 
      129.0
    ], 
    "water_urban_improved_other": [
      1.0, 
      2.0, 
      2.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      83.650000000000006, 
      97.230000000000004, 
      108.98999999999999, 
      119.70999999999999, 
      124.89
    ], 
    "water_total_improved_other": [
      4.0, 
      6.0, 
      6.0, 
      6.0, 
      6.0
    ], 
    "sanitation_total_improved": [
      192.0, 
      211.0, 
      231.0, 
      251.0, 
      261.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      1.0900000000000001, 
      1.1599999999999999, 
      1.24, 
      1.3200000000000001, 
      1.3700000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      109.15000000000001, 
      115.55, 
      123.59999999999999, 
      131.90000000000001, 
      136.94999999999999
    ], 
    "water_total_improved_piped": [
      191.0, 
      210.0, 
      230.0, 
      249.0, 
      260.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      109.0, 
      116.0, 
      124.0, 
      132.0, 
      137.0
    ], 
    "sanitation_total_unimproved_total": [
      3.3900000000000001, 
      4.7999999999999998, 
      4.96, 
      4.3099999999999996, 
      4.7000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      2.5899999999999999, 
      3.0099999999999998, 
      3.3700000000000001, 
      3.7000000000000002, 
      3.8599999999999999
    ], 
    "water_total_improved_total": [
      195.0, 
      216.0, 
      236.0, 
      255.0, 
      266.0
    ], 
    "population_rural": [
      86.239999999999995, 
      100.23999999999999, 
      112.36, 
      123.41, 
      128.75
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      1.0900000000000001, 
      1.1499999999999999, 
      1.24, 
      1.3200000000000001, 
      1.3700000000000001
    ], 
    "water_rural_improved_other": [
      3.0, 
      4.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      195.38999999999999, 
      215.80000000000001, 
      235.96000000000001, 
      255.31, 
      265.69999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2.5899999999999999, 
      3.0099999999999998, 
      3.3700000000000001, 
      3.7000000000000002, 
      3.8599999999999999
    ], 
    "water_rural_improved_piped": [
      83.0, 
      96.0, 
      108.0, 
      118.0, 
      124.0
    ], 
    "sanitation_total_unimproved_other": [
      4.0, 
      4.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "sanitation_urban_improved": [
      108.06, 
      114.40000000000001, 
      122.36, 
      130.58000000000001, 
      135.58000000000001
    ], 
    "water_urban_improved_piped": [
      108.0, 
      114.0, 
      122.0, 
      131.0, 
      136.0
    ]
  }, 
  "Guinea-Bissau": {
    "water_rural_unimproved": [
      463.0, 
      482.0, 
      505.0, 
      539.0, 
      543.0
    ], 
    "water_rural_improved_total": [
      272.0, 
      336.0, 
      412.0, 
      498.0, 
      564.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      229.0, 
      236.0, 
      257.0, 
      262.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      24.329999999999998, 
      27.100000000000001, 
      30.510000000000002, 
      37.509999999999998
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      49.100000000000001, 
      64.159999999999997, 
      82.939999999999998, 
      99.590000000000003
    ], 
    "water_total_improved_other": [
      -1.0, 
      565.0, 
      648.0, 
      745.0, 
      815.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      192.0, 
      230.0, 
      288.0, 
      330.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      163.38999999999999, 
      178.09, 
      191.81, 
      192.25999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      475.0, 
      501.0, 
      496.0, 
      485.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_urban": [
      287.61000000000001, 
      347.63, 
      387.14999999999998, 
      435.93000000000001, 
      468.92000000000002
    ], 
    "water_total_improved_piped": [
      17.0, 
      42.0, 
      70.0, 
      110.0, 
      138.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      17.379999999999999, 
      15.49, 
      8.7200000000000006, 
      9.3800000000000008
    ], 
    "water_urban_improved_total": [
      -1.0, 
      271.0, 
      306.0, 
      357.0, 
      389.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      973.99000000000001, 
      1073.76, 
      1184.6300000000001, 
      1245.45
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      310.98000000000002, 
      366.63999999999999, 
      466.50999999999999, 
      531.13
    ], 
    "water_total_improved_total": [
      -1.0, 
      607.0, 
      718.0, 
      855.0, 
      953.0
    ], 
    "population_rural": [
      734.77999999999997, 
      818.36000000000001, 
      916.61000000000001, 
      1036.7, 
      1106.53
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      24.0, 
      27.0, 
      31.0, 
      38.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      77.0, 
      81.0, 
      79.0, 
      80.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      205.09999999999999, 
      220.66999999999999, 
      231.03999999999999, 
      239.15000000000001
    ], 
    "water_rural_improved_other": [
      272.0, 
      336.0, 
      412.0, 
      488.0, 
      553.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      559.0, 
      586.0, 
      618.0, 
      623.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      458.27999999999997, 
      485.80000000000001, 
      487.25, 
      475.81
    ], 
    "population_total": [
      1022.39, 
      1165.99, 
      1303.76, 
      1472.6300000000001, 
      1575.45
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      769.25999999999999, 
      852.45000000000005, 
      953.75999999999999, 
      1006.9400000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      10.0, 
      11.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      474.0, 
      545.0, 
      659.0, 
      723.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      142.53, 
      166.47999999999999, 
      204.88999999999999, 
      229.77000000000001
    ], 
    "water_urban_improved_piped": [
      17.0, 
      42.0, 
      70.0, 
      100.0, 
      127.0
    ]
  }, 
  "Thailand": {
    "water_rural_unimproved": [
      4400.0, 
      3355.0, 
      2146.0, 
      1339.0, 
      900.0
    ], 
    "water_rural_improved_total": [
      35598.0, 
      38577.0, 
      40784.0, 
      43304.0, 
      44089.0
    ], 
    "water_urban_improved_other": [
      3168.0, 
      3278.0, 
      3106.0, 
      3195.0, 
      3135.0
    ], 
    "sanitation_urban_unimproved_shared": [
      833.76999999999998, 
      910.39999999999998, 
      970.83000000000004, 
      1065.1199999999999, 
      1119.8599999999999
    ], 
    "sanitation_rural_improved": [
      29598.16, 
      34803.599999999999, 
      39495.739999999998, 
      42857.510000000002, 
      43189.599999999999
    ], 
    "water_total_improved_other": [
      33166.0, 
      33049.0, 
      31440.0, 
      30427.0, 
      29678.0
    ], 
    "sanitation_total_improved": [
      45106.0, 
      51920.0, 
      57748.0, 
      63095.0, 
      64467.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      9533.0, 
      6052.0, 
      1911.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1199.9300000000001, 
      1257.96, 
      1717.21, 
      1785.73, 
      1799.5699999999999
    ], 
    "population_urban": [
      16675.459999999999, 
      18208.0, 
      19416.669999999998, 
      21302.43, 
      22397.209999999999
    ], 
    "water_total_improved_piped": [
      18607.0, 
      23372.0, 
      28372.0, 
      33966.0, 
      36584.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      333.50999999999999, 
      182.08000000000001, 
      194.16999999999999, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      16175.0, 
      17844.0, 
      19028.0, 
      21089.0, 
      22173.0
    ], 
    "sanitation_total_unimproved_total": [
      11566.98, 
      8220.0599999999995, 
      4598.8199999999997, 
      2850.6799999999998, 
      2919.3800000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      51773.0, 
      56421.0, 
      59812.0, 
      64393.0, 
      66262.0
    ], 
    "population_rural": [
      39997.519999999997, 
      41932.050000000003, 
      42930.150000000001, 
      44643.239999999998, 
      44989.169999999998
    ], 
    "sanitation_total_unimproved_shared": [
      2034.0, 
      2168.0, 
      2688.0, 
      2851.0, 
      2920.0
    ], 
    "water_urban_unimproved": [
      500.0, 
      364.0, 
      389.0, 
      213.0, 
      224.0
    ], 
    "sanitation_urban_unimproved_total": [
      1167.29, 
      1092.48, 
      1165.0, 
      1065.1199999999999, 
      1119.8599999999999
    ], 
    "water_rural_improved_other": [
      29998.0, 
      29771.0, 
      28334.0, 
      27232.0, 
      26543.0
    ], 
    "water_total_unimproved": [
      4900.0, 
      3719.0, 
      2535.0, 
      1552.0, 
      1124.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      9199.4300000000003, 
      5870.4899999999998, 
      1717.21, 
      0.0, 
      0.0
    ], 
    "population_total": [
      56672.980000000003, 
      60140.059999999998, 
      62346.82, 
      65945.679999999993, 
      67386.380000000005
    ], 
    "sanitation_rural_unimproved_total": [
      10399.360000000001, 
      7128.4499999999998, 
      3434.4099999999999, 
      1785.73, 
      1799.5699999999999
    ], 
    "water_rural_improved_piped": [
      5600.0, 
      8806.0, 
      12450.0, 
      16072.0, 
      17546.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      15508.17, 
      17115.52, 
      18251.669999999998, 
      20237.310000000001, 
      21277.349999999999
    ], 
    "water_urban_improved_piped": [
      13007.0, 
      14566.0, 
      15922.0, 
      17894.0, 
      19038.0
    ]
  }, 
  "Switzerland": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      1801.0, 
      1860.0, 
      1917.0, 
      1987.0, 
      2002.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1800.5999999999999, 
      1859.6500000000001, 
      1916.5999999999999, 
      1987.49, 
      2002.3599999999999
    ], 
    "water_total_improved_other": [
      18.0, 
      19.0, 
      20.0, 
      19.0, 
      20.0
    ], 
    "sanitation_total_improved": [
      6715.0, 
      7039.0, 
      7185.0, 
      7441.0, 
      7541.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      4914.0299999999997, 
      5178.6199999999999, 
      5267.5799999999999, 
      5453.5100000000002, 
      5538.9399999999996
    ], 
    "water_total_improved_piped": [
      6697.0, 
      7020.0, 
      7165.0, 
      7422.0, 
      7521.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      4914.0, 
      5179.0, 
      5268.0, 
      5454.0, 
      5539.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.37, 
      -0.72999999999999998, 
      -0.81999999999999995, 
      0.0, 
      0.29999999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      6715.0, 
      7039.0, 
      7185.0, 
      7441.0, 
      7541.0
    ], 
    "population_rural": [
      1800.5999999999999, 
      1859.6500000000001, 
      1916.5999999999999, 
      1987.49, 
      2002.3599999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      18.0, 
      19.0, 
      20.0, 
      19.0, 
      20.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      6714.6300000000001, 
      7038.2700000000004, 
      7184.1800000000003, 
      7441.0, 
      7541.3000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      1783.0, 
      1841.0, 
      1897.0, 
      1968.0, 
      1982.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      4914.0299999999997, 
      5178.6199999999999, 
      5267.5799999999999, 
      5453.5100000000002, 
      5538.9399999999996
    ], 
    "water_urban_improved_piped": [
      4914.0, 
      5179.0, 
      5268.0, 
      5454.0, 
      5539.0
    ]
  }, 
  "Grenada": {
    "water_rural_unimproved": [
      -1.0, 
      5.0, 
      5.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      64.0, 
      65.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      30.0, 
      2.0, 
      1.0, 
      30.0, 
      31.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      63.229999999999997, 
      66.450000000000003, 
      67.780000000000001, 
      68.989999999999995, 
      69.530000000000001
    ], 
    "water_total_improved_other": [
      -1.0, 
      15.0, 
      14.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      93.0, 
      96.0, 
      98.0, 
      99.0, 
      101.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      1.24, 
      1.27, 
      1.25, 
      1.26, 
      1.27
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      31.0, 
      31.66, 
      31.329999999999998, 
      31.379999999999999, 
      31.859999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      80.0, 
      81.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      30.0, 
      31.0, 
      30.0, 
      30.0, 
      31.0
    ], 
    "sanitation_total_unimproved_total": [
      3.1800000000000002, 
      4.1699999999999999, 
      3.21, 
      3.5, 
      2.54
    ], 
    "sanitation_rural_unimproved_other": [
      1.96, 
      2.0600000000000001, 
      2.1000000000000001, 
      2.1299999999999999, 
      2.1499999999999999
    ], 
    "water_total_improved_total": [
      -1.0, 
      95.0, 
      95.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      65.180000000000007, 
      68.5, 
      69.879999999999995, 
      71.120000000000005, 
      71.680000000000007
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_total": [
      1.24, 
      1.26, 
      1.25, 
      1.26, 
      1.28
    ], 
    "water_rural_improved_other": [
      -1.0, 
      13.0, 
      13.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      6.0, 
      6.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      96.180000000000007, 
      100.17, 
      101.20999999999999, 
      102.5, 
      103.54000000000001
    ], 
    "sanitation_rural_unimproved_total": [
      1.95, 
      2.0499999999999998, 
      2.1000000000000001, 
      2.1299999999999999, 
      2.1499999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      51.0, 
      52.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      3.0
    ], 
    "sanitation_urban_improved": [
      29.760000000000002, 
      30.399999999999999, 
      30.079999999999998, 
      30.120000000000001, 
      30.579999999999998
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      29.0, 
      29.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Wallis and Futuna Islands": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      14.0, 
      14.0, 
      15.0, 
      15.0, 
      15.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      13.300000000000001, 
      13.75, 
      14.09, 
      14.32, 
      14.6
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      1.0, 
      1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      13.859999999999999, 
      14.33, 
      14.68, 
      14.92, 
      15.210000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      3.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.55000000000000004, 
      0.56999999999999995, 
      0.58999999999999997, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "population_total": [
      13.859999999999999, 
      14.33, 
      14.68, 
      14.92, 
      15.210000000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.56000000000000005, 
      0.57999999999999996, 
      0.58999999999999997, 
      0.59999999999999998, 
      0.60999999999999999
    ], 
    "water_rural_improved_piped": [
      11.0, 
      11.0, 
      12.0, 
      12.0, 
      12.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "TFYR Macedonia": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      8.0, 
      7.0, 
      6.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      738.0, 
      696.0, 
      669.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      51.0, 
      53.0, 
      55.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      63.289999999999999, 
      66.590000000000003, 
      68.290000000000006
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      611.63, 
      576.84000000000003, 
      553.88999999999999
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      162.0, 
      158.0, 
      157.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      1776.0, 
      1802.0, 
      1811.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      37.969999999999999, 
      39.960000000000001, 
      40.979999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      7.0, 
      7.0, 
      7.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      52.210000000000001, 
      49.240000000000002, 
      47.280000000000001
    ], 
    "population_urban": [
      1103.3900000000001, 
      1184.75, 
      1265.73, 
      1331.8499999999999, 
      1365.8599999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      1842.0, 
      1870.0, 
      1878.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      1266.0, 
      1332.0, 
      1366.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      235.61000000000001, 
      233.31, 
      230.34
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      74.590000000000003, 
      70.349999999999994, 
      67.549999999999997
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      2004.0, 
      2028.0, 
      2035.0
    ], 
    "population_rural": [
      805.96000000000004, 
      778.74000000000001, 
      745.88999999999999, 
      703.47000000000003, 
      675.48000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      115.0, 
      116.0, 
      115.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      101.26000000000001, 
      106.55, 
      109.27
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      111.0, 
      105.0, 
      102.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      8.0, 
      7.0, 
      6.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      7.46, 
      7.0300000000000002, 
      6.75
    ], 
    "population_total": [
      1909.3499999999999, 
      1963.49, 
      2011.6099999999999, 
      2035.3099999999999, 
      2041.3399999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      134.25999999999999, 
      126.63, 
      121.59
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      627.0, 
      591.0, 
      567.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      113.0, 
      110.0, 
      109.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      1164.47, 
      1225.3, 
      1256.5899999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      1215.0, 
      1279.0, 
      1311.0
    ]
  }, 
  "Iraq": {
    "water_rural_unimproved": [
      3067.0, 
      3666.0, 
      4045.0, 
      4393.0, 
      4534.0
    ], 
    "water_rural_improved_total": [
      2410.0, 
      2881.0, 
      3886.0, 
      4954.0, 
      5542.0
    ], 
    "water_urban_improved_other": [
      12224.0, 
      432.0, 
      502.0, 
      378.0, 
      200.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      2740.5799999999999, 
      3177.1199999999999, 
      3589.29, 
      3803.9200000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      3011.7399999999998, 
      4282.5600000000004, 
      5701.4700000000003, 
      6649.9099999999999
    ], 
    "water_total_improved_other": [
      14634.0, 
      1349.0, 
      1454.0, 
      1126.0, 
      805.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      13974.0, 
      16991.0, 
      20058.0, 
      21866.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      721.21000000000004, 
      836.08000000000004, 
      944.54999999999995, 
      1001.03
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      1309.0, 
      1190.0, 
      841.0, 
      504.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      523.77999999999997, 
      793.07000000000005, 
      1028.1300000000001, 
      1209.0699999999999
    ], 
    "population_urban": [
      12602.440000000001, 
      14424.120000000001, 
      16721.68, 
      18891.009999999998, 
      20020.630000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      15523.0, 
      18318.0, 
      21397.0, 
      22956.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      12224.0, 
      13991.0, 
      15886.0, 
      17569.0, 
      18219.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      6997.3900000000003, 
      7661.3400000000001, 
      8179.6899999999996, 
      8230.25
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      1702.29, 
      1665.4400000000001, 
      1775.8699999999999, 
      1712.8599999999999
    ], 
    "water_total_improved_total": [
      14634.0, 
      16872.0, 
      19772.0, 
      22523.0, 
      23761.0
    ], 
    "population_rural": [
      5476.9799999999996, 
      6547.2700000000004, 
      7930.6599999999999, 
      9346.6800000000003, 
      10075.620000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      3265.0, 
      3970.0, 
      4617.0, 
      5013.0
    ], 
    "water_urban_unimproved": [
      378.0, 
      433.0, 
      836.0, 
      1322.0, 
      1802.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      3461.79, 
      4013.1999999999998, 
      4533.8400000000001, 
      4804.9499999999998
    ], 
    "water_rural_improved_other": [
      2410.0, 
      917.0, 
      952.0, 
      748.0, 
      605.0
    ], 
    "water_total_unimproved": [
      3445.0, 
      4099.0, 
      4881.0, 
      5715.0, 
      6336.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      1309.45, 
      1189.5999999999999, 
      841.20000000000005, 
      503.77999999999997
    ], 
    "population_total": [
      18079.41, 
      20971.389999999999, 
      24652.34, 
      28237.689999999999, 
      30096.25
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      3535.5300000000002, 
      3648.0999999999999, 
      3645.21, 
      3425.71
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      1964.0, 
      2934.0, 
      4206.0, 
      4937.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      2423.0, 
      2501.0, 
      2721.0, 
      2714.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      10962.33, 
      12708.48, 
      14357.17, 
      15215.68
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      13559.0, 
      15384.0, 
      17191.0, 
      18019.0
    ]
  }, 
  "Chad": {
    "water_rural_unimproved": [
      3094.0, 
      3395.0, 
      3799.0, 
      4268.0, 
      4485.0
    ], 
    "water_rural_improved_total": [
      1741.0, 
      2170.0, 
      2639.0, 
      3220.0, 
      3524.0
    ], 
    "water_urban_improved_other": [
      483.0, 
      656.0, 
      903.0, 
      1265.0, 
      1452.0
    ], 
    "sanitation_urban_unimproved_shared": [
      203.28999999999999, 
      265.63, 
      353.52999999999997, 
      455.54000000000002, 
      551.95000000000005
    ], 
    "sanitation_rural_improved": [
      96.700000000000003, 
      111.3, 
      193.13, 
      299.50999999999999, 
      320.35000000000002
    ], 
    "water_total_improved_other": [
      2224.0, 
      2826.0, 
      3542.0, 
      4410.0, 
      4896.0
    ], 
    "sanitation_total_improved": [
      351.0, 
      439.0, 
      625.0, 
      882.0, 
      988.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      482.81999999999999, 
      609.38999999999999, 
      785.63, 
      1062.9300000000001, 
      1220.0999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      4826.0, 
      5368.0, 
      5994.0, 
      6645.0, 
      7112.0
    ], 
    "sanitation_rural_unimproved_shared": [
      96.700000000000003, 
      166.96000000000001, 
      257.50999999999999, 
      299.50999999999999, 
      400.43000000000001
    ], 
    "population_urban": [
      1270.5899999999999, 
      1562.55, 
      1964.0599999999999, 
      2530.8000000000002, 
      2905.0
    ], 
    "water_total_improved_piped": [
      127.0, 
      188.0, 
      275.0, 
      480.0, 
      574.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      330.35000000000002, 
      359.38999999999999, 
      392.81, 
      430.24000000000001, 
      464.80000000000001
    ], 
    "water_urban_improved_total": [
      610.0, 
      844.0, 
      1178.0, 
      1670.0, 
      1946.0
    ], 
    "sanitation_total_unimproved_total": [
      5754.3599999999997, 
      6688.7700000000004, 
      7776.6999999999998, 
      9136.5900000000001, 
      9925.6700000000001
    ], 
    "sanitation_rural_unimproved_other": [
      145.03999999999999, 
      278.25999999999999, 
      386.25999999999999, 
      673.89999999999998, 
      640.69000000000005
    ], 
    "water_total_improved_total": [
      2351.0, 
      3014.0, 
      3817.0, 
      4890.0, 
      5470.0
    ], 
    "population_rural": [
      4834.7700000000004, 
      5565.2200000000003, 
      6437.6300000000001, 
      7487.8000000000002, 
      8008.6700000000001
    ], 
    "sanitation_total_unimproved_shared": [
      300.0, 
      433.0, 
      612.0, 
      756.0, 
      952.0
    ], 
    "water_urban_unimproved": [
      661.0, 
      719.0, 
      786.0, 
      861.0, 
      959.0
    ], 
    "sanitation_urban_unimproved_total": [
      1016.47, 
      1234.4100000000001, 
      1531.97, 
      1948.72, 
      2236.8499999999999
    ], 
    "water_rural_improved_other": [
      1741.0, 
      2170.0, 
      2639.0, 
      3145.0, 
      3444.0
    ], 
    "water_total_unimproved": [
      3755.0, 
      4114.0, 
      4585.0, 
      5129.0, 
      5444.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      4496.3400000000001, 
      5008.6899999999996, 
      5600.7399999999998, 
      6214.8699999999999, 
      6647.1899999999996
    ], 
    "population_total": [
      6105.3599999999997, 
      7127.7700000000004, 
      8401.7000000000007, 
      10018.59, 
      10913.67
    ], 
    "sanitation_rural_unimproved_total": [
      4738.0699999999997, 
      5453.9200000000001, 
      6244.5, 
      7188.29, 
      7688.3199999999997
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      75.0, 
      80.0
    ], 
    "sanitation_total_unimproved_other": [
      628.0, 
      887.0, 
      1172.0, 
      1737.0, 
      1861.0
    ], 
    "sanitation_urban_improved": [
      254.12, 
      328.13999999999999, 
      432.08999999999997, 
      582.08000000000004, 
      668.14999999999998
    ], 
    "water_urban_improved_piped": [
      127.0, 
      188.0, 
      275.0, 
      405.0, 
      494.0
    ]
  }, 
  "Estonia": {
    "water_rural_unimproved": [
      14.0, 
      13.0, 
      12.0, 
      12.0, 
      12.0
    ], 
    "water_rural_improved_total": [
      439.0, 
      419.0, 
      407.0, 
      400.0, 
      398.0
    ], 
    "water_urban_improved_other": [
      78.0, 
      60.0, 
      39.0, 
      18.0, 
      19.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      40.289999999999999, 
      38.039999999999999, 
      37.390000000000001, 
      37.25
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      406.19, 
      394.16000000000003, 
      387.41000000000003, 
      385.62
    ], 
    "water_total_improved_other": [
      286.0, 
      241.0, 
      173.0, 
      109.0, 
      109.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      1373.0, 
      1307.0, 
      1284.0, 
      1280.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      25.93, 
      25.16, 
      24.73, 
      24.609999999999999
    ], 
    "population_urban": [
      1114.9200000000001, 
      1007.27, 
      951.00999999999999, 
      934.71000000000004, 
      931.14999999999998
    ], 
    "water_total_improved_piped": [
      1257.0, 
      1175.0, 
      1176.0, 
      1216.0, 
      1211.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1104.0, 
      997.0, 
      942.0, 
      925.0, 
      922.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      66.379999999999995, 
      63.340000000000003, 
      62.840000000000003, 
      61.390000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      1543.0, 
      1416.0, 
      1349.0, 
      1325.0, 
      1320.0
    ], 
    "population_rural": [
      452.56, 
      432.12, 
      419.31999999999999, 
      412.13, 
      410.24000000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      66.0, 
      63.0, 
      62.0, 
      62.0
    ], 
    "water_urban_unimproved": [
      11.0, 
      10.0, 
      9.0, 
      10.0, 
      9.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      40.289999999999999, 
      38.039999999999999, 
      37.390000000000001, 
      37.25
    ], 
    "water_rural_improved_other": [
      208.0, 
      181.0, 
      134.0, 
      91.0, 
      90.0
    ], 
    "water_total_unimproved": [
      25.0, 
      23.0, 
      21.0, 
      22.0, 
      21.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      1567.49, 
      1439.3800000000001, 
      1370.3399999999999, 
      1346.8399999999999, 
      1341.3900000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      25.93, 
      25.16, 
      24.719999999999999, 
      24.620000000000001
    ], 
    "water_rural_improved_piped": [
      231.0, 
      238.0, 
      273.0, 
      309.0, 
      308.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      966.98000000000002, 
      912.97000000000003, 
      897.32000000000005, 
      893.89999999999998
    ], 
    "water_urban_improved_piped": [
      1026.0, 
      937.0, 
      903.0, 
      907.0, 
      903.0
    ]
  }, 
  "Uruguay": {
    "water_rural_unimproved": [
      72.0, 
      58.0, 
      34.0, 
      14.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      271.0, 
      247.0, 
      253.0, 
      253.0, 
      257.0
    ], 
    "water_urban_improved_other": [
      111.0, 
      87.0, 
      91.0, 
      62.0, 
      62.0
    ], 
    "sanitation_urban_unimproved_shared": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_improved": [
      284.63999999999999, 
      256.17000000000002, 
      258.56999999999999, 
      256.14999999999998, 
      254.46000000000001
    ], 
    "water_total_improved_other": [
      211.0, 
      169.0, 
      134.0, 
      70.0, 
      83.0
    ], 
    "sanitation_total_improved": [
      2914.0, 
      3030.0, 
      3202.0, 
      3284.0, 
      3346.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      27.670000000000002, 
      29.190000000000001, 
      30.34, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      162.0, 
      160.0, 
      84.0, 
      39.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      3.4300000000000002, 
      3.0499999999999998, 
      2.8700000000000001, 
      2.6699999999999999, 
      2.5699999999999998
    ], 
    "population_urban": [
      2767.0500000000002, 
      2919.5, 
      3033.6799999999998, 
      3058.5100000000002, 
      3092.3099999999999
    ], 
    "water_total_improved_piped": [
      2772.0, 
      2939.0, 
      3122.0, 
      3242.0, 
      3266.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      110.68000000000001, 
      116.78, 
      60.670000000000002, 
      30.59, 
      0.0
    ], 
    "water_urban_improved_total": [
      2712.0, 
      2861.0, 
      3003.0, 
      3059.0, 
      3092.0
    ], 
    "sanitation_total_unimproved_total": [
      195.99000000000001, 
      194.47, 
      118.98, 
      41.340000000000003, 
      3.3399999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      3.4300000000000002, 
      3.0499999999999998, 
      2.8700000000000001, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      2983.0, 
      3108.0, 
      3256.0, 
      3312.0, 
      3349.0
    ], 
    "population_rural": [
      342.94, 
      304.97000000000003, 
      287.30000000000001, 
      266.82999999999998, 
      257.02999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      3.0, 
      3.0, 
      3.0, 
      3.0, 
      3.0
    ], 
    "water_urban_unimproved": [
      55.0, 
      58.0, 
      31.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      138.34999999999999, 
      145.97999999999999, 
      91.010000000000005, 
      30.579999999999998, 
      0.0
    ], 
    "water_rural_improved_other": [
      100.0, 
      82.0, 
      43.0, 
      8.0, 
      21.0
    ], 
    "water_total_unimproved": [
      127.0, 
      116.0, 
      65.0, 
      14.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      51.439999999999998, 
      42.700000000000003, 
      22.98, 
      8.0, 
      0.0
    ], 
    "population_total": [
      3109.9899999999998, 
      3224.4699999999998, 
      3320.98, 
      3325.3400000000001, 
      3349.3400000000001
    ], 
    "sanitation_rural_unimproved_total": [
      58.299999999999997, 
      48.799999999999997, 
      28.73, 
      10.68, 
      2.5699999999999998
    ], 
    "water_rural_improved_piped": [
      171.0, 
      165.0, 
      210.0, 
      245.0, 
      236.0
    ], 
    "sanitation_total_unimproved_other": [
      31.0, 
      32.0, 
      33.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      2628.6999999999998, 
      2773.52, 
      2942.6700000000001, 
      3027.9299999999998, 
      3092.3099999999999
    ], 
    "water_urban_improved_piped": [
      2601.0, 
      2774.0, 
      2912.0, 
      2997.0, 
      3030.0
    ]
  }, 
  "Mexico": {
    "water_rural_unimproved": [
      8582.0, 
      7078.0, 
      5786.0, 
      4243.0, 
      3213.0
    ], 
    "water_rural_improved_total": [
      15256.0, 
      17330.0, 
      19373.0, 
      20712.0, 
      21507.0
    ], 
    "water_urban_improved_other": [
      3574.0, 
      3362.0, 
      3719.0, 
      4019.0, 
      3354.0
    ], 
    "sanitation_urban_unimproved_shared": [
      3573.98, 
      4034.5, 
      5205.9899999999998, 
      5626.25, 
      5868.4700000000003
    ], 
    "sanitation_rural_improved": [
      7151.3100000000004, 
      10007.360000000001, 
      12831.27, 
      15222.370000000001, 
      16809.779999999999
    ], 
    "water_total_improved_other": [
      6911.0, 
      7023.0, 
      7493.0, 
      7762.0, 
      7062.0
    ], 
    "sanitation_total_improved": [
      54804.0, 
      65818.0, 
      76047.0, 
      85952.0, 
      92262.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      2382.6500000000001, 
      2017.25, 
      1487.4300000000001, 
      1607.5, 
      838.35000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      18829.0, 
      15875.0, 
      12261.0, 
      7152.0, 
      4643.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1668.6400000000001, 
      2440.8200000000002, 
      3019.1199999999999, 
      3743.1999999999998, 
      3955.2399999999998
    ], 
    "population_urban": [
      59566.279999999999, 
      67241.720000000001, 
      74371.270000000004, 
      80374.949999999997, 
      83835.229999999996
    ], 
    "water_total_improved_piped": [
      64337.0, 
      73514.0, 
      82533.0, 
      90110.0, 
      94927.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      5956.6300000000001, 
      5379.3400000000001, 
      4462.2799999999997, 
      2411.25, 
      1676.7
    ], 
    "water_urban_improved_total": [
      55992.0, 
      63207.0, 
      70653.0, 
      77160.0, 
      80482.0
    ], 
    "sanitation_total_unimproved_total": [
      28599.970000000001, 
      25831.919999999998, 
      23483.619999999999, 
      19377.650000000001, 
      16293.49
    ], 
    "sanitation_rural_unimproved_other": [
      2145.3899999999999, 
      1464.49, 
      1509.5599999999999, 
      1247.73, 
      988.80999999999995
    ], 
    "water_total_improved_total": [
      71248.0, 
      80537.0, 
      90026.0, 
      97872.0, 
      101989.0
    ], 
    "population_rural": [
      23837.689999999999, 
      24408.209999999999, 
      25159.349999999999, 
      24954.700000000001, 
      24720.259999999998
    ], 
    "sanitation_total_unimproved_shared": [
      5243.0, 
      6476.0, 
      8225.0, 
      9369.0, 
      9823.0
    ], 
    "water_urban_unimproved": [
      3574.0, 
      4035.0, 
      3718.0, 
      3215.0, 
      3353.0
    ], 
    "sanitation_urban_unimproved_total": [
      11913.25, 
      11431.1, 
      11155.690000000001, 
      9645.0, 
      8383.5300000000007
    ], 
    "water_rural_improved_other": [
      3337.0, 
      3661.0, 
      3774.0, 
      3743.0, 
      3708.0
    ], 
    "water_total_unimproved": [
      12156.0, 
      11113.0, 
      9504.0, 
      7458.0, 
      6566.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      12872.35, 
      10495.530000000001, 
      7799.3999999999996, 
      4741.3900000000003, 
      2966.4299999999998
    ], 
    "population_total": [
      83403.970000000001, 
      91649.919999999998, 
      99530.619999999995, 
      105329.64999999999, 
      108555.49000000001
    ], 
    "sanitation_rural_unimproved_total": [
      16686.380000000001, 
      14400.85, 
      12328.08, 
      9732.3299999999999, 
      7910.4799999999996
    ], 
    "water_rural_improved_piped": [
      11919.0, 
      13669.0, 
      15599.0, 
      16969.0, 
      17799.0
    ], 
    "sanitation_total_unimproved_other": [
      4528.0, 
      3481.0, 
      2997.0, 
      2855.0, 
      1827.0
    ], 
    "sanitation_urban_improved": [
      47653.029999999999, 
      55810.620000000003, 
      63215.580000000002, 
      70729.949999999997, 
      75451.699999999997
    ], 
    "water_urban_improved_piped": [
      52418.0, 
      59845.0, 
      66934.0, 
      73141.0, 
      77128.0
    ]
  }, 
  "Lebanon": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      502.0, 
      530.0, 
      528.0, 
      547.0, 
      546.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      461.00999999999999, 
      459.45999999999998, 
      475.80000000000001, 
      -1.0
    ], 
    "water_total_improved_other": [
      502.0, 
      80.0, 
      79.0, 
      82.0, 
      546.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      3422.0, 
      3703.0, 
      4011.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      2472.2600000000002, 
      2960.8499999999999, 
      3244.1599999999999, 
      3534.6999999999998, 
      3647.8200000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      3411.0, 
      3693.0, 
      4000.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      2472.0, 
      2961.0, 
      3244.0, 
      3535.0, 
      3648.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      68.739999999999995, 
      69.280000000000001, 
      70.590000000000003, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      68.890000000000001, 
      68.659999999999997, 
      71.099999999999994, 
      -1.0
    ], 
    "water_total_improved_total": [
      2974.0, 
      3491.0, 
      3772.0, 
      4082.0, 
      4194.0
    ], 
    "population_rural": [
      502.06999999999999, 
      529.89999999999998, 
      528.12, 
      546.88999999999999, 
      545.94000000000005
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      502.0, 
      80.0, 
      79.0, 
      82.0, 
      546.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      2974.3200000000002, 
      3490.7399999999998, 
      3772.2800000000002, 
      4081.5900000000001, 
      4193.7600000000002
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      68.890000000000001, 
      68.659999999999997, 
      71.090000000000003, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      450.0, 
      449.0, 
      465.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      69.0, 
      69.0, 
      71.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      2472.2600000000002, 
      2960.8499999999999, 
      3244.1599999999999, 
      3534.6999999999998, 
      3647.8200000000002
    ], 
    "water_urban_improved_piped": [
      2472.0, 
      2961.0, 
      3244.0, 
      3535.0, 
      3648.0
    ]
  }, 
  "South Africa": {
    "water_rural_unimproved": [
      5992.0, 
      6214.0, 
      5610.0, 
      4893.0, 
      4290.0
    ], 
    "water_rural_improved_total": [
      11632.0, 
      12617.0, 
      13734.0, 
      14681.0, 
      15213.0
    ], 
    "water_urban_improved_other": [
      2486.0, 
      2706.0, 
      2809.0, 
      3135.0, 
      3017.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1912.1099999999999, 
      2254.3499999999999, 
      2552.8099999999999, 
      2849.9400000000001, 
      3016.4099999999999
    ], 
    "sanitation_rural_improved": [
      10222.0, 
      11110.49, 
      11799.73, 
      12527.4, 
      12677.27
    ], 
    "water_total_improved_other": [
      9712.0, 
      10615.0, 
      11127.0, 
      11944.0, 
      11989.0
    ], 
    "sanitation_total_improved": [
      25519.0, 
      29370.0, 
      32733.0, 
      36181.0, 
      38015.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      1529.6900000000001, 
      1578.04, 
      1531.6800000000001, 
      1424.97, 
      1206.5699999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      4612.0, 
      4782.0, 
      4573.0, 
      4289.0, 
      3919.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1409.9300000000001, 
      1506.51, 
      1547.51, 
      1761.6700000000001, 
      1755.3099999999999
    ], 
    "population_urban": [
      19121.139999999999, 
      22543.48, 
      25528.07, 
      28499.380000000001, 
      30164.139999999999
    ], 
    "water_total_improved_piped": [
      20659.0, 
      24095.0, 
      27625.0, 
      30951.0, 
      33087.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      382.42000000000002, 
      450.87, 
      510.56, 
      569.99000000000001, 
      603.27999999999997
    ], 
    "water_urban_improved_total": [
      18739.0, 
      22093.0, 
      25018.0, 
      28214.0, 
      29863.0
    ], 
    "sanitation_total_unimproved_total": [
      11226.280000000001, 
      12004.82, 
      12138.889999999999, 
      11892.440000000001, 
      11652.629999999999
    ], 
    "sanitation_rural_unimproved_other": [
      1762.4100000000001, 
      1883.1300000000001, 
      1934.3800000000001, 
      1565.9300000000001, 
      1755.3099999999999
    ], 
    "water_total_improved_total": [
      30371.0, 
      34710.0, 
      38752.0, 
      42895.0, 
      45076.0
    ], 
    "population_rural": [
      17624.139999999999, 
      18831.34, 
      19343.82, 
      19574.060000000001, 
      19503.490000000002
    ], 
    "sanitation_total_unimproved_shared": [
      3322.0, 
      3761.0, 
      4101.0, 
      4612.0, 
      4771.0
    ], 
    "water_urban_unimproved": [
      382.0, 
      450.0, 
      510.0, 
      285.0, 
      301.0
    ], 
    "sanitation_urban_unimproved_total": [
      3824.23, 
      4283.2600000000002, 
      4595.0500000000002, 
      4844.8999999999996, 
      4826.2600000000002
    ], 
    "water_rural_improved_other": [
      7226.0, 
      7909.0, 
      8318.0, 
      8809.0, 
      8972.0
    ], 
    "water_total_unimproved": [
      6374.0, 
      6664.0, 
      6120.0, 
      5178.0, 
      4591.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      4229.79, 
      4331.21, 
      4062.1999999999998, 
      3719.0700000000002, 
      3315.5900000000001
    ], 
    "population_total": [
      36745.279999999999, 
      41374.82, 
      44871.889999999999, 
      48073.440000000002, 
      49667.629999999997
    ], 
    "sanitation_rural_unimproved_total": [
      7402.1400000000003, 
      7720.8500000000004, 
      7544.0900000000001, 
      7046.6599999999999, 
      6826.2200000000003
    ], 
    "water_rural_improved_piped": [
      4406.0, 
      4708.0, 
      5416.0, 
      5872.0, 
      6241.0
    ], 
    "sanitation_total_unimproved_other": [
      3292.0, 
      3461.0, 
      3466.0, 
      2991.0, 
      2962.0
    ], 
    "sanitation_urban_improved": [
      15296.91, 
      18260.220000000001, 
      20933.02, 
      23654.48, 
      25337.880000000001
    ], 
    "water_urban_improved_piped": [
      16253.0, 
      19387.0, 
      22209.0, 
      25079.0, 
      26846.0
    ]
  }, 
  "Uzbekistan": {
    "water_rural_unimproved": [
      1843.0, 
      2116.0, 
      2642.0, 
      3000.0, 
      3268.0
    ], 
    "water_rural_improved_total": [
      10443.0, 
      11993.0, 
      12902.0, 
      13665.0, 
      13934.0
    ], 
    "water_urban_improved_other": [
      905.0, 
      969.0, 
      1108.0, 
      1255.0, 
      1298.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      9337.0200000000004, 
      11005.139999999999, 
      13523.68, 
      15998.219999999999, 
      17202.02
    ], 
    "water_total_improved_other": [
      6802.0, 
      7883.0, 
      9036.0, 
      10254.0, 
      10759.0
    ], 
    "sanitation_total_improved": [
      17155.0, 
      19463.0, 
      22478.0, 
      25556.0, 
      27191.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      411.48000000000002, 
      352.41000000000003, 
      276.93000000000001, 
      96.549999999999997, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      8229.6900000000005, 
      8810.2000000000007, 
      9231.1499999999996, 
      9654.8400000000001, 
      9989.2600000000002
    ], 
    "water_total_improved_piped": [
      11624.0, 
      12656.0, 
      12913.0, 
      12873.0, 
      12964.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      7983.0, 
      8546.0, 
      9047.0, 
      9462.0, 
      9789.0
    ], 
    "sanitation_total_unimproved_total": [
      3360.25, 
      3456.3600000000001, 
      2297.6100000000001, 
      763.64999999999998, 
      0.28000000000000003
    ], 
    "sanitation_rural_unimproved_other": [
      2948.5300000000002, 
      3104.0100000000002, 
      2020.78, 
      666.59000000000003, 
      0.0
    ], 
    "water_total_improved_total": [
      18426.0, 
      20539.0, 
      21949.0, 
      23127.0, 
      23723.0
    ], 
    "population_rural": [
      12285.559999999999, 
      14109.16, 
      15544.469999999999, 
      16664.810000000001, 
      17202.02
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      247.0, 
      264.0, 
      184.0, 
      193.0, 
      200.0
    ], 
    "sanitation_urban_unimproved_total": [
      411.48000000000002, 
      352.41000000000003, 
      276.94, 
      96.549999999999997, 
      0.0
    ], 
    "water_rural_improved_other": [
      5897.0, 
      6914.0, 
      7928.0, 
      8999.0, 
      9461.0
    ], 
    "water_total_unimproved": [
      2090.0, 
      2380.0, 
      2826.0, 
      3193.0, 
      3468.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      20515.25, 
      22919.360000000001, 
      24775.610000000001, 
      26319.650000000001, 
      27191.279999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2948.54, 
      3104.02, 
      2020.79, 
      666.59000000000003, 
      0.0
    ], 
    "water_rural_improved_piped": [
      4546.0, 
      5079.0, 
      4974.0, 
      4666.0, 
      4473.0
    ], 
    "sanitation_total_unimproved_other": [
      3360.0, 
      3456.0, 
      2298.0, 
      764.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      7818.21, 
      8457.7900000000009, 
      8954.2099999999991, 
      9558.2900000000009, 
      9989.2600000000002
    ], 
    "water_urban_improved_piped": [
      7078.0, 
      7577.0, 
      7939.0, 
      8207.0, 
      8491.0
    ]
  }, 
  "Tunisia": {
    "water_rural_unimproved": [
      1313.0, 
      1067.0, 
      795.0, 
      548.0, 
      545.0
    ], 
    "water_rural_improved_total": [
      2142.0, 
      2375.0, 
      2661.0, 
      2875.0, 
      2861.0
    ], 
    "water_urban_improved_other": [
      285.0, 
      330.0, 
      360.0, 
      323.0, 
      339.0
    ], 
    "sanitation_urban_unimproved_shared": [
      95.200000000000003, 
      109.84999999999999, 
      119.91, 
      129.11000000000001, 
      135.25999999999999
    ], 
    "sanitation_rural_improved": [
      1520.0699999999999, 
      1755.5699999999999, 
      1970.1500000000001, 
      2190.6999999999998, 
      2179.9000000000001
    ], 
    "water_total_improved_other": [
      1667.0, 
      1741.0, 
      1880.0, 
      1863.0, 
      1872.0
    ], 
    "sanitation_total_improved": [
      6042.0, 
      6974.0, 
      7666.0, 
      8388.0, 
      8673.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      54.93, 
      119.91, 
      129.11000000000001, 
      135.25999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1732.0, 
      1349.0, 
      924.0, 
      479.0, 
      477.0
    ], 
    "sanitation_rural_unimproved_shared": [
      207.28, 
      206.53999999999999, 
      241.94999999999999, 
      273.83999999999997, 
      272.49000000000001
    ], 
    "population_urban": [
      4760.2299999999996, 
      5492.6999999999998, 
      5995.5900000000001, 
      6455.4499999999998, 
      6763.1599999999999
    ], 
    "water_total_improved_piped": [
      4997.0, 
      5907.0, 
      6657.0, 
      7403.0, 
      7685.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      142.81, 
      109.84999999999999, 
      59.960000000000001, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      4522.0, 
      5273.0, 
      5876.0, 
      6391.0, 
      6696.0
    ], 
    "sanitation_total_unimproved_total": [
      2172.9400000000001, 
      1960.99, 
      1786.0, 
      1490.4200000000001, 
      1496.25
    ], 
    "sanitation_rural_unimproved_other": [
      138.19, 
      240.96000000000001, 
      380.19999999999999, 
      479.22000000000003, 
      476.85000000000002
    ], 
    "water_total_improved_total": [
      6664.0, 
      7648.0, 
      8537.0, 
      9266.0, 
      9557.0
    ], 
    "population_rural": [
      3454.71, 
      3442.29, 
      3456.4099999999999, 
      3422.9699999999998, 
      3406.0900000000001
    ], 
    "sanitation_total_unimproved_shared": [
      302.0, 
      317.0, 
      362.0, 
      403.0, 
      407.0
    ], 
    "water_urban_unimproved": [
      238.0, 
      220.0, 
      120.0, 
      64.0, 
      67.0
    ], 
    "sanitation_urban_unimproved_total": [
      238.00999999999999, 
      274.63999999999999, 
      299.77999999999997, 
      258.22000000000003, 
      270.52999999999997
    ], 
    "water_rural_improved_other": [
      1382.0, 
      1411.0, 
      1520.0, 
      1540.0, 
      1533.0
    ], 
    "water_total_unimproved": [
      1551.0, 
      1287.0, 
      915.0, 
      612.0, 
      612.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1589.1700000000001, 
      1239.23, 
      864.10000000000002, 
      479.22000000000003, 
      476.85000000000002
    ], 
    "population_total": [
      8214.9400000000005, 
      8934.9899999999998, 
      9452.0, 
      9878.4200000000001, 
      10169.25
    ], 
    "sanitation_rural_unimproved_total": [
      1934.6400000000001, 
      1686.72, 
      1486.26, 
      1232.27, 
      1226.1900000000001
    ], 
    "water_rural_improved_piped": [
      760.0, 
      964.0, 
      1141.0, 
      1335.0, 
      1328.0
    ], 
    "sanitation_total_unimproved_other": [
      138.0, 
      296.0, 
      500.0, 
      608.0, 
      612.0
    ], 
    "sanitation_urban_improved": [
      4522.2200000000003, 
      5218.0600000000004, 
      5695.8100000000004, 
      6197.2299999999996, 
      6492.6300000000001
    ], 
    "water_urban_improved_piped": [
      4237.0, 
      4943.0, 
      5516.0, 
      6068.0, 
      6357.0
    ]
  }, 
  "Djibouti": {
    "water_rural_unimproved": [
      42.0, 
      41.0, 
      47.0, 
      50.0, 
      51.0
    ], 
    "water_rural_improved_total": [
      94.0, 
      85.0, 
      74.0, 
      62.0, 
      56.0
    ], 
    "water_urban_improved_other": [
      47.0, 
      55.0, 
      79.0, 
      111.0, 
      118.0
    ], 
    "sanitation_urban_unimproved_shared": [
      25.43, 
      24.870000000000001, 
      30.399999999999999, 
      34.649999999999999, 
      37.100000000000001
    ], 
    "sanitation_rural_improved": [
      61.390000000000001, 
      53.119999999999997, 
      36.439999999999998, 
      20.149999999999999, 
      10.720000000000001
    ], 
    "water_total_improved_other": [
      115.0, 
      117.0, 
      138.0, 
      166.0, 
      171.0
    ], 
    "sanitation_total_improved": [
      370.0, 
      411.0, 
      456.0, 
      470.0, 
      479.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      42.390000000000001, 
      64.650000000000006, 
      121.62, 
      194.03999999999999, 
      237.47
    ], 
    "sanitation_total_unimproved_opendefecation": [
      111.0, 
      111.0, 
      100.0, 
      79.0, 
      65.0
    ], 
    "sanitation_rural_unimproved_shared": [
      8.1899999999999995, 
      6.3200000000000003, 
      4.8600000000000003, 
      2.2400000000000002, 
      1.0700000000000001
    ], 
    "population_urban": [
      423.85000000000002, 
      497.31, 
      608.08000000000004, 
      693.00999999999999, 
      742.08000000000004
    ], 
    "water_total_improved_piped": [
      318.0, 
      371.0, 
      471.0, 
      554.0, 
      612.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      46.619999999999997, 
      49.729999999999997, 
      36.479999999999997, 
      13.859999999999999, 
      0.0
    ], 
    "water_urban_improved_total": [
      339.0, 
      403.0, 
      535.0, 
      658.0, 
      727.0
    ], 
    "sanitation_total_unimproved_total": [
      190.28, 
      212.80000000000001, 
      273.56, 
      334.94, 
      370.25
    ], 
    "sanitation_rural_unimproved_other": [
      2.73, 
      6.3200000000000003, 
      15.789999999999999, 
      24.620000000000001, 
      30.010000000000002
    ], 
    "water_total_improved_total": [
      433.0, 
      488.0, 
      609.0, 
      720.0, 
      783.0
    ], 
    "population_rural": [
      136.43000000000001, 
      126.48999999999999, 
      121.48, 
      111.93000000000001, 
      107.17
    ], 
    "sanitation_total_unimproved_shared": [
      33.0, 
      31.0, 
      35.0, 
      37.0, 
      38.0
    ], 
    "water_urban_unimproved": [
      85.0, 
      94.0, 
      73.0, 
      35.0, 
      15.0
    ], 
    "sanitation_urban_unimproved_total": [
      114.44, 
      139.25, 
      188.5, 
      242.55000000000001, 
      274.56999999999999
    ], 
    "water_rural_improved_other": [
      68.0, 
      62.0, 
      59.0, 
      55.0, 
      53.0
    ], 
    "water_total_unimproved": [
      127.0, 
      135.0, 
      120.0, 
      85.0, 
      66.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      64.120000000000005, 
      60.710000000000001, 
      64.379999999999995, 
      64.920000000000002, 
      65.370000000000005
    ], 
    "population_total": [
      560.27999999999997, 
      623.79999999999995, 
      729.55999999999995, 
      804.94000000000005, 
      849.25
    ], 
    "sanitation_rural_unimproved_total": [
      75.040000000000006, 
      73.370000000000005, 
      85.040000000000006, 
      91.780000000000001, 
      96.450000000000003
    ], 
    "water_rural_improved_piped": [
      26.0, 
      23.0, 
      15.0, 
      7.0, 
      3.0
    ], 
    "sanitation_total_unimproved_other": [
      45.0, 
      71.0, 
      138.0, 
      219.0, 
      267.0
    ], 
    "sanitation_urban_improved": [
      309.41000000000003, 
      358.06, 
      419.57999999999998, 
      450.45999999999998, 
      467.50999999999999
    ], 
    "water_urban_improved_piped": [
      292.0, 
      348.0, 
      456.0, 
      547.0, 
      609.0
    ]
  }, 
  "Antigua and Barbuda": {
    "water_rural_unimproved": [
      -1.0, 
      5.0, 
      5.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      39.0, 
      43.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      21.0, 
      5.0, 
      6.0, 
      7.0, 
      36.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      40.969999999999999, 
      45.479999999999997, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      8.0, 
      9.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      65.0, 
      73.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.44, 
      0.48999999999999999, 
      0.57999999999999996, 
      0.65000000000000002, 
      0.75
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      21.940000000000001, 
      24.579999999999998, 
      28.760000000000002, 
      32.670000000000002, 
      37.520000000000003
    ], 
    "water_total_improved_piped": [
      -1.0, 
      54.0, 
      61.0, 
      66.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      21.0, 
      23.0, 
      27.0, 
      31.0, 
      36.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      3.1600000000000001, 
      4.1299999999999999, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      2.6099999999999999, 
      2.8999999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      62.0, 
      70.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      39.979999999999997, 
      43.579999999999998, 
      48.380000000000003, 
      50.859999999999999, 
      49.119999999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1.0, 
      2.0, 
      2.0, 
      2.0, 
      2.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.44, 
      0.48999999999999999, 
      0.57999999999999996, 
      0.65000000000000002, 
      0.75
    ], 
    "water_rural_improved_other": [
      -1.0, 
      3.0, 
      3.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      7.0, 
      7.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      61.920000000000002, 
      68.159999999999997, 
      77.129999999999995, 
      83.530000000000001, 
      86.629999999999995
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      2.6099999999999999, 
      2.8999999999999999, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      36.0, 
      40.0, 
      42.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      3.0, 
      4.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      21.5, 
      24.09, 
      28.18, 
      32.020000000000003, 
      36.770000000000003
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      18.0, 
      21.0, 
      24.0, 
      -1.0
    ]
  }, 
  "Spain": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      9573.0, 
      9510.0, 
      9558.0, 
      10024.0, 
      10187.0
    ], 
    "water_urban_improved_other": [
      293.0, 
      299.0, 
      307.0, 
      330.0, 
      343.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      9573.5, 
      9510.4899999999998, 
      9557.9500000000007, 
      10024.0, 
      10187.389999999999
    ], 
    "water_total_improved_other": [
      293.0, 
      299.0, 
      307.0, 
      330.0, 
      343.0
    ], 
    "sanitation_total_improved": [
      38839.0, 
      39390.0, 
      40264.0, 
      43060.0, 
      44486.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      29265.790000000001, 
      29880.200000000001, 
      30706.389999999999, 
      33036.260000000002, 
      34299.019999999997
    ], 
    "water_total_improved_piped": [
      38546.0, 
      39091.0, 
      39957.0, 
      42730.0, 
      44143.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      29266.0, 
      29880.0, 
      30706.0, 
      33036.0, 
      34299.0
    ], 
    "sanitation_total_unimproved_total": [
      0.28000000000000003, 
      0.68000000000000005, 
      0.34000000000000002, 
      0.26000000000000001, 
      0.40000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      38839.0, 
      39390.0, 
      40264.0, 
      43060.0, 
      44486.0
    ], 
    "population_rural": [
      9573.5, 
      9510.4899999999998, 
      9557.9500000000007, 
      10024.0, 
      10187.389999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      38839.279999999999, 
      39390.68, 
      40264.339999999997, 
      43060.260000000002, 
      44486.400000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      9573.0, 
      9510.0, 
      9558.0, 
      10024.0, 
      10187.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      29265.790000000001, 
      29880.200000000001, 
      30706.389999999999, 
      33036.260000000002, 
      34299.019999999997
    ], 
    "water_urban_improved_piped": [
      28973.0, 
      29581.0, 
      30399.0, 
      32706.0, 
      33956.0
    ]
  }, 
  "Colombia": {
    "water_rural_unimproved": [
      3371.0, 
      3225.0, 
      3221.0, 
      3071.0, 
      3102.0
    ], 
    "water_rural_improved_total": [
      7163.0, 
      7525.0, 
      7886.0, 
      8302.0, 
      8388.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      257.0, 
      1147.0, 
      1583.0, 
      1676.0
    ], 
    "sanitation_urban_unimproved_shared": [
      3173.8400000000001, 
      3599.3200000000002, 
      4013.2800000000002, 
      4751.4099999999999, 
      5028.3500000000004
    ], 
    "sanitation_rural_improved": [
      4529.4399999999996, 
      4944.8000000000002, 
      5553.29, 
      6027.79, 
      6319.3800000000001
    ], 
    "water_total_improved_other": [
      948.0, 
      1547.0, 
      2702.0, 
      3402.0, 
      3630.0
    ], 
    "sanitation_total_improved": [
      22665.0, 
      25513.0, 
      28486.0, 
      31686.0, 
      33472.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      453.41000000000003, 
      771.27999999999997, 
      1146.6500000000001, 
      633.51999999999998, 
      670.45000000000005
    ], 
    "sanitation_total_unimproved_opendefecation": [
      5331.0, 
      4641.0, 
      3905.0, 
      3364.0, 
      3198.0
    ], 
    "sanitation_rural_unimproved_shared": [
      421.33999999999997, 
      429.98000000000002, 
      555.33000000000004, 
      568.65999999999997, 
      574.49000000000001
    ], 
    "population_urban": [
      22670.259999999998, 
      25709.439999999999, 
      28666.32, 
      31676.07, 
      33522.309999999998
    ], 
    "water_total_improved_piped": [
      28432.0, 
      31173.0, 
      33564.0, 
      36259.0, 
      37945.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      906.80999999999995, 
      771.27999999999997, 
      573.33000000000004, 
      633.51999999999998, 
      670.45000000000005
    ], 
    "water_urban_improved_total": [
      22217.0, 
      25195.0, 
      28380.0, 
      31359.0, 
      33187.0
    ], 
    "sanitation_total_unimproved_total": [
      10538.85, 
      10946.01, 
      11286.91, 
      11363.25, 
      11540.09
    ], 
    "sanitation_rural_unimproved_other": [
      1158.6900000000001, 
      1504.9400000000001, 
      1665.99, 
      2047.1700000000001, 
      2068.1599999999999
    ], 
    "water_total_improved_total": [
      29380.0, 
      32720.0, 
      36266.0, 
      39661.0, 
      41575.0
    ], 
    "population_rural": [
      10533.59, 
      10749.58, 
      11106.58, 
      11373.18, 
      11489.790000000001
    ], 
    "sanitation_total_unimproved_shared": [
      3595.0, 
      4029.0, 
      4568.0, 
      5320.0, 
      5602.0
    ], 
    "water_urban_unimproved": [
      453.0, 
      514.0, 
      286.0, 
      317.0, 
      335.0
    ], 
    "sanitation_urban_unimproved_total": [
      4534.0500000000002, 
      5141.8900000000003, 
      5733.2600000000002, 
      6018.46, 
      6369.2399999999998
    ], 
    "water_rural_improved_other": [
      948.0, 
      1290.0, 
      1555.0, 
      1819.0, 
      1954.0
    ], 
    "water_total_unimproved": [
      3824.0, 
      3739.0, 
      3507.0, 
      3388.0, 
      3437.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      4424.1099999999997, 
      3869.8499999999999, 
      3331.98, 
      2729.5599999999999, 
      2527.75
    ], 
    "population_total": [
      33203.849999999999, 
      36459.010000000002, 
      39772.910000000003, 
      43049.25, 
      45012.089999999997
    ], 
    "sanitation_rural_unimproved_total": [
      6004.1499999999996, 
      5804.7799999999997, 
      5553.29, 
      5345.3900000000003, 
      5170.4099999999999
    ], 
    "water_rural_improved_piped": [
      6215.0, 
      6235.0, 
      6331.0, 
      6483.0, 
      6434.0
    ], 
    "sanitation_total_unimproved_other": [
      1612.0, 
      2276.0, 
      2813.0, 
      2681.0, 
      2738.0
    ], 
    "sanitation_urban_improved": [
      18136.209999999999, 
      20567.549999999999, 
      22933.060000000001, 
      25657.610000000001, 
      27153.07
    ], 
    "water_urban_improved_piped": [
      22217.0, 
      24938.0, 
      27233.0, 
      29776.0, 
      31511.0
    ]
  }, 
  "Burundi": {
    "water_rural_unimproved": [
      1704.0, 
      1774.0, 
      1781.0, 
      1935.0, 
      2098.0
    ], 
    "water_rural_improved_total": [
      3621.0, 
      3948.0, 
      4156.0, 
      4740.0, 
      5138.0
    ], 
    "water_urban_improved_other": [
      232.0, 
      254.0, 
      257.0, 
      281.0, 
      302.0
    ], 
    "sanitation_urban_unimproved_shared": [
      64.129999999999995, 
      84.489999999999995, 
      107.12, 
      147.58000000000001, 
      184.38
    ], 
    "sanitation_rural_improved": [
      2342.9899999999998, 
      2575.0300000000002, 
      2671.6599999999999, 
      3070.6700000000001, 
      3328.6300000000001
    ], 
    "water_total_improved_other": [
      3800.0, 
      4145.0, 
      4354.0, 
      4954.0, 
      5368.0
    ], 
    "sanitation_total_improved": [
      2489.0, 
      2771.0, 
      2918.0, 
      3415.0, 
      3740.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      142.50999999999999, 
      160.09, 
      176.75, 
      196.77000000000001, 
      226.28999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      164.0, 
      176.0, 
      124.0, 
      81.0, 
      89.0
    ], 
    "sanitation_rural_unimproved_shared": [
      213.0, 
      228.88999999999999, 
      237.47999999999999, 
      267.00999999999999, 
      289.44999999999999
    ], 
    "population_urban": [
      356.26999999999998, 
      444.69999999999999, 
      535.61000000000001, 
      702.76999999999998, 
      838.11000000000001
    ], 
    "water_total_improved_piped": [
      167.0, 
      217.0, 
      279.0, 
      383.0, 
      466.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      3.5600000000000001, 
      4.4500000000000002, 
      5.3600000000000003, 
      14.06, 
      16.760000000000002
    ], 
    "water_urban_improved_total": [
      346.0, 
      414.0, 
      477.0, 
      597.0, 
      696.0
    ], 
    "sanitation_total_unimproved_total": [
      3192.2600000000002, 
      3395.98, 
      3554.6199999999999, 
      3963.1300000000001, 
      4334.25
    ], 
    "sanitation_rural_unimproved_other": [
      2609.2399999999998, 
      2746.6999999999998, 
      2909.1399999999999, 
      3270.9299999999998, 
      3545.71
    ], 
    "water_total_improved_total": [
      3967.0, 
      4362.0, 
      4633.0, 
      5337.0, 
      5834.0
    ], 
    "population_rural": [
      5324.9899999999998, 
      5722.2799999999997, 
      5937.0100000000002, 
      6675.3599999999997, 
      7236.1499999999996
    ], 
    "sanitation_total_unimproved_shared": [
      277.0, 
      313.0, 
      344.0, 
      415.0, 
      473.0
    ], 
    "water_urban_unimproved": [
      10.0, 
      31.0, 
      59.0, 
      106.0, 
      142.0
    ], 
    "sanitation_urban_unimproved_total": [
      210.19999999999999, 
      249.03, 
      289.23000000000002, 
      358.41000000000003, 
      427.44
    ], 
    "water_rural_improved_other": [
      3568.0, 
      3891.0, 
      4097.0, 
      4673.0, 
      5066.0
    ], 
    "water_total_unimproved": [
      1714.0, 
      1805.0, 
      1840.0, 
      2041.0, 
      2240.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      159.75, 
      171.66999999999999, 
      118.73999999999999, 
      66.75, 
      72.359999999999999
    ], 
    "population_total": [
      5681.2600000000002, 
      6166.9799999999996, 
      6472.6199999999999, 
      7378.1300000000001, 
      8074.25
    ], 
    "sanitation_rural_unimproved_total": [
      2982.0, 
      3147.25, 
      3265.3499999999999, 
      3604.6900000000001, 
      3907.52
    ], 
    "water_rural_improved_piped": [
      53.0, 
      57.0, 
      59.0, 
      67.0, 
      72.0
    ], 
    "sanitation_total_unimproved_other": [
      2752.0, 
      2907.0, 
      3086.0, 
      3468.0, 
      3772.0
    ], 
    "sanitation_urban_improved": [
      146.06999999999999, 
      195.66999999999999, 
      246.38, 
      344.36000000000001, 
      410.67000000000002
    ], 
    "water_urban_improved_piped": [
      114.0, 
      160.0, 
      220.0, 
      316.0, 
      394.0
    ]
  }, 
  "Slovakia": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      2353.0, 
      2359.0, 
      2350.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      121.0, 
      181.0, 
      183.0
    ], 
    "sanitation_urban_unimproved_shared": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_improved": [
      2286.9099999999999, 
      2325.48, 
      2352.9699999999998, 
      2334.9400000000001, 
      2326.3899999999999
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      309.0, 
      323.0, 
      324.0
    ], 
    "sanitation_total_improved": [
      5256.0, 
      5351.0, 
      5379.0, 
      5362.0, 
      5376.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_urban": [
      2969.2600000000002, 
      3026.0999999999999, 
      3025.6199999999999, 
      3027.3400000000001, 
      3049.9200000000001
    ], 
    "water_total_improved_piped": [
      5004.0, 
      5059.0, 
      5070.0, 
      5063.0, 
      5076.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      3026.0, 
      3027.0, 
      3050.0
    ], 
    "sanitation_total_unimproved_total": [
      0.17000000000000001, 
      0.57999999999999996, 
      -0.40999999999999998, 
      23.859999999999999, 
      23.800000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      23.59, 
      23.5
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      5379.0, 
      5386.0, 
      5400.0
    ], 
    "population_rural": [
      2286.9099999999999, 
      2325.48, 
      2352.9699999999998, 
      2358.52, 
      2349.8899999999999
    ], 
    "sanitation_total_unimproved_shared": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      188.0, 
      142.0, 
      141.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      5256.1700000000001, 
      5351.5799999999999, 
      5378.5900000000001, 
      5385.8599999999997, 
      5399.8000000000002
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      23.579999999999998, 
      23.5
    ], 
    "water_rural_improved_piped": [
      2035.0, 
      2093.0, 
      2165.0, 
      2217.0, 
      2209.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      24.0, 
      23.0
    ], 
    "sanitation_urban_improved": [
      2969.2600000000002, 
      3026.0999999999999, 
      3025.6199999999999, 
      3027.3400000000001, 
      3049.9200000000001
    ], 
    "water_urban_improved_piped": [
      2969.0, 
      2966.0, 
      2905.0, 
      2846.0, 
      2867.0
    ]
  }, 
  "Fiji": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      277.0, 
      213.0, 
      236.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      24.09, 
      20.960000000000001, 
      15.5, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      301.07999999999998, 
      349.38, 
      387.41000000000003, 
      420.89999999999998, 
      441.93000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      141.0, 
      153.0, 
      164.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      277.0, 
      325.0, 
      360.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      422.48000000000002, 
      418.56, 
      414.26999999999998, 
      407.14999999999998, 
      402.12
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      24.0, 
      24.0, 
      27.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      24.09, 
      20.960000000000001, 
      15.49, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      723.55999999999995, 
      767.94000000000005, 
      801.67999999999995, 
      828.04999999999995, 
      844.04999999999995
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      29.0, 
      29.0, 
      29.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      276.99000000000001, 
      328.42000000000002, 
      371.92000000000002, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      112.0, 
      124.0, 
      135.0, 
      -1.0
    ]
  }, 
  "Barbados": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      175.0, 
      169.0, 
      160.0, 
      156.0, 
      154.0
    ], 
    "water_urban_improved_other": [
      2.0, 
      1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      174.78999999999999, 
      169.00999999999999, 
      160.22, 
      156.03, 
      153.66999999999999
    ], 
    "water_total_improved_other": [
      177.0, 
      170.0, 
      160.0, 
      156.0, 
      154.0
    ], 
    "sanitation_total_improved": [
      260.0, 
      258.0, 
      251.0, 
      253.0, 
      256.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      84.879999999999995, 
      88.980000000000004, 
      91.439999999999998, 
      97.230000000000004, 
      101.53
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      85.0, 
      89.0, 
      91.0, 
      97.0, 
      102.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.33000000000000002, 
      -0.01, 
      0.66000000000000003, 
      0.25, 
      -0.80000000000000004
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      260.0, 
      258.0, 
      251.0, 
      253.0, 
      256.0
    ], 
    "population_rural": [
      174.78999999999999, 
      169.00999999999999, 
      160.22, 
      156.03, 
      153.66999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      175.0, 
      169.0, 
      160.0, 
      156.0, 
      154.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      259.67000000000002, 
      257.99000000000001, 
      251.66, 
      253.25, 
      255.19999999999999
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      84.879999999999995, 
      88.980000000000004, 
      91.439999999999998, 
      97.230000000000004, 
      101.53
    ], 
    "water_urban_improved_piped": [
      83.0, 
      88.0, 
      91.0, 
      97.0, 
      102.0
    ]
  }, 
  "Timor-Leste": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      327.0, 
      315.0, 
      296.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      290.0, 
      418.0, 
      503.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      81.0, 
      135.0, 
      174.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      7.9100000000000001, 
      12.93, 
      14.970000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      154.37, 
      256.55000000000001, 
      319.56
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      303.0, 
      472.0, 
      589.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      263.0, 
      433.0, 
      548.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      39.560000000000002, 
      15.52, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      363.0, 
      435.0, 
      472.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      6.1699999999999999, 
      14.66, 
      15.98
    ], 
    "population_urban": [
      154.27000000000001, 
      191.22, 
      197.81999999999999, 
      258.61000000000001, 
      299.49000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      123.0, 
      153.0, 
      172.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      41.539999999999999, 
      54.310000000000002, 
      56.899999999999999
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      136.0, 
      207.0, 
      258.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      552.30999999999995, 
      558.60000000000002, 
      550.38999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      135.84999999999999, 
      80.629999999999995, 
      47.93
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      426.0, 
      625.0, 
      761.0
    ], 
    "population_rural": [
      585.91999999999996, 
      657.38, 
      617.49000000000001, 
      732.99000000000001, 
      798.89999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      14.0, 
      28.0, 
      31.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      62.0, 
      52.0, 
      41.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      89.019999999999996, 
      82.760000000000005, 
      71.879999999999995
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      222.0, 
      337.0, 
      415.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      389.0, 
      367.0, 
      337.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      321.10000000000002, 
      381.16000000000003, 
      415.43000000000001
    ], 
    "population_total": [
      740.19000000000005, 
      848.60000000000002, 
      815.30999999999995, 
      991.60000000000002, 
      1098.3900000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      463.12, 
      476.44, 
      479.33999999999997
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      68.0, 
      81.0, 
      88.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      176.0, 
      97.0, 
      48.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      108.8, 
      175.84999999999999, 
      227.61000000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      55.0, 
      72.0, 
      84.0
    ]
  }, 
  "Madagascar": {
    "water_rural_unimproved": [
      7237.0, 
      7790.0, 
      8461.0, 
      9194.0, 
      9571.0
    ], 
    "water_rural_improved_total": [
      1379.0, 
      1947.0, 
      2672.0, 
      3400.0, 
      3909.0
    ], 
    "water_urban_improved_other": [
      1408.0, 
      1827.0, 
      2237.0, 
      2811.0, 
      3210.0
    ], 
    "sanitation_urban_unimproved_shared": [
      690.71000000000004, 
      913.88999999999999, 
      1118.5599999999999, 
      1405.6700000000001, 
      1576.74
    ], 
    "sanitation_rural_improved": [
      516.98000000000002, 
      681.55999999999995, 
      890.60000000000002, 
      1133.46, 
      1347.97
    ], 
    "water_total_improved_other": [
      2787.0, 
      3677.0, 
      4686.0, 
      5833.0, 
      6580.0
    ], 
    "sanitation_total_improved": [
      889.0, 
      1156.0, 
      1512.0, 
      1886.0, 
      2193.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      929.80999999999995, 
      1218.52, 
      1532.8499999999999, 
      1907.6900000000001, 
      2196.1799999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      7299.0, 
      7205.0, 
      6882.0, 
      6369.0, 
      6136.0
    ], 
    "sanitation_rural_unimproved_shared": [
      775.48000000000002, 
      1168.3900000000001, 
      1558.55, 
      2015.04, 
      2291.5500000000002
    ], 
    "population_urban": [
      2656.5999999999999, 
      3384.79, 
      4142.8299999999999, 
      5020.2399999999998, 
      5631.2299999999996
    ], 
    "water_total_improved_piped": [
      664.0, 
      842.0, 
      1010.0, 
      1131.0, 
      1327.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      664.14999999999998, 
      778.5, 
      869.99000000000001, 
      953.85000000000002, 
      1013.62
    ], 
    "water_urban_improved_total": [
      2072.0, 
      2572.0, 
      3024.0, 
      3564.0, 
      3998.0
    ], 
    "sanitation_total_unimproved_total": [
      10384.0, 
      11965.370000000001, 
      13763.360000000001, 
      15728.26, 
      16917.939999999999
    ], 
    "sanitation_rural_unimproved_other": [
      689.30999999999995, 
      1460.49, 
      2671.8099999999999, 
      4030.0900000000001, 
      4717.8999999999996
    ], 
    "water_total_improved_total": [
      3451.0, 
      4519.0, 
      5696.0, 
      6964.0, 
      7907.0
    ], 
    "population_rural": [
      8616.3999999999996, 
      9736.5799999999999, 
      11132.530000000001, 
      12594.02, 
      13479.709999999999
    ], 
    "sanitation_total_unimproved_shared": [
      1466.0, 
      2082.0, 
      2678.0, 
      3421.0, 
      3869.0
    ], 
    "water_urban_unimproved": [
      585.0, 
      813.0, 
      1119.0, 
      1456.0, 
      1633.0
    ], 
    "sanitation_urban_unimproved_total": [
      2284.6799999999998, 
      2910.9200000000001, 
      3521.4099999999999, 
      4267.1999999999998, 
      4786.5500000000002
    ], 
    "water_rural_improved_other": [
      1379.0, 
      1850.0, 
      2449.0, 
      3022.0, 
      3370.0
    ], 
    "water_total_unimproved": [
      7822.0, 
      8603.0, 
      9580.0, 
      10650.0, 
      11204.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      6634.6300000000001, 
      6426.1400000000003, 
      6011.5699999999997, 
      5415.4300000000003, 
      5122.29
    ], 
    "population_total": [
      11273.0, 
      13121.370000000001, 
      15275.360000000001, 
      17614.259999999998, 
      19110.939999999999
    ], 
    "sanitation_rural_unimproved_total": [
      8099.4200000000001, 
      9055.0200000000004, 
      10241.93, 
      11460.559999999999, 
      12131.74
    ], 
    "water_rural_improved_piped": [
      0.0, 
      97.0, 
      223.0, 
      378.0, 
      539.0
    ], 
    "sanitation_total_unimproved_other": [
      1619.0, 
      2679.0, 
      4205.0, 
      5938.0, 
      6914.0
    ], 
    "sanitation_urban_improved": [
      371.92000000000002, 
      473.87, 
      621.41999999999996, 
      753.03999999999996, 
      844.67999999999995
    ], 
    "water_urban_improved_piped": [
      664.0, 
      745.0, 
      787.0, 
      753.0, 
      788.0
    ]
  }, 
  "Italy": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      18965.0, 
      18923.0, 
      18721.0, 
      18994.0, 
      19063.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      758.0, 
      379.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      38032.300000000003, 
      38283.959999999999, 
      38394.5, 
      39650.309999999998, 
      40540.650000000001
    ], 
    "water_total_improved_piped": [
      56239.0, 
      56828.0, 
      57115.0, 
      58644.0, 
      59604.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      38032.0, 
      38284.0, 
      38394.0, 
      39650.0, 
      40541.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      56997.0, 
      57207.0, 
      57115.0, 
      58644.0, 
      59604.0
    ], 
    "population_rural": [
      18965.419999999998, 
      18922.880000000001, 
      18721.470000000001, 
      18994.450000000001, 
      19063.049999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      758.0, 
      379.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      56997.720000000001, 
      57206.839999999997, 
      57115.970000000001, 
      58644.75, 
      59603.709999999999
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      18207.0, 
      18544.0, 
      18721.0, 
      18994.0, 
      19063.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      38032.0, 
      38284.0, 
      38394.0, 
      39650.0, 
      40541.0
    ]
  }, 
  "Bhutan": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      51.0, 
      53.0, 
      54.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      368.0, 
      395.0, 
      396.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      25.0, 
      36.0, 
      43.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      226.00999999999999, 
      242.12, 
      242.84
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      205.0, 
      229.0, 
      237.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      350.0, 
      417.0, 
      449.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      12.84, 
      18.129999999999999, 
      21.34
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      52.0, 
      57.0, 
      58.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      89.930000000000007, 
      104.47, 
      142.63999999999999, 
      201.47999999999999, 
      237.08000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      304.0, 
      365.0, 
      394.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      5.71, 
      8.0600000000000005, 
      9.4800000000000004
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      141.0, 
      199.0, 
      235.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      211.18000000000001, 
      232.84, 
      237.78999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      146.49000000000001, 
      156.93000000000001, 
      157.40000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      509.0, 
      594.0, 
      631.0
    ], 
    "population_rural": [
      458.83999999999997, 
      404.22000000000003, 
      418.54000000000002, 
      448.36000000000001, 
      449.70999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      2.0, 
      2.0, 
      2.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      18.539999999999999, 
      26.199999999999999, 
      30.82
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      180.0, 
      193.0, 
      194.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      53.0, 
      55.0, 
      56.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      46.039999999999999, 
      49.32, 
      49.469999999999999
    ], 
    "population_total": [
      548.76999999999998, 
      508.69999999999999, 
      561.17999999999995, 
      649.84000000000003, 
      686.78999999999996
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      192.53, 
      206.24000000000001, 
      206.87
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      188.0, 
      202.0, 
      202.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      159.0, 
      175.0, 
      178.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      124.09999999999999, 
      175.28, 
      206.25999999999999
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      116.0, 
      163.0, 
      192.0
    ]
  }, 
  "Sudan": {
    "water_rural_unimproved": [
      8349.0, 
      9322.0, 
      10039.0, 
      10773.0, 
      11219.0
    ], 
    "water_rural_improved_total": [
      11531.0, 
      11864.0, 
      12270.0, 
      12149.0, 
      12153.0
    ], 
    "water_urban_improved_other": [
      650.0, 
      1062.0, 
      1637.0, 
      2524.0, 
      3056.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      4572.4499999999998, 
      4449.0200000000004, 
      4461.7700000000004, 
      4355.2299999999996, 
      4206.9200000000001
    ], 
    "water_total_improved_other": [
      8404.0, 
      9324.0, 
      10338.0, 
      11235.0, 
      11937.0
    ], 
    "sanitation_total_improved": [
      9115.0, 
      10242.0, 
      11767.0, 
      13190.0, 
      14094.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      1947.02, 
      2606.98, 
      3400.6799999999998, 
      4101.8100000000004, 
      4493.9799999999996
    ], 
    "sanitation_total_unimproved_opendefecation": [
      10263.0, 
      12060.0, 
      13936.0, 
      15676.0, 
      17151.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      7211.1800000000003, 
      9655.4699999999993, 
      12595.1, 
      15776.209999999999, 
      17975.919999999998
    ], 
    "water_total_improved_piped": [
      9257.0, 
      10168.0, 
      11126.0, 
      11642.0, 
      11721.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      721.12, 
      1255.21, 
      1889.26, 
      2839.7199999999998, 
      3595.1799999999998
    ], 
    "water_urban_improved_total": [
      6130.0, 
      7628.0, 
      9194.0, 
      10728.0, 
      11505.0
    ], 
    "sanitation_total_unimproved_total": [
      17976.380000000001, 
      20599.259999999998, 
      23136.970000000001, 
      25508.470000000001, 
      27253.720000000001
    ], 
    "sanitation_rural_unimproved_other": [
      5765.2600000000002, 
      5932.0200000000004, 
      5800.3100000000004, 
      5730.5699999999997, 
      5609.2299999999996
    ], 
    "water_total_improved_total": [
      17661.0, 
      19492.0, 
      21464.0, 
      22877.0, 
      23658.0
    ], 
    "population_rural": [
      19880.200000000001, 
      21185.790000000001, 
      22308.869999999999, 
      22922.27, 
      23371.799999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1081.0, 
      2027.0, 
      3401.0, 
      5048.0, 
      6471.0
    ], 
    "sanitation_urban_unimproved_total": [
      2668.1300000000001, 
      3862.1900000000001, 
      5289.9399999999996, 
      6941.5299999999997, 
      8089.1599999999999
    ], 
    "water_rural_improved_other": [
      7754.0, 
      8262.0, 
      8701.0, 
      8711.0, 
      8881.0
    ], 
    "water_total_unimproved": [
      9430.0, 
      11349.0, 
      13440.0, 
      15821.0, 
      17690.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      9542.4899999999998, 
      10804.75, 
      12046.790000000001, 
      12836.469999999999, 
      13555.639999999999
    ], 
    "population_total": [
      27091.380000000001, 
      30841.259999999998, 
      34903.970000000001, 
      38698.470000000001, 
      41347.720000000001
    ], 
    "sanitation_rural_unimproved_total": [
      15307.75, 
      16736.77, 
      17847.099999999999, 
      18567.040000000001, 
      19164.880000000001
    ], 
    "water_rural_improved_piped": [
      3777.0, 
      3602.0, 
      3569.0, 
      3438.0, 
      3272.0
    ], 
    "sanitation_total_unimproved_other": [
      7712.0, 
      8539.0, 
      9201.0, 
      9833.0, 
      10103.0
    ], 
    "sanitation_urban_improved": [
      4543.0500000000002, 
      5793.2799999999997, 
      7305.1599999999999, 
      8834.6800000000003, 
      9886.7600000000002
    ], 
    "water_urban_improved_piped": [
      5480.0, 
      6566.0, 
      7557.0, 
      8204.0, 
      8449.0
    ]
  }, 
  "Serbia": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      99.0, 
      96.0, 
      94.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      4854.0, 
      4686.0, 
      4633.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      104.0, 
      101.0, 
      102.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      155.41999999999999, 
      152.22, 
      153.36000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      4359.0, 
      4208.04, 
      4160.1000000000004
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      1837.0, 
      1774.0, 
      1757.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      9332.0, 
      9079.0, 
      9068.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      51.810000000000002, 
      50.740000000000002, 
      51.119999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      148.59999999999999, 
      143.46000000000001, 
      141.81999999999999
    ], 
    "population_urban": [
      4821.9799999999996, 
      5193.2799999999997, 
      5180.6199999999999, 
      5074.0, 
      5112.1099999999997
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      8146.0, 
      7935.0, 
      7937.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      5129.0, 
      5023.0, 
      5061.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      802.02999999999997, 
      776.86000000000001, 
      771.5
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      445.81, 
      430.37, 
      425.45999999999998
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      9983.0, 
      9709.0, 
      9694.0
    ], 
    "population_rural": [
      4746.7700000000004, 
      5011.0299999999997, 
      4953.4099999999999, 
      4781.8699999999999, 
      4727.3900000000003
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      304.0, 
      295.0, 
      295.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      52.0, 
      51.0, 
      51.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      207.22999999999999, 
      202.96000000000001, 
      204.47999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      1733.0, 
      1673.0, 
      1655.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      151.0, 
      147.0, 
      145.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      9568.75, 
      10204.309999999999, 
      10134.030000000001, 
      9855.8600000000006, 
      9839.5
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      594.40999999999997, 
      573.83000000000004, 
      567.28999999999996
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      3121.0, 
      3013.0, 
      2978.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      498.0, 
      481.0, 
      476.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      4973.3900000000003, 
      4871.04, 
      4907.6300000000001
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      5025.0, 
      4922.0, 
      4959.0
    ]
  }, 
  "Nepal": {
    "water_rural_unimproved": [
      4527.0, 
      4239.0, 
      4018.0, 
      3440.0, 
      3101.0
    ], 
    "water_rural_improved_total": [
      12886.0, 
      15029.0, 
      17132.0, 
      19492.0, 
      20752.0
    ], 
    "water_urban_improved_other": [
      897.0, 
      1178.0, 
      1510.0, 
      1844.0, 
      2032.0
    ], 
    "sanitation_urban_unimproved_shared": [
      405.97000000000003, 
      612.55999999999995, 
      885.99000000000001, 
      1243.98, 
      1486.9200000000001
    ], 
    "sanitation_rural_improved": [
      1393.05, 
      2504.9000000000001, 
      4018.5599999999999, 
      5503.6700000000001, 
      6440.3500000000004
    ], 
    "water_total_improved_other": [
      12912.0, 
      14858.0, 
      16950.0, 
      19272.0, 
      20399.0
    ], 
    "sanitation_total_improved": [
      2087.0, 
      3542.0, 
      5561.0, 
      7649.0, 
      8968.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      84.579999999999998, 
      94.239999999999995, 
      131.25999999999999, 
      128.69, 
      198.25999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      15308.0, 
      15642.0, 
      15739.0, 
      15448.0, 
      15055.0
    ], 
    "sanitation_rural_unimproved_shared": [
      348.25999999999999, 
      578.04999999999995, 
      1057.52, 
      1375.9200000000001, 
      1669.72
    ], 
    "population_urban": [
      1691.53, 
      2355.9899999999998, 
      3281.4299999999998, 
      4289.5699999999997, 
      4956.3900000000003
    ], 
    "water_total_improved_piped": [
      1598.0, 
      2409.0, 
      3267.0, 
      4209.0, 
      4962.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      507.45999999999998, 
      612.55999999999995, 
      721.90999999999997, 
      772.12, 
      743.46000000000004
    ], 
    "water_urban_improved_total": [
      1624.0, 
      2238.0, 
      3085.0, 
      3989.0, 
      4609.0
    ], 
    "sanitation_total_unimproved_total": [
      17017.650000000001, 
      18082.48, 
      18870.759999999998, 
      19572.540000000001, 
      19841.529999999999
    ], 
    "sanitation_rural_unimproved_other": [
      870.65999999999997, 
      1156.1099999999999, 
      1057.52, 
      1375.9200000000001, 
      1431.1900000000001
    ], 
    "water_total_improved_total": [
      14510.0, 
      17267.0, 
      20217.0, 
      23481.0, 
      25361.0
    ], 
    "population_rural": [
      17413.119999999999, 
      19268.5, 
      21150.330000000002, 
      22931.970000000001, 
      23853.139999999999
    ], 
    "sanitation_total_unimproved_shared": [
      754.0, 
      1191.0, 
      1944.0, 
      2620.0, 
      3157.0
    ], 
    "water_urban_unimproved": [
      68.0, 
      118.0, 
      196.0, 
      301.0, 
      347.0
    ], 
    "sanitation_urban_unimproved_total": [
      998.0, 
      1319.3599999999999, 
      1739.1600000000001, 
      2144.7800000000002, 
      2428.6300000000001
    ], 
    "water_rural_improved_other": [
      12015.0, 
      13680.0, 
      15440.0, 
      17428.0, 
      18367.0
    ], 
    "water_total_unimproved": [
      4595.0, 
      4357.0, 
      4214.0, 
      3741.0, 
      3448.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      14801.16, 
      15029.43, 
      15016.73, 
      14676.459999999999, 
      14311.879999999999
    ], 
    "population_total": [
      19104.650000000001, 
      21624.48, 
      24431.759999999998, 
      27221.540000000001, 
      28809.529999999999
    ], 
    "sanitation_rural_unimproved_total": [
      16020.07, 
      16763.599999999999, 
      17131.77, 
      17428.299999999999, 
      17412.790000000001
    ], 
    "water_rural_improved_piped": [
      871.0, 
      1349.0, 
      1692.0, 
      2064.0, 
      2385.0
    ], 
    "sanitation_total_unimproved_other": [
      956.0, 
      1250.0, 
      1189.0, 
      1505.0, 
      1629.0
    ], 
    "sanitation_urban_improved": [
      693.52999999999997, 
      1036.6300000000001, 
      1542.27, 
      2144.79, 
      2527.7600000000002
    ], 
    "water_urban_improved_piped": [
      727.0, 
      1060.0, 
      1575.0, 
      2145.0, 
      2577.0
    ]
  }, 
  "Malta": {
    "water_rural_unimproved": [
      1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      34.0, 
      34.0, 
      30.0, 
      26.0, 
      23.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      34.640000000000001, 
      34.210000000000001, 
      29.68, 
      25.579999999999998, 
      23.239999999999998
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      360.0, 
      378.0, 
      389.0, 
      403.0, 
      407.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      325.49000000000001, 
      343.57999999999998, 
      359.23000000000002, 
      376.98000000000002, 
      384.22000000000003
    ], 
    "water_total_improved_piped": [
      359.0, 
      378.0, 
      389.0, 
      403.0, 
      407.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      325.0, 
      344.0, 
      359.0, 
      377.0, 
      384.0
    ], 
    "sanitation_total_unimproved_total": [
      0.13, 
      -0.20999999999999999, 
      -0.089999999999999997, 
      -0.42999999999999999, 
      0.46000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      359.0, 
      378.0, 
      389.0, 
      403.0, 
      407.0
    ], 
    "population_rural": [
      34.640000000000001, 
      34.210000000000001, 
      29.68, 
      25.579999999999998, 
      23.239999999999998
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      360.13, 
      377.79000000000002, 
      388.91000000000003, 
      402.56999999999999, 
      407.45999999999998
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      34.0, 
      34.0, 
      30.0, 
      26.0, 
      23.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      325.49000000000001, 
      343.57999999999998, 
      359.23000000000002, 
      376.98000000000002, 
      384.22000000000003
    ], 
    "water_urban_improved_piped": [
      325.0, 
      344.0, 
      359.0, 
      377.0, 
      384.0
    ]
  }, 
  "Democratic Republic of the Congo": {
    "water_rural_unimproved": [
      19503.0, 
      23468.0, 
      26033.0, 
      28879.0, 
      30574.0
    ], 
    "water_rural_improved_total": [
      7214.0, 
      8680.0, 
      9629.0, 
      11231.0, 
      11890.0
    ], 
    "water_urban_improved_other": [
      4017.0, 
      5237.0, 
      7128.0, 
      10242.0, 
      12422.0
    ], 
    "sanitation_urban_unimproved_shared": [
      3398.6700000000001, 
      4215.0299999999997, 
      5005.2600000000002, 
      6259.1700000000001, 
      7191.5699999999997
    ], 
    "sanitation_rural_improved": [
      1068.6900000000001, 
      2250.3699999999999, 
      4636.0299999999997, 
      7620.8199999999997, 
      9766.7199999999993
    ], 
    "water_total_improved_other": [
      11231.0, 
      13917.0, 
      16400.0, 
      20671.0, 
      23463.0
    ], 
    "sanitation_total_improved": [
      3438.0, 
      5188.0, 
      8125.0, 
      11983.0, 
      14779.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      4016.6100000000001, 
      4981.3999999999996, 
      6066.9799999999996, 
      7776.54, 
      9152.9099999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6660.0, 
      7390.0, 
      7026.0, 
      6585.0, 
      6381.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1068.6900000000001, 
      2250.3699999999999, 
      4636.0299999999997, 
      7620.8199999999997, 
      9342.0799999999999
    ], 
    "population_urban": [
      10299.0, 
      12772.83, 
      15167.450000000001, 
      18967.18, 
      21792.639999999999
    ], 
    "water_total_improved_piped": [
      5252.0, 
      6003.0, 
      6121.0, 
      6113.0, 
      5861.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      514.95000000000005, 
      638.63999999999999, 
      606.70000000000005, 
      569.01999999999998, 
      435.85000000000002
    ], 
    "water_urban_improved_total": [
      9269.0, 
      11240.0, 
      12892.0, 
      15553.0, 
      17434.0
    ], 
    "sanitation_total_unimproved_total": [
      33578.129999999997, 
      39732.980000000003, 
      42704.25, 
      47093.75, 
      49477.639999999999
    ], 
    "sanitation_rural_unimproved_other": [
      18434.82, 
      20896.299999999999, 
      19970.610000000001, 
      18851.5, 
      17410.240000000002
    ], 
    "water_total_improved_total": [
      16483.0, 
      19920.0, 
      22521.0, 
      26784.0, 
      29324.0
    ], 
    "population_rural": [
      26717.130000000001, 
      32148.150000000001, 
      35661.800000000003, 
      40109.57, 
      42464.0
    ], 
    "sanitation_total_unimproved_shared": [
      4468.0, 
      6465.0, 
      9641.0, 
      13880.0, 
      16534.0
    ], 
    "water_urban_unimproved": [
      1030.0, 
      1533.0, 
      2275.0, 
      3414.0, 
      4359.0
    ], 
    "sanitation_urban_unimproved_total": [
      7930.2299999999996, 
      9835.0799999999999, 
      11678.940000000001, 
      14604.73, 
      16780.330000000002
    ], 
    "water_rural_improved_other": [
      7214.0, 
      8680.0, 
      9272.0, 
      10429.0, 
      11041.0
    ], 
    "water_total_unimproved": [
      20533.0, 
      25001.0, 
      28308.0, 
      32293.0, 
      34933.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      6144.9399999999996, 
      6751.1099999999997, 
      6419.1199999999999, 
      6016.4399999999996, 
      5944.96
    ], 
    "population_total": [
      37016.129999999997, 
      44920.980000000003, 
      50829.25, 
      59076.75, 
      64256.639999999999
    ], 
    "sanitation_rural_unimproved_total": [
      25648.439999999999, 
      29897.779999999999, 
      31025.77, 
      32488.75, 
      32697.279999999999
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      357.0, 
      802.0, 
      849.0
    ], 
    "sanitation_total_unimproved_other": [
      22452.0, 
      25877.0, 
      26038.0, 
      26628.0, 
      26563.0
    ], 
    "sanitation_urban_improved": [
      2368.77, 
      2937.75, 
      3488.5100000000002, 
      4362.4499999999998, 
      5012.3100000000004
    ], 
    "water_urban_improved_piped": [
      5252.0, 
      6003.0, 
      5764.0, 
      5311.0, 
      5012.0
    ]
  }, 
  "Netherlands": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      4683.0, 
      4200.0, 
      3692.0, 
      3231.0, 
      2995.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      4682.6000000000004, 
      4200.2700000000004, 
      3692.3800000000001, 
      3230.6300000000001, 
      2995.3000000000002
    ], 
    "water_total_improved_other": [
      235.0, 
      126.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      14953.0, 
      15448.0, 
      15914.0, 
      16317.0, 
      16527.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      10270.139999999999, 
      11248.139999999999, 
      12222.370000000001, 
      13085.690000000001, 
      13532.33
    ], 
    "water_total_improved_piped": [
      14718.0, 
      15322.0, 
      15914.0, 
      16317.0, 
      16527.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      10270.0, 
      11248.0, 
      12222.0, 
      13086.0, 
      13532.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.26000000000000001, 
      0.40999999999999998, 
      0.75, 
      -0.67000000000000004, 
      0.63
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      14953.0, 
      15448.0, 
      15914.0, 
      16317.0, 
      16527.0
    ], 
    "population_rural": [
      4682.6000000000004, 
      4200.2700000000004, 
      3692.3800000000001, 
      3230.6300000000001, 
      2995.3000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      235.0, 
      126.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      14952.74, 
      15448.41, 
      15914.75, 
      16316.33, 
      16527.630000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      4448.0, 
      4074.0, 
      3692.0, 
      3231.0, 
      2995.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      10270.139999999999, 
      11248.139999999999, 
      12222.370000000001, 
      13085.690000000001, 
      13532.33
    ], 
    "water_urban_improved_piped": [
      10270.0, 
      11248.0, 
      12222.0, 
      13086.0, 
      13532.0
    ]
  }, 
  "Suriname": {
    "water_rural_unimproved": [
      -1.0, 
      38.0, 
      35.0, 
      29.0, 
      24.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      92.0, 
      95.0, 
      102.0, 
      105.0
    ], 
    "water_urban_improved_other": [
      14.0, 
      15.0, 
      24.0, 
      52.0, 
      73.0
    ], 
    "sanitation_urban_unimproved_shared": [
      25.0, 
      27.539999999999999, 
      30.300000000000001, 
      33.229999999999997, 
      34.75
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      83.120000000000005, 
      84.819999999999993, 
      86.140000000000001, 
      85.170000000000002
    ], 
    "water_total_improved_other": [
      -1.0, 
      43.0, 
      55.0, 
      93.0, 
      120.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      358.0, 
      388.0, 
      418.0, 
      432.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      2.7799999999999998, 
      3.0600000000000001, 
      3.3700000000000001, 
      3.6899999999999999, 
      3.8599999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      30.0, 
      29.0, 
      27.0, 
      26.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      14.289999999999999, 
      14.35, 
      14.359999999999999, 
      14.19
    ], 
    "population_urban": [
      277.73000000000002, 
      305.95999999999998, 
      336.67000000000002, 
      369.24000000000001, 
      386.07999999999998
    ], 
    "water_total_improved_piped": [
      -1.0, 
      352.0, 
      370.0, 
      367.0, 
      359.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      275.0, 
      303.0, 
      330.0, 
      358.0, 
      374.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      77.840000000000003, 
      79.159999999999997, 
      81.760000000000005, 
      83.120000000000005
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      2.6000000000000001, 
      2.6099999999999999, 
      2.6099999999999999, 
      3.8700000000000001
    ], 
    "water_total_improved_total": [
      -1.0, 
      395.0, 
      425.0, 
      460.0, 
      479.0
    ], 
    "population_rural": [
      129.00999999999999, 
      129.88, 
      130.5, 
      130.52000000000001, 
      129.03999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      42.0, 
      44.0, 
      47.0, 
      49.0
    ], 
    "water_urban_unimproved": [
      3.0, 
      3.0, 
      7.0, 
      11.0, 
      12.0
    ], 
    "sanitation_urban_unimproved_total": [
      27.780000000000001, 
      30.600000000000001, 
      33.670000000000002, 
      36.920000000000002, 
      38.609999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      28.0, 
      31.0, 
      41.0, 
      47.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      41.0, 
      42.0, 
      40.0, 
      36.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      29.870000000000001, 
      28.710000000000001, 
      27.41, 
      25.809999999999999
    ], 
    "population_total": [
      406.73000000000002, 
      435.83999999999997, 
      467.16000000000003, 
      499.75999999999999, 
      515.12
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      46.759999999999998, 
      45.68, 
      44.380000000000003, 
      43.869999999999997
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      64.0, 
      64.0, 
      61.0, 
      58.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      6.0, 
      6.0, 
      7.0, 
      8.0
    ], 
    "sanitation_urban_improved": [
      249.94999999999999, 
      275.36000000000001, 
      303.0, 
      332.31999999999999, 
      347.47000000000003
    ], 
    "water_urban_improved_piped": [
      261.0, 
      288.0, 
      306.0, 
      306.0, 
      301.0
    ]
  }, 
  "Anguilla": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      2.0, 
      2.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.080000000000000002, 
      0.10000000000000001, 
      0.11, 
      0.14000000000000001, 
      0.14999999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      8.4000000000000004, 
      9.8900000000000006, 
      11.16, 
      13.67, 
      14.83
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      6.0, 
      7.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      4.0, 
      4.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.080000000000000002, 
      0.10000000000000001, 
      0.11, 
      0.14000000000000001, 
      0.14999999999999999
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      8.4000000000000004, 
      9.8900000000000006, 
      11.16, 
      13.67, 
      14.83
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      8.3200000000000003, 
      9.7899999999999991, 
      11.050000000000001, 
      13.529999999999999, 
      14.68
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      4.0, 
      5.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Venezuela": {
    "water_rural_unimproved": [
      899.0, 
      788.0, 
      653.0, 
      513.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      2203.0, 
      2131.0, 
      1859.0, 
      1538.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      999.0, 
      1151.0, 
      1094.0, 
      987.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1396.1099999999999, 
      1459.52, 
      1356.24, 
      1168.8900000000001, 
      -1.0
    ], 
    "water_total_improved_other": [
      1837.0, 
      1910.0, 
      1697.0, 
      1459.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      16204.0, 
      18908.0, 
      21719.0, 
      24364.0, 
      -1.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      1164.6900000000001, 
      766.92999999999995, 
      437.92000000000002, 
      246.75, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1938.0, 
      2156.0, 
      2100.0, 
      2054.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      16638.369999999999, 
      19173.189999999999, 
      21896.139999999999, 
      24675.360000000001, 
      26276.759999999998
    ], 
    "water_total_improved_piped": [
      15840.0, 
      18244.0, 
      20744.0, 
      23274.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      665.52999999999997, 
      958.65999999999997, 
      1094.8099999999999, 
      1233.77, 
      -1.0
    ], 
    "water_urban_improved_total": [
      15474.0, 
      18023.0, 
      20582.0, 
      23195.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      3536.8400000000001, 
      3184.2399999999998, 
      2688.6900000000001, 
      2362.0500000000002, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      434.35000000000002, 
      262.70999999999998, 
      150.69, 
      61.520000000000003, 
      -1.0
    ], 
    "water_total_improved_total": [
      17677.0, 
      20154.0, 
      22441.0, 
      24733.0, 
      -1.0
    ], 
    "population_rural": [
      3102.4699999999998, 
      2919.0500000000002, 
      2511.5500000000002, 
      2050.6900000000001, 
      1843.8699999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      1164.0, 
      1150.0, 
      1314.0, 
      1480.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      1830.22, 
      1725.5799999999999, 
      1532.73, 
      1480.52, 
      -1.0
    ], 
    "water_rural_improved_other": [
      838.0, 
      759.0, 
      603.0, 
      472.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      2063.0, 
      1938.0, 
      1967.0, 
      1993.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1272.01, 
      1196.8099999999999, 
      1004.62, 
      820.27999999999997, 
      -1.0
    ], 
    "population_total": [
      19740.84, 
      22092.240000000002, 
      24407.689999999999, 
      26726.049999999999, 
      28120.630000000001
    ], 
    "sanitation_rural_unimproved_total": [
      1706.3599999999999, 
      1459.53, 
      1155.3099999999999, 
      881.79999999999995, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      1365.0, 
      1372.0, 
      1256.0, 
      1066.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      1599.0, 
      1030.0, 
      589.0, 
      309.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      14808.15, 
      17447.610000000001, 
      20363.41, 
      23194.84, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      14475.0, 
      16872.0, 
      19488.0, 
      22208.0, 
      -1.0
    ]
  }, 
  "Micronesia (Federated States of)": {
    "water_rural_unimproved": [
      9.0, 
      8.0, 
      6.0, 
      5.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      62.0, 
      72.0, 
      77.0, 
      80.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      23.0, 
      25.0, 
      22.0, 
      23.0, 
      24.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      14.289999999999999, 
      14.42, 
      13.31, 
      12.75, 
      -1.0
    ], 
    "water_total_improved_other": [
      85.0, 
      97.0, 
      99.0, 
      103.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      28.0, 
      29.0, 
      27.0, 
      28.0, 
      -1.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      11.19, 
      11.83, 
      9.8100000000000005, 
      9.5299999999999994, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      24.870000000000001, 
      26.879999999999999, 
      23.920000000000002, 
      24.43, 
      24.800000000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      23.0, 
      25.0, 
      22.0, 
      23.0, 
      24.0
    ], 
    "sanitation_total_unimproved_total": [
      68.310000000000002, 
      78.0, 
      80.099999999999994, 
      81.420000000000002, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      57.159999999999997, 
      65.930000000000007, 
      69.870000000000005, 
      72.239999999999995, 
      -1.0
    ], 
    "water_total_improved_total": [
      85.0, 
      97.0, 
      99.0, 
      103.0, 
      -1.0
    ], 
    "population_rural": [
      71.439999999999998, 
      80.120000000000005, 
      83.180000000000007, 
      84.980000000000004, 
      85.609999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      2.0, 
      2.0, 
      2.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_total": [
      11.19, 
      11.83, 
      9.8100000000000005, 
      9.5299999999999994, 
      -1.0
    ], 
    "water_rural_improved_other": [
      62.0, 
      72.0, 
      77.0, 
      80.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      11.0, 
      10.0, 
      8.0, 
      6.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      96.310000000000002, 
      107.0, 
      107.09999999999999, 
      109.42, 
      110.41
    ], 
    "sanitation_rural_unimproved_total": [
      57.149999999999999, 
      65.700000000000003, 
      69.870000000000005, 
      72.230000000000004, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      68.0, 
      78.0, 
      80.0, 
      82.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      13.68, 
      15.050000000000001, 
      14.109999999999999, 
      14.9, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Israel": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      435.0, 
      491.0, 
      521.0, 
      561.0, 
      588.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      435.17000000000002, 
      490.85000000000002, 
      521.16999999999996, 
      561.22000000000003, 
      587.87
    ], 
    "water_total_improved_other": [
      9.0, 
      10.0, 
      10.0, 
      11.0, 
      12.0
    ], 
    "sanitation_total_improved": [
      4514.0, 
      5374.0, 
      6084.0, 
      6691.0, 
      7052.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      4078.5300000000002, 
      4883.0500000000002, 
      5563.0100000000002, 
      6130.3599999999997, 
      6463.5100000000002
    ], 
    "water_total_improved_piped": [
      4505.0, 
      5364.0, 
      6074.0, 
      6680.0, 
      7040.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      4079.0, 
      4883.0, 
      5563.0, 
      6130.0, 
      6464.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.29999999999999999, 
      -0.10000000000000001, 
      0.19, 
      0.57999999999999996, 
      -0.62
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      4514.0, 
      5374.0, 
      6084.0, 
      6691.0, 
      7052.0
    ], 
    "population_rural": [
      435.17000000000002, 
      490.85000000000002, 
      521.16999999999996, 
      561.22000000000003, 
      587.87
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      9.0, 
      10.0, 
      10.0, 
      11.0, 
      12.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4513.6999999999998, 
      5373.8999999999996, 
      6084.1899999999996, 
      6691.5799999999999, 
      7051.3800000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      426.0, 
      481.0, 
      511.0, 
      550.0, 
      576.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      4078.5300000000002, 
      4883.0500000000002, 
      5563.0100000000002, 
      6130.3599999999997, 
      6463.5100000000002
    ], 
    "water_urban_improved_piped": [
      4079.0, 
      4883.0, 
      5563.0, 
      6130.0, 
      6464.0
    ]
  }, 
  "Iceland": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      24.0, 
      22.0, 
      22.0, 
      23.0, 
      24.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      23.57, 
      22.390000000000001, 
      21.899999999999999, 
      22.949999999999999, 
      24.41
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      255.0, 
      267.0, 
      281.0, 
      296.0, 
      315.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      231.22999999999999, 
      245.09, 
      259.19, 
      272.79000000000002, 
      291.06
    ], 
    "water_total_improved_piped": [
      255.0, 
      267.0, 
      281.0, 
      296.0, 
      315.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      231.0, 
      245.0, 
      259.0, 
      273.0, 
      291.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.20999999999999999, 
      0.47999999999999998, 
      0.089999999999999997, 
      -0.27000000000000002, 
      0.46999999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      255.0, 
      267.0, 
      281.0, 
      296.0, 
      315.0
    ], 
    "population_rural": [
      23.57, 
      22.390000000000001, 
      21.899999999999999, 
      22.949999999999999, 
      24.41
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      254.78999999999999, 
      267.48000000000002, 
      281.08999999999997, 
      295.73000000000002, 
      315.47000000000003
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      24.0, 
      22.0, 
      22.0, 
      23.0, 
      24.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      231.22999999999999, 
      245.09, 
      259.19, 
      272.79000000000002, 
      291.06
    ], 
    "water_urban_improved_piped": [
      231.0, 
      245.0, 
      259.0, 
      273.0, 
      291.0
    ]
  }, 
  "Zambia": {
    "water_rural_unimproved": [
      3691.0, 
      4067.0, 
      4367.0, 
      4425.0, 
      4406.0
    ], 
    "water_rural_improved_total": [
      1102.0, 
      1661.0, 
      2457.0, 
      3205.0, 
      3753.0
    ], 
    "water_urban_improved_other": [
      1247.0, 
      1419.0, 
      1676.0, 
      1972.0, 
      2230.0
    ], 
    "sanitation_urban_unimproved_shared": [
      748.13, 
      777.25999999999999, 
      837.85000000000002, 
      903.86000000000001, 
      981.47000000000003
    ], 
    "sanitation_rural_improved": [
      1725.51, 
      2176.8200000000002, 
      2729.7800000000002, 
      3128.29, 
      3508.3600000000001
    ], 
    "water_total_improved_other": [
      2301.0, 
      3023.0, 
      4065.0, 
      5101.0, 
      5901.0
    ], 
    "sanitation_total_improved": [
      3659.0, 
      4238.0, 
      4916.0, 
      5552.0, 
      6140.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      342.88999999999999, 
      473.11000000000001, 
      546.41999999999996, 
      698.44000000000005, 
      758.40999999999997
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2107.0, 
      2245.0, 
      2325.0, 
      2295.0, 
      2210.0
    ], 
    "sanitation_rural_unimproved_shared": [
      383.44999999999999, 
      458.27999999999997, 
      545.96000000000004, 
      686.70000000000005, 
      734.30999999999995
    ], 
    "population_urban": [
      3117.1999999999998, 
      3379.3800000000001, 
      3642.8200000000002, 
      4108.4499999999998, 
      4461.25
    ], 
    "water_total_improved_piped": [
      1575.0, 
      1612.0, 
      1598.0, 
      1678.0, 
      1733.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      93.519999999999996, 
      67.590000000000003, 
      72.859999999999999, 
      82.170000000000002, 
      89.219999999999999
    ], 
    "water_urban_improved_total": [
      2774.0, 
      2974.0, 
      3206.0, 
      3574.0, 
      3881.0
    ], 
    "sanitation_total_unimproved_total": [
      4251.2799999999997, 
      4869.8599999999997, 
      5551.2799999999997, 
      6186.4300000000003, 
      6480.2200000000003
    ], 
    "sanitation_rural_unimproved_other": [
      671.02999999999997, 
      916.55999999999995, 
      1296.6500000000001, 
      1602.3, 
      1794.97
    ], 
    "water_total_improved_total": [
      3876.0, 
      4635.0, 
      5663.0, 
      6779.0, 
      7634.0
    ], 
    "population_rural": [
      4793.0799999999999, 
      5728.4799999999996, 
      6824.46, 
      7629.9799999999996, 
      8158.9700000000003
    ], 
    "sanitation_total_unimproved_shared": [
      1131.0, 
      1235.0, 
      1384.0, 
      1591.0, 
      1715.0
    ], 
    "water_urban_unimproved": [
      343.0, 
      405.0, 
      437.0, 
      534.0, 
      580.0
    ], 
    "sanitation_urban_unimproved_total": [
      1184.53, 
      1317.96, 
      1457.1300000000001, 
      1684.46, 
      1829.1099999999999
    ], 
    "water_rural_improved_other": [
      1054.0, 
      1604.0, 
      2389.0, 
      3129.0, 
      3671.0
    ], 
    "water_total_unimproved": [
      4034.0, 
      4472.0, 
      4804.0, 
      4959.0, 
      4986.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2013.0899999999999, 
      2176.8200000000002, 
      2252.0700000000002, 
      2212.6900000000001, 
      2121.3299999999999
    ], 
    "population_total": [
      7910.2799999999997, 
      9107.8600000000006, 
      10467.280000000001, 
      11738.43, 
      12620.219999999999
    ], 
    "sanitation_rural_unimproved_total": [
      3067.5700000000002, 
      3551.6599999999999, 
      4094.6799999999998, 
      4501.6899999999996, 
      4650.6099999999997
    ], 
    "water_rural_improved_piped": [
      48.0, 
      57.0, 
      68.0, 
      76.0, 
      82.0
    ], 
    "sanitation_total_unimproved_other": [
      1014.0, 
      1390.0, 
      1843.0, 
      2300.0, 
      2553.0
    ], 
    "sanitation_urban_improved": [
      1932.6700000000001, 
      2061.4200000000001, 
      2185.6900000000001, 
      2423.9899999999998, 
      2632.1399999999999
    ], 
    "water_urban_improved_piped": [
      1527.0, 
      1555.0, 
      1530.0, 
      1602.0, 
      1651.0
    ]
  }, 
  "Senegal": {
    "water_rural_unimproved": [
      2623.0, 
      2816.0, 
      3057.0, 
      3231.0, 
      3382.0
    ], 
    "water_rural_improved_total": [
      1979.0, 
      2398.0, 
      2821.0, 
      3363.0, 
      3664.0
    ], 
    "water_urban_improved_other": [
      1263.0, 
      1241.0, 
      1167.0, 
      1032.0, 
      930.0
    ], 
    "sanitation_urban_unimproved_shared": [
      499.13, 
      620.26999999999998, 
      724.34000000000003, 
      890.62, 
      981.37
    ], 
    "sanitation_rural_improved": [
      1012.38, 
      1355.6300000000001, 
      1822.0899999999999, 
      2373.77, 
      2677.52
    ], 
    "water_total_improved_other": [
      3104.0, 
      3378.0, 
      3518.0, 
      3736.0, 
      3748.0
    ], 
    "sanitation_total_improved": [
      2832.0, 
      3561.0, 
      4478.0, 
      5561.0, 
      6242.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      352.31999999999999, 
      379.05000000000001, 
      442.64999999999998, 
      468.75, 
      516.50999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2933.0, 
      2848.0, 
      2728.0, 
      2449.0, 
      2287.0
    ], 
    "sanitation_rural_unimproved_shared": [
      276.10000000000002, 
      364.98000000000002, 
      470.22000000000003, 
      593.44000000000005, 
      704.61000000000001
    ], 
    "population_urban": [
      2936.0300000000002, 
      3445.9499999999998, 
      4024.0900000000001, 
      4687.4899999999998, 
      5165.0900000000001
    ], 
    "water_total_improved_piped": [
      1459.0, 
      2087.0, 
      2925.0, 
      3893.0, 
      4668.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      264.24000000000001, 
      241.22, 
      201.19999999999999, 
      140.62, 
      103.3
    ], 
    "water_urban_improved_total": [
      2584.0, 
      3067.0, 
      3622.0, 
      4266.0, 
      4752.0
    ], 
    "sanitation_total_unimproved_total": [
      4705.7600000000002, 
      5098.9099999999999, 
      5423.79, 
      5720.3000000000002, 
      5969.1800000000003
    ], 
    "sanitation_rural_unimproved_other": [
      644.24000000000001, 
      886.37, 
      1057.99, 
      1318.76, 
      1479.6800000000001
    ], 
    "water_total_improved_total": [
      4563.0, 
      5465.0, 
      6443.0, 
      7629.0, 
      8416.0
    ], 
    "population_rural": [
      4601.7299999999996, 
      5213.96, 
      5877.6999999999998, 
      6593.8100000000004, 
      7046.0900000000001
    ], 
    "sanitation_total_unimproved_shared": [
      775.0, 
      985.0, 
      1194.0, 
      1484.0, 
      1686.0
    ], 
    "water_urban_unimproved": [
      352.0, 
      379.0, 
      402.0, 
      421.0, 
      413.0
    ], 
    "sanitation_urban_unimproved_total": [
      1115.6900000000001, 
      1240.54, 
      1368.1900000000001, 
      1500.0, 
      1601.1800000000001
    ], 
    "water_rural_improved_other": [
      1841.0, 
      2137.0, 
      2351.0, 
      2704.0, 
      2818.0
    ], 
    "water_total_unimproved": [
      2975.0, 
      3195.0, 
      3459.0, 
      3652.0, 
      3795.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2669.0, 
      2606.98, 
      2527.4099999999999, 
      2307.8299999999999, 
      2184.29
    ], 
    "population_total": [
      7537.7600000000002, 
      8659.9099999999999, 
      9901.7900000000009, 
      11281.299999999999, 
      12211.18
    ], 
    "sanitation_rural_unimproved_total": [
      3589.3499999999999, 
      3858.3299999999999, 
      4055.6100000000001, 
      4220.04, 
      4368.5699999999997
    ], 
    "water_rural_improved_piped": [
      138.0, 
      261.0, 
      470.0, 
      659.0, 
      846.0
    ], 
    "sanitation_total_unimproved_other": [
      996.0, 
      1265.0, 
      1501.0, 
      1788.0, 
      1997.0
    ], 
    "sanitation_urban_improved": [
      1820.3399999999999, 
      2205.4099999999999, 
      2655.9000000000001, 
      3187.4899999999998, 
      3563.9099999999999
    ], 
    "water_urban_improved_piped": [
      1321.0, 
      1826.0, 
      2455.0, 
      3234.0, 
      3822.0
    ]
  }, 
  "Papua New Guinea": {
    "water_rural_unimproved": [
      2388.0, 
      2751.0, 
      3180.0, 
      3583.0, 
      3857.0
    ], 
    "water_rural_improved_total": [
      1124.0, 
      1295.0, 
      1496.0, 
      1765.0, 
      1899.0
    ], 
    "water_urban_improved_other": [
      173.0, 
      185.0, 
      206.0, 
      223.0, 
      246.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      1474.9000000000001, 
      1699.4100000000001, 
      1964.02, 
      2246.1500000000001, 
      2359.7800000000002
    ], 
    "water_total_improved_other": [
      1157.0, 
      1318.0, 
      1562.0, 
      1828.0, 
      1972.0
    ], 
    "sanitation_total_improved": [
      1958.0, 
      2216.0, 
      2498.0, 
      2808.0, 
      2943.0
    ], 
    "continent": "Oceania", 
    "sanitation_urban_unimproved_other": [
      117.69, 
      125.98999999999999, 
      149.38999999999999, 
      169.44999999999999, 
      197.09999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      581.0, 
      667.0, 
      823.0, 
      1002.0, 
      1077.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      619.40999999999997, 
      663.12, 
      711.38, 
      770.22000000000003, 
      821.25
    ], 
    "water_total_improved_piped": [
      518.0, 
      567.0, 
      560.0, 
      607.0, 
      641.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      18.579999999999998, 
      19.890000000000001, 
      28.460000000000001, 
      38.509999999999998, 
      41.060000000000002
    ], 
    "water_urban_improved_total": [
      551.0, 
      590.0, 
      626.0, 
      670.0, 
      714.0
    ], 
    "sanitation_total_unimproved_total": [
      2173.0700000000002, 
      2493.3499999999999, 
      2889.6100000000001, 
      3310.1999999999998, 
      3633.8200000000002
    ], 
    "sanitation_rural_unimproved_other": [
      1474.9000000000001, 
      1699.4100000000001, 
      1917.26, 
      2139.1900000000001, 
      2359.7800000000002
    ], 
    "water_total_improved_total": [
      1675.0, 
      1885.0, 
      2122.0, 
      2435.0, 
      2613.0
    ], 
    "population_rural": [
      3511.6599999999999, 
      4046.23, 
      4676.2299999999996, 
      5347.9799999999996, 
      5755.5699999999997
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      68.0, 
      73.0, 
      85.0, 
      100.0, 
      107.0
    ], 
    "sanitation_urban_unimproved_total": [
      136.27000000000001, 
      145.88, 
      177.84, 
      207.96000000000001, 
      238.16
    ], 
    "water_rural_improved_other": [
      984.0, 
      1133.0, 
      1356.0, 
      1605.0, 
      1726.0
    ], 
    "water_total_unimproved": [
      2456.0, 
      2824.0, 
      3265.0, 
      3683.0, 
      3964.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      561.87, 
      647.39999999999998, 
      794.96000000000004, 
      962.63999999999999, 
      1036.0
    ], 
    "population_total": [
      4131.0699999999997, 
      4709.3500000000004, 
      5387.6099999999997, 
      6118.1999999999998, 
      6576.8199999999997
    ], 
    "sanitation_rural_unimproved_total": [
      2036.76, 
      2346.8200000000002, 
      2712.21, 
      3101.8299999999999, 
      3395.79
    ], 
    "water_rural_improved_piped": [
      140.0, 
      162.0, 
      140.0, 
      160.0, 
      173.0
    ], 
    "sanitation_total_unimproved_other": [
      1593.0, 
      1825.0, 
      2066.0, 
      2308.0, 
      2557.0
    ], 
    "sanitation_urban_improved": [
      483.13999999999999, 
      517.24000000000001, 
      533.53999999999996, 
      562.25999999999999, 
      583.09000000000003
    ], 
    "water_urban_improved_piped": [
      378.0, 
      405.0, 
      420.0, 
      447.0, 
      468.0
    ]
  }, 
  "Germany": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      21353.0, 
      21805.0, 
      22105.0, 
      21958.0, 
      21703.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      21353.189999999999, 
      21804.529999999999, 
      22105.200000000001, 
      21957.799999999999, 
      21702.959999999999
    ], 
    "water_total_improved_other": [
      640.0, 
      655.0, 
      663.0, 
      659.0, 
      651.0
    ], 
    "sanitation_total_improved": [
      79433.0, 
      81623.0, 
      82075.0, 
      82409.0, 
      82264.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      58079.839999999997, 
      59817.57, 
      59969.580000000002, 
      60450.889999999999, 
      60561.309999999998
    ], 
    "water_total_improved_piped": [
      78793.0, 
      80968.0, 
      81412.0, 
      81750.0, 
      81613.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      58080.0, 
      59818.0, 
      59970.0, 
      60451.0, 
      60561.0
    ], 
    "sanitation_total_unimproved_total": [
      0.02, 
      -0.91000000000000003, 
      -0.22, 
      -0.31, 
      0.27000000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      79433.0, 
      81623.0, 
      82075.0, 
      82409.0, 
      82264.0
    ], 
    "population_rural": [
      21353.189999999999, 
      21804.529999999999, 
      22105.200000000001, 
      21957.799999999999, 
      21702.959999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      640.0, 
      655.0, 
      663.0, 
      659.0, 
      651.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      79433.020000000004, 
      81622.089999999997, 
      82074.779999999999, 
      82408.690000000002, 
      82264.270000000004
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      20713.0, 
      21150.0, 
      21442.0, 
      21299.0, 
      21052.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      58079.839999999997, 
      59817.57, 
      59969.580000000002, 
      60450.889999999999, 
      60561.309999999998
    ], 
    "water_urban_improved_piped": [
      58080.0, 
      59818.0, 
      59970.0, 
      60451.0, 
      60561.0
    ]
  }, 
  "Denmark": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      779.0, 
      785.0, 
      795.0, 
      766.0, 
      727.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      4540.0, 
      4651.0, 
      4731.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      779.05999999999995, 
      785.27999999999997, 
      794.97000000000003, 
      766.20000000000005, 
      726.75999999999999
    ], 
    "water_total_improved_other": [
      0.0, 
      0.0, 
      4540.0, 
      4651.0, 
      4731.0
    ], 
    "sanitation_total_improved": [
      5140.0, 
      5228.0, 
      5335.0, 
      5417.0, 
      5458.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      4360.8900000000003, 
      4442.5799999999999, 
      4540.4099999999999, 
      4650.9300000000003, 
      4731.4499999999998
    ], 
    "water_total_improved_piped": [
      5140.0, 
      5228.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      4361.0, 
      4443.0, 
      4540.0, 
      4651.0, 
      4731.0
    ], 
    "sanitation_total_unimproved_total": [
      -0.050000000000000003, 
      -0.14000000000000001, 
      0.39000000000000001, 
      0.13, 
      0.20000000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      5140.0, 
      5228.0, 
      5335.0, 
      5417.0, 
      5458.0
    ], 
    "population_rural": [
      779.05999999999995, 
      785.27999999999997, 
      794.97000000000003, 
      766.20000000000005, 
      726.75999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      5139.9499999999998, 
      5227.8599999999997, 
      5335.3900000000003, 
      5417.1300000000001, 
      5458.1999999999998
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      779.0, 
      785.0, 
      795.0, 
      766.0, 
      727.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      4360.8900000000003, 
      4442.5799999999999, 
      4540.4099999999999, 
      4650.9300000000003, 
      4731.4499999999998
    ], 
    "water_urban_improved_piped": [
      4361.0, 
      4443.0, 
      -1.0, 
      -1.0, 
      -1.0
    ]
  }, 
  "Kazakhstan": {
    "water_rural_unimproved": [
      578.0, 
      562.0, 
      588.0, 
      586.0, 
      654.0
    ], 
    "water_rural_improved_total": [
      6651.0, 
      6458.0, 
      5951.0, 
      5932.0, 
      5887.0
    ], 
    "water_urban_improved_other": [
      744.0, 
      802.0, 
      1010.0, 
      1301.0, 
      1527.0
    ], 
    "sanitation_urban_unimproved_shared": [
      279.01999999999998, 
      267.18000000000001, 
      252.52000000000001, 
      260.26999999999998, 
      269.42000000000002
    ], 
    "sanitation_rural_improved": [
      7012.3500000000004, 
      6809.3699999999999, 
      6343.21, 
      6387.8400000000001, 
      6410.0900000000001
    ], 
    "water_total_improved_other": [
      5371.0, 
      5294.0, 
      5261.0, 
      5603.0, 
      5844.0
    ], 
    "sanitation_total_improved": [
      15941.0, 
      15359.0, 
      14508.0, 
      14803.0, 
      15121.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      93.010000000000005, 
      89.060000000000002, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      145.0, 
      70.0, 
      65.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      72.290000000000006, 
      70.200000000000003, 
      65.390000000000001, 
      65.180000000000007, 
      65.409999999999997
    ], 
    "population_urban": [
      9300.7700000000004, 
      8905.9099999999999, 
      8417.3600000000006, 
      8675.7399999999998, 
      8980.5799999999999
    ], 
    "water_total_improved_piped": [
      10488.0, 
      9981.0, 
      9023.0, 
      8918.0, 
      8934.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      9208.0, 
      8817.0, 
      8333.0, 
      8589.0, 
      8891.0
    ], 
    "sanitation_total_unimproved_total": [
      589.0, 
      566.88999999999999, 
      448.75, 
      390.94, 
      400.49000000000001
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      70.200000000000003, 
      65.390000000000001, 
      65.180000000000007, 
      65.409999999999997
    ], 
    "water_total_improved_total": [
      15859.0, 
      15275.0, 
      14284.0, 
      14521.0, 
      14778.0
    ], 
    "population_rural": [
      7229.2299999999996, 
      7019.9700000000003, 
      6539.3900000000003, 
      6518.1999999999998, 
      6540.9099999999999
    ], 
    "sanitation_total_unimproved_shared": [
      351.0, 
      337.0, 
      318.0, 
      325.0, 
      334.0
    ], 
    "water_urban_unimproved": [
      93.0, 
      89.0, 
      84.0, 
      87.0, 
      90.0
    ], 
    "sanitation_urban_unimproved_total": [
      372.02999999999997, 
      356.23000000000002, 
      252.52000000000001, 
      260.26999999999998, 
      269.42000000000002
    ], 
    "water_rural_improved_other": [
      4627.0, 
      4492.0, 
      4251.0, 
      4302.0, 
      4317.0
    ], 
    "water_total_unimproved": [
      671.0, 
      651.0, 
      672.0, 
      673.0, 
      744.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      144.58000000000001, 
      70.200000000000003, 
      65.390000000000001, 
      0.0, 
      0.0
    ], 
    "population_total": [
      16530.0, 
      15925.889999999999, 
      14956.75, 
      15193.940000000001, 
      15521.49
    ], 
    "sanitation_rural_unimproved_total": [
      216.88, 
      210.59999999999999, 
      196.18000000000001, 
      130.36000000000001, 
      130.81999999999999
    ], 
    "water_rural_improved_piped": [
      2024.0, 
      1966.0, 
      1700.0, 
      1630.0, 
      1570.0
    ], 
    "sanitation_total_unimproved_other": [
      93.0, 
      159.0, 
      65.0, 
      65.0, 
      65.0
    ], 
    "sanitation_urban_improved": [
      8928.7399999999998, 
      8549.6800000000003, 
      8164.8400000000001, 
      8415.4699999999993, 
      8711.1599999999999
    ], 
    "water_urban_improved_piped": [
      8464.0, 
      8015.0, 
      7323.0, 
      7288.0, 
      7364.0
    ]
  }, 
  "Poland": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      14760.0, 
      14862.0, 
      14714.0, 
      14723.0, 
      14785.0
    ], 
    "water_urban_improved_other": [
      700.0, 
      474.0, 
      237.0, 
      235.0, 
      233.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      11770.91, 
      11778.549999999999, 
      11828.1
    ], 
    "water_total_improved_other": [
      4685.0, 
      3447.0, 
      1856.0, 
      824.0, 
      824.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      34541.0, 
      34315.0, 
      34214.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      934.01999999999998, 
      949.33000000000004, 
      948.76999999999998, 
      939.00999999999999, 
      932.75999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      23350.48, 
      23733.220000000001, 
      23719.240000000002, 
      23475.209999999999, 
      23318.900000000001
    ], 
    "water_total_improved_piped": [
      33425.0, 
      35148.0, 
      36577.0, 
      37374.0, 
      37280.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      23350.0, 
      23733.0, 
      23719.0, 
      23475.0, 
      23319.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      3891.8800000000001, 
      3883.4000000000001, 
      3890.02
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      2942.73, 
      2944.6399999999999, 
      2957.02
    ], 
    "water_total_improved_total": [
      38110.0, 
      38595.0, 
      38433.0, 
      38198.0, 
      38104.0
    ], 
    "population_rural": [
      14760.309999999999, 
      14861.780000000001, 
      14713.639999999999, 
      14723.190000000001, 
      14785.120000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      934.01999999999998, 
      949.33000000000004, 
      948.76999999999998, 
      939.00999999999999, 
      932.75999999999999
    ], 
    "water_rural_improved_other": [
      3985.0, 
      2973.0, 
      1619.0, 
      589.0, 
      591.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      38110.779999999999, 
      38595.0, 
      38432.879999999997, 
      38198.400000000001, 
      38104.019999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      2942.73, 
      2944.6399999999999, 
      2957.02
    ], 
    "water_rural_improved_piped": [
      10775.0, 
      11889.0, 
      13095.0, 
      14134.0, 
      14194.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      3892.0, 
      3884.0, 
      3890.0
    ], 
    "sanitation_urban_improved": [
      22416.459999999999, 
      22783.889999999999, 
      22770.470000000001, 
      22536.200000000001, 
      22386.139999999999
    ], 
    "water_urban_improved_piped": [
      22650.0, 
      23259.0, 
      23482.0, 
      23240.0, 
      23086.0
    ]
  }, 
  "Eritrea": {
    "water_rural_unimproved": [
      1622.0, 
      1551.0, 
      1503.0, 
      1550.0, 
      1681.0
    ], 
    "water_rural_improved_total": [
      1037.0, 
      1123.0, 
      1504.0, 
      2055.0, 
      2229.0
    ], 
    "water_urban_improved_other": [
      109.0, 
      122.0, 
      182.0, 
      278.0, 
      326.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      0.0, 
      26.739999999999998, 
      60.140000000000001, 
      144.19, 
      156.38999999999999
    ], 
    "water_total_improved_other": [
      1146.0, 
      1245.0, 
      1686.0, 
      2333.0, 
      2555.0
    ], 
    "sanitation_total_improved": [
      289.0, 
      330.0, 
      411.0, 
      596.0, 
      685.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      49.890000000000001, 
      47.880000000000003, 
      52.020000000000003, 
      60.789999999999999, 
      71.189999999999998
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2819.0, 
      2828.0, 
      3164.0, 
      3817.0, 
      4170.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      498.94999999999999, 
      532.01999999999998, 
      650.24000000000001, 
      868.40999999999997, 
      1017.01
    ], 
    "water_total_improved_piped": [
      200.0, 
      218.0, 
      273.0, 
      365.0, 
      427.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      159.66, 
      180.88999999999999, 
      247.09, 
      356.05000000000001, 
      416.97000000000003
    ], 
    "water_urban_improved_total": [
      309.0, 
      340.0, 
      455.0, 
      643.0, 
      753.0
    ], 
    "sanitation_total_unimproved_total": [
      2868.9000000000001, 
      2876.1100000000001, 
      3246.3299999999999, 
      3877.1199999999999, 
      4241.8699999999999
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      30.07, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      1346.0, 
      1463.0, 
      1959.0, 
      2698.0, 
      2982.0
    ], 
    "population_rural": [
      2658.96, 
      2674.0900000000001, 
      3007.0900000000001, 
      3604.71, 
      3909.8699999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      190.0, 
      192.0, 
      195.0, 
      225.0, 
      264.0
    ], 
    "sanitation_urban_unimproved_total": [
      209.56, 
      228.77000000000001, 
      299.11000000000001, 
      416.83999999999997, 
      488.17000000000002
    ], 
    "water_rural_improved_other": [
      1037.0, 
      1123.0, 
      1504.0, 
      2055.0, 
      2229.0
    ], 
    "water_total_unimproved": [
      1812.0, 
      1743.0, 
      1698.0, 
      1775.0, 
      1945.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2658.96, 
      2647.3499999999999, 
      2916.8800000000001, 
      3460.52, 
      3753.4699999999998
    ], 
    "population_total": [
      3157.9000000000001, 
      3206.1100000000001, 
      3657.3299999999999, 
      4473.1199999999999, 
      4926.8699999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2658.96, 
      2647.3499999999999, 
      2946.9499999999998, 
      3460.52, 
      3753.48
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      50.0, 
      48.0, 
      82.0, 
      61.0, 
      71.0
    ], 
    "sanitation_urban_improved": [
      289.38999999999999, 
      303.25, 
      351.13, 
      451.56999999999999, 
      528.84000000000003
    ], 
    "water_urban_improved_piped": [
      200.0, 
      218.0, 
      273.0, 
      365.0, 
      427.0
    ]
  }, 
  "Kyrgyzstan": {
    "water_rural_unimproved": [
      -1.0, 
      994.0, 
      864.0, 
      670.0, 
      518.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      1929.0, 
      2337.0, 
      2682.0, 
      2934.0
    ], 
    "water_urban_improved_other": [
      382.0, 
      334.0, 
      281.0, 
      243.0, 
      196.0
    ], 
    "sanitation_urban_unimproved_shared": [
      83.010000000000005, 
      83.459999999999994, 
      87.689999999999998, 
      93.459999999999994, 
      98.079999999999998
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      2718.3299999999999, 
      2976.9699999999998, 
      3117.4699999999998, 
      3210.3200000000002
    ], 
    "water_total_improved_other": [
      -1.0, 
      1474.0, 
      1658.0, 
      1819.0, 
      1956.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      4287.0, 
      4626.0, 
      4874.0, 
      5054.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      16.600000000000001, 
      16.690000000000001, 
      17.539999999999999, 
      18.690000000000001, 
      19.620000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      58.460000000000001, 
      64.019999999999996, 
      67.040000000000006, 
      69.040000000000006
    ], 
    "population_urban": [
      1660.1099999999999, 
      1669.2, 
      1753.8199999999999, 
      1869.1700000000001, 
      1961.6900000000001
    ], 
    "water_total_improved_piped": [
      1929.0, 
      2091.0, 
      2398.0, 
      2713.0, 
      2920.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1627.0, 
      1636.0, 
      1719.0, 
      1850.0, 
      1942.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      305.13999999999999, 
      328.86000000000001, 
      347.29000000000002, 
      359.63999999999999
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      146.15000000000001, 
      160.05000000000001, 
      167.61000000000001, 
      172.59999999999999
    ], 
    "water_total_improved_total": [
      -1.0, 
      3565.0, 
      4056.0, 
      4532.0, 
      4876.0
    ], 
    "population_rural": [
      2734.3899999999999, 
      2922.9400000000001, 
      3201.04, 
      3352.1199999999999, 
      3451.96
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      141.0, 
      152.0, 
      160.0, 
      167.0
    ], 
    "water_urban_unimproved": [
      33.0, 
      33.0, 
      35.0, 
      19.0, 
      20.0
    ], 
    "sanitation_urban_unimproved_total": [
      99.609999999999999, 
      100.16, 
      105.23, 
      112.15000000000001, 
      117.7
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1140.0, 
      1377.0, 
      1576.0, 
      1760.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      1027.0, 
      899.0, 
      689.0, 
      538.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      4394.5, 
      4592.1400000000003, 
      4954.8599999999997, 
      5221.29, 
      5413.6400000000003
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      204.61000000000001, 
      224.06999999999999, 
      234.65000000000001, 
      241.63999999999999
    ], 
    "water_rural_improved_piped": [
      684.0, 
      789.0, 
      960.0, 
      1106.0, 
      1174.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      163.0, 
      178.0, 
      187.0, 
      193.0
    ], 
    "sanitation_urban_improved": [
      1560.5, 
      1569.04, 
      1648.5899999999999, 
      1757.02, 
      1843.99
    ], 
    "water_urban_improved_piped": [
      1245.0, 
      1302.0, 
      1438.0, 
      1607.0, 
      1746.0
    ]
  }, 
  "Montserrat": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      9.0, 
      9.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      9.0099999999999998, 
      8.5600000000000005, 
      4.2400000000000002, 
      4.6699999999999999, 
      4.7999999999999998
    ], 
    "water_total_improved_other": [
      9.0, 
      9.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "sanitation_total_improved": [
      10.0, 
      10.0, 
      5.0, 
      6.0, 
      6.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      0.050000000000000003, 
      0.050000000000000003, 
      0.02, 
      0.029999999999999999, 
      0.040000000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      1.3500000000000001, 
      1.3100000000000001, 
      0.55000000000000004, 
      0.76000000000000001, 
      0.91000000000000003
    ], 
    "water_total_improved_piped": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ], 
    "sanitation_total_unimproved_total": [
      0.72999999999999998, 
      0.23000000000000001, 
      -0.040000000000000001, 
      -0.37, 
      -0.089999999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      0.38, 
      0.35999999999999999, 
      0.17999999999999999, 
      0.19, 
      0.20000000000000001
    ], 
    "water_total_improved_total": [
      10.0, 
      10.0, 
      5.0, 
      6.0, 
      6.0
    ], 
    "population_rural": [
      9.3900000000000006, 
      8.9199999999999999, 
      4.4100000000000001, 
      4.8700000000000001, 
      5.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.059999999999999998, 
      0.050000000000000003, 
      0.029999999999999999, 
      0.029999999999999999, 
      0.040000000000000001
    ], 
    "water_rural_improved_other": [
      9.0, 
      9.0, 
      4.0, 
      5.0, 
      5.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      10.73, 
      10.23, 
      4.96, 
      5.6299999999999999, 
      5.9100000000000001
    ], 
    "sanitation_rural_unimproved_total": [
      0.38, 
      0.35999999999999999, 
      0.17000000000000001, 
      0.20000000000000001, 
      0.20000000000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      1.29, 
      1.26, 
      0.52000000000000002, 
      0.72999999999999998, 
      0.87
    ], 
    "water_urban_improved_piped": [
      1.0, 
      1.0, 
      1.0, 
      1.0, 
      1.0
    ]
  }, 
  "Paraguay": {
    "water_rural_unimproved": [
      1635.0, 
      1426.0, 
      1171.0, 
      907.0, 
      842.0
    ], 
    "water_rural_improved_total": [
      545.0, 
      873.0, 
      1219.0, 
      1544.0, 
      1634.0
    ], 
    "water_urban_improved_other": [
      455.0, 
      501.0, 
      504.0, 
      518.0, 
      526.0
    ], 
    "sanitation_urban_unimproved_shared": [
      62.079999999999998, 
      75.099999999999994, 
      118.41, 
      138.11000000000001, 
      150.47
    ], 
    "sanitation_rural_improved": [
      327.06, 
      528.66999999999996, 
      740.87, 
      956.07000000000005, 
      990.41999999999996
    ], 
    "water_total_improved_other": [
      1000.0, 
      1167.0, 
      1221.0, 
      1253.0, 
      1293.0
    ], 
    "sanitation_total_improved": [
      1589.0, 
      2281.0, 
      3080.0, 
      3994.0, 
      4376.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      724.27999999999997, 
      650.84000000000003, 
      473.64999999999998, 
      241.69, 
      188.09
    ], 
    "sanitation_total_unimproved_opendefecation": [
      108.0, 
      94.0, 
      78.0, 
      60.0, 
      63.0
    ], 
    "sanitation_rural_unimproved_shared": [
      0.0, 
      0.0, 
      0.0, 
      24.510000000000002, 
      24.760000000000002
    ], 
    "population_urban": [
      2069.3699999999999, 
      2503.2399999999998, 
      2960.3400000000001, 
      3452.6900000000001, 
      3761.8000000000002
    ], 
    "water_total_improved_piped": [
      1221.0, 
      1884.0, 
      2722.0, 
      3675.0, 
      4065.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      20.690000000000001, 
      25.030000000000001, 
      29.600000000000001, 
      34.530000000000001, 
      37.619999999999997
    ], 
    "water_urban_improved_total": [
      1676.0, 
      2178.0, 
      2724.0, 
      3384.0, 
      3724.0
    ], 
    "sanitation_total_unimproved_total": [
      2660.73, 
      2520.8200000000002, 
      2270.2399999999998, 
      1910.1600000000001, 
      1861.8599999999999
    ], 
    "sanitation_rural_unimproved_other": [
      1766.0999999999999, 
      1700.95, 
      1601.23, 
      1446.3599999999999, 
      1436.1099999999999
    ], 
    "water_total_improved_total": [
      2221.0, 
      3051.0, 
      3943.0, 
      4928.0, 
      5358.0
    ], 
    "population_rural": [
      2180.3699999999999, 
      2298.5799999999999, 
      2389.9000000000001, 
      2451.46, 
      2476.0599999999999
    ], 
    "sanitation_total_unimproved_shared": [
      62.0, 
      75.0, 
      118.0, 
      163.0, 
      175.0
    ], 
    "water_urban_unimproved": [
      393.0, 
      325.0, 
      236.0, 
      69.0, 
      38.0
    ], 
    "sanitation_urban_unimproved_total": [
      807.05999999999995, 
      750.97000000000003, 
      621.66999999999996, 
      414.31999999999999, 
      376.18000000000001
    ], 
    "water_rural_improved_other": [
      545.0, 
      666.0, 
      717.0, 
      735.0, 
      767.0
    ], 
    "water_total_unimproved": [
      2028.0, 
      1751.0, 
      1407.0, 
      976.0, 
      880.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      87.209999999999994, 
      68.959999999999994, 
      47.799999999999997, 
      24.510000000000002, 
      24.760000000000002
    ], 
    "population_total": [
      4249.7299999999996, 
      4801.8199999999997, 
      5350.2399999999998, 
      5904.1599999999999, 
      6237.8599999999997
    ], 
    "sanitation_rural_unimproved_total": [
      1853.3099999999999, 
      1769.9100000000001, 
      1649.03, 
      1495.3900000000001, 
      1485.6400000000001
    ], 
    "water_rural_improved_piped": [
      0.0, 
      207.0, 
      502.0, 
      809.0, 
      867.0
    ], 
    "sanitation_total_unimproved_other": [
      2490.0, 
      2352.0, 
      2075.0, 
      1688.0, 
      1624.0
    ], 
    "sanitation_urban_improved": [
      1262.3099999999999, 
      1752.27, 
      2338.6700000000001, 
      3038.3699999999999, 
      3385.6199999999999
    ], 
    "water_urban_improved_piped": [
      1221.0, 
      1677.0, 
      2220.0, 
      2866.0, 
      3198.0
    ]
  }, 
  "Latvia": {
    "water_rural_unimproved": [
      33.0, 
      31.0, 
      30.0, 
      29.0, 
      29.0
    ], 
    "water_rural_improved_total": [
      786.0, 
      748.0, 
      728.0, 
      704.0, 
      693.0
    ], 
    "water_urban_improved_other": [
      1844.0, 
      120.0, 
      113.0, 
      110.0, 
      107.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      210.05000000000001, 
      202.61000000000001, 
      199.83000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      538.19000000000005, 
      520.75, 
      512.36000000000001
    ], 
    "water_total_improved_other": [
      2630.0, 
      868.0, 
      394.0, 
      381.0, 
      374.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      1863.0, 
      1799.0, 
      1772.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      80.790000000000006, 
      77.930000000000007, 
      76.859999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      22.739999999999998, 
      22.0, 
      21.649999999999999
    ], 
    "population_urban": [
      1844.24, 
      1713.26, 
      1615.75, 
      1558.5799999999999, 
      1537.1600000000001
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      1950.0, 
      1882.0, 
      1856.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      1844.0, 
      1713.0, 
      1616.0, 
      1559.0, 
      1537.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      510.76999999999998, 
      493.01999999999998, 
      486.79000000000002
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      197.08000000000001, 
      190.69999999999999, 
      187.63
    ], 
    "water_total_improved_total": [
      2630.0, 
      2461.0, 
      2344.0, 
      2263.0, 
      2230.0
    ], 
    "population_rural": [
      818.91999999999996, 
      778.75, 
      758.01999999999998, 
      733.45000000000005, 
      721.63999999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      233.0, 
      225.0, 
      222.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      290.82999999999998, 
      280.55000000000001, 
      276.69
    ], 
    "water_rural_improved_other": [
      786.0, 
      748.0, 
      281.0, 
      271.0, 
      267.0
    ], 
    "water_total_unimproved": [
      33.0, 
      31.0, 
      30.0, 
      29.0, 
      29.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "population_total": [
      2663.1599999999999, 
      2492.0100000000002, 
      2373.77, 
      2292.02, 
      2258.79
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      219.83000000000001, 
      212.69999999999999, 
      209.28
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      447.0, 
      433.0, 
      426.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      278.0, 
      269.0, 
      265.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      1324.9200000000001, 
      1278.03, 
      1260.47
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      1593.0, 
      1503.0, 
      1449.0, 
      1430.0
    ]
  }, 
  "Guyana": {
    "water_rural_unimproved": [
      -1.0, 
      80.0, 
      70.0, 
      55.0, 
      38.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      458.0, 
      470.0, 
      493.0, 
      509.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      38.0, 
      39.0, 
      45.0, 
      48.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      22.059999999999999, 
      21.629999999999999, 
      21.559999999999999, 
      21.600000000000001
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      409.08999999999997, 
      415.75999999999999, 
      427.61000000000001, 
      437.95999999999998
    ], 
    "water_total_improved_other": [
      -1.0, 
      216.0, 
      217.0, 
      209.0, 
      212.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      596.0, 
      600.0, 
      611.0, 
      622.0
    ], 
    "continent": "South America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      8.8200000000000003, 
      8.6500000000000004, 
      10.779999999999999, 
      10.800000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      7.0, 
      7.0, 
      5.0, 
      11.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      43.060000000000002, 
      43.200000000000003, 
      43.859999999999999, 
      43.799999999999997
    ], 
    "population_urban": [
      221.28999999999999, 
      220.58000000000001, 
      216.31, 
      215.62, 
      215.97999999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      445.0, 
      454.0, 
      491.0, 
      509.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      2.21, 
      2.1600000000000001, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      203.0, 
      201.0, 
      207.0, 
      212.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      162.84999999999999, 
      156.25999999999999, 
      152.83000000000001, 
      141.44
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      80.739999999999995, 
      75.590000000000003, 
      71.269999999999996, 
      54.75
    ], 
    "water_total_improved_total": [
      -1.0, 
      661.0, 
      671.0, 
      700.0, 
      721.0
    ], 
    "population_rural": [
      527.89999999999998, 
      538.26999999999998, 
      539.95000000000005, 
      548.22000000000003, 
      547.45000000000005
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      65.0, 
      65.0, 
      66.0, 
      66.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      18.0, 
      15.0, 
      9.0, 
      4.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      33.079999999999998, 
      32.439999999999998, 
      32.350000000000001, 
      32.390000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      178.0, 
      178.0, 
      164.0, 
      164.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      98.0, 
      85.0, 
      64.0, 
      42.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      5.3799999999999999, 
      5.4000000000000004, 
      5.4800000000000004, 
      10.949999999999999
    ], 
    "population_total": [
      749.19000000000005, 
      758.85000000000002, 
      756.25999999999999, 
      763.83000000000004, 
      763.44000000000005
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      129.18000000000001, 
      124.19, 
      120.61, 
      109.48999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      280.0, 
      292.0, 
      329.0, 
      345.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      90.0, 
      85.0, 
      82.0, 
      66.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      187.5, 
      183.87, 
      183.27000000000001, 
      183.59
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      165.0, 
      162.0, 
      162.0, 
      164.0
    ]
  }, 
  "Guadeloupe": {
    "water_rural_unimproved": [
      -1.0, 
      0.0, 
      0.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      6.0, 
      7.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      1.0, 
      2.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      23.899999999999999, 
      25.329999999999998, 
      22.379999999999999, 
      22.77
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      380.91000000000003, 
      398.41000000000003, 
      422.17000000000002, 
      447.69, 
      455.48000000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      395.0, 
      419.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      373.0, 
      390.0, 
      414.0, 
      439.0, 
      446.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      396.0, 
      421.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      5.4299999999999997, 
      6.1299999999999999, 
      7.0, 
      7.8300000000000001, 
      8.1199999999999992
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      8.0, 
      8.0, 
      8.0, 
      9.0, 
      9.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      23.899999999999999, 
      25.329999999999998, 
      22.390000000000001, 
      22.780000000000001
    ], 
    "water_rural_improved_other": [
      -1.0, 
      1.0, 
      2.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      8.0, 
      8.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      386.33999999999997, 
      404.54000000000002, 
      429.17000000000002, 
      455.50999999999999, 
      463.58999999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      5.0, 
      5.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      374.50999999999999, 
      396.83999999999997, 
      425.30000000000001, 
      432.69999999999999
    ], 
    "water_urban_improved_piped": [
      373.0, 
      390.0, 
      414.0, 
      439.0, 
      446.0
    ]
  }, 
  "Honduras": {
    "water_rural_unimproved": [
      1201.0, 
      1160.0, 
      1075.0, 
      959.0, 
      877.0
    ], 
    "water_rural_improved_total": [
      1727.0, 
      2064.0, 
      2392.0, 
      2730.0, 
      2938.0
    ], 
    "water_urban_improved_other": [
      178.0, 
      142.0, 
      111.0, 
      96.0, 
      35.0
    ], 
    "sanitation_urban_unimproved_shared": [
      177.63, 
      236.37, 
      276.33999999999997, 
      352.44999999999999, 
      385.42000000000002
    ], 
    "sanitation_rural_improved": [
      819.71000000000004, 
      1193.0, 
      1629.3099999999999, 
      2065.5900000000001, 
      2365.29
    ], 
    "water_total_improved_other": [
      675.0, 
      594.0, 
      458.0, 
      355.0, 
      226.0
    ], 
    "sanitation_total_improved": [
      2162.0, 
      2871.0, 
      3702.0, 
      4565.0, 
      5168.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      236.84, 
      236.37, 
      248.69999999999999, 
      256.32999999999998, 
      245.27000000000001
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1915.0, 
      1761.0, 
      1483.0, 
      1129.0, 
      909.0
    ], 
    "sanitation_rural_unimproved_shared": [
      58.549999999999997, 
      96.730000000000004, 
      138.66, 
      184.43000000000001, 
      190.75
    ], 
    "population_urban": [
      1973.6700000000001, 
      2363.6700000000001, 
      2763.3699999999999, 
      3204.1399999999999, 
      3503.8000000000002
    ], 
    "water_total_improved_piped": [
      2848.0, 
      3645.0, 
      4504.0, 
      5419.0, 
      6041.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      217.09999999999999, 
      212.72999999999999, 
      165.80000000000001, 
      96.120000000000005, 
      70.079999999999998
    ], 
    "water_urban_improved_total": [
      1796.0, 
      2175.0, 
      2570.0, 
      3044.0, 
      3329.0
    ], 
    "sanitation_total_unimproved_total": [
      2739.1999999999998, 
      2717.0, 
      2527.98, 
      2327.6900000000001, 
      2150.79
    ], 
    "sanitation_rural_unimproved_other": [
      351.30000000000001, 
      386.92000000000002, 
      381.32999999999998, 
      405.74000000000001, 
      419.64999999999998
    ], 
    "water_total_improved_total": [
      3523.0, 
      4239.0, 
      4962.0, 
      5774.0, 
      6267.0
    ], 
    "population_rural": [
      2927.54, 
      3224.3299999999999, 
      3466.6100000000001, 
      3688.5599999999999, 
      3814.9899999999998
    ], 
    "sanitation_total_unimproved_shared": [
      237.0, 
      333.0, 
      415.0, 
      536.0, 
      576.0
    ], 
    "water_urban_unimproved": [
      178.0, 
      189.0, 
      193.0, 
      160.0, 
      175.0
    ], 
    "sanitation_urban_unimproved_total": [
      631.58000000000004, 
      685.47000000000003, 
      690.84000000000003, 
      704.90999999999997, 
      700.75999999999999
    ], 
    "water_rural_improved_other": [
      497.0, 
      452.0, 
      347.0, 
      259.0, 
      191.0
    ], 
    "water_total_unimproved": [
      1379.0, 
      1349.0, 
      1268.0, 
      1119.0, 
      1052.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      1697.97, 
      1547.6800000000001, 
      1317.3099999999999, 
      1032.8, 
      839.29999999999995
    ], 
    "population_total": [
      4901.1999999999998, 
      5588.0, 
      6229.9799999999996, 
      6892.6899999999996, 
      7318.79
    ], 
    "sanitation_rural_unimproved_total": [
      2107.8299999999999, 
      2031.3299999999999, 
      1837.3, 
      1622.97, 
      1449.7
    ], 
    "water_rural_improved_piped": [
      1230.0, 
      1612.0, 
      2045.0, 
      2471.0, 
      2747.0
    ], 
    "sanitation_total_unimproved_other": [
      588.0, 
      623.0, 
      630.0, 
      662.0, 
      665.0
    ], 
    "sanitation_urban_improved": [
      1342.0899999999999, 
      1678.2, 
      2072.5300000000002, 
      2499.23, 
      2803.04
    ], 
    "water_urban_improved_piped": [
      1618.0, 
      2033.0, 
      2459.0, 
      2948.0, 
      3294.0
    ]
  }, 
  "Myanmar": {
    "water_rural_unimproved": [
      16263.0, 
      15877.0, 
      13419.0, 
      10394.0, 
      10360.0
    ], 
    "water_rural_improved_total": [
      14422.0, 
      16526.0, 
      20128.0, 
      23135.0, 
      23058.0
    ], 
    "water_urban_improved_other": [
      6909.0, 
      7678.0, 
      8229.0, 
      8890.0, 
      9687.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      1031.4200000000001, 
      1306.29, 
      1481.6400000000001, 
      1614.52
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      12637.34, 
      19792.700000000001, 
      26487.91, 
      26400.110000000001
    ], 
    "water_total_improved_other": [
      21024.0, 
      23880.0, 
      27686.0, 
      31354.0, 
      32077.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      21461.0, 
      30374.0, 
      39230.0, 
      40285.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      1375.23, 
      1045.03, 
      592.65999999999997, 
      645.80999999999995
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      8978.0, 
      4828.0, 
      335.0, 
      334.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      1620.1700000000001, 
      2683.7600000000002, 
      3688.1900000000001, 
      3675.96
    ], 
    "population_urban": [
      10159.25, 
      11460.280000000001, 
      13062.870000000001, 
      14816.42, 
      16145.15
    ], 
    "water_total_improved_piped": [
      2237.0, 
      2387.0, 
      2892.0, 
      2893.0, 
      3090.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      229.21000000000001, 
      130.63, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      8839.0, 
      9741.0, 
      10450.0, 
      11112.0, 
      12109.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      22402.720000000001, 
      16235.82, 
      9115.4200000000001, 
      9278.0200000000004
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      9397.0, 
      6373.9200000000001, 
      3017.6100000000001, 
      3007.6100000000001
    ], 
    "water_total_improved_total": [
      23261.0, 
      26267.0, 
      30578.0, 
      34247.0, 
      35167.0
    ], 
    "population_rural": [
      30685.240000000002, 
      32403.450000000001, 
      33546.949999999997, 
      33529.0, 
      33417.860000000001
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      2651.0, 
      3990.0, 
      5170.0, 
      5291.0
    ], 
    "water_urban_unimproved": [
      1320.0, 
      1719.0, 
      2613.0, 
      3704.0, 
      4036.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      2635.8699999999999, 
      2481.9499999999998, 
      2074.3000000000002, 
      2260.3200000000002
    ], 
    "water_rural_improved_other": [
      14115.0, 
      16202.0, 
      19457.0, 
      22464.0, 
      22390.0
    ], 
    "water_total_unimproved": [
      17583.0, 
      17596.0, 
      16032.0, 
      14098.0, 
      14396.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      8748.9300000000003, 
      4696.5699999999997, 
      335.29000000000002, 
      334.18000000000001
    ], 
    "population_total": [
      40844.489999999998, 
      43863.720000000001, 
      46609.82, 
      48345.419999999998, 
      49563.019999999997
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      19766.110000000001, 
      13754.25, 
      7041.0900000000001, 
      7017.75
    ], 
    "water_rural_improved_piped": [
      307.0, 
      324.0, 
      671.0, 
      671.0, 
      668.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      10772.0, 
      7419.0, 
      3611.0, 
      3654.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      8824.4099999999999, 
      10580.92, 
      12742.120000000001, 
      13884.83
    ], 
    "water_urban_improved_piped": [
      1930.0, 
      2063.0, 
      2221.0, 
      2222.0, 
      2422.0
    ]
  }, 
  "Equatorial Guinea": {
    "water_rural_unimproved": [
      -1.0, 
      160.0, 
      188.0, 
      216.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      116.0, 
      136.0, 
      156.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      54.0, 
      59.0, 
      69.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      127.17, 
      148.88, 
      171.00999999999999, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      170.0, 
      195.0, 
      225.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      232.0, 
      272.0, 
      313.0, 
      -1.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      70.209999999999994, 
      82.099999999999994, 
      94.819999999999993, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      131.77000000000001, 
      175.53, 
      205.24000000000001, 
      237.03999999999999, 
      259.16000000000003
    ], 
    "water_total_improved_piped": [
      16.0, 
      25.0, 
      33.0, 
      38.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      -1.0, 
      79.0, 
      92.0, 
      107.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      219.99000000000001, 
      256.88, 
      295.81, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      149.28999999999999, 
      174.77000000000001, 
      200.75, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      195.0, 
      228.0, 
      263.0, 
      -1.0
    ], 
    "population_rural": [
      247.47999999999999, 
      276.45999999999998, 
      323.63999999999999, 
      371.76999999999998, 
      400.04000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      97.0, 
      113.0, 
      130.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      70.209999999999994, 
      82.099999999999994, 
      94.819999999999993, 
      -1.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      116.0, 
      136.0, 
      156.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      257.0, 
      301.0, 
      346.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      379.25, 
      451.99000000000001, 
      528.88, 
      608.80999999999995, 
      659.20000000000005
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      149.28999999999999, 
      174.75999999999999, 
      200.75999999999999, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      219.0, 
      257.0, 
      296.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      105.31999999999999, 
      123.14, 
      142.22, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      16.0, 
      25.0, 
      33.0, 
      38.0, 
      -1.0
    ]
  }, 
  "Egypt": {
    "water_rural_unimproved": [
      4572.0, 
      3652.0, 
      2818.0, 
      1771.0, 
      935.0
    ], 
    "water_rural_improved_total": [
      28089.0, 
      32866.0, 
      37438.0, 
      42486.0, 
      45806.0
    ], 
    "water_urban_improved_other": [
      1508.0, 
      1367.0, 
      1197.0, 
      658.0, 
      348.0
    ], 
    "sanitation_urban_unimproved_shared": [
      753.71000000000004, 
      820.20000000000005, 
      897.53999999999996, 
      986.94000000000005, 
      1043.5799999999999
    ], 
    "sanitation_rural_improved": [
      18616.860000000001, 
      24832.009999999998, 
      31802.16, 
      39830.889999999999, 
      43001.860000000001
    ], 
    "water_total_improved_other": [
      16859.0, 
      15244.0, 
      12469.0, 
      8181.0, 
      5489.0
    ], 
    "sanitation_total_improved": [
      41480.0, 
      50258.0, 
      60224.0, 
      71742.0, 
      76744.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      502.47000000000003, 
      273.39999999999998, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6557.0, 
      5202.0, 
      3416.0, 
      772.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_shared": [
      1306.45, 
      1825.8800000000001, 
      2012.79, 
      2655.3899999999999, 
      2804.4699999999998
    ], 
    "population_urban": [
      25123.700000000001, 
      27340.040000000001, 
      29917.900000000001, 
      32897.870000000003, 
      34786.010000000002
    ], 
    "water_total_improved_piped": [
      35349.0, 
      44142.0, 
      54588.0, 
      67203.0, 
      75103.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      1004.95, 
      820.20000000000005, 
      598.36000000000001, 
      328.98000000000002, 
      0.0
    ], 
    "water_urban_improved_total": [
      24119.0, 
      26520.0, 
      29619.0, 
      32898.0, 
      34786.0
    ], 
    "sanitation_total_unimproved_total": [
      16304.85, 
      13599.700000000001, 
      9949.7900000000009, 
      5412.4099999999999, 
      4783.1700000000001
    ], 
    "sanitation_rural_unimproved_other": [
      7185.4499999999998, 
      5477.6499999999996, 
      3623.0300000000002, 
      1327.7, 
      934.82000000000005
    ], 
    "water_total_improved_total": [
      52208.0, 
      59386.0, 
      67057.0, 
      75384.0, 
      80592.0
    ], 
    "population_rural": [
      32661.150000000001, 
      36517.660000000003, 
      40255.900000000001, 
      44256.540000000001, 
      46741.160000000003
    ], 
    "sanitation_total_unimproved_shared": [
      2060.0, 
      2646.0, 
      2911.0, 
      3642.0, 
      3848.0
    ], 
    "water_urban_unimproved": [
      1005.0, 
      820.0, 
      299.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      2261.1399999999999, 
      1913.8099999999999, 
      1495.9000000000001, 
      986.94000000000005, 
      1043.5799999999999
    ], 
    "water_rural_improved_other": [
      15351.0, 
      13877.0, 
      11272.0, 
      7523.0, 
      5141.0
    ], 
    "water_total_unimproved": [
      5577.0, 
      4472.0, 
      3117.0, 
      1771.0, 
      935.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      5552.3999999999996, 
      4382.1199999999999, 
      2817.9099999999999, 
      442.56999999999999, 
      0.0
    ], 
    "population_total": [
      57784.849999999999, 
      63857.699999999997, 
      70173.789999999994, 
      77154.410000000003, 
      81527.169999999998
    ], 
    "sanitation_rural_unimproved_total": [
      14044.290000000001, 
      11685.65, 
      8453.7399999999998, 
      4425.6499999999996, 
      3739.3000000000002
    ], 
    "water_rural_improved_piped": [
      12738.0, 
      18989.0, 
      26166.0, 
      34963.0, 
      40665.0
    ], 
    "sanitation_total_unimproved_other": [
      7687.0, 
      5751.0, 
      3623.0, 
      999.0, 
      935.0
    ], 
    "sanitation_urban_improved": [
      22862.560000000001, 
      25426.23, 
      28422.0, 
      31910.93, 
      33742.43
    ], 
    "water_urban_improved_piped": [
      22611.0, 
      25153.0, 
      28422.0, 
      32240.0, 
      34438.0
    ]
  }, 
  "Nicaragua": {
    "water_rural_unimproved": [
      907.0, 
      909.0, 
      878.0, 
      817.0, 
      784.0
    ], 
    "water_rural_improved_total": [
      1065.0, 
      1256.0, 
      1431.0, 
      1587.0, 
      1668.0
    ], 
    "water_urban_improved_other": [
      195.0, 
      250.0, 
      251.0, 
      305.0, 
      322.0
    ], 
    "sanitation_urban_unimproved_shared": [
      173.25, 
      199.55000000000001, 
      223.37, 
      274.61000000000001, 
      289.33999999999997
    ], 
    "sanitation_rural_improved": [
      512.76999999999998, 
      627.87, 
      738.82000000000005, 
      841.38, 
      907.39999999999998
    ], 
    "water_total_improved_other": [
      905.0, 
      1051.0, 
      1151.0, 
      1267.0, 
      1328.0
    ], 
    "sanitation_total_improved": [
      1791.0, 
      2125.0, 
      2442.0, 
      2733.0, 
      2932.0
    ], 
    "continent": "North America", 
    "sanitation_urban_unimproved_other": [
      628.01999999999998, 
      698.42999999999995, 
      753.86000000000001, 
      762.82000000000005, 
      771.58000000000004
    ], 
    "sanitation_total_unimproved_opendefecation": [
      955.0, 
      923.0, 
      828.0, 
      723.0, 
      644.0
    ], 
    "sanitation_rural_unimproved_shared": [
      78.890000000000001, 
      108.25, 
      115.44, 
      144.24000000000001, 
      147.15000000000001
    ], 
    "population_urban": [
      2165.5900000000001, 
      2494.3899999999999, 
      2792.0900000000001, 
      3051.27, 
      3214.9000000000001
    ], 
    "water_total_improved_piped": [
      2152.0, 
      2550.0, 
      2932.0, 
      3280.0, 
      3491.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      86.620000000000005, 
      99.780000000000001, 
      111.68000000000001, 
      122.05, 
      128.59999999999999
    ], 
    "water_urban_improved_total": [
      1992.0, 
      2345.0, 
      2652.0, 
      2960.0, 
      3151.0
    ], 
    "sanitation_total_unimproved_total": [
      2346.77, 
      2534.4499999999998, 
      2658.9099999999999, 
      2722.2199999999998, 
      2735.3299999999999
    ], 
    "sanitation_rural_unimproved_other": [
      512.76999999999998, 
      606.22000000000003, 
      738.82000000000005, 
      817.34000000000003, 
      882.87
    ], 
    "water_total_improved_total": [
      3057.0, 
      3601.0, 
      4083.0, 
      4547.0, 
      4819.0
    ], 
    "population_rural": [
      1972.1900000000001, 
      2165.0599999999999, 
      2308.8299999999999, 
      2403.9499999999998, 
      2452.4200000000001
    ], 
    "sanitation_total_unimproved_shared": [
      252.0, 
      308.0, 
      338.0, 
      419.0, 
      436.0
    ], 
    "water_urban_unimproved": [
      174.0, 
      149.0, 
      140.0, 
      91.0, 
      64.0
    ], 
    "sanitation_urban_unimproved_total": [
      887.88999999999999, 
      997.75999999999999, 
      1088.9200000000001, 
      1159.49, 
      1189.51
    ], 
    "water_rural_improved_other": [
      710.0, 
      801.0, 
      900.0, 
      962.0, 
      1006.0
    ], 
    "water_total_unimproved": [
      1081.0, 
      1058.0, 
      1018.0, 
      908.0, 
      848.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      867.75999999999999, 
      822.72000000000003, 
      715.74000000000001, 
      600.99000000000001, 
      515.00999999999999
    ], 
    "population_total": [
      4137.7700000000004, 
      4659.4499999999998, 
      5100.9099999999999, 
      5455.2200000000003, 
      5667.3299999999999
    ], 
    "sanitation_rural_unimproved_total": [
      1459.4200000000001, 
      1537.1900000000001, 
      1570.01, 
      1562.5699999999999, 
      1545.02
    ], 
    "water_rural_improved_piped": [
      355.0, 
      455.0, 
      531.0, 
      625.0, 
      662.0
    ], 
    "sanitation_total_unimproved_other": [
      1141.0, 
      1304.0, 
      1493.0, 
      1580.0, 
      1655.0
    ], 
    "sanitation_urban_improved": [
      1277.7, 
      1496.6300000000001, 
      1703.1700000000001, 
      1891.78, 
      2025.3900000000001
    ], 
    "water_urban_improved_piped": [
      1797.0, 
      2095.0, 
      2401.0, 
      2655.0, 
      2829.0
    ]
  }, 
  "Singapore": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      30.16, 
      34.799999999999997, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      3016.3800000000001, 
      3480.1799999999998, 
      4018.3400000000001, 
      4266.96, 
      4615.0200000000004
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      3016.0, 
      3480.0, 
      4018.0, 
      4267.0, 
      4615.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_rural": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      30.16, 
      34.810000000000002, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      3016.3800000000001, 
      3480.1799999999998, 
      4018.3400000000001, 
      4266.96, 
      4615.0200000000004
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      2986.2199999999998, 
      3445.3699999999999, 
      4018.3400000000001, 
      4266.96, 
      4615.0200000000004
    ], 
    "water_urban_improved_piped": [
      3016.0, 
      3480.0, 
      4018.0, 
      4267.0, 
      4615.0
    ]
  }, 
  "Democratic People's Republic of Korea": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      8383.0, 
      8875.0, 
      9103.0, 
      9036.0, 
      8903.0
    ], 
    "water_urban_improved_other": [
      11760.0, 
      2440.0, 
      2614.0, 
      2754.0, 
      14915.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      5324.7600000000002, 
      5461.54, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_other": [
      20143.0, 
      5014.0, 
      5254.0, 
      5375.0, 
      23818.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      12774.0, 
      13441.0, 
      -1.0, 
      -1.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      5393.9799999999996, 
      5777.5799999999999, 
      -1.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      11760.41, 
      12842.809999999999, 
      13756.139999999999, 
      14493.209999999999, 
      14915.299999999999
    ], 
    "water_total_improved_piped": [
      -1.0, 
      16704.0, 
      17605.0, 
      18154.0, 
      -1.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      11760.0, 
      12843.0, 
      13756.0, 
      14493.0, 
      14915.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      8943.4200000000001, 
      9417.7099999999991, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      3549.8400000000001, 
      3641.0300000000002, 
      -1.0, 
      -1.0
    ], 
    "water_total_improved_total": [
      20143.0, 
      21718.0, 
      22859.0, 
      23529.0, 
      23818.0
    ], 
    "population_rural": [
      8382.7999999999993, 
      8874.6100000000006, 
      9102.5699999999997, 
      9035.8700000000008, 
      8903.4500000000007
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      5393.9799999999996, 
      5777.5799999999999, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_other": [
      8383.0, 
      2574.0, 
      2640.0, 
      2621.0, 
      8903.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      20143.209999999999, 
      21717.419999999998, 
      22858.709999999999, 
      23529.080000000002, 
      23818.759999999998
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      3549.8499999999999, 
      3641.0300000000002, 
      -1.0, 
      -1.0
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      6301.0, 
      6463.0, 
      6415.0, 
      -1.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      8944.0, 
      9419.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      7448.8299999999999, 
      7978.5600000000004, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      10403.0, 
      11142.0, 
      11739.0, 
      -1.0
    ]
  }, 
  "Botswana": {
    "water_rural_unimproved": [
      94.0, 
      87.0, 
      89.0, 
      78.0, 
      78.0
    ], 
    "water_rural_improved_total": [
      691.0, 
      704.0, 
      717.0, 
      706.0, 
      697.0
    ], 
    "water_urban_improved_other": [
      346.0, 
      379.0, 
      349.0, 
      274.0, 
      218.0
    ], 
    "sanitation_urban_unimproved_shared": [
      28.34, 
      45.549999999999997, 
      55.0, 
      73.819999999999993, 
      80.230000000000004
    ], 
    "sanitation_rural_improved": [
      156.97, 
      197.68000000000001, 
      249.81, 
      282.38999999999999, 
      302.22000000000003
    ], 
    "water_total_improved_other": [
      935.0, 
      933.0, 
      865.0, 
      737.0, 
      644.0
    ], 
    "sanitation_total_improved": [
      486.0, 
      676.0, 
      864.0, 
      1041.0, 
      1150.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      141.69, 
      167.00999999999999, 
      192.50999999999999, 
      189.84, 
      206.31999999999999
    ], 
    "sanitation_total_unimproved_opendefecation": [
      484.0, 
      455.0, 
      418.0, 
      354.0, 
      305.0
    ], 
    "sanitation_rural_unimproved_shared": [
      47.090000000000003, 
      55.350000000000001, 
      64.469999999999999, 
      78.439999999999998, 
      85.239999999999995
    ], 
    "population_urban": [
      566.76999999999998, 
      759.14999999999998, 
      916.73000000000002, 
      1054.6400000000001, 
      1146.2
    ], 
    "water_total_improved_piped": [
      323.0, 
      530.0, 
      760.0, 
      1013.0, 
      1188.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      68.010000000000005, 
      68.319999999999993, 
      55.0, 
      31.640000000000001, 
      11.460000000000001
    ], 
    "water_urban_improved_total": [
      567.0, 
      759.0, 
      908.0, 
      1044.0, 
      1135.0
    ], 
    "sanitation_total_unimproved_total": [
      865.60000000000002, 
      873.88, 
      858.54999999999995, 
      798.04999999999995, 
      771.12
    ], 
    "sanitation_rural_unimproved_other": [
      164.81, 
      150.24000000000001, 
      128.93000000000001, 
      101.97, 
      92.989999999999995
    ], 
    "water_total_improved_total": [
      1258.0, 
      1463.0, 
      1625.0, 
      1750.0, 
      1832.0
    ], 
    "population_rural": [
      784.83000000000004, 
      790.73000000000002, 
      805.83000000000004, 
      784.40999999999997, 
      774.91999999999996
    ], 
    "sanitation_total_unimproved_shared": [
      75.0, 
      101.0, 
      119.0, 
      152.0, 
      165.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      9.0, 
      11.0, 
      11.0
    ], 
    "sanitation_urban_unimproved_total": [
      238.05000000000001, 
      280.88999999999999, 
      302.51999999999998, 
      295.30000000000001, 
      298.00999999999999
    ], 
    "water_rural_improved_other": [
      589.0, 
      554.0, 
      516.0, 
      463.0, 
      426.0
    ], 
    "water_total_unimproved": [
      94.0, 
      87.0, 
      98.0, 
      89.0, 
      89.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      415.95999999999998, 
      387.45999999999998, 
      362.62, 
      321.61000000000001, 
      294.47000000000003
    ], 
    "population_total": [
      1351.5999999999999, 
      1549.8800000000001, 
      1722.55, 
      1839.05, 
      1921.1199999999999
    ], 
    "sanitation_rural_unimproved_total": [
      627.86000000000001, 
      593.04999999999995, 
      556.01999999999998, 
      502.01999999999998, 
      472.69999999999999
    ], 
    "water_rural_improved_piped": [
      102.0, 
      150.0, 
      201.0, 
      243.0, 
      271.0
    ], 
    "sanitation_total_unimproved_other": [
      307.0, 
      317.0, 
      322.0, 
      292.0, 
      299.0
    ], 
    "sanitation_urban_improved": [
      328.72000000000003, 
      478.25999999999999, 
      614.21000000000004, 
      759.34000000000003, 
      848.19000000000005
    ], 
    "water_urban_improved_piped": [
      221.0, 
      380.0, 
      559.0, 
      770.0, 
      917.0
    ]
  }, 
  "United Kingdom": {
    "water_rural_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_total": [
      6472.0, 
      6383.0, 
      6272.0, 
      6195.0, 
      6145.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      6472.4200000000001, 
      6383.5, 
      6271.8699999999999, 
      6194.79, 
      6144.5200000000004
    ], 
    "water_total_improved_other": [
      129.0, 
      127.0, 
      126.0, 
      124.0, 
      123.0
    ], 
    "sanitation_total_improved": [
      57237.0, 
      58042.0, 
      58908.0, 
      60261.0, 
      61231.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      50765.080000000002, 
      51658.839999999997, 
      52635.540000000001, 
      54065.809999999998, 
      55086.389999999999
    ], 
    "water_total_improved_piped": [
      57108.0, 
      57915.0, 
      58782.0, 
      60137.0, 
      61108.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_improved_total": [
      50765.0, 
      51659.0, 
      52636.0, 
      54066.0, 
      55086.0
    ], 
    "sanitation_total_unimproved_total": [
      0.5, 
      0.34000000000000002, 
      -0.58999999999999997, 
      -0.40999999999999998, 
      -0.089999999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_total_improved_total": [
      57237.0, 
      58042.0, 
      58908.0, 
      60261.0, 
      61231.0
    ], 
    "population_rural": [
      6472.4200000000001, 
      6383.5, 
      6271.8699999999999, 
      6194.79, 
      6144.5200000000004
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_other": [
      129.0, 
      127.0, 
      126.0, 
      124.0, 
      123.0
    ], 
    "water_total_unimproved": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_total": [
      57237.5, 
      58042.339999999997, 
      58907.410000000003, 
      60260.589999999997, 
      61230.910000000003
    ], 
    "sanitation_rural_unimproved_total": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_rural_improved_piped": [
      6343.0, 
      6256.0, 
      6146.0, 
      6071.0, 
      6022.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_improved": [
      50765.080000000002, 
      51658.839999999997, 
      52635.540000000001, 
      54065.809999999998, 
      55086.389999999999
    ], 
    "water_urban_improved_piped": [
      50765.0, 
      51659.0, 
      52636.0, 
      54066.0, 
      55086.0
    ]
  }, 
  "Congo": {
    "water_rural_unimproved": [
      -1.0, 
      -1.0, 
      835.0, 
      898.0, 
      923.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      -1.0, 
      430.0, 
      463.0, 
      475.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      -1.0, 
      921.0, 
      1069.0, 
      1153.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      548.79999999999995, 
      637.33000000000004, 
      687.27999999999997
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      -1.0, 
      366.91000000000003, 
      394.62, 
      405.45999999999998
    ], 
    "water_total_improved_other": [
      -1.0, 
      -1.0, 
      1313.0, 
      1491.0, 
      1586.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      -1.0, 
      916.0, 
      1032.0, 
      1092.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      -1.0, 
      637.30999999999995, 
      740.13, 
      798.13
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      263.0, 
      286.0, 
      296.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      202.43000000000001, 
      217.72, 
      223.69999999999999
    ], 
    "population_urban": [
      1329.03, 
      1569.6300000000001, 
      1770.3099999999999, 
      2055.9000000000001, 
      2217.0300000000002
    ], 
    "water_total_improved_piped": [
      -1.0, 
      -1.0, 
      799.0, 
      925.0, 
      995.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      35.409999999999997, 
      41.119999999999997, 
      44.340000000000003
    ], 
    "water_urban_improved_total": [
      -1.0, 
      -1.0, 
      1682.0, 
      1953.0, 
      2106.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      -1.0, 
      2119.5100000000002, 
      2384.6500000000001, 
      2523.1500000000001
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      -1.0, 
      468.12, 
      503.48000000000002, 
      517.30999999999995
    ], 
    "water_total_improved_total": [
      -1.0, 
      -1.0, 
      2112.0, 
      2416.0, 
      2581.0
    ], 
    "population_rural": [
      1117.46, 
      1212.76, 
      1265.2, 
      1360.75, 
      1398.1199999999999
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      751.0, 
      855.0, 
      911.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      -1.0, 
      88.0, 
      103.0, 
      111.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      -1.0, 
      1221.51, 
      1418.5699999999999, 
      1529.75
    ], 
    "water_rural_improved_other": [
      -1.0, 
      -1.0, 
      392.0, 
      422.0, 
      433.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      -1.0, 
      923.0, 
      1001.0, 
      1034.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      -1.0, 
      227.74000000000001, 
      244.94, 
      251.66
    ], 
    "population_total": [
      2446.48, 
      2782.4000000000001, 
      3035.5100000000002, 
      3416.6500000000001, 
      3615.1500000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      -1.0, 
      898.28999999999996, 
      966.13, 
      992.65999999999997
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      -1.0, 
      38.0, 
      41.0, 
      42.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      -1.0, 
      1105.0, 
      1243.0, 
      1315.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      -1.0, 
      548.79999999999995, 
      637.33000000000004, 
      687.27999999999997
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      -1.0, 
      761.0, 
      884.0, 
      953.0
    ]
  }, 
  "Greece": {
    "water_rural_unimproved": [
      335.0, 
      217.0, 
      88.0, 
      44.0, 
      43.0
    ], 
    "water_rural_improved_total": [
      3847.0, 
      4128.0, 
      4318.0, 
      4342.0, 
      4307.0
    ], 
    "water_urban_improved_other": [
      0.0, 
      63.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "sanitation_rural_improved": [
      3847.2199999999998, 
      4084.25, 
      4229.5799999999999, 
      4254.1800000000003, 
      4219.5100000000002
    ], 
    "water_total_improved_other": [
      418.0, 
      324.0, 
      132.0, 
      0.0, 
      0.0
    ], 
    "sanitation_total_improved": [
      9826.0, 
      10348.0, 
      10701.0, 
      10865.0, 
      10939.0
    ], 
    "continent": "Europe", 
    "sanitation_urban_unimproved_other": [
      0.0, 
      63.270000000000003, 
      65.359999999999999, 
      66.780000000000001, 
      67.870000000000005
    ], 
    "sanitation_total_unimproved_opendefecation": [
      335.0, 
      261.0, 
      176.0, 
      88.0, 
      87.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "population_urban": [
      5978.7399999999998, 
      6327.1800000000003, 
      6536.5, 
      6677.9200000000001, 
      6787.0200000000004
    ], 
    "water_total_improved_piped": [
      9348.0, 
      10131.0, 
      10722.0, 
      11020.0, 
      11094.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      5919.0, 
      6327.0, 
      6536.0, 
      6678.0, 
      6787.0
    ], 
    "sanitation_total_unimproved_total": [
      334.5, 
      324.12, 
      241.31, 
      198.66999999999999, 
      198.03
    ], 
    "sanitation_rural_unimproved_other": [
      0.0, 
      0.0, 
      0.0, 
      43.859999999999999, 
      43.5
    ], 
    "water_total_improved_total": [
      9766.0, 
      10455.0, 
      10854.0, 
      11020.0, 
      11094.0
    ], 
    "population_rural": [
      4181.7600000000002, 
      4344.9399999999996, 
      4405.8100000000004, 
      4385.75, 
      4350.0100000000002
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0, 
      -1.0
    ], 
    "water_urban_unimproved": [
      60.0, 
      0.0, 
      0.0, 
      0.0, 
      0.0
    ], 
    "sanitation_urban_unimproved_total": [
      0.0, 
      63.270000000000003, 
      65.370000000000005, 
      66.780000000000001, 
      67.870000000000005
    ], 
    "water_rural_improved_other": [
      418.0, 
      261.0, 
      132.0, 
      0.0, 
      0.0
    ], 
    "water_total_unimproved": [
      395.0, 
      217.0, 
      88.0, 
      44.0, 
      43.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      334.54000000000002, 
      260.69999999999999, 
      176.22999999999999, 
      87.709999999999994, 
      87.0
    ], 
    "population_total": [
      10160.5, 
      10672.120000000001, 
      10942.309999999999, 
      11063.67, 
      11137.030000000001
    ], 
    "sanitation_rural_unimproved_total": [
      334.54000000000002, 
      260.69, 
      176.22999999999999, 
      131.56999999999999, 
      130.5
    ], 
    "water_rural_improved_piped": [
      3429.0, 
      3867.0, 
      4186.0, 
      4342.0, 
      4307.0
    ], 
    "sanitation_total_unimproved_other": [
      0.0, 
      63.0, 
      65.0, 
      111.0, 
      112.0
    ], 
    "sanitation_urban_improved": [
      5978.7399999999998, 
      6263.9099999999999, 
      6471.1300000000001, 
      6611.1400000000003, 
      6719.1499999999996
    ], 
    "water_urban_improved_piped": [
      5919.0, 
      6264.0, 
      6536.0, 
      6678.0, 
      6787.0
    ]
  }, 
  "Sri Lanka": {
    "water_rural_unimproved": [
      5441.0, 
      4723.0, 
      3638.0, 
      2652.0, 
      2044.0
    ], 
    "water_rural_improved_total": [
      8876.0, 
      10513.0, 
      12181.0, 
      13922.0, 
      14994.0
    ], 
    "water_urban_improved_other": [
      1606.0, 
      1439.0, 
      1238.0, 
      1094.0, 
      997.0
    ], 
    "sanitation_urban_unimproved_shared": [
      208.15000000000001, 
      209.83000000000001, 
      206.37, 
      207.0, 
      211.56
    ], 
    "sanitation_rural_improved": [
      9592.2199999999993, 
      11274.52, 
      12813.360000000001, 
      14584.76, 
      15675.24
    ], 
    "water_total_improved_other": [
      9623.0, 
      10428.0, 
      11046.0, 
      11867.0, 
      12243.0
    ], 
    "sanitation_total_improved": [
      12120.0, 
      13853.0, 
      15378.0, 
      17158.0, 
      18335.0
    ], 
    "continent": "Asia", 
    "sanitation_urban_unimproved_other": [
      118.94, 
      119.90000000000001, 
      88.439999999999998, 
      118.29000000000001, 
      90.670000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      2410.0, 
      1918.0, 
      1354.0, 
      556.0, 
      230.0
    ], 
    "sanitation_rural_unimproved_shared": [
      286.32999999999998, 
      457.07999999999998, 
      474.56999999999999, 
      497.20999999999998, 
      511.14999999999998
    ], 
    "population_urban": [
      2973.5900000000001, 
      2997.5700000000002, 
      2948.1199999999999, 
      2957.1500000000001, 
      3022.3400000000001
    ], 
    "water_total_improved_piped": [
      1959.0, 
      2873.0, 
      3936.0, 
      4923.0, 
      5713.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      118.94, 
      89.930000000000007, 
      88.439999999999998, 
      59.140000000000001, 
      60.450000000000003
    ], 
    "water_urban_improved_total": [
      2706.0, 
      2788.0, 
      2801.0, 
      2868.0, 
      2962.0
    ], 
    "sanitation_total_unimproved_total": [
      5170.3299999999999, 
      4380.4200000000001, 
      3389.0900000000001, 
      2372.7399999999998, 
      1725.6400000000001
    ], 
    "sanitation_rural_unimproved_other": [
      2147.5100000000002, 
      1675.9400000000001, 
      1265.52, 
      994.41999999999996, 
      681.52999999999997
    ], 
    "water_total_improved_total": [
      11582.0, 
      13301.0, 
      14982.0, 
      16790.0, 
      17956.0
    ], 
    "population_rural": [
      14316.74, 
      15235.84, 
      15818.969999999999, 
      16573.59, 
      17038.299999999999
    ], 
    "sanitation_total_unimproved_shared": [
      494.0, 
      667.0, 
      681.0, 
      704.0, 
      723.0
    ], 
    "water_urban_unimproved": [
      268.0, 
      210.0, 
      147.0, 
      89.0, 
      60.0
    ], 
    "sanitation_urban_unimproved_total": [
      446.04000000000002, 
      419.66000000000003, 
      383.25, 
      384.43000000000001, 
      362.68000000000001
    ], 
    "water_rural_improved_other": [
      8017.0, 
      8989.0, 
      9808.0, 
      10773.0, 
      11246.0
    ], 
    "water_total_unimproved": [
      5709.0, 
      4933.0, 
      3785.0, 
      2741.0, 
      2104.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      2290.6799999999998, 
      1828.3, 
      1265.52, 
      497.20999999999998, 
      170.38
    ], 
    "population_total": [
      17290.330000000002, 
      18233.419999999998, 
      18767.09, 
      19530.740000000002, 
      20060.639999999999
    ], 
    "sanitation_rural_unimproved_total": [
      4724.5200000000004, 
      3961.3200000000002, 
      3005.6100000000001, 
      1988.8299999999999, 
      1363.0599999999999
    ], 
    "water_rural_improved_piped": [
      859.0, 
      1524.0, 
      2373.0, 
      3149.0, 
      3748.0
    ], 
    "sanitation_total_unimproved_other": [
      2267.0, 
      1796.0, 
      1354.0, 
      1112.0, 
      773.0
    ], 
    "sanitation_urban_improved": [
      2527.5500000000002, 
      2577.9099999999999, 
      2564.8699999999999, 
      2572.7199999999998, 
      2659.6599999999999
    ], 
    "water_urban_improved_piped": [
      1100.0, 
      1349.0, 
      1563.0, 
      1774.0, 
      1965.0
    ]
  }, 
  "Gabon": {
    "water_rural_unimproved": [
      -1.0, 
      136.0, 
      130.0, 
      128.0, 
      127.0
    ], 
    "water_rural_improved_total": [
      -1.0, 
      131.0, 
      115.0, 
      97.0, 
      88.0
    ], 
    "water_urban_improved_other": [
      -1.0, 
      343.0, 
      425.0, 
      515.0, 
      568.0
    ], 
    "sanitation_urban_unimproved_shared": [
      -1.0, 
      335.06999999999999, 
      395.41000000000003, 
      423.51999999999998, 
      443.98000000000002
    ], 
    "sanitation_rural_improved": [
      -1.0, 
      77.489999999999995, 
      73.459999999999994, 
      67.370000000000005, 
      64.459999999999994
    ], 
    "water_total_improved_other": [
      -1.0, 
      453.0, 
      520.0, 
      590.0, 
      635.0
    ], 
    "sanitation_total_improved": [
      -1.0, 
      388.0, 
      439.0, 
      456.0, 
      471.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      -1.0, 
      147.11000000000001, 
      207.59, 
      320.50999999999999, 
      369.98000000000002
    ], 
    "sanitation_total_unimproved_opendefecation": [
      -1.0, 
      41.0, 
      32.0, 
      18.0, 
      16.0
    ], 
    "sanitation_rural_unimproved_shared": [
      -1.0, 
      64.129999999999995, 
      58.770000000000003, 
      56.140000000000001, 
      53.719999999999999
    ], 
    "population_urban": [
      640.53999999999996, 
      817.25, 
      988.52999999999997, 
      1144.6600000000001, 
      1233.28
    ], 
    "water_total_improved_piped": [
      -1.0, 
      454.0, 
      534.0, 
      594.0, 
      625.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      -1.0, 
      24.52, 
      19.77, 
      11.449999999999999, 
      12.33
    ], 
    "water_urban_improved_total": [
      -1.0, 
      776.0, 
      939.0, 
      1087.0, 
      1172.0
    ], 
    "sanitation_total_unimproved_total": [
      -1.0, 
      696.45000000000005, 
      794.40999999999997, 
      913.23000000000002, 
      977.15999999999997
    ], 
    "sanitation_rural_unimproved_other": [
      -1.0, 
      109.55, 
      100.40000000000001, 
      94.319999999999993, 
      92.400000000000006
    ], 
    "water_total_improved_total": [
      -1.0, 
      907.0, 
      1054.0, 
      1184.0, 
      1260.0
    ], 
    "population_rural": [
      285.86000000000001, 
      267.19999999999999, 
      244.88, 
      224.56999999999999, 
      214.88
    ], 
    "sanitation_total_unimproved_shared": [
      -1.0, 
      399.0, 
      454.0, 
      480.0, 
      498.0
    ], 
    "water_urban_unimproved": [
      -1.0, 
      41.0, 
      50.0, 
      58.0, 
      61.0
    ], 
    "sanitation_urban_unimproved_total": [
      -1.0, 
      506.69, 
      622.76999999999998, 
      755.47000000000003, 
      826.29999999999995
    ], 
    "water_rural_improved_other": [
      -1.0, 
      110.0, 
      95.0, 
      75.0, 
      67.0
    ], 
    "water_total_unimproved": [
      -1.0, 
      177.0, 
      180.0, 
      186.0, 
      188.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      -1.0, 
      16.030000000000001, 
      12.24, 
      6.7400000000000002, 
      4.2999999999999998
    ], 
    "population_total": [
      926.39999999999998, 
      1084.45, 
      1233.4100000000001, 
      1369.23, 
      1448.1600000000001
    ], 
    "sanitation_rural_unimproved_total": [
      -1.0, 
      189.71000000000001, 
      171.41999999999999, 
      157.19999999999999, 
      150.41999999999999
    ], 
    "water_rural_improved_piped": [
      -1.0, 
      21.0, 
      20.0, 
      22.0, 
      21.0
    ], 
    "sanitation_total_unimproved_other": [
      -1.0, 
      257.0, 
      308.0, 
      415.0, 
      462.0
    ], 
    "sanitation_urban_improved": [
      -1.0, 
      310.56, 
      365.75999999999999, 
      389.19, 
      406.98000000000002
    ], 
    "water_urban_improved_piped": [
      -1.0, 
      433.0, 
      514.0, 
      572.0, 
      604.0
    ]
  }, 
  "Comoros": {
    "water_rural_unimproved": [
      54.0, 
      46.0, 
      32.0, 
      18.0, 
      14.0
    ], 
    "water_rural_improved_total": [
      262.0, 
      308.0, 
      365.0, 
      427.0, 
      462.0
    ], 
    "water_urban_improved_other": [
      82.0, 
      81.0, 
      74.0, 
      67.0, 
      70.0
    ], 
    "sanitation_urban_unimproved_shared": [
      2.4399999999999999, 
      2.79, 
      3.1000000000000001, 
      5.1600000000000001, 
      5.5499999999999998
    ], 
    "sanitation_rural_improved": [
      34.740000000000002, 
      60.149999999999999, 
      91.310000000000002, 
      128.91999999999999, 
      142.74000000000001
    ], 
    "water_total_improved_other": [
      312.0, 
      339.0, 
      372.0, 
      405.0, 
      432.0
    ], 
    "sanitation_total_improved": [
      76.0, 
      110.0, 
      156.0, 
      213.0, 
      235.0
    ], 
    "continent": "Africa", 
    "sanitation_urban_unimproved_other": [
      78.090000000000003, 
      86.590000000000003, 
      86.799999999999997, 
      80.799999999999997, 
      85.069999999999993
    ], 
    "sanitation_total_unimproved_opendefecation": [
      6.0, 
      4.0, 
      4.0, 
      2.0, 
      2.0
    ], 
    "sanitation_rural_unimproved_shared": [
      3.1600000000000001, 
      3.54, 
      7.9400000000000004, 
      8.8900000000000006, 
      9.5199999999999996
    ], 
    "population_urban": [
      122.02, 
      139.66999999999999, 
      155.0, 
      171.91, 
      184.93000000000001
    ], 
    "water_total_improved_piped": [
      70.0, 
      103.0, 
      137.0, 
      178.0, 
      198.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      0.0, 
      0.0, 
      0.0, 
      1.72, 
      1.8500000000000001
    ], 
    "water_urban_improved_total": [
      120.0, 
      134.0, 
      144.0, 
      156.0, 
      168.0
    ], 
    "sanitation_total_unimproved_total": [
      361.81999999999999, 
      383.5, 
      396.0, 
      403.45999999999998, 
      425.72000000000003
    ], 
    "sanitation_rural_unimproved_other": [
      271.58999999999997, 
      286.60000000000002, 
      293.77999999999997, 
      306.74000000000001, 
      323.54000000000002
    ], 
    "water_total_improved_total": [
      382.0, 
      442.0, 
      509.0, 
      583.0, 
      630.0
    ], 
    "population_rural": [
      315.80000000000001, 
      353.82999999999998, 
      397.0, 
      444.56, 
      475.79000000000002
    ], 
    "sanitation_total_unimproved_shared": [
      5.0, 
      7.0, 
      11.0, 
      14.0, 
      16.0
    ], 
    "water_urban_unimproved": [
      2.0, 
      6.0, 
      11.0, 
      16.0, 
      17.0
    ], 
    "sanitation_urban_unimproved_total": [
      80.530000000000001, 
      89.390000000000001, 
      89.900000000000006, 
      87.680000000000007, 
      92.469999999999999
    ], 
    "water_rural_improved_other": [
      230.0, 
      258.0, 
      298.0, 
      338.0, 
      362.0
    ], 
    "water_total_unimproved": [
      56.0, 
      52.0, 
      43.0, 
      34.0, 
      31.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      6.3200000000000003, 
      3.54, 
      3.9700000000000002, 
      0.0, 
      0.0
    ], 
    "population_total": [
      437.81999999999999, 
      493.5, 
      552.0, 
      616.46000000000004, 
      660.72000000000003
    ], 
    "sanitation_rural_unimproved_total": [
      281.06, 
      293.68000000000001, 
      305.69, 
      315.63999999999999, 
      333.05000000000001
    ], 
    "water_rural_improved_piped": [
      32.0, 
      50.0, 
      67.0, 
      89.0, 
      100.0
    ], 
    "sanitation_total_unimproved_other": [
      350.0, 
      374.0, 
      381.0, 
      388.0, 
      409.0
    ], 
    "sanitation_urban_improved": [
      41.490000000000002, 
      50.280000000000001, 
      65.099999999999994, 
      84.230000000000004, 
      92.459999999999994
    ], 
    "water_urban_improved_piped": [
      38.0, 
      53.0, 
      70.0, 
      89.0, 
      98.0
    ]
  }
};
var continents = {
  "Europe": {
    "water_rural_unimproved": [
      8573.0, 
      9470.0, 
      7717.0, 
      5749.0, 
      5353.0
    ], 
    "water_rural_improved_total": [
      157306.0, 
      181009.0, 
      188250.0, 
      187590.0, 
      186117.0
    ], 
    "water_urban_improved_other": [
      24733.0, 
      15257.0, 
      18594.0, 
      16952.0, 
      17071.0
    ], 
    "sanitation_urban_unimproved_shared": [
      1059.2, 
      1699.3200000000002, 
      2306.6399999999999, 
      2261.5299999999997, 
      2247.23
    ], 
    "sanitation_rural_improved": [
      137958.67000000004, 
      146597.21000000002, 
      164038.34, 
      161429.84, 
      159636.01000000001
    ], 
    "water_total_improved_other": [
      53274.0, 
      55505.0, 
      55076.0, 
      55874.0, 
      58291.0
    ], 
    "sanitation_total_improved": [
      548789.0, 
      577135.0, 
      629322.0, 
      631672.0, 
      633482.0
    ], 
    "sanitation_urban_unimproved_other": [
      10044.650000000001, 
      10229.91, 
      10374.520000000002, 
      10080.360000000001, 
      9943.3000000000011
    ], 
    "sanitation_total_unimproved_opendefecation": [
      1055.0, 
      760.0, 
      470.0, 
      205.0, 
      115.0
    ], 
    "sanitation_rural_unimproved_shared": [
      845.53999999999996, 
      983.40999999999985, 
      1314.8500000000001, 
      1252.28, 
      1225.4799999999998
    ], 
    "population_urban": [
      508335.49000000005, 
      516527.7900000001, 
      518816.49999999994, 
      524572.29000000015, 
      528865.2300000001
    ], 
    "water_total_improved_piped": [
      555078.0, 
      622682.0, 
      649084.0, 
      649086.0, 
      643640.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      95.629999999999995, 
      64.97999999999999, 
      55.630000000000003, 
      0.0, 
      0.0
    ], 
    "water_urban_improved_total": [
      475294.0, 
      489331.0, 
      501937.0, 
      508036.0, 
      512111.0
    ], 
    "sanitation_total_unimproved_total": [
      29991.860000000004, 
      30801.280000000002, 
      36241.87999999999, 
      35285.369999999995, 
      34752.879999999997
    ], 
    "sanitation_rural_unimproved_other": [
      17919.919999999998, 
      18074.93, 
      21773.630000000005, 
      21481.969999999998, 
      21215.549999999999
    ], 
    "water_total_improved_total": [
      597282.0, 
      670309.0, 
      690155.0, 
      695594.0, 
      698195.0
    ], 
    "population_rural": [
      212336.61000000004, 
      210514.09, 
      207419.73000000001, 
      204504.89000000004, 
      202355.91
    ], 
    "sanitation_total_unimproved_shared": [
      1905.0, 
      2682.0, 
      3621.0, 
      3513.0, 
      3472.0
    ], 
    "water_urban_unimproved": [
      2820.0, 
      2755.0, 
      2667.0, 
      2621.0, 
      2925.0
    ], 
    "sanitation_urban_unimproved_total": [
      11199.480000000001, 
      11994.240000000002, 
      12736.780000000001, 
      12341.9, 
      12190.530000000004
    ], 
    "water_rural_improved_other": [
      30631.0, 
      40248.0, 
      36482.0, 
      38922.0, 
      41220.0
    ], 
    "water_total_unimproved": [
      11049.0, 
      12225.0, 
      10384.0, 
      8370.0, 
      8278.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      958.26999999999998, 
      694.00999999999999, 
      413.94, 
      205.88999999999999, 
      115.17
    ], 
    "population_total": [
      720672.07000000018, 
      727041.80999999994, 
      726236.25000000023, 
      729077.15000000014, 
      731221.06999999995
    ], 
    "sanitation_rural_unimproved_total": [
      19723.740000000002, 
      19752.359999999997, 
      23502.400000000001, 
      22940.140000000007, 
      22556.229999999996
    ], 
    "water_rural_improved_piped": [
      129623.0, 
      144412.0, 
      154051.0, 
      151524.0, 
      147441.0
    ], 
    "sanitation_total_unimproved_other": [
      27029.0, 
      27357.0, 
      32148.0, 
      31564.0, 
      31160.0
    ], 
    "sanitation_urban_improved": [
      433275.94000000006, 
      453351.25000000006, 
      465314.96999999986, 
      470274.01000000001, 
      473882.51000000001
    ], 
    "water_urban_improved_piped": [
      466251.0, 
      489887.0, 
      495921.0, 
      503649.0, 
      505574.0
    ]
  }, 
  "Oceania": {
    "water_rural_unimproved": [
      2508.0, 
      2971.0, 
      3404.0, 
      3809.0, 
      3894.0
    ], 
    "water_rural_improved_total": [
      4536.5900000000001, 
      5084.4499999999998, 
      5312.25, 
      5614.04, 
      5242.9099999999999
    ], 
    "water_urban_improved_other": [
      15325.709999999999, 
      16305.67, 
      17481.639999999999, 
      18581.599999999999, 
      19313.610000000001
    ], 
    "sanitation_urban_unimproved_shared": [
      5.1299999999999999, 
      13.9, 
      17.66, 
      24.939999999999998, 
      24.039999999999999
    ], 
    "sanitation_rural_improved": [
      4778.7300000000005, 
      5166.8700000000008, 
      4937.4500000000007, 
      5207.0700000000006, 
      5205.79
    ], 
    "water_total_improved_other": [
      18791.299999999999, 
      20186.119999999999, 
      21548.889999999999, 
      23126.639999999999, 
      23564.52
    ], 
    "sanitation_total_improved": [
      19773.299999999999, 
      21293.119999999999, 
      22723.889999999999, 
      24370.639999999999, 
      24928.52
    ], 
    "sanitation_urban_unimproved_other": [
      173.16, 
      185.95999999999998, 
      197.18000000000001, 
      198.06999999999999, 
      209.44
    ], 
    "sanitation_total_unimproved_opendefecation": [
      621.0, 
      709.0, 
      869.0, 
      1060.0, 
      1091.0
    ], 
    "sanitation_rural_unimproved_shared": [
      2.4300000000000002, 
      13.75, 
      17.780000000000001, 
      22.93, 
      25.219999999999999
    ], 
    "population_urban": [
      18896.640000000003, 
      20332.880000000001, 
      21757.959999999995, 
      23430.490000000005, 
      24382.060000000001
    ], 
    "water_total_improved_piped": [
      4168.0, 
      4904.0, 
      5146.0, 
      5500.0, 
      5245.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      28.890000000000001, 
      31.420000000000002, 
      43.270000000000003, 
      58.089999999999996, 
      42.910000000000004
    ], 
    "water_urban_improved_total": [
      18714.709999999999, 
      20204.669999999998, 
      21606.639999999999, 
      22878.599999999999, 
      23629.610000000001
    ], 
    "sanitation_total_unimproved_total": [
      2337.3500000000004, 
      3035.4299999999998, 
      3467.2200000000003, 
      3926.4699999999998, 
      3773.0599999999999
    ], 
    "sanitation_rural_unimproved_other": [
      1622.2800000000002, 
      2198.25, 
      2378.9200000000001, 
      2626.3200000000002, 
      2431.3400000000001
    ], 
    "water_total_improved_total": [
      22959.299999999999, 
      24949.119999999999, 
      26542.889999999999, 
      28467.639999999999, 
      28809.52
    ], 
    "population_rural": [
      7810.9099999999989, 
      8474.6899999999987, 
      9128.7899999999991, 
      9831.2099999999991, 
      10242.48
    ], 
    "sanitation_total_unimproved_shared": [
      8.0, 
      28.0, 
      35.0, 
      46.0, 
      47.0
    ], 
    "water_urban_unimproved": [
      108.0, 
      118.0, 
      138.0, 
      131.0, 
      117.0
    ], 
    "sanitation_urban_unimproved_total": [
      207.18000000000001, 
      231.26999999999998, 
      258.10000000000002, 
      281.07999999999998, 
      276.38999999999999
    ], 
    "water_rural_improved_other": [
      3746.5900000000001, 
      4097.4499999999998, 
      4307.25, 
      4557.0, 
      4301.9099999999999
    ], 
    "water_total_unimproved": [
      2591.0, 
      3065.0, 
      3514.0, 
      3939.0, 
      4009.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      592.76999999999998, 
      677.44999999999993, 
      826.36000000000001, 
      1000.8299999999999, 
      1049.01
    ], 
    "population_total": [
      26707.520000000004, 
      28807.609999999993, 
      30886.739999999998, 
      33261.69999999999, 
      34624.529999999999
    ], 
    "sanitation_rural_unimproved_total": [
      2217.4899999999998, 
      2889.2600000000002, 
      3223.0300000000002, 
      3650.0599999999999, 
      3505.5999999999999
    ], 
    "water_rural_improved_piped": [
      790.0, 
      1016.0, 
      1034.0, 
      1086.04, 
      941.0
    ], 
    "sanitation_total_unimproved_other": [
      1708.0, 
      2295.0, 
      2557.0, 
      2824.0, 
      2635.0
    ], 
    "sanitation_urban_improved": [
      15783.309999999999, 
      16946.84, 
      18175.659999999996, 
      19184.860000000001, 
      19850.709999999999
    ], 
    "water_urban_improved_piped": [
      3422.0, 
      3899.0, 
      4125.0, 
      4432.0, 
      4316.0
    ]
  }, 
  "Africa": {
    "water_rural_unimproved": [
      242843.0, 
      262958.0, 
      273573.0, 
      280468.0, 
      284725.0
    ], 
    "water_rural_improved_total": [
      172931.0, 
      205362.0, 
      241799.0, 
      280559.0, 
      304826.0
    ], 
    "water_urban_improved_other": [
      63009.0, 
      82084.0, 
      104142.0, 
      127836.0, 
      145518.0
    ], 
    "sanitation_urban_unimproved_shared": [
      38162.209999999992, 
      49410.359999999993, 
      61719.329999999994, 
      76338.500000000029, 
      86087.26999999999
    ], 
    "sanitation_rural_improved": [
      107970.11000000002, 
      127189.33000000002, 
      150161.89000000001, 
      174405.94999999998, 
      187314.49999999997
    ], 
    "water_total_improved_other": [
      200721.0, 
      243933.0, 
      291810.0, 
      341178.0, 
      375377.0
    ], 
    "sanitation_total_improved": [
      220010.0, 
      263808.0, 
      311963.0, 
      364875.0, 
      396833.0
    ], 
    "sanitation_urban_unimproved_other": [
      28299.669999999998, 
      35865.810000000005, 
      44751.349999999991, 
      55021.809999999998, 
      61550.200000000019
    ], 
    "sanitation_total_unimproved_opendefecation": [
      198217.0, 
      217789.0, 
      223241.0, 
      224538.0, 
      227753.0
    ], 
    "sanitation_rural_unimproved_shared": [
      34679.699999999997, 
      42390.189999999995, 
      49907.470000000016, 
      60199.290000000001, 
      65591.259999999995
    ], 
    "population_urban": [
      201764.27000000002, 
      244175.00000000003, 
      290667.95999999996, 
      345122.46999999997, 
      382123.77000000008
    ], 
    "water_total_improved_piped": [
      139628.0, 
      167059.0, 
      196471.0, 
      229703.0, 
      249924.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      16600.179999999997, 
      20443.369999999999, 
      22090.300000000003, 
      23223.250000000004, 
      24255.969999999998
    ], 
    "water_urban_improved_total": [
      167657.0, 
      205630.0, 
      246517.0, 
      290363.0, 
      320522.0
    ], 
    "sanitation_total_unimproved_total": [
      389578.88, 
      446855.40999999992, 
      493770.12999999995, 
      542236.75000000012, 
      575545.68000000005
    ], 
    "sanitation_rural_unimproved_other": [
      90223.339999999997, 
      101398.73999999999, 
      114149.22999999998, 
      126471.28999999996, 
      134561.06
    ], 
    "water_total_improved_total": [
      340316.0, 
      410992.0, 
      488281.0, 
      570881.0, 
      625301.0
    ], 
    "population_rural": [
      425801.71000000014, 
      469605.56000000006, 
      515461.60000000009, 
      562512.39000000013, 
      591494.65000000026
    ], 
    "sanitation_total_unimproved_shared": [
      72839.0, 
      91800.0, 
      111628.0, 
      136541.0, 
      151673.0
    ], 
    "water_urban_unimproved": [
      27788.0, 
      36711.0, 
      43887.0, 
      49840.0, 
      56058.0
    ], 
    "sanitation_urban_unimproved_total": [
      83062.130000000005, 
      105719.63000000003, 
      128561.01000000002, 
      154254.62999999998, 
      171893.45999999993
    ], 
    "water_rural_improved_other": [
      137984.0, 
      161849.0, 
      187668.0, 
      213342.0, 
      229859.0
    ], 
    "water_total_unimproved": [
      270168.0, 
      299669.0, 
      317454.0, 
      330305.0, 
      340783.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      181615.37999999998, 
      197343.29000000001, 
      201152.41, 
      201312.34000000003, 
      203498.69999999995
    ], 
    "population_total": [
      627565.91999999993, 
      713780.54000000004, 
      806129.57000000007, 
      907634.81000000029, 
      973618.45999999996
    ], 
    "sanitation_rural_unimproved_total": [
      306518.43000000005, 
      341132.2300000001, 
      365209.10999999999, 
      387982.91000000009, 
      403651.05999999994
    ], 
    "water_rural_improved_piped": [
      34947.0, 
      43513.0, 
      54131.0, 
      67217.0, 
      74967.0
    ], 
    "sanitation_total_unimproved_other": [
      118525.0, 
      137265.0, 
      158901.0, 
      181163.0, 
      196113.0
    ], 
    "sanitation_urban_improved": [
      112038.28000000001, 
      136622.26000000001, 
      161842.52000000002, 
      190511.99999999997, 
      209566.72000000003
    ], 
    "water_urban_improved_piped": [
      104681.0, 
      123546.0, 
      142375.0, 
      162527.0, 
      175004.0
    ]
  }, 
  "Asia": {
    "water_rural_unimproved": [
      761313.0, 
      708091.0, 
      603149.0, 
      477597.0, 
      411943.0
    ], 
    "water_rural_improved_total": [
      1357624.0, 
      1553987.0, 
      1721209.0, 
      1867099.0, 
      1947098.0
    ], 
    "water_urban_improved_other": [
      258104.0, 
      264995.0, 
      302304.0, 
      341931.0, 
      375416.0
    ], 
    "sanitation_urban_unimproved_shared": [
      140564.48999999999, 
      180277.32999999996, 
      220753.95000000001, 
      267897.76000000001, 
      294956.47999999998
    ], 
    "sanitation_rural_improved": [
      622076.15000000014, 
      752644.25000000023, 
      866821.58000000019, 
      948978.18999999994, 
      1010503.0599999999
    ], 
    "water_total_improved_other": [
      1103814.0, 
      1194450.0, 
      1311294.0, 
      1416641.0, 
      1498036.0
    ], 
    "sanitation_total_improved": [
      1215033.0, 
      1507379.0, 
      1757718.0, 
      1940801.0, 
      2078473.0
    ], 
    "sanitation_urban_unimproved_other": [
      110872.45000000001, 
      120895.25, 
      116177.46000000001, 
      85126.939999999988, 
      93422.299999999974
    ], 
    "sanitation_total_unimproved_opendefecation": [
      972648.0, 
      987597.0, 
      957552.0, 
      904177.0, 
      856408.0
    ], 
    "sanitation_rural_unimproved_shared": [
      87485.179999999978, 
      103304.71000000001, 
      129754.06000000004, 
      153561.57999999999, 
      158998.41
    ], 
    "population_urban": [
      1007571.8600000001, 
      1178110.6799999999, 
      1362462.8199999998, 
      1556395.3800000001, 
      1678254.6899999999
    ], 
    "water_total_improved_piped": [
      1161795.0, 
      1468970.0, 
      1687522.0, 
      1871321.0, 
      1979097.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      92646.460000000006, 
      103389.14999999999, 
      113187.83000000002, 
      123571.75, 
      125024.92
    ], 
    "water_urban_improved_total": [
      946848.0, 
      1113424.0, 
      1298315.0, 
      1490739.0, 
      1610529.0
    ], 
    "sanitation_total_unimproved_total": [
      1809479.9099999999, 
      1910066.7699999993, 
      1907660.7000000011, 
      1862476.48, 
      1854235.51
    ], 
    "sanitation_rural_unimproved_other": [
      498325.47999999998, 
      518023.46000000014, 
      483421.28000000003, 
      451765.46999999991, 
      450505.49999999994
    ], 
    "water_total_improved_total": [
      2263175.0, 
      2663420.0, 
      2998816.0, 
      3287962.0, 
      3480781.0
    ], 
    "population_rural": [
      2165161.8200000008, 
      2263298.1400000006, 
      2328725.1500000013, 
      2372770.3000000012, 
      2389546.3399999999
    ], 
    "sanitation_total_unimproved_shared": [
      227759.0, 
      283582.0, 
      350507.0, 
      421459.0, 
      453955.0
    ], 
    "water_urban_unimproved": [
      53098.0, 
      64190.0, 
      63910.0, 
      65381.0, 
      67432.0
    ], 
    "sanitation_urban_unimproved_total": [
      344083.40999999986, 
      404561.75999999983, 
      450119.25999999995, 
      476596.52000000014, 
      513403.72999999998
    ], 
    "water_rural_improved_other": [
      849545.0, 
      929455.0, 
      1008990.0, 
      1075657.0, 
      1126001.0
    ], 
    "water_total_unimproved": [
      813352.0, 
      772281.0, 
      666560.0, 
      541458.0, 
      477679.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      880000.57999999996, 
      884210.73999999999, 
      844363.19999999995, 
      780609.67999999982, 
      731386.33000000042
    ], 
    "population_total": [
      3172733.6300000004, 
      3441408.8000000012, 
      3691187.9199999985, 
      3929165.6599999997, 
      4067800.9699999988
    ], 
    "sanitation_rural_unimproved_total": [
      1465811.2499999998, 
      1505538.9900000005, 
      1457538.5500000003, 
      1385936.7300000002, 
      1340890.2800000003
    ], 
    "water_rural_improved_piped": [
      509444.0, 
      624532.0, 
      712219.0, 
      791442.0, 
      821097.0
    ], 
    "sanitation_total_unimproved_other": [
      609077.0, 
      638886.0, 
      599601.0, 
      536841.0, 
      543867.0
    ], 
    "sanitation_urban_improved": [
      618997.14000000001, 
      773050.77999999991, 
      912106.30999999982, 
      1017667.1400000004, 
      1099426.5000000002
    ], 
    "water_urban_improved_piped": [
      688744.0, 
      848429.0, 
      996011.0, 
      1148808.0, 
      1235113.0
    ]
  }, 
  "North America": {
    "water_rural_unimproved": [
      23004.0, 
      20544.0, 
      18133.0, 
      15145.0, 
      13316.0
    ], 
    "water_rural_improved_total": [
      99724.0, 
      102929.0, 
      105270.0, 
      106504.0, 
      107221.0
    ], 
    "water_urban_improved_other": [
      13715.0, 
      14270.0, 
      15329.0, 
      16849.0, 
      16723.0
    ], 
    "sanitation_urban_unimproved_shared": [
      6462.1600000000008, 
      7438.7000000000007, 
      8922.2700000000004, 
      9753.1400000000012, 
      10171.610000000001
    ], 
    "sanitation_rural_improved": [
      90689.179999999993, 
      93984.529999999984, 
      96547.090000000026, 
      98383.87000000001, 
      99806.62999999999
    ], 
    "water_total_improved_other": [
      63083.0, 
      61206.0, 
      61550.0, 
      61695.0, 
      63221.0
    ], 
    "sanitation_total_improved": [
      374247.0, 
      407973.0, 
      441796.0, 
      472937.0, 
      492249.0
    ], 
    "sanitation_urban_unimproved_other": [
      4506.5900000000001, 
      4292.4500000000007, 
      4082.1100000000001, 
      4793.9900000000007, 
      4578.0
    ], 
    "sanitation_total_unimproved_opendefecation": [
      29496.0, 
      25917.0, 
      21259.0, 
      14722.0, 
      11045.0
    ], 
    "sanitation_rural_unimproved_shared": [
      3579.7800000000002, 
      4505.7099999999991, 
      5061.3999999999996, 
      5776.3499999999995, 
      5979.1700000000001
    ], 
    "population_urban": [
      305054.30000000005, 
      336341.69999999995, 
      368444.89999999997, 
      397615.19, 
      414960.37000000011
    ], 
    "water_total_improved_piped": [
      310756.0, 
      367561.0, 
      401327.0, 
      430980.0, 
      420214.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      6969.5300000000007, 
      6499.4099999999999, 
      5626.1300000000001, 
      3588.1700000000001, 
      2687.0599999999999
    ], 
    "water_urban_improved_total": [
      296387.0, 
      326382.0, 
      358176.0, 
      387407.0, 
      404287.0
    ], 
    "sanitation_total_unimproved_total": [
      50014.080000000002, 
      47617.659999999996, 
      45382.070000000007, 
      41347.310000000005, 
      38109.090000000004
    ], 
    "sanitation_rural_unimproved_other": [
      5977.2199999999993, 
      5515.4299999999994, 
      6105.5299999999997, 
      6348.1899999999996, 
      6385.1899999999996
    ], 
    "water_total_improved_total": [
      395136.0, 
      428855.0, 
      462968.0, 
      492706.0, 
      510270.0
    ], 
    "population_rural": [
      123965.20999999996, 
      123954.82999999996, 
      123615.56000000003, 
      121990.56, 
      120869.62999999999
    ], 
    "sanitation_total_unimproved_shared": [
      10042.0, 
      11946.0, 
      13983.0, 
      15529.0, 
      16148.0
    ], 
    "water_urban_unimproved": [
      5998.0, 
      6692.0, 
      6603.0, 
      6324.0, 
      6656.0
    ], 
    "sanitation_urban_unimproved_total": [
      17938.270000000004, 
      18230.550000000003, 
      18630.550000000003, 
      18135.310000000001, 
      17436.660000000003
    ], 
    "water_rural_improved_other": [
      49623.0, 
      46968.0, 
      46250.0, 
      45159.0, 
      46848.0
    ], 
    "water_total_unimproved": [
      28988.0, 
      27225.0, 
      24726.0, 
      21449.0, 
      19951.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      22525.25, 
      19417.140000000003, 
      15633.469999999998, 
      11132.449999999999, 
      8357.2199999999993
    ], 
    "population_total": [
      429019.44999999995, 
      460296.50999999995, 
      492060.42999999988, 
      519605.73999999999, 
      535829.98999999999
    ], 
    "sanitation_rural_unimproved_total": [
      32082.260000000002, 
      29438.290000000005, 
      26800.369999999995, 
      23256.969999999998, 
      20721.59
    ], 
    "water_rural_improved_piped": [
      50101.0, 
      55961.0, 
      59020.0, 
      61387.0, 
      60373.0
    ], 
    "sanitation_total_unimproved_other": [
      10481.0, 
      9752.0, 
      10137.0, 
      11094.0, 
      10915.0
    ], 
    "sanitation_urban_improved": [
      283675.87000000011, 
      314800.84000000008, 
      346109.75000000006, 
      375516.57999999996, 
      393423.67000000004
    ], 
    "water_urban_improved_piped": [
      282682.0, 
      312112.0, 
      342847.0, 
      370558.0, 
      387564.0
    ]
  }, 
  "South America": {
    "water_rural_unimproved": [
      28695.0, 
      24918.0, 
      20903.0, 
      16592.0, 
      14396.0
    ], 
    "water_rural_improved_total": [
      45935.0, 
      49178.0, 
      50361.0, 
      51002.0, 
      49307.0
    ], 
    "water_urban_improved_other": [
      15830.0, 
      16726.0, 
      14351.0, 
      13676.0, 
      14340.0
    ], 
    "sanitation_urban_unimproved_shared": [
      5983.25, 
      6935.5300000000007, 
      7985.4900000000007, 
      9510.3099999999995, 
      10152.470000000001
    ], 
    "sanitation_rural_improved": [
      27350.279999999995, 
      29191.429999999997, 
      30306.439999999995, 
      30819.540000000001, 
      29467.619999999995
    ], 
    "water_total_improved_other": [
      36856.0, 
      36551.0, 
      31665.0, 
      29184.0, 
      28453.0
    ], 
    "sanitation_total_improved": [
      207697.0, 
      235020.0, 
      264245.0, 
      292728.0, 
      282047.0
    ], 
    "sanitation_urban_unimproved_other": [
      22681.529999999995, 
      23956.760000000002, 
      23966.900000000001, 
      24395.5, 
      23733.750000000004
    ], 
    "sanitation_total_unimproved_opendefecation": [
      40919.0, 
      37497.0, 
      32804.0, 
      26311.0, 
      21891.0
    ], 
    "sanitation_rural_unimproved_shared": [
      881.13999999999987, 
      1141.9199999999998, 
      1359.23, 
      1578.3599999999997, 
      1625.77
    ], 
    "population_urban": [
      220243.64000000001, 
      247524.20999999999, 
      276140.02000000002, 
      304010.40999999997, 
      319289.57000000001
    ], 
    "water_total_improved_piped": [
      218065.0, 
      250474.0, 
      285075.0, 
      317198.0, 
      308204.0
    ], 
    "sanitation_urban_unimproved_opendefecation": [
      10674.670000000002, 
      10805.380000000001, 
      10249.800000000001, 
      8043.71, 
      6379.2099999999991
    ], 
    "water_urban_improved_total": [
      209261.0, 
      237847.0, 
      266379.0, 
      295380.0, 
      287350.0
    ], 
    "sanitation_total_unimproved_total": [
      86591.040000000008, 
      86598.87000000001, 
      83159.119999999995, 
      78724.610000000001, 
      74501.529999999999
    ], 
    "sanitation_rural_unimproved_other": [
      16154.120000000003, 
      17069.970000000001, 
      17046.180000000004, 
      16930.98, 
      17098.66
    ], 
    "water_total_improved_total": [
      254921.0, 
      287025.0, 
      316740.0, 
      346382.0, 
      336657.0
    ], 
    "population_rural": [
      75316.719999999987, 
      74094.660000000018, 
      71264.119999999995, 
      67644.200000000012, 
      65599.699999999997
    ], 
    "sanitation_total_unimproved_shared": [
      6838.0, 
      8078.0, 
      9344.0, 
      11088.0, 
      11778.0
    ], 
    "water_urban_unimproved": [
      10674.0, 
      9677.0, 
      9761.0, 
      8478.0, 
      5495.0
    ], 
    "sanitation_urban_unimproved_total": [
      39339.459999999999, 
      41697.669999999998, 
      42202.180000000008, 
      41949.529999999999, 
      40265.43
    ], 
    "water_rural_improved_other": [
      21040.0, 
      19825.0, 
      17314.0, 
      15508.0, 
      14113.0
    ], 
    "water_total_unimproved": [
      39366.0, 
      34595.0, 
      30664.0, 
      25070.0, 
      19891.0
    ], 
    "sanitation_rural_unimproved_opendefecation": [
      30244.609999999997, 
      26691.329999999998, 
      22552.269999999997, 
      18265.979999999996, 
      15510.980000000001
    ], 
    "population_total": [
      295560.32999999996, 
      321618.87, 
      347404.12, 
      371654.59999999998, 
      384889.26000000007
    ], 
    "sanitation_rural_unimproved_total": [
      47279.870000000003, 
      44903.230000000003, 
      40957.68, 
      36775.340000000004, 
      34235.409999999996
    ], 
    "water_rural_improved_piped": [
      24895.0, 
      29353.0, 
      33047.0, 
      35494.0, 
      35194.0
    ], 
    "sanitation_total_unimproved_other": [
      38832.0, 
      41028.0, 
      41015.0, 
      41328.0, 
      40834.0
    ], 
    "sanitation_urban_improved": [
      180596.16999999998, 
      205826.53999999995, 
      233937.84000000003, 
      261908.21000000002, 
      252580.07999999999
    ], 
    "water_urban_improved_piped": [
      193431.0, 
      221121.0, 
      252028.0, 
      281704.0, 
      273010.0
    ]
  }
};
