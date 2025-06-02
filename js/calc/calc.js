// Calculations
function calc() {
    var anz_zaehne_1 = Tooth_18 + Tooth_17 + Tooth_16 + Tooth_15 + Tooth_14 + Tooth_13 + Tooth_12 + Tooth_11;
    var anz_zaehne_2 = Zahn_28 + Zahn_27 + Zahn_26 + Zahn_25 + Zahn_24 + Tooth_23 + Tooth_22 + Tooth_21;
    var anz_zaehne_3 = Zahn_38 + Zahn_37 + Zahn_36 + Zahn_35 + Zahn_34 + Zahn_33 + Zahn_32 + Zahn_31;
    var anz_zaehne_4 = Zahn_48 + Zahn_47 + Zahn_46 + Zahn_45 + Zahn_44 + Zahn_43 + Zahn_42 + Zahn_41;
    var anz_zaehne = anz_zaehne_1 + anz_zaehne_2 + anz_zaehne_3 + anz_zaehne_4;
    //document.forms[0]["input_date"].value = anz_zaehne;

    // Calculate average
    if (Tooth_18 == 1) { sum_st_18 = st_18_db*1 + st_18_b*1 + st_18_mb*1 + st_18_dp*1 + st_18_p*1 + st_18_mp*1; } else { sum_st_18 = 0; }
    if (Tooth_17 == 1) { sum_st_17 = st_17_db*1 + st_17_b*1 + st_17_mb*1 + st_17_dp*1 + st_17_p*1 + st_17_mp*1; } else { sum_st_17 = 0; }
    if (Tooth_16 == 1) { sum_st_16 = st_16_db*1 + st_16_b*1 + st_16_mb*1 + st_16_dp*1 + st_16_p*1 + st_16_mp*1; } else { sum_st_16 = 0; }
    if (Tooth_15 == 1) { sum_st_15 = st_15_db*1 + st_15_b*1 + st_15_mb*1 + st_15_dp*1 + st_15_p*1 + st_15_mp*1; } else { sum_st_15 = 0; }
    if (Tooth_14 == 1) { sum_st_14 = st_14_db*1 + st_14_b*1 + st_14_mb*1 + st_14_dp*1 + st_14_p*1 + st_14_mp*1; } else { sum_st_14 = 0; }
    if (Tooth_13 == 1) { sum_st_13 = st_13_db*1 + st_13_b*1 + st_13_mb*1 + st_13_dp*1 + st_13_p*1 + st_13_mp*1; } else { sum_st_13 = 0; }
    if (Tooth_12 == 1) { sum_st_12 = st_12_db*1 + st_12_b*1 + st_12_mb*1 + st_12_dp*1 + st_12_p*1 + st_12_mp*1; } else { sum_st_12 = 0; }
    if (Tooth_11 == 1) { sum_st_11 = st_11_db*1 + st_11_b*1 + st_11_mb*1 + st_11_dp*1 + st_11_p*1 + st_11_mp*1; } else { sum_st_11 = 0; }

    if (Zahn_28 == 1) { sum_st_28 = st_28_db*1 + st_28_b*1 + st_28_mb*1 + st_28_dp*1 + st_28_p*1 + st_28_mp*1; } else { sum_st_28 = 0; }
    if (Zahn_27 == 1) { sum_st_27 = st_27_db*1 + st_27_b*1 + st_27_mb*1 + st_27_dp*1 + st_27_p*1 + st_27_mp*1; } else { sum_st_27 = 0; }
    if (Zahn_26 == 1) { sum_st_26 = st_26_db*1 + st_26_b*1 + st_26_mb*1 + st_26_dp*1 + st_26_p*1 + st_26_mp*1; } else { sum_st_26 = 0; }
    if (Zahn_25 == 1) { sum_st_25 = st_25_db*1 + st_25_b*1 + st_25_mb*1 + st_25_dp*1 + st_25_p*1 + st_25_mp*1; } else { sum_st_25 = 0; }
    if (Zahn_24 == 1) { sum_st_24 = st_24_db*1 + st_24_b*1 + st_24_mb*1 + st_24_dp*1 + st_24_p*1 + st_24_mp*1; } else { sum_st_24 = 0; }
    if (Tooth_23 == 1) { sum_st_23 = st_23_db*1 + st_23_b*1 + st_23_mb*1 + st_23_dp*1 + st_23_p*1 + st_23_mp*1; } else { sum_st_23 = 0; }
    if (Tooth_22 == 1) { sum_st_22 = st_22_db*1 + st_22_b*1 + st_22_mb*1 + st_22_dp*1 + st_22_p*1 + st_22_mp*1; } else { sum_st_22 = 0; }
    if (Tooth_21 == 1) { sum_st_21 = st_21_db*1 + st_21_b*1 + st_21_mb*1 + st_21_dp*1 + st_21_p*1 + st_21_mp*1; } else { sum_st_21 = 0; }

    if (Zahn_38 == 1) { sum_st_38 = st_38_db*1 + st_38_b*1 + st_38_mb*1 + st_38_dl*1 + st_38_l*1 + st_38_ml*1; } else { sum_st_38 = 0; }
    if (Zahn_37 == 1) { sum_st_37 = st_37_db*1 + st_37_b*1 + st_37_mb*1 + st_37_dl*1 + st_37_l*1 + st_37_ml*1; } else { sum_st_37 = 0; }
    if (Zahn_36 == 1) { sum_st_36 = st_36_db*1 + st_36_b*1 + st_36_mb*1 + st_36_dl*1 + st_36_l*1 + st_36_ml*1; } else { sum_st_36 = 0; }
    if (Zahn_35 == 1) { sum_st_35 = st_35_db*1 + st_35_b*1 + st_35_mb*1 + st_35_dl*1 + st_35_l*1 + st_35_ml*1; } else { sum_st_35 = 0; }
    if (Zahn_34 == 1) { sum_st_34 = st_34_db*1 + st_34_b*1 + st_34_mb*1 + st_34_dl*1 + st_34_l*1 + st_34_ml*1; } else { sum_st_34 = 0; }
    if (Zahn_33 == 1) { sum_st_33 = st_33_db*1 + st_33_b*1 + st_33_mb*1 + st_33_dl*1 + st_33_l*1 + st_33_ml*1; } else { sum_st_33 = 0; }
    if (Zahn_32 == 1) { sum_st_32 = st_32_db*1 + st_32_b*1 + st_32_mb*1 + st_32_dl*1 + st_32_l*1 + st_32_ml*1; } else { sum_st_32 = 0; }
    if (Zahn_31 == 1) { sum_st_31 = st_31_db*1 + st_31_b*1 + st_31_mb*1 + st_31_dl*1 + st_31_l*1 + st_31_ml*1; } else { sum_st_31 = 0; }

    if (Zahn_48 == 1) { sum_st_48 = st_48_db*1 + st_48_b*1 + st_48_mb*1 + st_48_dl*1 + st_48_l*1 + st_48_ml*1; } else { sum_st_48 = 0; }
    if (Zahn_47 == 1) { sum_st_47 = st_47_db*1 + st_47_b*1 + st_47_mb*1 + st_47_dl*1 + st_47_l*1 + st_47_ml*1; } else { sum_st_47 = 0; }
    if (Zahn_46 == 1) { sum_st_46 = st_46_db*1 + st_46_b*1 + st_46_mb*1 + st_46_dl*1 + st_46_l*1 + st_46_ml*1; } else { sum_st_46 = 0; }
    if (Zahn_45 == 1) { sum_st_45 = st_45_db*1 + st_45_b*1 + st_45_mb*1 + st_45_dl*1 + st_45_l*1 + st_45_ml*1; } else { sum_st_45 = 0; }
    if (Zahn_44 == 1) { sum_st_44 = st_44_db*1 + st_44_b*1 + st_44_mb*1 + st_44_dl*1 + st_44_l*1 + st_44_ml*1; } else { sum_st_44 = 0; }
    if (Zahn_43 == 1) { sum_st_43 = st_43_db*1 + st_43_b*1 + st_43_mb*1 + st_43_dl*1 + st_43_l*1 + st_43_ml*1; } else { sum_st_43 = 0; }
    if (Zahn_42 == 1) { sum_st_42 = st_42_db*1 + st_42_b*1 + st_42_mb*1 + st_42_dl*1 + st_42_l*1 + st_42_ml*1; } else { sum_st_42 = 0; }
    if (Zahn_41 == 1) { sum_st_41 = st_41_db*1 + st_41_b*1 + st_41_mb*1 + st_41_dl*1 + st_41_l*1 + st_41_ml*1; } else { sum_st_41 = 0; }

    var sum_st = sum_st_18 + sum_st_17 + sum_st_16 + sum_st_15 + sum_st_14 + sum_st_13 + sum_st_12 + sum_st_11;
    sum_st = sum_st + sum_st_28 + sum_st_27 + sum_st_26 + sum_st_25 + sum_st_24 + sum_st_23 + sum_st_22 + sum_st_21;
    sum_st = sum_st + sum_st_38 + sum_st_37 + sum_st_36 + sum_st_35 + sum_st_34 + sum_st_33 + sum_st_32 + sum_st_31;
    sum_st = sum_st + sum_st_48 + sum_st_47 + sum_st_46 + sum_st_45 + sum_st_44 + sum_st_43 + sum_st_42 + sum_st_41;

    st_durchschn = 10 * (sum_st / (anz_zaehne * 6));
    st_durchschn = (Math.round (st_durchschn)) / 10;    

    if (anz_zaehne > 0) {
        document.forms[0]["output_mean_st"].value = st_durchschn;
    } else {
        document.forms[0]["output_mean_st"].value = 0;
    }

    // calculate an average
    if (Tooth_18 == 1) { sum_an_18 = (mg_18_db*1 - st_18_db*1) + (mg_18_b*1 - st_18_b*1) + (mg_18_mb*1 - st_18_mb*1) + (mg_18_dp*1 - st_18_dp*1) + (mg_18_p*1 - st_18_p*1) + (mg_18_mp*1 - st_18_mp*1); } else { sum_an_18 = 0; }
    if (Tooth_17 == 1) { sum_an_17 = (mg_17_db*1 - st_17_db*1) + (mg_17_b*1 - st_17_b*1) + (mg_17_mb*1 - st_17_mb*1) + (mg_17_dp*1 - st_17_dp*1) + (mg_17_p*1 - st_17_p*1) + (mg_17_mp*1 - st_17_mp*1); } else { sum_an_17 = 0; }
    if (Tooth_16 == 1) { sum_an_16 = (mg_16_db*1 - st_16_db*1) + (mg_16_b*1 - st_16_b*1) + (mg_16_mb*1 - st_16_mb*1) + (mg_16_dp*1 - st_16_dp*1) + (mg_16_p*1 - st_16_p*1) + (mg_16_mp*1 - st_16_mp*1); } else { sum_an_16 = 0; }
    if (Tooth_15 == 1) { sum_an_15 = (mg_15_db*1 - st_15_db*1) + (mg_15_b*1 - st_15_b*1) + (mg_15_mb*1 - st_15_mb*1) + (mg_15_dp*1 - st_15_dp*1) + (mg_15_p*1 - st_15_p*1) + (mg_15_mp*1 - st_15_mp*1); } else { sum_an_15 = 0; }
    if (Tooth_14 == 1) { sum_an_14 = (mg_14_db*1 - st_14_db*1) + (mg_14_b*1 - st_14_b*1) + (mg_14_mb*1 - st_14_mb*1) + (mg_14_dp*1 - st_14_dp*1) + (mg_14_p*1 - st_14_p*1) + (mg_14_mp*1 - st_14_mp*1); } else { sum_an_14 = 0; }
    if (Tooth_13 == 1) { sum_an_13 = (mg_13_db*1 - st_13_db*1) + (mg_13_b*1 - st_13_b*1) + (mg_13_mb*1 - st_13_mb*1) + (mg_13_dp*1 - st_13_dp*1) + (mg_13_p*1 - st_13_p*1) + (mg_13_mp*1 - st_13_mp*1); } else { sum_an_13 = 0; }
    if (Tooth_12 == 1) { sum_an_12 = (mg_12_db*1 - st_12_db*1) + (mg_12_b*1 - st_12_b*1) + (mg_12_mb*1 - st_12_mb*1) + (mg_12_dp*1 - st_12_dp*1) + (mg_12_p*1 - st_12_p*1) + (mg_12_mp*1 - st_12_mp*1); } else { sum_an_12 = 0; }
    if (Tooth_11 == 1) { sum_an_11 = (mg_11_db*1 - st_11_db*1) + (mg_11_b*1 - st_11_b*1) + (mg_11_mb*1 - st_11_mb*1) + (mg_11_dp*1 - st_11_dp*1) + (mg_11_p*1 - st_11_p*1) + (mg_11_mp*1 - st_11_mp*1); } else { sum_an_11 = 0; }

    if (Zahn_28 == 1) { sum_an_28 = (mg_28_db*1 - st_28_db*1) + (mg_28_b*1 - st_28_b*1) + (mg_28_mb*1 - st_28_mb*1) + (mg_28_dp*1 - st_28_dp*1) + (mg_28_p*1 - st_28_p*1) + (mg_28_mp*1 - st_28_mp*1); } else { sum_an_28 = 0; }
    if (Zahn_27 == 1) { sum_an_27 = (mg_27_db*1 - st_27_db*1) + (mg_27_b*1 - st_27_b*1) + (mg_27_mb*1 - st_27_mb*1) + (mg_27_dp*1 - st_27_dp*1) + (mg_27_p*1 - st_27_p*1) + (mg_27_mp*1 - st_27_mp*1); } else { sum_an_27 = 0; }
    if (Zahn_26 == 1) { sum_an_26 = (mg_26_db*1 - st_26_db*1) + (mg_26_b*1 - st_26_b*1) + (mg_26_mb*1 - st_26_mb*1) + (mg_26_dp*1 - st_26_dp*1) + (mg_26_p*1 - st_26_p*1) + (mg_26_mp*1 - st_26_mp*1); } else { sum_an_26 = 0; }
    if (Zahn_25 == 1) { sum_an_25 = (mg_25_db*1 - st_25_db*1) + (mg_25_b*1 - st_25_b*1) + (mg_25_mb*1 - st_25_mb*1) + (mg_25_dp*1 - st_25_dp*1) + (mg_25_p*1 - st_25_p*1) + (mg_25_mp*1 - st_25_mp*1); } else { sum_an_25 = 0; }
    if (Zahn_24 == 1) { sum_an_24 = (mg_24_db*1 - st_24_db*1) + (mg_24_b*1 - st_24_b*1) + (mg_24_mb*1 - st_24_mb*1) + (mg_24_dp*1 - st_24_dp*1) + (mg_24_p*1 - st_24_p*1) + (mg_24_mp*1 - st_24_mp*1); } else { sum_an_24 = 0; }
    if (Tooth_23 == 1) { sum_an_23 = (mg_23_db*1 - st_23_db*1) + (mg_23_b*1 - st_23_b*1) + (mg_23_mb*1 - st_23_mb*1) + (mg_23_dp*1 - st_23_dp*1) + (mg_23_p*1 - st_23_p*1) + (mg_23_mp*1 - st_23_mp*1); } else { sum_an_23 = 0; }
    if (Tooth_22 == 1) { sum_an_22 = (mg_22_db*1 - st_22_db*1) + (mg_22_b*1 - st_22_b*1) + (mg_22_mb*1 - st_22_mb*1) + (mg_22_dp*1 - st_22_dp*1) + (mg_22_p*1 - st_22_p*1) + (mg_22_mp*1 - st_22_mp*1); } else { sum_an_22 = 0; }
    if (Tooth_21 == 1) { sum_an_21 = (mg_21_db*1 - st_21_db*1) + (mg_21_b*1 - st_21_b*1) + (mg_21_mb*1 - st_21_mb*1) + (mg_21_dp*1 - st_21_dp*1) + (mg_21_p*1 - st_21_p*1) + (mg_21_mp*1 - st_21_mp*1); } else { sum_an_21 = 0; }

    if (Zahn_38 == 1) { sum_an_38 = (mg_38_db*1 - st_38_db*1) + (mg_38_b*1 - st_38_b*1) + (mg_38_mb*1 - st_38_mb*1) + (mg_38_dl*1 - st_38_dl*1) + (mg_38_l*1 - st_38_l*1) + (mg_38_ml*1 - st_38_ml*1); } else { sum_an_38 = 0; }
    if (Zahn_37 == 1) { sum_an_37 = (mg_37_db*1 - st_37_db*1) + (mg_37_b*1 - st_37_b*1) + (mg_37_mb*1 - st_37_mb*1) + (mg_37_dl*1 - st_37_dl*1) + (mg_37_l*1 - st_37_l*1) + (mg_37_ml*1 - st_37_ml*1); } else { sum_an_37 = 0; }
    if (Zahn_36 == 1) { sum_an_36 = (mg_36_db*1 - st_36_db*1) + (mg_36_b*1 - st_36_b*1) + (mg_36_mb*1 - st_36_mb*1) + (mg_36_dl*1 - st_36_dl*1) + (mg_36_l*1 - st_36_l*1) + (mg_36_ml*1 - st_36_ml*1); } else { sum_an_36 = 0; }
    if (Zahn_35 == 1) { sum_an_35 = (mg_35_db*1 - st_35_db*1) + (mg_35_b*1 - st_35_b*1) + (mg_35_mb*1 - st_35_mb*1) + (mg_35_dl*1 - st_35_dl*1) + (mg_35_l*1 - st_35_l*1) + (mg_35_ml*1 - st_35_ml*1); } else { sum_an_35 = 0; }
    if (Zahn_34 == 1) { sum_an_34 = (mg_34_db*1 - st_34_db*1) + (mg_34_b*1 - st_34_b*1) + (mg_34_mb*1 - st_34_mb*1) + (mg_34_dl*1 - st_34_dl*1) + (mg_34_l*1 - st_34_l*1) + (mg_34_ml*1 - st_34_ml*1); } else { sum_an_34 = 0; }
    if (Zahn_33 == 1) { sum_an_33 = (mg_33_db*1 - st_33_db*1) + (mg_33_b*1 - st_33_b*1) + (mg_33_mb*1 - st_33_mb*1) + (mg_33_dl*1 - st_33_dl*1) + (mg_33_l*1 - st_33_l*1) + (mg_33_ml*1 - st_33_ml*1); } else { sum_an_33 = 0; }
    if (Zahn_32 == 1) { sum_an_32 = (mg_32_db*1 - st_32_db*1) + (mg_32_b*1 - st_32_b*1) + (mg_32_mb*1 - st_32_mb*1) + (mg_32_dl*1 - st_32_dl*1) + (mg_32_l*1 - st_32_l*1) + (mg_32_ml*1 - st_32_ml*1); } else { sum_an_32 = 0; }
    if (Zahn_31 == 1) { sum_an_31 = (mg_31_db*1 - st_31_db*1) + (mg_31_b*1 - st_31_b*1) + (mg_31_mb*1 - st_31_mb*1) + (mg_31_dl*1 - st_31_dl*1) + (mg_31_l*1 - st_31_l*1) + (mg_31_ml*1 - st_31_ml*1); } else { sum_an_31 = 0; }

    if (Zahn_48 == 1) { sum_an_48 = (mg_48_db*1 - st_48_db*1) + (mg_48_b*1 - st_48_b*1) + (mg_48_mb*1 - st_48_mb*1) + (mg_48_dl*1 - st_48_dl*1) + (mg_48_l*1 - st_48_l*1) + (mg_48_ml*1 - st_48_ml*1); } else { sum_an_48 = 0; }
    if (Zahn_47 == 1) { sum_an_47 = (mg_47_db*1 - st_47_db*1) + (mg_47_b*1 - st_47_b*1) + (mg_47_mb*1 - st_47_mb*1) + (mg_47_dl*1 - st_47_dl*1) + (mg_47_l*1 - st_47_l*1) + (mg_47_ml*1 - st_47_ml*1); } else { sum_an_47 = 0; }
    if (Zahn_46 == 1) { sum_an_46 = (mg_46_db*1 - st_46_db*1) + (mg_46_b*1 - st_46_b*1) + (mg_46_mb*1 - st_46_mb*1) + (mg_46_dl*1 - st_46_dl*1) + (mg_46_l*1 - st_46_l*1) + (mg_46_ml*1 - st_46_ml*1); } else { sum_an_46 = 0; }
    if (Zahn_45 == 1) { sum_an_45 = (mg_45_db*1 - st_45_db*1) + (mg_45_b*1 - st_45_b*1) + (mg_45_mb*1 - st_45_mb*1) + (mg_45_dl*1 - st_45_dl*1) + (mg_45_l*1 - st_45_l*1) + (mg_45_ml*1 - st_45_ml*1); } else { sum_an_45 = 0; }
    if (Zahn_44 == 1) { sum_an_44 = (mg_44_db*1 - st_44_db*1) + (mg_44_b*1 - st_44_b*1) + (mg_44_mb*1 - st_44_mb*1) + (mg_44_dl*1 - st_44_dl*1) + (mg_44_l*1 - st_44_l*1) + (mg_44_ml*1 - st_44_ml*1); } else { sum_an_44 = 0; }
    if (Zahn_43 == 1) { sum_an_43 = (mg_43_db*1 - st_43_db*1) + (mg_43_b*1 - st_43_b*1) + (mg_43_mb*1 - st_43_mb*1) + (mg_43_dl*1 - st_43_dl*1) + (mg_43_l*1 - st_43_l*1) + (mg_43_ml*1 - st_43_ml*1); } else { sum_an_43 = 0; }
    if (Zahn_42 == 1) { sum_an_42 = (mg_42_db*1 - st_42_db*1) + (mg_42_b*1 - st_42_b*1) + (mg_42_mb*1 - st_42_mb*1) + (mg_42_dl*1 - st_42_dl*1) + (mg_42_l*1 - st_42_l*1) + (mg_42_ml*1 - st_42_ml*1); } else { sum_an_42 = 0; }
    if (Zahn_41 == 1) { sum_an_41 = (mg_41_db*1 - st_41_db*1) + (mg_41_b*1 - st_41_b*1) + (mg_41_mb*1 - st_41_mb*1) + (mg_41_dl*1 - st_41_dl*1) + (mg_41_l*1 - st_41_l*1) + (mg_41_ml*1 - st_41_ml*1); } else { sum_an_41 = 0; }

    var sum_an = sum_an_18 + sum_an_17 + sum_an_16 + sum_an_15 + sum_an_14 + sum_an_13 + sum_an_12 + sum_an_11;
    sum_an = sum_an + sum_an_28 + sum_an_27 + sum_an_26 + sum_an_25 + sum_an_24 + sum_an_23 + sum_an_22 + sum_an_21;
    sum_an = sum_an + sum_an_38 + sum_an_37 + sum_an_36 + sum_an_35 + sum_an_34 + sum_an_33 + sum_an_32 + sum_an_31;
    sum_an = sum_an + sum_an_48 + sum_an_47 + sum_an_46 + sum_an_45 + sum_an_44 + sum_an_43 + sum_an_42 + sum_an_41;

    an_durchschn = 10 * (sum_an / (anz_zaehne * 6));
    an_durchschn = (Math.round (an_durchschn)) / 10;

    if (anz_zaehne > 0) {
        document.forms[0]["output_mean_an"].value = an_durchschn;
    } else {
        document.forms[0]["output_mean_an"].value = 0;
    }

    // Calculate PI%
    if (Tooth_18 == 1) { anz_pi_18 = PI_18_db + PI_18_b + PI_18_mb + PI_18_dp + PI_18_p + PI_18_mp; } else { anz_pi_18 = 0; }
    if (Tooth_17 == 1) { anz_pi_17 = PI_17_db + PI_17_b + PI_17_mb + PI_17_dp + PI_17_p + PI_17_mp; } else { anz_pi_17 = 0; }
    if (Tooth_16 == 1) { anz_pi_16 = PI_16_db + PI_16_b + PI_16_mb + PI_16_dp + PI_16_p + PI_16_mp; } else { anz_pi_16 = 0; }
    if (Tooth_15 == 1) { anz_pi_15 = PI_15_db + PI_15_b + PI_15_mb + PI_15_dp + PI_15_p + PI_15_mp; } else { anz_pi_15 = 0; }
    if (Tooth_14 == 1) { anz_pi_14 = PI_14_db + PI_14_b + PI_14_mb + PI_14_dp + PI_14_p + PI_14_mp; } else { anz_pi_14 = 0; }
    if (Tooth_13 == 1) { anz_pi_13 = PI_13_db + PI_13_b + PI_13_mb + PI_13_dp + PI_13_p + PI_13_mp; } else { anz_pi_13 = 0; }
    if (Tooth_12 == 1) { anz_pi_12 = PI_12_db + PI_12_b + PI_12_mb + PI_12_dp + PI_12_p + PI_12_mp; } else { anz_pi_12 = 0; }
    if (Tooth_11 == 1) { anz_pi_11 = PI_11_db + PI_11_b + PI_11_mb + PI_11_dp + PI_11_p + PI_11_mp; } else { anz_pi_11 = 0; }

    if (Zahn_28 == 1) { anz_pi_28 = PI_28_db + PI_28_b + PI_28_mb + PI_28_dp + PI_28_p + PI_28_mp; } else { anz_pi_28 = 0; }
    if (Zahn_27 == 1) { anz_pi_27 = PI_27_db + PI_27_b + PI_27_mb + PI_27_dp + PI_27_p + PI_27_mp; } else { anz_pi_27 = 0; }
    if (Zahn_26 == 1) { anz_pi_26 = PI_26_db + PI_26_b + PI_26_mb + PI_26_dp + PI_26_p + PI_26_mp; } else { anz_pi_26 = 0; }
    if (Zahn_25 == 1) { anz_pi_25 = PI_25_db + PI_25_b + PI_25_mb + PI_25_dp + PI_25_p + PI_25_mp; } else { anz_pi_25 = 0; }
    if (Zahn_24 == 1) { anz_pi_24 = PI_24_db + PI_24_b + PI_24_mb + PI_24_dp + PI_24_p + PI_24_mp; } else { anz_pi_24 = 0; }
    if (Tooth_23 == 1) { anz_pi_23 = PI_23_db + PI_23_b + PI_23_mb + PI_23_dp + PI_23_p + PI_23_mp; } else { anz_pi_23 = 0; }
    if (Tooth_22 == 1) { anz_pi_22 = PI_22_db + PI_22_b + PI_22_mb + PI_22_dp + PI_22_p + PI_22_mp; } else { anz_pi_22 = 0; }
    if (Tooth_21 == 1) { anz_pi_21 = PI_21_db + PI_21_b + PI_21_mb + PI_21_dp + PI_21_p + PI_21_mp; } else { anz_pi_21 = 0; }

    if (Zahn_38 == 1) { anz_pi_38 = PI_38_db + PI_38_b + PI_38_mb + PI_38_dl + PI_38_l + PI_38_ml; } else { anz_pi_38 = 0; }
    if (Zahn_37 == 1) { anz_pi_37 = PI_37_db + PI_37_b + PI_37_mb + PI_37_dl + PI_37_l + PI_37_ml; } else { anz_pi_37 = 0; }
    if (Zahn_36 == 1) { anz_pi_36 = PI_36_db + PI_36_b + PI_36_mb + PI_36_dl + PI_36_l + PI_36_ml; } else { anz_pi_36 = 0; }
    if (Zahn_35 == 1) { anz_pi_35 = PI_35_db + PI_35_b + PI_35_mb + PI_35_dl + PI_35_l + PI_35_ml; } else { anz_pi_35 = 0; }
    if (Zahn_34 == 1) { anz_pi_34 = PI_34_db + PI_34_b + PI_34_mb + PI_34_dl + PI_34_l + PI_34_ml; } else { anz_pi_34 = 0; }
    if (Zahn_33 == 1) { anz_pi_33 = PI_33_db + PI_33_b + PI_33_mb + PI_33_dl + PI_33_l + PI_33_ml; } else { anz_pi_33 = 0; }
    if (Zahn_32 == 1) { anz_pi_32 = PI_32_db + PI_32_b + PI_32_mb + PI_32_dl + PI_32_l + PI_32_ml; } else { anz_pi_32 = 0; }
    if (Zahn_31 == 1) { anz_pi_31 = PI_31_db + PI_31_b + PI_31_mb + PI_31_dl + PI_31_l + PI_31_ml; } else { anz_pi_31 = 0; }

    if (Zahn_48 == 1) { anz_pi_48 = PI_48_db + PI_48_b + PI_48_mb + PI_48_dl + PI_48_l + PI_48_ml; } else { anz_pi_48 = 0; }
    if (Zahn_47 == 1) { anz_pi_47 = PI_47_db + PI_47_b + PI_47_mb + PI_47_dl + PI_47_l + PI_47_ml; } else { anz_pi_47 = 0; }
    if (Zahn_46 == 1) { anz_pi_46 = PI_46_db + PI_46_b + PI_46_mb + PI_46_dl + PI_46_l + PI_46_ml; } else { anz_pi_46 = 0; }
    if (Zahn_45 == 1) { anz_pi_45 = PI_45_db + PI_45_b + PI_45_mb + PI_45_dl + PI_45_l + PI_45_ml; } else { anz_pi_45 = 0; }
    if (Zahn_44 == 1) { anz_pi_44 = PI_44_db + PI_44_b + PI_44_mb + PI_44_dl + PI_44_l + PI_44_ml; } else { anz_pi_44 = 0; }
    if (Zahn_43 == 1) { anz_pi_43 = PI_43_db + PI_43_b + PI_43_mb + PI_43_dl + PI_43_l + PI_43_ml; } else { anz_pi_43 = 0; }
    if (Zahn_42 == 1) { anz_pi_42 = PI_42_db + PI_42_b + PI_42_mb + PI_42_dl + PI_42_l + PI_42_ml; } else { anz_pi_42 = 0; }
    if (Zahn_41 == 1) { anz_pi_41 = PI_41_db + PI_41_b + PI_41_mb + PI_41_dl + PI_41_l + PI_41_ml; } else { anz_pi_41 = 0; }

    anz_pi = anz_pi_18 + anz_pi_17 + anz_pi_16 + anz_pi_15 + anz_pi_14 + anz_pi_13 + anz_pi_12 + anz_pi_11;
    anz_pi = anz_pi + anz_pi_28 + anz_pi_27 + anz_pi_26 + anz_pi_25 + anz_pi_24 + anz_pi_23 + anz_pi_22 + anz_pi_21;
    anz_pi = anz_pi + anz_pi_38 + anz_pi_37 + anz_pi_36 + anz_pi_35 + anz_pi_34 + anz_pi_33 + anz_pi_32 + anz_pi_31;
    anz_pi = anz_pi + anz_pi_48 + anz_pi_47 + anz_pi_46 + anz_pi_45 + anz_pi_44 + anz_pi_43 + anz_pi_42 + anz_pi_41;

    pi_percent = (anz_pi * 100) / (anz_zaehne * 6);
    pi_percent = Math.round (pi_percent);

    if (anz_zaehne > 0) {
        document.forms[0]["output_mean_pi"].value = pi_percent;
    } else {
        document.forms[0]["output_mean_pi"].value = 0;
    }

    // Calculate PI%
    if (Tooth_18 == 1) { anz_bop_18 = BOP_18_db + BOP_18_b + BOP_18_mb + BOP_18_dp + BOP_18_p + BOP_18_mp; } else { anz_bop_18 = 0; }
    if (Tooth_17 == 1) { anz_bop_17 = BOP_17_db + BOP_17_b + BOP_17_mb + BOP_17_dp + BOP_17_p + BOP_17_mp; } else { anz_bop_17 = 0; }
    if (Tooth_16 == 1) { anz_bop_16 = BOP_16_db + BOP_16_b + BOP_16_mb + BOP_16_dp + BOP_16_p + BOP_16_mp; } else { anz_bop_16 = 0; }
    if (Tooth_15 == 1) { anz_bop_15 = BOP_15_db + BOP_15_b + BOP_15_mb + BOP_15_dp + BOP_15_p + BOP_15_mp; } else { anz_bop_15 = 0; }
    if (Tooth_14 == 1) { anz_bop_14 = BOP_14_db + BOP_14_b + BOP_14_mb + BOP_14_dp + BOP_14_p + BOP_14_mp; } else { anz_bop_14 = 0; }
    if (Tooth_13 == 1) { anz_bop_13 = BOP_13_db + BOP_13_b + BOP_13_mb + BOP_13_dp + BOP_13_p + BOP_13_mp; } else { anz_bop_13 = 0; }
    if (Tooth_12 == 1) { anz_bop_12 = BOP_12_db + BOP_12_b + BOP_12_mb + BOP_12_dp + BOP_12_p + BOP_12_mp; } else { anz_bop_12 = 0; }
    if (Tooth_11 == 1) { anz_bop_11 = BOP_11_db + BOP_11_b + BOP_11_mb + BOP_11_dp + BOP_11_p + BOP_11_mp; } else { anz_bop_11 = 0; }

    if (Zahn_28 == 1) { anz_bop_28 = BOP_28_db + BOP_28_b + BOP_28_mb + BOP_28_dp + BOP_28_p + BOP_28_mp; } else { anz_bop_28 = 0; }
    if (Zahn_27 == 1) { anz_bop_27 = BOP_27_db + BOP_27_b + BOP_27_mb + BOP_27_dp + BOP_27_p + BOP_27_mp; } else { anz_bop_27 = 0; }
    if (Zahn_26 == 1) { anz_bop_26 = BOP_26_db + BOP_26_b + BOP_26_mb + BOP_26_dp + BOP_26_p + BOP_26_mp; } else { anz_bop_26 = 0; }
    if (Zahn_25 == 1) { anz_bop_25 = BOP_25_db + BOP_25_b + BOP_25_mb + BOP_25_dp + BOP_25_p + BOP_25_mp; } else { anz_bop_25 = 0; }
    if (Zahn_24 == 1) { anz_bop_24 = BOP_24_db + BOP_24_b + BOP_24_mb + BOP_24_dp + BOP_24_p + BOP_24_mp; } else { anz_bop_24 = 0; }
    if (Tooth_23 == 1) { anz_bop_23 = BOP_23_db + BOP_23_b + BOP_23_mb + BOP_23_dp + BOP_23_p + BOP_23_mp; } else { anz_bop_23 = 0; }
    if (Tooth_22 == 1) { anz_bop_22 = BOP_22_db + BOP_22_b + BOP_22_mb + BOP_22_dp + BOP_22_p + BOP_22_mp; } else { anz_bop_22 = 0; }
    if (Tooth_21 == 1) { anz_bop_21 = BOP_21_db + BOP_21_b + BOP_21_mb + BOP_21_dp + BOP_21_p + BOP_21_mp; } else { anz_bop_21 = 0; }

    if (Zahn_38 == 1) { anz_bop_38 = BOP_38_db + BOP_38_b + BOP_38_mb + BOP_38_dl + BOP_38_l + BOP_38_ml; } else { anz_bop_38 = 0; }
    if (Zahn_37 == 1) { anz_bop_37 = BOP_37_db + BOP_37_b + BOP_37_mb + BOP_37_dl + BOP_37_l + BOP_37_ml; } else { anz_bop_37 = 0; }
    if (Zahn_36 == 1) { anz_bop_36 = BOP_36_db + BOP_36_b + BOP_36_mb + BOP_36_dl + BOP_36_l + BOP_36_ml; } else { anz_bop_36 = 0; }
    if (Zahn_35 == 1) { anz_bop_35 = BOP_35_db + BOP_35_b + BOP_35_mb + BOP_35_dl + BOP_35_l + BOP_35_ml; } else { anz_bop_35 = 0; }
    if (Zahn_34 == 1) { anz_bop_34 = BOP_34_db + BOP_34_b + BOP_34_mb + BOP_34_dl + BOP_34_l + BOP_34_ml; } else { anz_bop_34 = 0; }
    if (Zahn_33 == 1) { anz_bop_33 = BOP_33_db + BOP_33_b + BOP_33_mb + BOP_33_dl + BOP_33_l + BOP_33_ml; } else { anz_bop_33 = 0; }
    if (Zahn_32 == 1) { anz_bop_32 = BOP_32_db + BOP_32_b + BOP_32_mb + BOP_32_dl + BOP_32_l + BOP_32_ml; } else { anz_bop_32 = 0; }
    if (Zahn_31 == 1) { anz_bop_31 = BOP_31_db + BOP_31_b + BOP_31_mb + BOP_31_dl + BOP_31_l + BOP_31_ml; } else { anz_bop_31 = 0; }

    if (Zahn_48 == 1) { anz_bop_48 = BOP_48_db + BOP_48_b + BOP_48_mb + BOP_48_dl + BOP_48_l + BOP_48_ml; } else { anz_bop_48 = 0; }
    if (Zahn_47 == 1) { anz_bop_47 = BOP_47_db + BOP_47_b + BOP_47_mb + BOP_47_dl + BOP_47_l + BOP_47_ml; } else { anz_bop_47 = 0; }
    if (Zahn_46 == 1) { anz_bop_46 = BOP_46_db + BOP_46_b + BOP_46_mb + BOP_46_dl + BOP_46_l + BOP_46_ml; } else { anz_bop_46 = 0; }
    if (Zahn_45 == 1) { anz_bop_45 = BOP_45_db + BOP_45_b + BOP_45_mb + BOP_45_dl + BOP_45_l + BOP_45_ml; } else { anz_bop_45 = 0; }
    if (Zahn_44 == 1) { anz_bop_44 = BOP_44_db + BOP_44_b + BOP_44_mb + BOP_44_dl + BOP_44_l + BOP_44_ml; } else { anz_bop_44 = 0; }
    if (Zahn_43 == 1) { anz_bop_43 = BOP_43_db + BOP_43_b + BOP_43_mb + BOP_43_dl + BOP_43_l + BOP_43_ml; } else { anz_bop_43 = 0; }
    if (Zahn_42 == 1) { anz_bop_42 = BOP_42_db + BOP_42_b + BOP_42_mb + BOP_42_dl + BOP_42_l + BOP_42_ml; } else { anz_bop_42 = 0; }
    if (Zahn_41 == 1) { anz_bop_41 = BOP_41_db + BOP_41_b + BOP_41_mb + BOP_41_dl + BOP_41_l + BOP_41_ml; } else { anz_bop_41 = 0; }

    anz_bop = anz_bop_18 + anz_bop_17 + anz_bop_16 + anz_bop_15 + anz_bop_14 + anz_bop_13 + anz_bop_12 + anz_bop_11;
    anz_bop = anz_bop + anz_bop_28 + anz_bop_27 + anz_bop_26 + anz_bop_25 + anz_bop_24 + anz_bop_23 + anz_bop_22 + anz_bop_21;
    anz_bop = anz_bop + anz_bop_38 + anz_bop_37 + anz_bop_36 + anz_bop_35 + anz_bop_34 + anz_bop_33 + anz_bop_32 + anz_bop_31;
    anz_bop = anz_bop + anz_bop_48 + anz_bop_47 + anz_bop_46 + anz_bop_45 + anz_bop_44 + anz_bop_43 + anz_bop_42 + anz_bop_41;

    bop_percent = (anz_bop * 100) / (anz_zaehne * 6);
    bop_percent = Math.round (bop_percent);

    if (anz_zaehne > 0) {
        document.forms[0]["output_mean_bop"].value = bop_percent;
    } else {
        document.forms[0]["output_mean_bop"].value = 0;
    }
}