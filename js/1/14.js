	// Definition der Variablen fÃ¼r das Formular
    var Tooth_14 = 1;
    var Furcation_14_dp = 0;
    var Furcation_14_mp = 0;
    var Implant_14 = 0;
    var BOP_14_db = 0;
    var BOP_14_b = 0;
    var BOP_14_mb = 0;
    var PI_14_db = 0;
    var PI_14_b = 0;
    var PI_14_mb = 0;
    var BOP_14_dp = 0;
    var BOP_14_p = 0;
    var BOP_14_mp = 0;
    var PI_14_dp = 0;
    var PI_14_p = 0;
    var PI_14_mp = 0;
    var mg_14_db = 0;
    var mg_14_b = 0;
    var mg_14_mb = 0;
    var st_14_db = 0;
    var st_14_b = 0;
    var st_14_mb = 0;
    var mg_14_dp = 0;
    var mg_14_p = 0;
    var mg_14_mp = 0;
    var st_14_dp = 0;
    var st_14_p = 0;
    var st_14_mp = 0;

function clear_data_14() {
    if (Tooth_14 == 1) {
        mg_14_db = 0;
        mg_14_b = 0;
        mg_14_mb = 0;
        st_14_db = 0;
        st_14_b = 0;
        st_14_mb = 0;

            document.getElementById('mg_14_db_txt').value = 0;
            document.getElementById('mg_14_b_txt').value = 0;
            document.getElementById('mg_14_mb_txt').value = 0;
            
            document.getElementById('st_14_db_txt').value = 0;
            document.getElementById('st_14_b_txt').value = 0;
            document.getElementById('st_14_mb_txt').value = 0;
        
            document.forms[0]["st_14_db"].style.color = 'black'
            document.forms[0]["st_14_b"].style.color = 'black'
            document.forms[0]["st_14_mb"].style.color = 'black'
        
        mg_14_dp = 0;
        mg_14_p = 0;
        mg_14_mp = 0;
        st_14_dp = 0;
        st_14_p = 0;
        st_14_mp = 0;

            document.getElementById('mg_14_dp_txt').value = 0;
            document.getElementById('mg_14_p_txt').value = 0;
            document.getElementById('mg_14_mp_txt').value = 0;
            
            document.getElementById('st_14_dp_txt').value = 0;
            document.getElementById('st_14_p_txt').value = 0;
            document.getElementById('st_14_mp_txt').value = 0;

            document.forms[0]["st_14_dp"].style.color = 'black'
            document.forms[0]["st_14_p"].style.color = 'black'
            document.forms[0]["st_14_mp"].style.color = 'black'
        
        change_probing_14();
        
        mobility_14 = 0;

            document.getElementById('mobility_14_txt').value = "0";

        note_14 = "";

            document.getElementById('note_14_txt').value = "";

        Furcation_14_dp = 0;
        Furcation_14_mp = 0;

            document.getElementById('furcation_1_14_dp').style.display = 'none';
            document.getElementById('furcation_2_14_dp').style.display = 'none';
            document.getElementById('furcation_3_14_dp').style.display = 'none';
                
            document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
            document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
            document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
            
            document.getElementById('furcation_1_14_mp').style.display = 'none';
            document.getElementById('furcation_2_14_mp').style.display = 'none';
            document.getElementById('furcation_3_14_mp').style.display = 'none';
            
            document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
            document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
            document.getElementById('furcation_3_14_mp_tab').style.display = 'none';

        BOP_14_db = 0;
        BOP_14_b = 0;
        BOP_14_mb = 0;
                
        BOP_14_dp = 0;
        BOP_14_p = 0;
        BOP_14_mp = 0;
                
            document.getElementById('BOP_14_db_rectangle').style.display = 'none';
            document.getElementById('BOP_14_b_rectangle').style.display = 'none';
            document.getElementById('BOP_14_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_14_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_14_p_rectangle').style.display = 'none';
            document.getElementById('BOP_14_mp_rectangle').style.display = 'none';
            
        PI_14_db = 0;
        PI_14_b = 0;
        PI_14_mb = 0;
                
        PI_14_dp = 0;
        PI_14_p = 0;
        PI_14_mp = 0;

            document.getElementById('PI_14_db_rectangle').style.display = 'none';
            document.getElementById('PI_14_b_rectangle').style.display = 'none';
            document.getElementById('PI_14_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_14_dp_rectangle').style.display = 'none';
            document.getElementById('PI_14_p_rectangle').style.display = 'none';
            document.getElementById('PI_14_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_14() {
    if (Tooth_14 === 1) {
        Tooth_14 = 0;
        document.getElementById('tooth_line_14_b').style.display = 'block';
        document.getElementById('tooth_line_14_p').style.display = 'block';
        
        document.getElementById('mobility_14_txt').style.display = 'none';
        
        document.getElementById('implant_14_btn').style.display = 'none';
        document.getElementById('implant_14_tab').style.display = 'none';
        document.getElementById('implant_14_b_image').style.display = 'none';
        document.getElementById('implant_14_p_image').style.display = 'none';
        
        document.getElementById('furcation_14_dp_btn').style.display = 'none';
        document.getElementById('furcation_14_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp').style.display = 'none';
        document.getElementById('furcation_2_14_dp').style.display = 'none';
        document.getElementById('furcation_3_14_dp').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp').style.display = 'none';
        document.getElementById('furcation_2_14_mp').style.display = 'none';
        document.getElementById('furcation_3_14_mp').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'none';
        
        document.getElementById('mg_14_db_txt').style.display = 'none';
        document.getElementById('mg_14_b_txt').style.display = 'none';
        document.getElementById('mg_14_mb_txt').style.display = 'none';
        
        document.getElementById('st_14_db_txt').style.display = 'none';
        document.getElementById('st_14_b_txt').style.display = 'none';
        document.getElementById('st_14_mb_txt').style.display = 'none';
        
        document.getElementById('mg_14_dp_txt').style.display = 'none';
        document.getElementById('mg_14_p_txt').style.display = 'none';
        document.getElementById('mg_14_mp_txt').style.display = 'none';
        
        document.getElementById('st_14_dp_txt').style.display = 'none';
        document.getElementById('st_14_p_txt').style.display = 'none';
        document.getElementById('st_14_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_14_db_rectangle').style.display = 'none';
        document.getElementById('BOP_14_b_rectangle').style.display = 'none';
        document.getElementById('BOP_14_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_14_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_14_p_rectangle').style.display = 'none';
        document.getElementById('BOP_14_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_14_db_btn').style.display = 'none';
        document.getElementById('BOP_14_b_btn').style.display = 'none';
        document.getElementById('BOP_14_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_14_dp_btn').style.display = 'none';
        document.getElementById('BOP_14_p_btn').style.display = 'none';
        document.getElementById('BOP_14_mp_btn').style.display = 'none';
        
        document.getElementById('PI_14_db_rectangle').style.display = 'none';
        document.getElementById('PI_14_b_rectangle').style.display = 'none';
        document.getElementById('PI_14_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_14_dp_rectangle').style.display = 'none';
        document.getElementById('PI_14_p_rectangle').style.display = 'none';
        document.getElementById('PI_14_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_14_db_btn').style.display = 'none';
        document.getElementById('PI_14_b_btn').style.display = 'none';
        document.getElementById('PI_14_mb_btn').style.display = 'none';
        
        document.getElementById('PI_14_dp_btn').style.display = 'none';
        document.getElementById('PI_14_p_btn').style.display = 'none';
        document.getElementById('PI_14_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_14_b').style.display = 'none';
        document.getElementById('polyline_an_14_b').style.display = 'none';
        document.getElementById('polyline_mg_14_b').style.display = 'none';
        
        document.getElementById('polygon_14_p').style.display = 'none';
        document.getElementById('polyline_an_14_p').style.display = 'none';
        document.getElementById('polyline_mg_14_p').style.display = 'none';
        
        document.getElementById('polygon_inter_15_14_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_15_14_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_15_14_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_15_14_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_15_14_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_15_14_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_14_13_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_14_13_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_14_13_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_14_13_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_14_13_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_14_13_p').style.display = 'none';            
        
        document.getElementById('note_14_txt').style.display = 'none';
    }
    else if (Implant_14 !== 1) {
        Tooth_14 = 1;
        document.getElementById('tooth_line_14_b').style.display = 'none';
        document.getElementById('tooth_line_14_p').style.display = 'none';

        document.getElementById('mobility_14_txt').style.display = 'block';

        document.getElementById('implant_14_btn').style.display = 'block';

        document.getElementById('furcation_14_dp_btn').style.display = 'block';
        document.getElementById('furcation_14_mp_btn').style.display = 'block';
        
        document.getElementById('mg_14_db_txt').style.display = 'block';
        document.getElementById('mg_14_b_txt').style.display = 'block';
        document.getElementById('mg_14_mb_txt').style.display = 'block';
        
        document.getElementById('st_14_db_txt').style.display = 'block';
        document.getElementById('st_14_b_txt').style.display = 'block';
        document.getElementById('st_14_mb_txt').style.display = 'block';
        
        document.getElementById('mg_14_dp_txt').style.display = 'block';
        document.getElementById('mg_14_p_txt').style.display = 'block';
        document.getElementById('mg_14_mp_txt').style.display = 'block';
        
        document.getElementById('st_14_dp_txt').style.display = 'block';
        document.getElementById('st_14_p_txt').style.display = 'block';
        document.getElementById('st_14_mp_txt').style.display = 'block';
        
        document.getElementById('note_14_txt').style.display = 'block';

        document.getElementById('polygon_14_b').style.display = 'block';
        document.getElementById('polyline_an_14_b').style.display = 'block';
        document.getElementById('polyline_mg_14_b').style.display = 'block';
        
        document.getElementById('polygon_14_p').style.display = 'block';
        document.getElementById('polyline_an_14_p').style.display = 'block';
        document.getElementById('polyline_mg_14_p').style.display = 'block';

        if (Tooth_15 == 1 && Tooth_14 == 1) {
            document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_p').style.display = 'block';            
        }
        
        if (Tooth_14 == 1 && Tooth_13 == 1) {
            document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_p').style.display = 'block';            
        }
        
        if (Furcation_14_dp == 1) {
            document.getElementById('furcation_1_14_dp').style.display = 'block';
        } else if (Furcation_14_dp == 2) {
            document.getElementById('furcation_2_14_dp').style.display = 'block';
        } else if (Furcation_14_dp == 3) {
            document.getElementById('furcation_3_14_dp').style.display = 'block';
        }
        if (Furcation_14_dp == 1) {
            document.getElementById('furcation_1_14_dp_tab').style.display = 'block';
        } else if (Furcation_14_dp == 2) {
            document.getElementById('furcation_2_14_dp_tab').style.display = 'block';
        } else if (Furcation_14_dp == 3) {
            document.getElementById('furcation_3_14_dp_tab').style.display = 'block';
        }
        if (Furcation_14_mp == 1) {
            document.getElementById('furcation_1_14_mp').style.display = 'block';
        } else if (Furcation_14_mp == 2) {
            document.getElementById('furcation_2_14_mp').style.display = 'block';
        } else if (Furcation_14_mp == 3) {
            document.getElementById('furcation_3_14_mp').style.display = 'block';
        }
        if (Furcation_14_mp == 1) {
            document.getElementById('furcation_1_14_mp_tab').style.display = 'block';
        } else if (Furcation_14_mp == 2) {
            document.getElementById('furcation_2_14_mp_tab').style.display = 'block';
        } else if (Furcation_14_mp == 3) {
            document.getElementById('furcation_3_14_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_14_db_btn').style.display = 'block';
        document.getElementById('BOP_14_b_btn').style.display = 'block';
        document.getElementById('BOP_14_mb_btn').style.display = 'block';

        document.getElementById('BOP_14_dp_btn').style.display = 'block';
        document.getElementById('BOP_14_p_btn').style.display = 'block';
        document.getElementById('BOP_14_mp_btn').style.display = 'block';
        
        if (BOP_14_db == 1) {
            document.getElementById('BOP_14_db_rectangle').style.display = 'block';
        }
        if (BOP_14_b == 1) {
            document.getElementById('BOP_14_b_rectangle').style.display = 'block';
        }
        if (BOP_14_mb == 1) {
            document.getElementById('BOP_14_mb_rectangle').style.display = 'block';
        }
        if (BOP_14_dp == 1) {
            document.getElementById('BOP_14_dp_rectangle').style.display = 'block';
        }
        if (BOP_14_p == 1) {
            document.getElementById('BOP_14_p_rectangle').style.display = 'block';
        }
        if (BOP_14_mp == 1) {
            document.getElementById('BOP_14_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_14_db_btn').style.display = 'block';
        document.getElementById('PI_14_b_btn').style.display = 'block';
        document.getElementById('PI_14_mb_btn').style.display = 'block';

        document.getElementById('PI_14_dp_btn').style.display = 'block';
        document.getElementById('PI_14_p_btn').style.display = 'block';
        document.getElementById('PI_14_mp_btn').style.display = 'block';
        
        if (PI_14_db == 1) {
            document.getElementById('PI_14_db_rectangle').style.display = 'block';
        }
        if (PI_14_b == 1) {
            document.getElementById('PI_14_b_rectangle').style.display = 'block';
        }
        if (PI_14_mb == 1) {
            document.getElementById('PI_14_mb_rectangle').style.display = 'block';
        }
        if (PI_14_dp == 1) {
            document.getElementById('PI_14_dp_rectangle').style.display = 'block';
        }
        if (PI_14_p == 1) {
            document.getElementById('PI_14_p_rectangle').style.display = 'block';
        }
        if (PI_14_mp == 1) {
            document.getElementById('PI_14_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_14 == 1) {
        Tooth_14 = 1;
        document.getElementById('tooth_line_14_b').style.display = 'none';
        document.getElementById('tooth_line_14_p').style.display = 'none';

        document.getElementById('mobility_14_txt').style.display = 'block';
        
        document.getElementById('note_14_txt').style.display = 'block';

        document.getElementById('implant_14_btn').style.display = 'block';
        document.getElementById('implant_14_tab').style.display = 'block';
        document.getElementById('implant_14_b_image').style.display = 'block';
        document.getElementById('implant_14_p_image').style.display = 'block';

        document.getElementById('mg_14_db_txt').style.display = 'block';
        document.getElementById('mg_14_b_txt').style.display = 'block';
        document.getElementById('mg_14_mb_txt').style.display = 'block';
        
        document.getElementById('st_14_db_txt').style.display = 'block';
        document.getElementById('st_14_b_txt').style.display = 'block';
        document.getElementById('st_14_mb_txt').style.display = 'block';
        
        document.getElementById('mg_14_dp_txt').style.display = 'block';
        document.getElementById('mg_14_p_txt').style.display = 'block';
        document.getElementById('mg_14_mp_txt').style.display = 'block';
        
        document.getElementById('st_14_dp_txt').style.display = 'block';
        document.getElementById('st_14_p_txt').style.display = 'block';
        document.getElementById('st_14_mp_txt').style.display = 'block';

        document.getElementById('polygon_14_b').style.display = 'block';
        document.getElementById('polyline_an_14_b').style.display = 'block';
        document.getElementById('polyline_mg_14_b').style.display = 'block';
        
        document.getElementById('polygon_14_p').style.display = 'block';
        document.getElementById('polyline_an_14_p').style.display = 'block';
        document.getElementById('polyline_mg_14_p').style.display = 'block';

        if (Tooth_15 == 1 && Tooth_14 == 1) {
            document.getElementById('polygon_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_15_14_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_15_14_p').style.display = 'block';            
        }
        
        if (Tooth_14 == 1 && Tooth_13 == 1) {
            document.getElementById('polygon_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_14_13_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_14_13_p').style.display = 'block';            
        }

        document.getElementById('BOP_14_db_btn').style.display = 'block';
        document.getElementById('BOP_14_b_btn').style.display = 'block';
        document.getElementById('BOP_14_mb_btn').style.display = 'block';

        document.getElementById('BOP_14_dp_btn').style.display = 'block';
        document.getElementById('BOP_14_p_btn').style.display = 'block';
        document.getElementById('BOP_14_mp_btn').style.display = 'block';
        
        document.getElementById('PI_14_db_btn').style.display = 'block';
        document.getElementById('PI_14_b_btn').style.display = 'block';
        document.getElementById('PI_14_mb_btn').style.display = 'block';

        document.getElementById('PI_14_dp_btn').style.display = 'block';
        document.getElementById('PI_14_p_btn').style.display = 'block';
        document.getElementById('PI_14_mp_btn').style.display = 'block';
        
        if (BOP_14_db == 1) {
            document.getElementById('BOP_14_db_rectangle').style.display = 'block';
        }
        if (BOP_14_b == 1) {
            document.getElementById('BOP_14_b_rectangle').style.display = 'block';
        }
        if (BOP_14_mb == 1) {
            document.getElementById('BOP_14_mb_rectangle').style.display = 'block';
        }
        if (BOP_14_dp == 1) {
            document.getElementById('BOP_14_dp_rectangle').style.display = 'block';
        }
        if (BOP_14_p == 1) {
            document.getElementById('BOP_14_p_rectangle').style.display = 'block';
        }
        if (BOP_14_mp == 1) {
            document.getElementById('BOP_14_mp_rectangle').style.display = 'block';
        }
        
        if (PI_14_db == 1) {
            document.getElementById('PI_14_db_rectangle').style.display = 'block';
        }
        if (PI_14_b == 1) {
            document.getElementById('PI_14_b_rectangle').style.display = 'block';
        }
        if (PI_14_mb == 1) {
            document.getElementById('PI_14_mb_rectangle').style.display = 'block';
        }
        if (PI_14_dp == 1) {
            document.getElementById('PI_14_dp_rectangle').style.display = 'block';
        }
        if (PI_14_p == 1) {
            document.getElementById('PI_14_p_rectangle').style.display = 'block';
        }
        if (PI_14_mp == 1) {
            document.getElementById('PI_14_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_14() {
    if (Implant_14 == 0) {
        Implant_14 = 1;
        
        document.getElementById('implant_14_b_image').style.display = 'block';
        document.getElementById('implant_14_p_image').style.display = 'block';
        document.getElementById('implant_14_tab').style.display = 'block';
        
        document.getElementById('furcation_14_dp_btn').style.display = 'none';
        document.getElementById('furcation_14_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp').style.display = 'none';
        document.getElementById('furcation_2_14_dp').style.display = 'none';
        document.getElementById('furcation_3_14_dp').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp').style.display = 'none';
        document.getElementById('furcation_2_14_mp').style.display = 'none';
        document.getElementById('furcation_3_14_mp').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'none';
    }
    else {
        Implant_14 = 0;
        
        document.getElementById('implant_14_b_image').style.display = 'none';
        document.getElementById('implant_14_p_image').style.display = 'none';
        document.getElementById('implant_14_tab').style.display = 'none';
        
        document.getElementById('furcation_14_dp_btn').style.display = 'block';
        document.getElementById('furcation_14_mp_btn').style.display = 'block';

        if (Furcation_14_dp == 1) {
            document.getElementById('furcation_1_14_dp').style.display = 'block';
        } else if (Furcation_14_dp == 2) {
            document.getElementById('furcation_2_14_dp').style.display = 'block';
        } else if (Furcation_14_dp == 3) {
            document.getElementById('furcation_3_14_dp').style.display = 'block';
        }
        if (Furcation_14_dp == 1) {
            document.getElementById('furcation_1_14_dp_tab').style.display = 'block';
        } else if (Furcation_14_dp == 2) {
            document.getElementById('furcation_2_14_dp_tab').style.display = 'block';
        } else if (Furcation_14_dp == 3) {
            document.getElementById('furcation_3_14_dp_tab').style.display = 'block';
        }
        if (Furcation_14_mp == 1) {
            document.getElementById('furcation_1_14_mp').style.display = 'block';
        } else if (Furcation_14_mp == 2) {
            document.getElementById('furcation_2_14_mp').style.display = 'block';
        } else if (Furcation_14_mp == 3) {
            document.getElementById('furcation_3_14_mp').style.display = 'block';
        }
        if (Furcation_14_mp == 1) {
            document.getElementById('furcation_1_14_mp_tab').style.display = 'block';
        } else if (Furcation_14_mp == 2) {
            document.getElementById('furcation_2_14_mp_tab').style.display = 'block';
        } else if (Furcation_14_mp == 3) {
            document.getElementById('furcation_3_14_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_14_dp() {
    if (Furcation_14_dp == 0) {
        document.getElementById('furcation_1_14_dp_tab').style.display = 'block';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp').style.display = 'block';
        document.getElementById('furcation_2_14_dp').style.display = 'none';
        document.getElementById('furcation_3_14_dp').style.display = 'none';

        Furcation_14_dp = 1;
    }
    else if (Furcation_14_dp == 1) {
        document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'block';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp').style.display = 'none';
        document.getElementById('furcation_2_14_dp').style.display = 'block';
        document.getElementById('furcation_3_14_dp').style.display = 'none';
        
        Furcation_14_dp = 2;
    }
    else if (Furcation_14_dp == 2) {
        document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_14_dp').style.display = 'none';
        document.getElementById('furcation_2_14_dp').style.display = 'none';
        document.getElementById('furcation_3_14_dp').style.display = 'block';
                    
        Furcation_14_dp = 3;
    }
    else if (Furcation_14_dp == 3) {
        document.getElementById('furcation_1_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_dp').style.display = 'none';
        document.getElementById('furcation_2_14_dp').style.display = 'none';
        document.getElementById('furcation_3_14_dp').style.display = 'none';
                    
        Furcation_14_dp = 0;
    }
}

function toggle_furcation_14_mp() {
    if (Furcation_14_mp == 0) {
        document.getElementById('furcation_1_14_mp_tab').style.display = 'block';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp').style.display = 'block';
        document.getElementById('furcation_2_14_mp').style.display = 'none';
        document.getElementById('furcation_3_14_mp').style.display = 'none';

        Furcation_14_mp = 1;
    }
    else if (Furcation_14_mp == 1) {
        document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'block';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp').style.display = 'none';
        document.getElementById('furcation_2_14_mp').style.display = 'block';
        document.getElementById('furcation_3_14_mp').style.display = 'none';
        
        Furcation_14_mp = 2;
    }
    else if (Furcation_14_mp == 2) {
        document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_14_mp').style.display = 'none';
        document.getElementById('furcation_2_14_mp').style.display = 'none';
        document.getElementById('furcation_3_14_mp').style.display = 'block';
                    
        Furcation_14_mp = 3;
    }
    else if (Furcation_14_mp == 3) {
        document.getElementById('furcation_1_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_14_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_14_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_14_mp').style.display = 'none';
        document.getElementById('furcation_2_14_mp').style.display = 'none';
        document.getElementById('furcation_3_14_mp').style.display = 'none';
                    
        Furcation_14_mp = 0;
    }
}

function toggle_BOP_14_db() {
    if (BOP_14_db == 0) {
        BOP_14_db = 1;
        document.getElementById('BOP_14_db_rectangle').style.display = 'block';
    }
    else {
        BOP_14_db = 0;
        document.getElementById('BOP_14_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_14_b() {
    if (BOP_14_b == 0) {
        BOP_14_b = 1;
        document.getElementById('BOP_14_b_rectangle').style.display = 'block';
    }
    else {
        BOP_14_b = 0;
        document.getElementById('BOP_14_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_14_mb() {
    if (BOP_14_mb == 0) {
        BOP_14_mb = 1;
        document.getElementById('BOP_14_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_14_mb = 0;
        document.getElementById('BOP_14_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_db() {
    if (PI_14_db == 0) {
        PI_14_db = 1;
        document.getElementById('PI_14_db_rectangle').style.display = 'block';
    }
    else {
        PI_14_db = 0;
        document.getElementById('PI_14_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_b() {
    if (PI_14_b == 0) {
        PI_14_b = 1;
        document.getElementById('PI_14_b_rectangle').style.display = 'block';
    }
    else {
        PI_14_b = 0;
        document.getElementById('PI_14_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_mb() {
    if (PI_14_mb == 0) {
        PI_14_mb = 1;
        document.getElementById('PI_14_mb_rectangle').style.display = 'block';
    }
    else {
        PI_14_mb = 0;
        document.getElementById('PI_14_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_14_dp() {
    if (BOP_14_dp == 0) {
        BOP_14_dp = 1;
        document.getElementById('BOP_14_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_14_dp = 0;
        document.getElementById('BOP_14_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_14_p() {
    if (BOP_14_p == 0) {
        BOP_14_p = 1;
        document.getElementById('BOP_14_p_rectangle').style.display = 'block';
    }
    else {
        BOP_14_p = 0;
        document.getElementById('BOP_14_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_14_mp() {
    if (BOP_14_mp == 0) {
        BOP_14_mp = 1;
        document.getElementById('BOP_14_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_14_mp = 0;
        document.getElementById('BOP_14_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_dp() {
    if (PI_14_dp == 0) {
        PI_14_dp = 1;
        document.getElementById('PI_14_dp_rectangle').style.display = 'block';
    }
    else {
        PI_14_dp = 0;
        document.getElementById('PI_14_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_p() {
    if (PI_14_p == 0) {
        PI_14_p = 1;
        document.getElementById('PI_14_p_rectangle').style.display = 'block';
    }
    else {
        PI_14_p = 0;
        document.getElementById('PI_14_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_14_mp() {
    if (PI_14_mp == 0) {
        PI_14_mp = 1;
        document.getElementById('PI_14_mp_rectangle').style.display = 'block';
    }
    else {
        PI_14_mp = 0;
        document.getElementById('PI_14_mp_rectangle').style.display = 'none';
    }
}

function change_probing_14(probing_depth_min = 0) {
    if (Tooth_14 == 1) {
        
    // Variablen aus dem Formular
        st_14_db = document.forms[0]["st_14_db"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_db"].value;
        st_14_b = document.forms[0]["st_14_b"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_b"].value;
        st_14_mb = document.forms[0]["st_14_mb"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_mb"].value;

        if (document.forms[0]["st_14_dp"].value > probing_depth_min) {document.forms[0]["st_14_dp"].style.color = 'red';} else {document.forms[0]["st_14_dp"].style.color = 'black'}
        if (document.forms[0]["st_14_p"].value > probing_depth_min) {document.forms[0]["st_14_p"].style.color = 'red';} else {document.forms[0]["st_14_p"].style.color = 'black'}
        if (document.forms[0]["st_14_mp"].value > probing_depth_min) {document.forms[0]["st_14_mp"].style.color = 'red';} else {document.forms[0]["st_14_mp"].style.color = 'black'}
        
        mg_14_db = document.forms[0]["mg_14_db"].value;
        mg_14_b = document.forms[0]["mg_14_b"].value;
        mg_14_mb = document.forms[0]["mg_14_mb"].value;
        
        st_14_dp = document.forms[0]["st_14_dp"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_dp"].value;
        st_14_p = document.forms[0]["st_14_p"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_p"].value;
        st_14_mp = document.forms[0]["st_14_mp"].value - probing_depth_min <= 0 ? 0 : .forms[0]["st_14_mp"].value;

        if (document.forms[0]["st_14_db"].value > probing_depth_min) {document.forms[0]["st_14_db"].style.color = 'red';} else {document.forms[0]["st_14_db"].style.color = 'black'}
        if (document.forms[0]["st_14_b"].value > probing_depth_min) {document.forms[0]["st_14_b"].style.color = 'red';} else {document.forms[0]["st_14_b"].style.color = 'black'}
        if (document.forms[0]["st_14_mb"].value > probing_depth_min) {document.forms[0]["st_14_mb"].style.color = 'red';} else {document.forms[0]["st_14_mb"].style.color = 'black'}
        
        mg_14_dp = document.forms[0]["mg_14_dp"].value;
        mg_14_p = document.forms[0]["mg_14_p"].value;
        mg_14_mp = document.forms[0]["mg_14_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 14 (bukkal) in der Bitmap
        var x_db_14 = 504;							// distal 14
        var x_mb_14 = 528;							// mesial 14
        var x_b_14 = (x_db_14 + x_mb_14)/2;			// bukkal 14
        
    // Set der horizontalen Koordinaten von Zahn 14 (palatinal) in der Bitmap
        var x_dp_14 = 504;							// distal 14
        var x_mp_14 = 529;							// mesial 14
        var x_p_14 = (x_dp_14 + x_mp_14)/2;			// palatinal 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (bukkal) aus dem Formular
        var y_mg_14_db = mg_OK_b + 6.5 * mg_14_db;	// Margo Gingivae distobukkal 14
        var y_mg_14_b = mg_OK_b + 6.5 * mg_14_b;	// Margo Gingivae bukkal 14
        var y_mg_14_mb = mg_OK_b + 6.5 * mg_14_mb;	// Margo Gingivae mesiobukkal 14
        var y_st_14_db = 6.5 * st_14_db;			// Sondierungstiefe distobukkal 14
        var y_st_14_b = 6.5 * st_14_b;				// Sondierungstiefe bukkal 14
        var y_st_14_mb = 6.5 * st_14_mb;			// Sondierungstiefe mesiobukkal 14
        
    // Set der vertikalen Koordinaten von Zahn 14 (palatinal) aus dem Formular
        var y_mg_14_dp = mg_OK_p - 6.5 * mg_14_dp;	// Margo Gingivae distopalatinal 14
        var y_mg_14_p = mg_OK_p - 6.5 * mg_14_p;	// Margo Gingivae palatinal 14
        var y_mg_14_mp = mg_OK_p - 6.5 * mg_14_mp;	// Margo Gingivae mesiopalatinal 14
        var y_st_14_dp = 6.5 * st_14_dp;			// Sondierungstiefe distopalatinal 14
        var y_st_14_p = 6.5 * st_14_p;				// Sondierungstiefe palatinal 14
        var y_st_14_mp = 6.5 * st_14_mp;			// Sondierungstiefe mesiopalatinal 14
        
    // Berechnung des Attachmentniveaus 14 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_db = y_mg_14_db - y_st_14_db;	// Attachmentniveau distobukkal 14
        var y_an_14_b = y_mg_14_b - y_st_14_b;		// Attachmentniveau bukkal 14
        var y_an_14_mb = y_mg_14_mb - y_st_14_mb;	// Attachmentniveau mesiobukkal 14
        
    // Berechnung des Attachmentniveaus 14 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_14_dp = y_mg_14_dp + y_st_14_dp;	// Attachmentniveau distopalatinal 14
        var y_an_14_p = y_mg_14_p + y_st_14_p;		// Attachmentniveau palatinal 14
        var y_an_14_mp = y_mg_14_mp + y_st_14_mp;	// Attachmentniveau mesiopalatinal 14
        
    // Parodontaltasche 14 bukkal zeichnen
        var string = 
            x_db_14 + ", " + y_an_14_db + "  " + 
            x_b_14 + ", " + y_an_14_b + "  " + 
            x_mb_14 + ", " + y_an_14_mb + "  " + 
            x_mb_14 + ", " + y_mg_14_mb + "  " + 
            x_b_14 + ", " + y_mg_14_b + "  " + 
            x_db_14 + ", " + y_mg_14_db;
        document.getElementById("polygon_14_b").setAttribute("points", string);
    // Attachmentniveau 14 bukkal zeichnen
        var string = 
            x_db_14 + ", " + y_an_14_db + "  " + 
            x_b_14 + ", " + y_an_14_b + "  " + 
            x_mb_14 + ", " + y_an_14_mb;
        document.getElementById("polyline_an_14_b").setAttribute("points", string);
    // Margo Gingivae 14 bukkal zeichnen
        var string =
            x_db_14 + ", " + y_mg_14_db + "  " + 
            x_b_14 + ", " + y_mg_14_b + "  " + 
            x_mb_14 + ", " + y_mg_14_mb;
        document.getElementById("polyline_mg_14_b").setAttribute("points", string);

    // Parodontaltasche 14 palatinal zeichnen
        var string = 
            x_dp_14 + ", " + y_an_14_dp + "  " + 
            x_p_14 + ", " + y_an_14_p + "  " + 
            x_mp_14 + ", " + y_an_14_mp + "  " + 
            x_mp_14 + ", " + y_mg_14_mp + "  " + 
            x_p_14 + ", " + y_mg_14_p + "  " + 
            x_dp_14 + ", " + y_mg_14_dp;
        document.getElementById("polygon_14_p").setAttribute("points", string);
    // Attachmentniveau 14 palatinal zeichnen
        var string = 
            x_dp_14 + ", " + y_an_14_dp + "  " + 
            x_p_14 + ", " + y_an_14_p + "  " + 
            x_mp_14 + ", " + y_an_14_mp;
        document.getElementById("polyline_an_14_p").setAttribute("points", string);
    // Margo Gingivae 14 palatinal zeichnen
        var string =
            x_dp_14 + ", " + y_mg_14_dp + "  " + 
            x_p_14 + ", " + y_mg_14_p + "  " + 
            x_mp_14 + ", " + y_mg_14_mp;
        document.getElementById("polyline_mg_14_p").setAttribute("points", string);
    }
    if (Tooth_14 == 1 && Tooth_13 == 1) {

        st_13_db = document.forms[0]["st_13_db"].value;
        mg_13_db = document.forms[0]["mg_13_db"].value;
        
        st_13_dp = document.forms[0]["st_13_dp"].value;
        mg_13_dp = document.forms[0]["mg_13_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 13 (bukkal) in der Bitmap
        var x_db_13 = 544;							// distal 13
        
    // Set der horizontalen Koordinaten von Zahn 13 (palatinal) in der Bitmap
        var x_dp_13 = 546;							// distal 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (bukkal) aus dem Formular
        var y_mg_13_db = mg_OK_b + 6.5 * mg_13_db;	// Margo Gingivae distobukkal 13
        var y_st_13_db = 6.5 * st_13_db;			// Sondierungstiefe distobukkal 13
        
    // Set der vertikalen Koordinaten von Zahn 13 (palatinal) aus dem Formular
        var y_mg_13_dp = mg_OK_p - 6.5 * mg_13_dp;	// Margo Gingivae distopalatinal 13
        var y_st_13_dp = 6.5 * st_13_dp;			// Sondierungstiefe distopalatinal 13
        
    // Berechnung des Attachmentniveaus 13 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_db = y_mg_13_db - y_st_13_db;	// Attachmentniveau distobukkal 13
        
    // Berechnung des Attachmentniveaus 13 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_13_dp = y_mg_13_dp + y_st_13_dp;	// Attachmentniveau distopalatinal 13

    // Parodontaltasche inter_14_13 bukkal zeichnen
        var string = 
            x_mb_14 + ", " + y_an_14_mb + "  " + 
            x_db_13 + ", " + y_an_13_db + "  " + 
            x_db_13 + ", " + y_mg_13_db + "  " + 
            x_mb_14 + ", " + y_mg_14_mb;
        document.getElementById("polygon_inter_14_13_b").setAttribute("points", string);
    // Attachmentniveau inter_14_13 bukkal zeichnen
        var string = 
            x_mb_14 + ", " + y_an_14_mb + "  " + 
            x_db_13 + ", " + y_an_13_db;
        document.getElementById("polyline_an_inter_14_13_b").setAttribute("points", string);
    // Margo Gingivae inter_14_13 bukkal zeichnen
        var string =
            x_mb_14 + ", " + y_mg_14_mb + "  " + 
            x_db_13 + ", " + y_mg_13_db;
        document.getElementById("polyline_mg_inter_14_13_b").setAttribute("points", string);

    // Parodontaltasche inter_14_13 palatinal zeichnen
        var string = 
            x_mp_14 + ", " + y_an_14_mp + "  " + 
            x_dp_13 + ", " + y_an_13_dp + "  " + 
            x_dp_13 + ", " + y_mg_13_dp + "  " + 
            x_mp_14 + ", " + y_mg_14_mp;
        document.getElementById("polygon_inter_14_13_p").setAttribute("points", string);
    // Attachmentniveau inter_14_13 palatinal zeichnen
        var string = 
            x_mp_14 + ", " + y_an_14_mp + "  " + 
            x_dp_13 + ", " + y_an_13_dp;
        document.getElementById("polyline_an_inter_14_13_p").setAttribute("points", string);
    // Margo Gingivae inter_14_13 palatinal zeichnen
        var string =
            x_mp_14 + ", " + y_mg_14_mp + "  " + 
            x_dp_13 + ", " + y_mg_13_dp;
        document.getElementById("polyline_mg_inter_14_13_p").setAttribute("points", string);
    }
    if (Tooth_15 == 1 && Tooth_14 == 1) {

        st_15_mb = document.forms[0]["st_15_mb"].value;
        mg_15_mb = document.forms[0]["mg_15_mb"].value;
        
        st_15_mp = document.forms[0]["st_15_mp"].value;
        mg_15_mp = document.forms[0]["mg_15_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
        var x_mb_15 = 489;							// mesial 15
        
    // Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
        var x_mp_15 = 487;							// mesial 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
        var y_mg_15_mb = mg_OK_b + 6.5 * mg_15_mb;	// Margo Gingivae mesiobukkal 15
        var y_st_15_mb = 6.5 * st_15_mb;			// Sondierungstiefe mesiobukkal 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
        var y_mg_15_mp = mg_OK_p - 6.5 * mg_15_mp;	// Margo Gingivae mesiopalatinal 15
        var y_st_15_mp = 6.5 * st_15_mp;			// Sondierungstiefe mesiopalatinal 15
        
    // Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_mb = y_mg_15_mb - y_st_15_mb;	// Attachmentniveau mesiobukkal 15
        
    // Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_mp = y_mg_15_mp + y_st_15_mp;	// Attachmentniveau mesiopalatinal 15

    // Parodontaltasche inter_15_14 bukkal zeichnen
        var string = 
            x_mb_15 + ", " + y_an_15_mb + "  " + 
            x_db_14 + ", " + y_an_14_db + "  " + 
            x_db_14 + ", " + y_mg_14_db + "  " + 
            x_mb_15 + ", " + y_mg_15_mb;
        document.getElementById("polygon_inter_15_14_b").setAttribute("points", string);
    // Attachmentniveau inter_15_14 bukkal zeichnen
        var string = 
            x_mb_15 + ", " + y_an_15_mb + "  " + 
            x_db_14 + ", " + y_an_14_db;
        document.getElementById("polyline_an_inter_15_14_b").setAttribute("points", string);
    // Margo Gingivae inter_15_14 bukkal zeichnen
        var string =
            x_mb_15 + ", " + y_mg_15_mb + "  " + 
            x_db_14 + ", " + y_mg_14_db;
        document.getElementById("polyline_mg_inter_15_14_b").setAttribute("points", string);

    // Parodontaltasche inter_15_14 palatinal zeichnen
        var string = 
            x_mp_15 + ", " + y_an_15_mp + "  " + 
            x_dp_14 + ", " + y_an_14_dp + "  " + 
            x_dp_14 + ", " + y_mg_14_dp + "  " + 
            x_mp_15 + ", " + y_mg_15_mp;
        document.getElementById("polygon_inter_15_14_p").setAttribute("points", string);
    // Attachmentniveau inter_15_14 palatinal zeichnen
        var string = 
            x_mp_15 + ", " + y_an_15_mp + "  " + 
            x_dp_14 + ", " + y_an_14_dp;
        document.getElementById("polyline_an_inter_15_14_p").setAttribute("points", string);
    // Margo Gingivae inter_15_14 palatinal zeichnen
        var string =
            x_mp_15 + ", " + y_mg_15_mp + "  " + 
            x_dp_14 + ", " + y_mg_14_dp;
        document.getElementById("polyline_mg_inter_15_14_p").setAttribute("points", string);
    }
}