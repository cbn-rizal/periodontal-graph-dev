	// Definition der Variablen fÃ¼r das Formular
    var Tooth_26 = 1;
    var Furcation_26_b = 0;
    var Furcation_26_dp = 0;
    var Furcation_26_mp = 0;
    var Implant_26 = 0;
    var BOP_26_db = 0;
    var BOP_26_b = 0;
    var BOP_26_mb = 0;
    var PI_26_db = 0;
    var PI_26_b = 0;
    var PI_26_mb = 0;
    var BOP_26_dp = 0;
    var BOP_26_p = 0;
    var BOP_26_mp = 0;
    var PI_26_dp = 0;
    var PI_26_p = 0;
    var PI_26_mp = 0;
    var mg_26_db = 0;
    var mg_26_b = 0;
    var mg_26_mb = 0;
    var st_26_db = 0;
    var st_26_b = 0;
    var st_26_mb = 0;
    var mg_26_dp = 0;
    var mg_26_p = 0;
    var mg_26_mp = 0;
    var st_26_dp = 0;
    var st_26_p = 0;
    var st_26_mp = 0;

function clear_data_26() {
    if (Tooth_26 == 1) {
        mg_26_db = 0;
        mg_26_b = 0;
        mg_26_mb = 0;
        st_26_db = 0;
        st_26_b = 0;
        st_26_mb = 0;

            document.getElementById('mg_26_db_txt').value = 0;
            document.getElementById('mg_26_b_txt').value = 0;
            document.getElementById('mg_26_mb_txt').value = 0;
            
            document.getElementById('st_26_db_txt').value = 0;
            document.getElementById('st_26_b_txt').value = 0;
            document.getElementById('st_26_mb_txt').value = 0;
        
            document.forms[0]["st_26_db"].style.color = 'black'
            document.forms[0]["st_26_b"].style.color = 'black'
            document.forms[0]["st_26_mb"].style.color = 'black'
        
        mg_26_dp = 0;
        mg_26_p = 0;
        mg_26_mp = 0;
        st_26_dp = 0;
        st_26_p = 0;
        st_26_mp = 0;

            document.getElementById('mg_26_dp_txt').value = 0;
            document.getElementById('mg_26_p_txt').value = 0;
            document.getElementById('mg_26_mp_txt').value = 0;
            
            document.getElementById('st_26_dp_txt').value = 0;
            document.getElementById('st_26_p_txt').value = 0;
            document.getElementById('st_26_mp_txt').value = 0;

            document.forms[0]["st_26_dp"].style.color = 'black'
            document.forms[0]["st_26_p"].style.color = 'black'
            document.forms[0]["st_26_mp"].style.color = 'black'
        
        change_probing_26();
        
        mobility_26 = 0;

            document.getElementById('mobility_26_txt').value = "0";

        note_26 = "";

            document.getElementById('note_26_txt').value = "";

        Furcation_26_b = 0;
        Furcation_26_dp = 0;
        Furcation_26_mp = 0;

            document.getElementById('furcation_1_26_b').style.display = 'none';
            document.getElementById('furcation_2_26_b').style.display = 'none';
            document.getElementById('furcation_3_26_b').style.display = 'none';
                
            document.getElementById('furcation_1_26_b_tab').style.display = 'none';
            document.getElementById('furcation_2_26_b_tab').style.display = 'none';
            document.getElementById('furcation_3_26_b_tab').style.display = 'none';
            
            document.getElementById('furcation_1_26_dp').style.display = 'none';
            document.getElementById('furcation_2_26_dp').style.display = 'none';
            document.getElementById('furcation_3_26_dp').style.display = 'none';
                
            document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
            document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
            document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
            
            document.getElementById('furcation_1_26_mp').style.display = 'none';
            document.getElementById('furcation_2_26_mp').style.display = 'none';
            document.getElementById('furcation_3_26_mp').style.display = 'none';
            
            document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
            document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
            document.getElementById('furcation_3_26_mp_tab').style.display = 'none';

        BOP_26_db = 0;
        BOP_26_b = 0;
        BOP_26_mb = 0;
                
        BOP_26_dp = 0;
        BOP_26_p = 0;
        BOP_26_mp = 0;
                
            document.getElementById('BOP_26_db_rectangle').style.display = 'none';
            document.getElementById('BOP_26_b_rectangle').style.display = 'none';
            document.getElementById('BOP_26_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_26_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_26_p_rectangle').style.display = 'none';
            document.getElementById('BOP_26_mp_rectangle').style.display = 'none';
            
        PI_26_db = 0;
        PI_26_b = 0;
        PI_26_mb = 0;
                
        PI_26_dp = 0;
        PI_26_p = 0;
        PI_26_mp = 0;

            document.getElementById('PI_26_db_rectangle').style.display = 'none';
            document.getElementById('PI_26_b_rectangle').style.display = 'none';
            document.getElementById('PI_26_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_26_dp_rectangle').style.display = 'none';
            document.getElementById('PI_26_p_rectangle').style.display = 'none';
            document.getElementById('PI_26_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_26() {
    if (Tooth_26 === 1) {
        Tooth_26 = 0;
        document.getElementById('tooth_line_26_b').style.display = 'block';
        document.getElementById('tooth_line_26_p').style.display = 'block';
        
        document.getElementById('mobility_26_txt').style.display = 'none';
        
        document.getElementById('implant_26_btn').style.display = 'none';
        document.getElementById('implant_26_tab').style.display = 'none';
        document.getElementById('implant_26_b_image').style.display = 'none';
        document.getElementById('implant_26_p_image').style.display = 'none';
        
        document.getElementById('furcation_26_b_btn').style.display = 'none';
        document.getElementById('furcation_26_dp_btn').style.display = 'none';
        document.getElementById('furcation_26_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_26_b').style.display = 'none';
        document.getElementById('furcation_2_26_b').style.display = 'none';
        document.getElementById('furcation_3_26_b').style.display = 'none';
        
        document.getElementById('furcation_1_26_b_tab').style.display = 'none';
        document.getElementById('furcation_2_26_b_tab').style.display = 'none';
        document.getElementById('furcation_3_26_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp').style.display = 'none';
        document.getElementById('furcation_2_26_dp').style.display = 'none';
        document.getElementById('furcation_3_26_dp').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp').style.display = 'none';
        document.getElementById('furcation_2_26_mp').style.display = 'none';
        document.getElementById('furcation_3_26_mp').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'none';

        document.getElementById('mg_26_db_txt').style.display = 'none';
        document.getElementById('mg_26_b_txt').style.display = 'none';
        document.getElementById('mg_26_mb_txt').style.display = 'none';
        
        document.getElementById('st_26_db_txt').style.display = 'none';
        document.getElementById('st_26_b_txt').style.display = 'none';
        document.getElementById('st_26_mb_txt').style.display = 'none';
        
        document.getElementById('mg_26_dp_txt').style.display = 'none';
        document.getElementById('mg_26_p_txt').style.display = 'none';
        document.getElementById('mg_26_mp_txt').style.display = 'none';
        
        document.getElementById('st_26_dp_txt').style.display = 'none';
        document.getElementById('st_26_p_txt').style.display = 'none';
        document.getElementById('st_26_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_26_db_rectangle').style.display = 'none';
        document.getElementById('BOP_26_b_rectangle').style.display = 'none';
        document.getElementById('BOP_26_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_26_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_26_p_rectangle').style.display = 'none';
        document.getElementById('BOP_26_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_26_db_btn').style.display = 'none';
        document.getElementById('BOP_26_b_btn').style.display = 'none';
        document.getElementById('BOP_26_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_26_dp_btn').style.display = 'none';
        document.getElementById('BOP_26_p_btn').style.display = 'none';
        document.getElementById('BOP_26_mp_btn').style.display = 'none';
        
        document.getElementById('PI_26_db_rectangle').style.display = 'none';
        document.getElementById('PI_26_b_rectangle').style.display = 'none';
        document.getElementById('PI_26_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_26_dp_rectangle').style.display = 'none';
        document.getElementById('PI_26_p_rectangle').style.display = 'none';
        document.getElementById('PI_26_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_26_db_btn').style.display = 'none';
        document.getElementById('PI_26_b_btn').style.display = 'none';
        document.getElementById('PI_26_mb_btn').style.display = 'none';
        
        document.getElementById('PI_26_dp_btn').style.display = 'none';
        document.getElementById('PI_26_p_btn').style.display = 'none';
        document.getElementById('PI_26_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_26_b').style.display = 'none';
        document.getElementById('polyline_an_26_b').style.display = 'none';
        document.getElementById('polyline_mg_26_b').style.display = 'none';
        
        document.getElementById('polygon_26_p').style.display = 'none';
        document.getElementById('polyline_an_26_p').style.display = 'none';
        document.getElementById('polyline_mg_26_p').style.display = 'none';
        
        document.getElementById('polygon_inter_27_26_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_27_26_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_27_26_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_27_26_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_27_26_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_27_26_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_26_25_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_26_25_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_26_25_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_26_25_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_26_25_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_26_25_p').style.display = 'none';            
        
        document.getElementById('note_26_txt').style.display = 'none';
    }
    else if (Implant_26 !== 1) {
        Tooth_26 = 1;
        document.getElementById('tooth_line_26_b').style.display = 'none';
        document.getElementById('tooth_line_26_p').style.display = 'none';

        document.getElementById('mobility_26_txt').style.display = 'block';

        document.getElementById('implant_26_btn').style.display = 'block';

        document.getElementById('furcation_26_b_btn').style.display = 'block';
        document.getElementById('furcation_26_dp_btn').style.display = 'block';
        document.getElementById('furcation_26_mp_btn').style.display = 'block';
        
        document.getElementById('mg_26_db_txt').style.display = 'block';
        document.getElementById('mg_26_b_txt').style.display = 'block';
        document.getElementById('mg_26_mb_txt').style.display = 'block';
        
        document.getElementById('st_26_db_txt').style.display = 'block';
        document.getElementById('st_26_b_txt').style.display = 'block';
        document.getElementById('st_26_mb_txt').style.display = 'block';
        
        document.getElementById('mg_26_dp_txt').style.display = 'block';
        document.getElementById('mg_26_p_txt').style.display = 'block';
        document.getElementById('mg_26_mp_txt').style.display = 'block';
        
        document.getElementById('st_26_dp_txt').style.display = 'block';
        document.getElementById('st_26_p_txt').style.display = 'block';
        document.getElementById('st_26_mp_txt').style.display = 'block';
        
        document.getElementById('note_26_txt').style.display = 'block';

        document.getElementById('polygon_26_b').style.display = 'block';
        document.getElementById('polyline_an_26_b').style.display = 'block';
        document.getElementById('polyline_mg_26_b').style.display = 'block';
        
        document.getElementById('polygon_26_p').style.display = 'block';
        document.getElementById('polyline_an_26_p').style.display = 'block';
        document.getElementById('polyline_mg_26_p').style.display = 'block';

        if (Tooth_27 == 1 && Tooth_26 == 1) {
            document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_p').style.display = 'block';            
        }
        
        if (Tooth_26 == 1 && Tooth_25 == 1) {
            document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_p').style.display = 'block';            
        }

        if (Furcation_26_b == 1) {
            document.getElementById('furcation_1_26_b').style.display = 'block';
        } else if (Furcation_26_b == 2) {
            document.getElementById('furcation_2_26_b').style.display = 'block';
        } else if (Furcation_26_b == 3) {
            document.getElementById('furcation_3_26_b').style.display = 'block';
        }
        if (Furcation_26_b == 1) {
            document.getElementById('furcation_1_26_b_tab').style.display = 'block';
        } else if (Furcation_26_b == 2) {
            document.getElementById('furcation_2_26_b_tab').style.display = 'block';
        } else if (Furcation_26_b == 3) {
            document.getElementById('furcation_3_26_b_tab').style.display = 'block';
        }
        if (Furcation_26_dp == 1) {
            document.getElementById('furcation_1_26_dp').style.display = 'block';
        } else if (Furcation_26_dp == 2) {
            document.getElementById('furcation_2_26_dp').style.display = 'block';
        } else if (Furcation_26_dp == 3) {
            document.getElementById('furcation_3_26_dp').style.display = 'block';
        }
        if (Furcation_26_dp == 1) {
            document.getElementById('furcation_1_26_dp_tab').style.display = 'block';
        } else if (Furcation_26_dp == 2) {
            document.getElementById('furcation_2_26_dp_tab').style.display = 'block';
        } else if (Furcation_26_dp == 3) {
            document.getElementById('furcation_3_26_dp_tab').style.display = 'block';
        }
        if (Furcation_26_mp == 1) {
            document.getElementById('furcation_1_26_mp').style.display = 'block';
        } else if (Furcation_26_mp == 2) {
            document.getElementById('furcation_2_26_mp').style.display = 'block';
        } else if (Furcation_26_mp == 3) {
            document.getElementById('furcation_3_26_mp').style.display = 'block';
        }
        if (Furcation_26_mp == 1) {
            document.getElementById('furcation_1_26_mp_tab').style.display = 'block';
        } else if (Furcation_26_mp == 2) {
            document.getElementById('furcation_2_26_mp_tab').style.display = 'block';
        } else if (Furcation_26_mp == 3) {
            document.getElementById('furcation_3_26_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_26_db_btn').style.display = 'block';
        document.getElementById('BOP_26_b_btn').style.display = 'block';
        document.getElementById('BOP_26_mb_btn').style.display = 'block';

        document.getElementById('BOP_26_dp_btn').style.display = 'block';
        document.getElementById('BOP_26_p_btn').style.display = 'block';
        document.getElementById('BOP_26_mp_btn').style.display = 'block';
        
        if (BOP_26_db == 1) {
            document.getElementById('BOP_26_db_rectangle').style.display = 'block';
        }
        if (BOP_26_b == 1) {
            document.getElementById('BOP_26_b_rectangle').style.display = 'block';
        }
        if (BOP_26_mb == 1) {
            document.getElementById('BOP_26_mb_rectangle').style.display = 'block';
        }
        if (BOP_26_dp == 1) {
            document.getElementById('BOP_26_dp_rectangle').style.display = 'block';
        }
        if (BOP_26_p == 1) {
            document.getElementById('BOP_26_p_rectangle').style.display = 'block';
        }
        if (BOP_26_mp == 1) {
            document.getElementById('BOP_26_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_26_db_btn').style.display = 'block';
        document.getElementById('PI_26_b_btn').style.display = 'block';
        document.getElementById('PI_26_mb_btn').style.display = 'block';

        document.getElementById('PI_26_dp_btn').style.display = 'block';
        document.getElementById('PI_26_p_btn').style.display = 'block';
        document.getElementById('PI_26_mp_btn').style.display = 'block';
        
        if (PI_26_db == 1) {
            document.getElementById('PI_26_db_rectangle').style.display = 'block';
        }
        if (PI_26_b == 1) {
            document.getElementById('PI_26_b_rectangle').style.display = 'block';
        }
        if (PI_26_mb == 1) {
            document.getElementById('PI_26_mb_rectangle').style.display = 'block';
        }
        if (PI_26_dp == 1) {
            document.getElementById('PI_26_dp_rectangle').style.display = 'block';
        }
        if (PI_26_p == 1) {
            document.getElementById('PI_26_p_rectangle').style.display = 'block';
        }
        if (PI_26_mp == 1) {
            document.getElementById('PI_26_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_26 == 1) {
        Tooth_26 = 1;
        document.getElementById('tooth_line_26_b').style.display = 'none';
        document.getElementById('tooth_line_26_p').style.display = 'none';

        document.getElementById('mobility_26_txt').style.display = 'block';
        
        document.getElementById('note_26_txt').style.display = 'block';

        document.getElementById('implant_26_btn').style.display = 'block';
        document.getElementById('implant_26_tab').style.display = 'block';
        document.getElementById('implant_26_b_image').style.display = 'block';
        document.getElementById('implant_26_p_image').style.display = 'block';

        document.getElementById('mg_26_db_txt').style.display = 'block';
        document.getElementById('mg_26_b_txt').style.display = 'block';
        document.getElementById('mg_26_mb_txt').style.display = 'block';
        
        document.getElementById('st_26_db_txt').style.display = 'block';
        document.getElementById('st_26_b_txt').style.display = 'block';
        document.getElementById('st_26_mb_txt').style.display = 'block';
        
        document.getElementById('mg_26_dp_txt').style.display = 'block';
        document.getElementById('mg_26_p_txt').style.display = 'block';
        document.getElementById('mg_26_mp_txt').style.display = 'block';
        
        document.getElementById('st_26_dp_txt').style.display = 'block';
        document.getElementById('st_26_p_txt').style.display = 'block';
        document.getElementById('st_26_mp_txt').style.display = 'block';

        document.getElementById('polygon_26_b').style.display = 'block';
        document.getElementById('polyline_an_26_b').style.display = 'block';
        document.getElementById('polyline_mg_26_b').style.display = 'block';
        
        document.getElementById('polygon_26_p').style.display = 'block';
        document.getElementById('polyline_an_26_p').style.display = 'block';
        document.getElementById('polyline_mg_26_p').style.display = 'block';

        if (Tooth_27 == 1 && Tooth_26 == 1) {
            document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_p').style.display = 'block';            
        }
        
        if (Tooth_26 == 1 && Tooth_25 == 1) {
            document.getElementById('polygon_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_26_25_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_26_25_p').style.display = 'block';            
        }

        document.getElementById('BOP_26_db_btn').style.display = 'block';
        document.getElementById('BOP_26_b_btn').style.display = 'block';
        document.getElementById('BOP_26_mb_btn').style.display = 'block';

        document.getElementById('BOP_26_dp_btn').style.display = 'block';
        document.getElementById('BOP_26_p_btn').style.display = 'block';
        document.getElementById('BOP_26_mp_btn').style.display = 'block';
        
        document.getElementById('PI_26_db_btn').style.display = 'block';
        document.getElementById('PI_26_b_btn').style.display = 'block';
        document.getElementById('PI_26_mb_btn').style.display = 'block';

        document.getElementById('PI_26_dp_btn').style.display = 'block';
        document.getElementById('PI_26_p_btn').style.display = 'block';
        document.getElementById('PI_26_mp_btn').style.display = 'block';
        
        if (BOP_26_db == 1) {
            document.getElementById('BOP_26_db_rectangle').style.display = 'block';
        }
        if (BOP_26_b == 1) {
            document.getElementById('BOP_26_b_rectangle').style.display = 'block';
        }
        if (BOP_26_mb == 1) {
            document.getElementById('BOP_26_mb_rectangle').style.display = 'block';
        }
        if (BOP_26_dp == 1) {
            document.getElementById('BOP_26_dp_rectangle').style.display = 'block';
        }
        if (BOP_26_p == 1) {
            document.getElementById('BOP_26_p_rectangle').style.display = 'block';
        }
        if (BOP_26_mp == 1) {
            document.getElementById('BOP_26_mp_rectangle').style.display = 'block';
        }
        
        if (PI_26_db == 1) {
            document.getElementById('PI_26_db_rectangle').style.display = 'block';
        }
        if (PI_26_b == 1) {
            document.getElementById('PI_26_b_rectangle').style.display = 'block';
        }
        if (PI_26_mb == 1) {
            document.getElementById('PI_26_mb_rectangle').style.display = 'block';
        }
        if (PI_26_dp == 1) {
            document.getElementById('PI_26_dp_rectangle').style.display = 'block';
        }
        if (PI_26_p == 1) {
            document.getElementById('PI_26_p_rectangle').style.display = 'block';
        }
        if (PI_26_mp == 1) {
            document.getElementById('PI_26_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_26() {
    if (Implant_26 == 0) {
        Implant_26 = 1;
        
        document.getElementById('implant_26_b_image').style.display = 'block';
        document.getElementById('implant_26_p_image').style.display = 'block';
        document.getElementById('implant_26_tab').style.display = 'block';
        
        document.getElementById('furcation_26_b_btn').style.display = 'none';
        document.getElementById('furcation_26_dp_btn').style.display = 'none';
        document.getElementById('furcation_26_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_26_b').style.display = 'none';
        document.getElementById('furcation_2_26_b').style.display = 'none';
        document.getElementById('furcation_3_26_b').style.display = 'none';
        
        document.getElementById('furcation_1_26_b_tab').style.display = 'none';
        document.getElementById('furcation_2_26_b_tab').style.display = 'none';
        document.getElementById('furcation_3_26_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp').style.display = 'none';
        document.getElementById('furcation_2_26_dp').style.display = 'none';
        document.getElementById('furcation_3_26_dp').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp').style.display = 'none';
        document.getElementById('furcation_2_26_mp').style.display = 'none';
        document.getElementById('furcation_3_26_mp').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'none';
    }
    else {
        Implant_26 = 0;
        
        document.getElementById('implant_26_b_image').style.display = 'none';
        document.getElementById('implant_26_p_image').style.display = 'none';
        document.getElementById('implant_26_tab').style.display = 'none';
        
        document.getElementById('furcation_26_b_btn').style.display = 'block';
        document.getElementById('furcation_26_dp_btn').style.display = 'block';
        document.getElementById('furcation_26_mp_btn').style.display = 'block';

        if (Furcation_26_b == 1) {
            document.getElementById('furcation_1_26_b').style.display = 'block';
        } else if (Furcation_26_b == 2) {
            document.getElementById('furcation_2_26_b').style.display = 'block';
        } else if (Furcation_26_b == 3) {
            document.getElementById('furcation_3_26_b').style.display = 'block';
        }
        if (Furcation_26_b == 1) {
            document.getElementById('furcation_1_26_b_tab').style.display = 'block';
        } else if (Furcation_26_b == 2) {
            document.getElementById('furcation_2_26_b_tab').style.display = 'block';
        } else if (Furcation_26_b == 3) {
            document.getElementById('furcation_3_26_b_tab').style.display = 'block';
        }
        if (Furcation_26_dp == 1) {
            document.getElementById('furcation_1_26_dp').style.display = 'block';
        } else if (Furcation_26_dp == 2) {
            document.getElementById('furcation_2_26_dp').style.display = 'block';
        } else if (Furcation_26_dp == 3) {
            document.getElementById('furcation_3_26_dp').style.display = 'block';
        }
        if (Furcation_26_dp == 1) {
            document.getElementById('furcation_1_26_dp_tab').style.display = 'block';
        } else if (Furcation_26_dp == 2) {
            document.getElementById('furcation_2_26_dp_tab').style.display = 'block';
        } else if (Furcation_26_dp == 3) {
            document.getElementById('furcation_3_26_dp_tab').style.display = 'block';
        }
        if (Furcation_26_mp == 1) {
            document.getElementById('furcation_1_26_mp').style.display = 'block';
        } else if (Furcation_26_mp == 2) {
            document.getElementById('furcation_2_26_mp').style.display = 'block';
        } else if (Furcation_26_mp == 3) {
            document.getElementById('furcation_3_26_mp').style.display = 'block';
        }
        if (Furcation_26_mp == 1) {
            document.getElementById('furcation_1_26_mp_tab').style.display = 'block';
        } else if (Furcation_26_mp == 2) {
            document.getElementById('furcation_2_26_mp_tab').style.display = 'block';
        } else if (Furcation_26_mp == 3) {
            document.getElementById('furcation_3_26_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_26_b() {
    if (Furcation_26_b == 0) {
        document.getElementById('furcation_1_26_b_tab').style.display = 'block';
        document.getElementById('furcation_2_26_b_tab').style.display = 'none';
        document.getElementById('furcation_3_26_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_b').style.display = 'block';
        document.getElementById('furcation_2_26_b').style.display = 'none';
        document.getElementById('furcation_3_26_b').style.display = 'none';

        Furcation_26_b = 1;
    }
    else if (Furcation_26_b == 1) {
        document.getElementById('furcation_1_26_b_tab').style.display = 'none';
        document.getElementById('furcation_2_26_b_tab').style.display = 'block';
        document.getElementById('furcation_3_26_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_b').style.display = 'none';
        document.getElementById('furcation_2_26_b').style.display = 'block';
        document.getElementById('furcation_3_26_b').style.display = 'none';
        
        Furcation_26_b = 2;
    }
    else if (Furcation_26_b == 2) {
        document.getElementById('furcation_1_26_b_tab').style.display = 'none';
        document.getElementById('furcation_2_26_b_tab').style.display = 'none';
        document.getElementById('furcation_3_26_b_tab').style.display = 'block';
        
        document.getElementById('furcation_1_26_b').style.display = 'none';
        document.getElementById('furcation_2_26_b').style.display = 'none';
        document.getElementById('furcation_3_26_b').style.display = 'block';
                    
        Furcation_26_b = 3;
    }
    else if (Furcation_26_b == 3) {
        document.getElementById('furcation_1_26_b_tab').style.display = 'none';
        document.getElementById('furcation_2_26_b_tab').style.display = 'none';
        document.getElementById('furcation_3_26_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_b').style.display = 'none';
        document.getElementById('furcation_2_26_b').style.display = 'none';
        document.getElementById('furcation_3_26_b').style.display = 'none';
                    
        Furcation_26_b = 0;
    }
}

function toggle_furcation_26_dp() {
    if (Furcation_26_dp == 0) {
        document.getElementById('furcation_1_26_dp_tab').style.display = 'block';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp').style.display = 'block';
        document.getElementById('furcation_2_26_dp').style.display = 'none';
        document.getElementById('furcation_3_26_dp').style.display = 'none';

        Furcation_26_dp = 1;
    }
    else if (Furcation_26_dp == 1) {
        document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'block';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp').style.display = 'none';
        document.getElementById('furcation_2_26_dp').style.display = 'block';
        document.getElementById('furcation_3_26_dp').style.display = 'none';
        
        Furcation_26_dp = 2;
    }
    else if (Furcation_26_dp == 2) {
        document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_26_dp').style.display = 'none';
        document.getElementById('furcation_2_26_dp').style.display = 'none';
        document.getElementById('furcation_3_26_dp').style.display = 'block';
                    
        Furcation_26_dp = 3;
    }
    else if (Furcation_26_dp == 3) {
        document.getElementById('furcation_1_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_dp').style.display = 'none';
        document.getElementById('furcation_2_26_dp').style.display = 'none';
        document.getElementById('furcation_3_26_dp').style.display = 'none';
                    
        Furcation_26_dp = 0;
    }
}

function toggle_furcation_26_mp() {
    if (Furcation_26_mp == 0) {
        document.getElementById('furcation_1_26_mp_tab').style.display = 'block';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp').style.display = 'block';
        document.getElementById('furcation_2_26_mp').style.display = 'none';
        document.getElementById('furcation_3_26_mp').style.display = 'none';

        Furcation_26_mp = 1;
    }
    else if (Furcation_26_mp == 1) {
        document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'block';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp').style.display = 'none';
        document.getElementById('furcation_2_26_mp').style.display = 'block';
        document.getElementById('furcation_3_26_mp').style.display = 'none';
        
        Furcation_26_mp = 2;
    }
    else if (Furcation_26_mp == 2) {
        document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_26_mp').style.display = 'none';
        document.getElementById('furcation_2_26_mp').style.display = 'none';
        document.getElementById('furcation_3_26_mp').style.display = 'block';
                    
        Furcation_26_mp = 3;
    }
    else if (Furcation_26_mp == 3) {
        document.getElementById('furcation_1_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_26_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_26_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_26_mp').style.display = 'none';
        document.getElementById('furcation_2_26_mp').style.display = 'none';
        document.getElementById('furcation_3_26_mp').style.display = 'none';
                    
        Furcation_26_mp = 0;
    }
}

function toggle_BOP_26_db() {
    if (BOP_26_db == 0) {
        BOP_26_db = 1;
        document.getElementById('BOP_26_db_rectangle').style.display = 'block';
    }
    else {
        BOP_26_db = 0;
        document.getElementById('BOP_26_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_26_b() {
    if (BOP_26_b == 0) {
        BOP_26_b = 1;
        document.getElementById('BOP_26_b_rectangle').style.display = 'block';
    }
    else {
        BOP_26_b = 0;
        document.getElementById('BOP_26_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_26_mb() {
    if (BOP_26_mb == 0) {
        BOP_26_mb = 1;
        document.getElementById('BOP_26_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_26_mb = 0;
        document.getElementById('BOP_26_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_db() {
    if (PI_26_db == 0) {
        PI_26_db = 1;
        document.getElementById('PI_26_db_rectangle').style.display = 'block';
    }
    else {
        PI_26_db = 0;
        document.getElementById('PI_26_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_b() {
    if (PI_26_b == 0) {
        PI_26_b = 1;
        document.getElementById('PI_26_b_rectangle').style.display = 'block';
    }
    else {
        PI_26_b = 0;
        document.getElementById('PI_26_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_mb() {
    if (PI_26_mb == 0) {
        PI_26_mb = 1;
        document.getElementById('PI_26_mb_rectangle').style.display = 'block';
    }
    else {
        PI_26_mb = 0;
        document.getElementById('PI_26_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_26_dp() {
    if (BOP_26_dp == 0) {
        BOP_26_dp = 1;
        document.getElementById('BOP_26_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_26_dp = 0;
        document.getElementById('BOP_26_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_26_p() {
    if (BOP_26_p == 0) {
        BOP_26_p = 1;
        document.getElementById('BOP_26_p_rectangle').style.display = 'block';
    }
    else {
        BOP_26_p = 0;
        document.getElementById('BOP_26_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_26_mp() {
    if (BOP_26_mp == 0) {
        BOP_26_mp = 1;
        document.getElementById('BOP_26_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_26_mp = 0;
        document.getElementById('BOP_26_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_dp() {
    if (PI_26_dp == 0) {
        PI_26_dp = 1;
        document.getElementById('PI_26_dp_rectangle').style.display = 'block';
    }
    else {
        PI_26_dp = 0;
        document.getElementById('PI_26_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_p() {
    if (PI_26_p == 0) {
        PI_26_p = 1;
        document.getElementById('PI_26_p_rectangle').style.display = 'block';
    }
    else {
        PI_26_p = 0;
        document.getElementById('PI_26_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_26_mp() {
    if (PI_26_mp == 0) {
        PI_26_mp = 1;
        document.getElementById('PI_26_mp_rectangle').style.display = 'block';
    }
    else {
        PI_26_mp = 0;
        document.getElementById('PI_26_mp_rectangle').style.display = 'none';
    }
}

function change_probing_26(probing_depth_min = 0) {
    if (Tooth_26 == 1) {
        
    // Variablen aus dem Formular
        st_26_db = document.forms[0]["st_26_db"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_db"].value - probing_depth_min;
        st_26_b = document.forms[0]["st_26_b"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_b"].value - probing_depth_min;
        st_26_mb = document.forms[0]["st_26_mb"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_mb"].value - probing_depth_min;

        if (document.forms[0]["st_26_dp"].value > probing_depth_min) {document.forms[0]["st_26_dp"].style.color = 'red';} else {document.forms[0]["st_26_dp"].style.color = 'black'};
        if (document.forms[0]["st_26_p"].value > probing_depth_min) {document.forms[0]["st_26_p"].style.color = 'red';} else {document.forms[0]["st_26_p"].style.color = 'black'};
        if (document.forms[0]["st_26_mp"].value > probing_depth_min) {document.forms[0]["st_26_mp"].style.color = 'red';} else {document.forms[0]["st_26_mp"].style.color = 'black'};
        
        mg_26_db = document.forms[0]["mg_26_db"].value;
        mg_26_b = document.forms[0]["mg_26_b"].value;
        mg_26_mb = document.forms[0]["mg_26_mb"].value;
        
        st_26_dp = document.forms[0]["st_26_dp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_dp"].value - probing_depth_min;
        st_26_p = document.forms[0]["st_26_p"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_p"].value - probing_depth_min;
        st_26_mp = document.forms[0]["st_26_mp"].value - probing_depth_min <= 0 ? 0 : document.forms[0]["st_26_mp"].value - probing_depth_min;

        if (document.forms[0]["st_26_db"].value > probing_depth_min) {document.forms[0]["st_26_db"].style.color = 'red';} else {document.forms[0]["st_26_db"].style.color = 'black'};
        if (document.forms[0]["st_26_b"].value > probing_depth_min) {document.forms[0]["st_26_b"].style.color = 'red';} else {document.forms[0]["st_26_b"].style.color = 'black'};
        if (document.forms[0]["st_26_mb"].value > probing_depth_min) {document.forms[0]["st_26_mb"].style.color = 'red';} else {document.forms[0]["st_26_mb"].style.color = 'black'};
        
        mg_26_dp = document.forms[0]["mg_26_dp"].value;
        mg_26_p = document.forms[0]["mg_26_p"].value;
        mg_26_mp = document.forms[0]["mg_26_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
        var x_db_26 = 961;							// distal 26
        var x_mb_26 = 907;							// mesial 26
        var x_b_26 = (x_db_26 + x_mb_26)/2;			// bukkal 26
        
    // Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
        var x_dp_26 = 960;							// distal 26
        var x_mp_26 = 912;							// mesial 26
        var x_p_26 = (x_dp_26 + x_mp_26)/2;			// palatinal 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
        var y_mg_26_db = mg_OK_b + 6.5 * mg_26_db;	// Margo Gingivae distobukkal 26
        var y_mg_26_b = mg_OK_b + 6.5 * mg_26_b;	// Margo Gingivae bukkal 26
        var y_mg_26_mb = mg_OK_b + 6.5 * mg_26_mb;	// Margo Gingivae mesiobukkal 26
        var y_st_26_db = 6.5 * st_26_db;			// Sondierungstiefe distobukkal 26
        var y_st_26_b = 6.5 * st_26_b;				// Sondierungstiefe bukkal 26
        var y_st_26_mb = 6.5 * st_26_mb;			// Sondierungstiefe mesiobukkal 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
        var y_mg_26_dp = mg_OK_p - 6.5 * mg_26_dp;	// Margo Gingivae distopalatinal 26
        var y_mg_26_p = mg_OK_p - 6.5 * mg_26_p;	// Margo Gingivae palatinal 26
        var y_mg_26_mp = mg_OK_p - 6.5 * mg_26_mp;	// Margo Gingivae mesiopalatinal 26
        var y_st_26_dp = 6.5 * st_26_dp;			// Sondierungstiefe distopalatinal 26
        var y_st_26_p = 6.5 * st_26_p;				// Sondierungstiefe palatinal 26
        var y_st_26_mp = 6.5 * st_26_mp;			// Sondierungstiefe mesiopalatinal 26
        
    // Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_db = y_mg_26_db - y_st_26_db;	// Attachmentniveau distobukkal 26
        var y_an_26_b = y_mg_26_b - y_st_26_b;		// Attachmentniveau bukkal 26
        var y_an_26_mb = y_mg_26_mb - y_st_26_mb;	// Attachmentniveau mesiobukkal 26
        
    // Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_dp = y_mg_26_dp + y_st_26_dp;	// Attachmentniveau distopalatinal 26
        var y_an_26_p = y_mg_26_p + y_st_26_p;		// Attachmentniveau palatinal 26
        var y_an_26_mp = y_mg_26_mp + y_st_26_mp;	// Attachmentniveau mesiopalatinal 26
        
    // Parodontaltasche 26 bukkal zeichnen
        var string = 
            x_db_26 + ", " + y_an_26_db + "  " + 
            x_b_26 + ", " + y_an_26_b + "  " + 
            x_mb_26 + ", " + y_an_26_mb + "  " + 
            x_mb_26 + ", " + y_mg_26_mb + "  " + 
            x_b_26 + ", " + y_mg_26_b + "  " + 
            x_db_26 + ", " + y_mg_26_db;
        document.getElementById("polygon_26_b").setAttribute("points", string);
    // Attachmentniveau 26 bukkal zeichnen
        var string = 
            x_db_26 + ", " + y_an_26_db + "  " + 
            x_b_26 + ", " + y_an_26_b + "  " + 
            x_mb_26 + ", " + y_an_26_mb;
        document.getElementById("polyline_an_26_b").setAttribute("points", string);
    // Margo Gingivae 26 bukkal zeichnen
        var string =
            x_db_26 + ", " + y_mg_26_db + "  " + 
            x_b_26 + ", " + y_mg_26_b + "  " + 
            x_mb_26 + ", " + y_mg_26_mb;
        document.getElementById("polyline_mg_26_b").setAttribute("points", string);

    // Parodontaltasche 26 palatinal zeichnen
        var string = 
            x_dp_26 + ", " + y_an_26_dp + "  " + 
            x_p_26 + ", " + y_an_26_p + "  " + 
            x_mp_26 + ", " + y_an_26_mp + "  " + 
            x_mp_26 + ", " + y_mg_26_mp + "  " + 
            x_p_26 + ", " + y_mg_26_p + "  " + 
            x_dp_26 + ", " + y_mg_26_dp;
        document.getElementById("polygon_26_p").setAttribute("points", string);
    // Attachmentniveau 26 palatinal zeichnen
        var string = 
            x_dp_26 + ", " + y_an_26_dp + "  " + 
            x_p_26 + ", " + y_an_26_p + "  " + 
            x_mp_26 + ", " + y_an_26_mp;
        document.getElementById("polyline_an_26_p").setAttribute("points", string);
    // Margo Gingivae 26 palatinal zeichnen
        var string =
            x_dp_26 + ", " + y_mg_26_dp + "  " + 
            x_p_26 + ", " + y_mg_26_p + "  " + 
            x_mp_26 + ", " + y_mg_26_mp;
        document.getElementById("polyline_mg_26_p").setAttribute("points", string);
    }
    if (Tooth_26 == 1 && Tooth_25 == 1) {

        st_25_db = document.forms[0]["st_25_db"].value;
        mg_25_db = document.forms[0]["mg_25_db"].value;
        
        st_25_dp = document.forms[0]["st_25_dp"].value;
        mg_25_dp = document.forms[0]["mg_25_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
        var x_db_25 = 895;							// distal 25
        
    // Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
        var x_dp_25 = 897;							// distal 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
        var y_mg_25_db = mg_OK_b + 6.5 * mg_25_db;	// Margo Gingivae distobukkal 25
        var y_st_25_db = 6.5 * st_25_db;			// Sondierungstiefe distobukkal 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
        var y_mg_25_dp = mg_OK_p - 6.5 * mg_25_dp;	// Margo Gingivae distopalatinal 25
        var y_st_25_dp = 6.5 * st_25_dp;			// Sondierungstiefe distopalatinal 25
        
    // Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_db = y_mg_25_db - y_st_25_db;	// Attachmentniveau distobukkal 25
        
    // Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_dp = y_mg_25_dp + y_st_25_dp;	// Attachmentniveau distopalatinal 25

    // Parodontaltasche inter_26_25 bukkal zeichnen
        var string = 
            x_mb_26 + ", " + y_an_26_mb + "  " + 
            x_db_25 + ", " + y_an_25_db + "  " + 
            x_db_25 + ", " + y_mg_25_db + "  " + 
            x_mb_26 + ", " + y_mg_26_mb;
        document.getElementById("polygon_inter_26_25_b").setAttribute("points", string);
    // Attachmentniveau inter_26_25 bukkal zeichnen
        var string = 
            x_mb_26 + ", " + y_an_26_mb + "  " + 
            x_db_25 + ", " + y_an_25_db;
        document.getElementById("polyline_an_inter_26_25_b").setAttribute("points", string);
    // Margo Gingivae inter_26_25 bukkal zeichnen
        var string =
            x_mb_26 + ", " + y_mg_26_mb + "  " + 
            x_db_25 + ", " + y_mg_25_db;
        document.getElementById("polyline_mg_inter_26_25_b").setAttribute("points", string);

    // Parodontaltasche inter_26_25 palatinal zeichnen
        var string = 
            x_mp_26 + ", " + y_an_26_mp + "  " + 
            x_dp_25 + ", " + y_an_25_dp + "  " + 
            x_dp_25 + ", " + y_mg_25_dp + "  " + 
            x_mp_26 + ", " + y_mg_26_mp;
        document.getElementById("polygon_inter_26_25_p").setAttribute("points", string);
    // Attachmentniveau inter_26_25 palatinal zeichnen
        var string = 
            x_mp_26 + ", " + y_an_26_mp + "  " + 
            x_dp_25 + ", " + y_an_25_dp;
        document.getElementById("polyline_an_inter_26_25_p").setAttribute("points", string);
    // Margo Gingivae inter_26_25 palatinal zeichnen
        var string =
            x_mp_26 + ", " + y_mg_26_mp + "  " + 
            x_dp_25 + ", " + y_mg_25_dp;
        document.getElementById("polyline_mg_inter_26_25_p").setAttribute("points", string);
    }
    if (Tooth_27 == 1 && Tooth_26 == 1) {

        st_27_mb = document.forms[0]["st_27_mb"].value;
        mg_27_mb = document.forms[0]["mg_27_mb"].value;
        
        st_27_mp = document.forms[0]["st_27_mp"].value;
        mg_27_mp = document.forms[0]["mg_27_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
        var x_mb_27 = 972;							// mesial 27
        
    // Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
        var x_mp_27 = 976;							// mesial 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
        var y_mg_27_mb = mg_OK_b + 6.5 * mg_27_mb;	// Margo Gingivae mesiobukkal 27
        var y_st_27_mb = 6.5 * st_27_mb;			// Sondierungstiefe mesiobukkal 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
        var y_mg_27_mp = mg_OK_p - 6.5 * mg_27_mp;	// Margo Gingivae mesiopalatinal 27
        var y_st_27_mp = 6.5 * st_27_mp;			// Sondierungstiefe mesiopalatinal 27
        
    // Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_mb = y_mg_27_mb - y_st_27_mb;	// Attachmentniveau mesiobukkal 27
        
    // Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_mp = y_mg_27_mp + y_st_27_mp;	// Attachmentniveau mesiopalatinal 27

    // Parodontaltasche inter_27_26 bukkal zeichnen
        var string = 
            x_mb_27 + ", " + y_an_27_mb + "  " + 
            x_db_26 + ", " + y_an_26_db + "  " + 
            x_db_26 + ", " + y_mg_26_db + "  " + 
            x_mb_27 + ", " + y_mg_27_mb;
        document.getElementById("polygon_inter_27_26_b").setAttribute("points", string);
    // Attachmentniveau inter_27_26 bukkal zeichnen
        var string = 
            x_mb_27 + ", " + y_an_27_mb + "  " + 
            x_db_26 + ", " + y_an_26_db;
        document.getElementById("polyline_an_inter_27_26_b").setAttribute("points", string);
    // Margo Gingivae inter_27_26 bukkal zeichnen
        var string =
            x_mb_27 + ", " + y_mg_27_mb + "  " + 
            x_db_26 + ", " + y_mg_26_db;
        document.getElementById("polyline_mg_inter_27_26_b").setAttribute("points", string);

    // Parodontaltasche inter_27_26 palatinal zeichnen
        var string = 
            x_mp_27 + ", " + y_an_27_mp + "  " + 
            x_dp_26 + ", " + y_an_26_dp + "  " + 
            x_dp_26 + ", " + y_mg_26_dp + "  " + 
            x_mp_27 + ", " + y_mg_27_mp;
        document.getElementById("polygon_inter_27_26_p").setAttribute("points", string);
    // Attachmentniveau inter_27_26 palatinal zeichnen
        var string = 
            x_mp_27 + ", " + y_an_27_mp + "  " + 
            x_dp_26 + ", " + y_an_26_dp;
        document.getElementById("polyline_an_inter_27_26_p").setAttribute("points", string);
    // Margo Gingivae inter_27_26 palatinal zeichnen
        var string =
            x_mp_27 + ", " + y_mg_27_mp + "  " + 
            x_dp_26 + ", " + y_mg_26_dp;
        document.getElementById("polyline_mg_inter_27_26_p").setAttribute("points", string);
    }
}