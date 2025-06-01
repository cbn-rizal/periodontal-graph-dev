	// Definition der Variablen fÃ¼r das Formular
    var Zahn_17 = 1;
    var Furkation_17_b = 0;
    var Furkation_17_dp = 0;
    var Furkation_17_mp = 0;
    var Implantat_17 = 0;
    var BOP_17_db = 0;
    var BOP_17_b = 0;
    var BOP_17_mb = 0;
    var PI_17_db = 0;
    var PI_17_b = 0;
    var PI_17_mb = 0;
    var BOP_17_dp = 0;
    var BOP_17_p = 0;
    var BOP_17_mp = 0;
    var PI_17_dp = 0;
    var PI_17_p = 0;
    var PI_17_mp = 0;
    var mg_17_db = 0;
    var mg_17_b = 0;
    var mg_17_mb = 0;
    var st_17_db = 0;
    var st_17_b = 0;
    var st_17_mb = 0;
    var mg_17_dp = 0;
    var mg_17_p = 0;
    var mg_17_mp = 0;
    var st_17_dp = 0;
    var st_17_p = 0;
    var st_17_mp = 0;

function clear_data_17() {
    if (Zahn_17 == 1) {
        mg_17_db = 0;
        mg_17_b = 0;
        mg_17_mb = 0;
        st_17_db = 0;
        st_17_b = 0;
        st_17_mb = 0;

            document.getElementById('mg_17_db_txt').value = 0;
            document.getElementById('mg_17_b_txt').value = 0;
            document.getElementById('mg_17_mb_txt').value = 0;
            
            document.getElementById('st_17_db_txt').value = 0;
            document.getElementById('st_17_b_txt').value = 0;
            document.getElementById('st_17_mb_txt').value = 0;
        
            document.forms[0]["st_17_db"].style.color = 'black'
            document.forms[0]["st_17_b"].style.color = 'black'
            document.forms[0]["st_17_mb"].style.color = 'black'
        
        mg_17_dp = 0;
        mg_17_p = 0;
        mg_17_mp = 0;
        st_17_dp = 0;
        st_17_p = 0;
        st_17_mp = 0;

            document.getElementById('mg_17_dp_txt').value = 0;
            document.getElementById('mg_17_p_txt').value = 0;
            document.getElementById('mg_17_mp_txt').value = 0;
            
            document.getElementById('st_17_dp_txt').value = 0;
            document.getElementById('st_17_p_txt').value = 0;
            document.getElementById('st_17_mp_txt').value = 0;

            document.forms[0]["st_17_dp"].style.color = 'black'
            document.forms[0]["st_17_p"].style.color = 'black'
            document.forms[0]["st_17_mp"].style.color = 'black'
        
        change_probing_17();
        
        mobility_17 = 0;

            document.getElementById('mobility_17_txt').value = "0";

        note_17 = "";

            document.getElementById('note_17_txt').value = "";

        Furkation_17_b = 0;
        Furkation_17_dp = 0;
        Furkation_17_mp = 0;

            document.getElementById('furkation_1_17_b').style.display = 'none';
            document.getElementById('furkation_2_17_b').style.display = 'none';
            document.getElementById('furkation_3_17_b').style.display = 'none';
                
            document.getElementById('furkation_1_17_b_tab').style.display = 'none';
            document.getElementById('furkation_2_17_b_tab').style.display = 'none';
            document.getElementById('furkation_3_17_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_17_dp').style.display = 'none';
            document.getElementById('furkation_2_17_dp').style.display = 'none';
            document.getElementById('furkation_3_17_dp').style.display = 'none';
                
            document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
            document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
            document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
            
            document.getElementById('furkation_1_17_mp').style.display = 'none';
            document.getElementById('furkation_2_17_mp').style.display = 'none';
            document.getElementById('furkation_3_17_mp').style.display = 'none';
            
            document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
            document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
            document.getElementById('furkation_3_17_mp_tab').style.display = 'none';

        BOP_17_db = 0;
        BOP_17_b = 0;
        BOP_17_mb = 0;
                
        BOP_17_dp = 0;
        BOP_17_p = 0;
        BOP_17_mp = 0;
                
            document.getElementById('BOP_17_db_rectangle').style.display = 'none';
            document.getElementById('BOP_17_b_rectangle').style.display = 'none';
            document.getElementById('BOP_17_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_17_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_17_p_rectangle').style.display = 'none';
            document.getElementById('BOP_17_mp_rectangle').style.display = 'none';
            
        PI_17_db = 0;
        PI_17_b = 0;
        PI_17_mb = 0;
                
        PI_17_dp = 0;
        PI_17_p = 0;
        PI_17_mp = 0;

            document.getElementById('PI_17_db_rectangle').style.display = 'none';
            document.getElementById('PI_17_b_rectangle').style.display = 'none';
            document.getElementById('PI_17_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_17_dp_rectangle').style.display = 'none';
            document.getElementById('PI_17_p_rectangle').style.display = 'none';
            document.getElementById('PI_17_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_17() {
    if (Zahn_17 === 1) {
        Zahn_17 = 0;
        document.getElementById('tooth_line_17_b').style.display = 'block';
        document.getElementById('tooth_line_17_p').style.display = 'block';
        
        document.getElementById('mobility_17_txt').style.display = 'none';
        
        document.getElementById('implantat_17_btn').style.display = 'none';
        document.getElementById('implantat_17_tab').style.display = 'none';
        document.getElementById('implantat_17_b_image').style.display = 'none';
        document.getElementById('implantat_17_p_image').style.display = 'none';
        
        document.getElementById('furkation_17_b_btn').style.display = 'none';
        document.getElementById('furkation_17_dp_btn').style.display = 'none';
        document.getElementById('furkation_17_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_17_b').style.display = 'none';
        document.getElementById('furkation_2_17_b').style.display = 'none';
        document.getElementById('furkation_3_17_b').style.display = 'none';
        
        document.getElementById('furkation_1_17_b_tab').style.display = 'none';
        document.getElementById('furkation_2_17_b_tab').style.display = 'none';
        document.getElementById('furkation_3_17_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp').style.display = 'none';
        document.getElementById('furkation_2_17_dp').style.display = 'none';
        document.getElementById('furkation_3_17_dp').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp').style.display = 'none';
        document.getElementById('furkation_2_17_mp').style.display = 'none';
        document.getElementById('furkation_3_17_mp').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'none';
        
        document.getElementById('mg_17_db_txt').style.display = 'none';
        document.getElementById('mg_17_b_txt').style.display = 'none';
        document.getElementById('mg_17_mb_txt').style.display = 'none';
        
        document.getElementById('st_17_db_txt').style.display = 'none';
        document.getElementById('st_17_b_txt').style.display = 'none';
        document.getElementById('st_17_mb_txt').style.display = 'none';
        
        document.getElementById('mg_17_dp_txt').style.display = 'none';
        document.getElementById('mg_17_p_txt').style.display = 'none';
        document.getElementById('mg_17_mp_txt').style.display = 'none';
        
        document.getElementById('st_17_dp_txt').style.display = 'none';
        document.getElementById('st_17_p_txt').style.display = 'none';
        document.getElementById('st_17_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_17_db_rectangle').style.display = 'none';
        document.getElementById('BOP_17_b_rectangle').style.display = 'none';
        document.getElementById('BOP_17_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_17_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_17_p_rectangle').style.display = 'none';
        document.getElementById('BOP_17_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_17_db_btn').style.display = 'none';
        document.getElementById('BOP_17_b_btn').style.display = 'none';
        document.getElementById('BOP_17_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_17_dp_btn').style.display = 'none';
        document.getElementById('BOP_17_p_btn').style.display = 'none';
        document.getElementById('BOP_17_mp_btn').style.display = 'none';
        
        document.getElementById('PI_17_db_rectangle').style.display = 'none';
        document.getElementById('PI_17_b_rectangle').style.display = 'none';
        document.getElementById('PI_17_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_17_dp_rectangle').style.display = 'none';
        document.getElementById('PI_17_p_rectangle').style.display = 'none';
        document.getElementById('PI_17_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_17_db_btn').style.display = 'none';
        document.getElementById('PI_17_b_btn').style.display = 'none';
        document.getElementById('PI_17_mb_btn').style.display = 'none';
        
        document.getElementById('PI_17_dp_btn').style.display = 'none';
        document.getElementById('PI_17_p_btn').style.display = 'none';
        document.getElementById('PI_17_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_17_b').style.display = 'none';
        document.getElementById('polyline_an_17_b').style.display = 'none';
        document.getElementById('polyline_mg_17_b').style.display = 'none';
        
        document.getElementById('polygon_17_p').style.display = 'none';
        document.getElementById('polyline_an_17_p').style.display = 'none';
        document.getElementById('polyline_mg_17_p').style.display = 'none';
        
        document.getElementById('polygon_inter_18_17_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_18_17_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_18_17_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_18_17_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_18_17_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_18_17_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_17_16_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_17_16_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_17_16_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_17_16_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_17_16_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_17_16_p').style.display = 'none';            
        
        document.getElementById('note_17_txt').style.display = 'none';
    }
    else if (Implantat_17 !== 1) {
        Zahn_17 = 1;
        document.getElementById('tooth_line_17_b').style.display = 'none';
        document.getElementById('tooth_line_17_p').style.display = 'none';

        document.getElementById('mobility_17_txt').style.display = 'block';

        document.getElementById('implantat_17_btn').style.display = 'block';

        document.getElementById('furkation_17_b_btn').style.display = 'block';
        document.getElementById('furkation_17_dp_btn').style.display = 'block';
        document.getElementById('furkation_17_mp_btn').style.display = 'block';
        
        document.getElementById('mg_17_db_txt').style.display = 'block';
        document.getElementById('mg_17_b_txt').style.display = 'block';
        document.getElementById('mg_17_mb_txt').style.display = 'block';
        
        document.getElementById('st_17_db_txt').style.display = 'block';
        document.getElementById('st_17_b_txt').style.display = 'block';
        document.getElementById('st_17_mb_txt').style.display = 'block';
        
        document.getElementById('mg_17_dp_txt').style.display = 'block';
        document.getElementById('mg_17_p_txt').style.display = 'block';
        document.getElementById('mg_17_mp_txt').style.display = 'block';
        
        document.getElementById('st_17_dp_txt').style.display = 'block';
        document.getElementById('st_17_p_txt').style.display = 'block';
        document.getElementById('st_17_mp_txt').style.display = 'block';
        
        document.getElementById('note_17_txt').style.display = 'block';

        document.getElementById('polygon_17_b').style.display = 'block';
        document.getElementById('polyline_an_17_b').style.display = 'block';
        document.getElementById('polyline_mg_17_b').style.display = 'block';
        
        document.getElementById('polygon_17_p').style.display = 'block';
        document.getElementById('polyline_an_17_p').style.display = 'block';
        document.getElementById('polyline_mg_17_p').style.display = 'block';

        if (Zahn_18 == 1 && Zahn_17 == 1) {
            document.getElementById('polygon_inter_18_17_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_18_17_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_18_17_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_18_17_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_18_17_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_18_17_p').style.display = 'block';            
        }
        
        if (Zahn_17 == 1 && Zahn_16 == 1) {
            document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_p').style.display = 'block';            
        }
        
        if (Furkation_17_b == 1) {
            document.getElementById('furkation_1_17_b').style.display = 'block';
        } else if (Furkation_17_b == 2) {
            document.getElementById('furkation_2_17_b').style.display = 'block';
        } else if (Furkation_17_b == 3) {
            document.getElementById('furkation_3_17_b').style.display = 'block';
        }
        if (Furkation_17_b == 1) {
            document.getElementById('furkation_1_17_b_tab').style.display = 'block';
        } else if (Furkation_17_b == 2) {
            document.getElementById('furkation_2_17_b_tab').style.display = 'block';
        } else if (Furkation_17_b == 3) {
            document.getElementById('furkation_3_17_b_tab').style.display = 'block';
        }
        if (Furkation_17_dp == 1) {
            document.getElementById('furkation_1_17_dp').style.display = 'block';
        } else if (Furkation_17_dp == 2) {
            document.getElementById('furkation_2_17_dp').style.display = 'block';
        } else if (Furkation_17_dp == 3) {
            document.getElementById('furkation_3_17_dp').style.display = 'block';
        }
        if (Furkation_17_dp == 1) {
            document.getElementById('furkation_1_17_dp_tab').style.display = 'block';
        } else if (Furkation_17_dp == 2) {
            document.getElementById('furkation_2_17_dp_tab').style.display = 'block';
        } else if (Furkation_17_dp == 3) {
            document.getElementById('furkation_3_17_dp_tab').style.display = 'block';
        }
        if (Furkation_17_mp == 1) {
            document.getElementById('furkation_1_17_mp').style.display = 'block';
        } else if (Furkation_17_mp == 2) {
            document.getElementById('furkation_2_17_mp').style.display = 'block';
        } else if (Furkation_17_mp == 3) {
            document.getElementById('furkation_3_17_mp').style.display = 'block';
        }
        if (Furkation_17_mp == 1) {
            document.getElementById('furkation_1_17_mp_tab').style.display = 'block';
        } else if (Furkation_17_mp == 2) {
            document.getElementById('furkation_2_17_mp_tab').style.display = 'block';
        } else if (Furkation_17_mp == 3) {
            document.getElementById('furkation_3_17_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_17_db_btn').style.display = 'block';
        document.getElementById('BOP_17_b_btn').style.display = 'block';
        document.getElementById('BOP_17_mb_btn').style.display = 'block';

        document.getElementById('BOP_17_dp_btn').style.display = 'block';
        document.getElementById('BOP_17_p_btn').style.display = 'block';
        document.getElementById('BOP_17_mp_btn').style.display = 'block';
        
        if (BOP_17_db == 1) {
            document.getElementById('BOP_17_db_rectangle').style.display = 'block';
        }
        if (BOP_17_b == 1) {
            document.getElementById('BOP_17_b_rectangle').style.display = 'block';
        }
        if (BOP_17_mb == 1) {
            document.getElementById('BOP_17_mb_rectangle').style.display = 'block';
        }
        if (BOP_17_dp == 1) {
            document.getElementById('BOP_17_dp_rectangle').style.display = 'block';
        }
        if (BOP_17_p == 1) {
            document.getElementById('BOP_17_p_rectangle').style.display = 'block';
        }
        if (BOP_17_mp == 1) {
            document.getElementById('BOP_17_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_17_db_btn').style.display = 'block';
        document.getElementById('PI_17_b_btn').style.display = 'block';
        document.getElementById('PI_17_mb_btn').style.display = 'block';

        document.getElementById('PI_17_dp_btn').style.display = 'block';
        document.getElementById('PI_17_p_btn').style.display = 'block';
        document.getElementById('PI_17_mp_btn').style.display = 'block';
        
        if (PI_17_db == 1) {
            document.getElementById('PI_17_db_rectangle').style.display = 'block';
        }
        if (PI_17_b == 1) {
            document.getElementById('PI_17_b_rectangle').style.display = 'block';
        }
        if (PI_17_mb == 1) {
            document.getElementById('PI_17_mb_rectangle').style.display = 'block';
        }
        if (PI_17_dp == 1) {
            document.getElementById('PI_17_dp_rectangle').style.display = 'block';
        }
        if (PI_17_p == 1) {
            document.getElementById('PI_17_p_rectangle').style.display = 'block';
        }
        if (PI_17_mp == 1) {
            document.getElementById('PI_17_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_17 == 1) {
        Zahn_17 = 1;
        document.getElementById('tooth_line_17_b').style.display = 'none';
        document.getElementById('tooth_line_17_p').style.display = 'none';

        document.getElementById('mobility_17_txt').style.display = 'block';
        
        document.getElementById('note_17_txt').style.display = 'block';

        document.getElementById('implantat_17_btn').style.display = 'block';
        document.getElementById('implantat_17_tab').style.display = 'block';
        document.getElementById('implantat_17_b_image').style.display = 'block';
        document.getElementById('implantat_17_p_image').style.display = 'block';

        document.getElementById('mg_17_db_txt').style.display = 'block';
        document.getElementById('mg_17_b_txt').style.display = 'block';
        document.getElementById('mg_17_mb_txt').style.display = 'block';
        
        document.getElementById('st_17_db_txt').style.display = 'block';
        document.getElementById('st_17_b_txt').style.display = 'block';
        document.getElementById('st_17_mb_txt').style.display = 'block';
        
        document.getElementById('mg_17_dp_txt').style.display = 'block';
        document.getElementById('mg_17_p_txt').style.display = 'block';
        document.getElementById('mg_17_mp_txt').style.display = 'block';
        
        document.getElementById('st_17_dp_txt').style.display = 'block';
        document.getElementById('st_17_p_txt').style.display = 'block';
        document.getElementById('st_17_mp_txt').style.display = 'block';

        document.getElementById('polygon_17_b').style.display = 'block';
        document.getElementById('polyline_an_17_b').style.display = 'block';
        document.getElementById('polyline_mg_17_b').style.display = 'block';
        
        document.getElementById('polygon_17_p').style.display = 'block';
        document.getElementById('polyline_an_17_p').style.display = 'block';
        document.getElementById('polyline_mg_17_p').style.display = 'block';

        if (Zahn_18 == 1 && Zahn_17 == 1) {
            document.getElementById('polygon_inter_18_17_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_18_17_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_18_17_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_18_17_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_18_17_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_18_17_p').style.display = 'block';            
        }
        
        if (Zahn_17 == 1 && Zahn_16 == 1) {
            document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_p').style.display = 'block';            
        }

        document.getElementById('BOP_17_db_btn').style.display = 'block';
        document.getElementById('BOP_17_b_btn').style.display = 'block';
        document.getElementById('BOP_17_mb_btn').style.display = 'block';

        document.getElementById('BOP_17_dp_btn').style.display = 'block';
        document.getElementById('BOP_17_p_btn').style.display = 'block';
        document.getElementById('BOP_17_mp_btn').style.display = 'block';
        
        document.getElementById('PI_17_db_btn').style.display = 'block';
        document.getElementById('PI_17_b_btn').style.display = 'block';
        document.getElementById('PI_17_mb_btn').style.display = 'block';

        document.getElementById('PI_17_dp_btn').style.display = 'block';
        document.getElementById('PI_17_p_btn').style.display = 'block';
        document.getElementById('PI_17_mp_btn').style.display = 'block';
        
        if (BOP_17_db == 1) {
            document.getElementById('BOP_17_db_rectangle').style.display = 'block';
        }
        if (BOP_17_b == 1) {
            document.getElementById('BOP_17_b_rectangle').style.display = 'block';
        }
        if (BOP_17_mb == 1) {
            document.getElementById('BOP_17_mb_rectangle').style.display = 'block';
        }
        if (BOP_17_dp == 1) {
            document.getElementById('BOP_17_dp_rectangle').style.display = 'block';
        }
        if (BOP_17_p == 1) {
            document.getElementById('BOP_17_p_rectangle').style.display = 'block';
        }
        if (BOP_17_mp == 1) {
            document.getElementById('BOP_17_mp_rectangle').style.display = 'block';
        }
        
        if (PI_17_db == 1) {
            document.getElementById('PI_17_db_rectangle').style.display = 'block';
        }
        if (PI_17_b == 1) {
            document.getElementById('PI_17_b_rectangle').style.display = 'block';
        }
        if (PI_17_mb == 1) {
            document.getElementById('PI_17_mb_rectangle').style.display = 'block';
        }
        if (PI_17_dp == 1) {
            document.getElementById('PI_17_dp_rectangle').style.display = 'block';
        }
        if (PI_17_p == 1) {
            document.getElementById('PI_17_p_rectangle').style.display = 'block';
        }
        if (PI_17_mp == 1) {
            document.getElementById('PI_17_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_17() {
    if (Implantat_17 == 0) {
        Implantat_17 = 1;
        
        document.getElementById('implantat_17_b_image').style.display = 'block';
        document.getElementById('implantat_17_p_image').style.display = 'block';
        document.getElementById('implantat_17_tab').style.display = 'block';
        
        document.getElementById('furkation_17_b_btn').style.display = 'none';
        document.getElementById('furkation_17_dp_btn').style.display = 'none';
        document.getElementById('furkation_17_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_17_b').style.display = 'none';
        document.getElementById('furkation_2_17_b').style.display = 'none';
        document.getElementById('furkation_3_17_b').style.display = 'none';
        
        document.getElementById('furkation_1_17_b_tab').style.display = 'none';
        document.getElementById('furkation_2_17_b_tab').style.display = 'none';
        document.getElementById('furkation_3_17_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp').style.display = 'none';
        document.getElementById('furkation_2_17_dp').style.display = 'none';
        document.getElementById('furkation_3_17_dp').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp').style.display = 'none';
        document.getElementById('furkation_2_17_mp').style.display = 'none';
        document.getElementById('furkation_3_17_mp').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'none';
    }
    else {
        Implantat_17 = 0;
        
        document.getElementById('implantat_17_b_image').style.display = 'none';
        document.getElementById('implantat_17_p_image').style.display = 'none';
        document.getElementById('implantat_17_tab').style.display = 'none';
        
        document.getElementById('furkation_17_b_btn').style.display = 'block';
        document.getElementById('furkation_17_dp_btn').style.display = 'block';
        document.getElementById('furkation_17_mp_btn').style.display = 'block';

        if (Furkation_17_b == 1) {
            document.getElementById('furkation_1_17_b').style.display = 'block';
        } else if (Furkation_17_b == 2) {
            document.getElementById('furkation_2_17_b').style.display = 'block';
        } else if (Furkation_17_b == 3) {
            document.getElementById('furkation_3_17_b').style.display = 'block';
        }
        if (Furkation_17_b == 1) {
            document.getElementById('furkation_1_17_b_tab').style.display = 'block';
        } else if (Furkation_17_b == 2) {
            document.getElementById('furkation_2_17_b_tab').style.display = 'block';
        } else if (Furkation_17_b == 3) {
            document.getElementById('furkation_3_17_b_tab').style.display = 'block';
        }
        if (Furkation_17_dp == 1) {
            document.getElementById('furkation_1_17_dp').style.display = 'block';
        } else if (Furkation_17_dp == 2) {
            document.getElementById('furkation_2_17_dp').style.display = 'block';
        } else if (Furkation_17_dp == 3) {
            document.getElementById('furkation_3_17_dp').style.display = 'block';
        }
        if (Furkation_17_dp == 1) {
            document.getElementById('furkation_1_17_dp_tab').style.display = 'block';
        } else if (Furkation_17_dp == 2) {
            document.getElementById('furkation_2_17_dp_tab').style.display = 'block';
        } else if (Furkation_17_dp == 3) {
            document.getElementById('furkation_3_17_dp_tab').style.display = 'block';
        }
        if (Furkation_17_mp == 1) {
            document.getElementById('furkation_1_17_mp').style.display = 'block';
        } else if (Furkation_17_mp == 2) {
            document.getElementById('furkation_2_17_mp').style.display = 'block';
        } else if (Furkation_17_mp == 3) {
            document.getElementById('furkation_3_17_mp').style.display = 'block';
        }
        if (Furkation_17_mp == 1) {
            document.getElementById('furkation_1_17_mp_tab').style.display = 'block';
        } else if (Furkation_17_mp == 2) {
            document.getElementById('furkation_2_17_mp_tab').style.display = 'block';
        } else if (Furkation_17_mp == 3) {
            document.getElementById('furkation_3_17_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_17_b() {
    if (Furkation_17_b == 0) {
        document.getElementById('furkation_1_17_b_tab').style.display = 'block';
        document.getElementById('furkation_2_17_b_tab').style.display = 'none';
        document.getElementById('furkation_3_17_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_b').style.display = 'block';
        document.getElementById('furkation_2_17_b').style.display = 'none';
        document.getElementById('furkation_3_17_b').style.display = 'none';

        Furkation_17_b = 1;
    }
    else if (Furkation_17_b == 1) {
        document.getElementById('furkation_1_17_b_tab').style.display = 'none';
        document.getElementById('furkation_2_17_b_tab').style.display = 'block';
        document.getElementById('furkation_3_17_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_b').style.display = 'none';
        document.getElementById('furkation_2_17_b').style.display = 'block';
        document.getElementById('furkation_3_17_b').style.display = 'none';
        
        Furkation_17_b = 2;
    }
    else if (Furkation_17_b == 2) {
        document.getElementById('furkation_1_17_b_tab').style.display = 'none';
        document.getElementById('furkation_2_17_b_tab').style.display = 'none';
        document.getElementById('furkation_3_17_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_17_b').style.display = 'none';
        document.getElementById('furkation_2_17_b').style.display = 'none';
        document.getElementById('furkation_3_17_b').style.display = 'block';
                    
        Furkation_17_b = 3;
    }
    else if (Furkation_17_b == 3) {
        document.getElementById('furkation_1_17_b_tab').style.display = 'none';
        document.getElementById('furkation_2_17_b_tab').style.display = 'none';
        document.getElementById('furkation_3_17_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_b').style.display = 'none';
        document.getElementById('furkation_2_17_b').style.display = 'none';
        document.getElementById('furkation_3_17_b').style.display = 'none';
                    
        Furkation_17_b = 0;
    }
}

function toggle_furcation_17_dp() {
    if (Furkation_17_dp == 0) {
        document.getElementById('furkation_1_17_dp_tab').style.display = 'block';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp').style.display = 'block';
        document.getElementById('furkation_2_17_dp').style.display = 'none';
        document.getElementById('furkation_3_17_dp').style.display = 'none';

        Furkation_17_dp = 1;
    }
    else if (Furkation_17_dp == 1) {
        document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'block';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp').style.display = 'none';
        document.getElementById('furkation_2_17_dp').style.display = 'block';
        document.getElementById('furkation_3_17_dp').style.display = 'none';
        
        Furkation_17_dp = 2;
    }
    else if (Furkation_17_dp == 2) {
        document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_17_dp').style.display = 'none';
        document.getElementById('furkation_2_17_dp').style.display = 'none';
        document.getElementById('furkation_3_17_dp').style.display = 'block';
                    
        Furkation_17_dp = 3;
    }
    else if (Furkation_17_dp == 3) {
        document.getElementById('furkation_1_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_dp').style.display = 'none';
        document.getElementById('furkation_2_17_dp').style.display = 'none';
        document.getElementById('furkation_3_17_dp').style.display = 'none';
                    
        Furkation_17_dp = 0;
    }
}

function toggle_furcation_17_mp() {
    if (Furkation_17_mp == 0) {
        document.getElementById('furkation_1_17_mp_tab').style.display = 'block';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp').style.display = 'block';
        document.getElementById('furkation_2_17_mp').style.display = 'none';
        document.getElementById('furkation_3_17_mp').style.display = 'none';

        Furkation_17_mp = 1;
    }
    else if (Furkation_17_mp == 1) {
        document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'block';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp').style.display = 'none';
        document.getElementById('furkation_2_17_mp').style.display = 'block';
        document.getElementById('furkation_3_17_mp').style.display = 'none';
        
        Furkation_17_mp = 2;
    }
    else if (Furkation_17_mp == 2) {
        document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_17_mp').style.display = 'none';
        document.getElementById('furkation_2_17_mp').style.display = 'none';
        document.getElementById('furkation_3_17_mp').style.display = 'block';
                    
        Furkation_17_mp = 3;
    }
    else if (Furkation_17_mp == 3) {
        document.getElementById('furkation_1_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_17_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_17_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_17_mp').style.display = 'none';
        document.getElementById('furkation_2_17_mp').style.display = 'none';
        document.getElementById('furkation_3_17_mp').style.display = 'none';
                    
        Furkation_17_mp = 0;
    }
}

function toggle_BOP_17_db() {
    if (BOP_17_db == 0) {
        BOP_17_db = 1;
        document.getElementById('BOP_17_db_rectangle').style.display = 'block';
    }
    else {
        BOP_17_db = 0;
        document.getElementById('BOP_17_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_17_b() {
    if (BOP_17_b == 0) {
        BOP_17_b = 1;
        document.getElementById('BOP_17_b_rectangle').style.display = 'block';
    }
    else {
        BOP_17_b = 0;
        document.getElementById('BOP_17_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_17_mb() {
    if (BOP_17_mb == 0) {
        BOP_17_mb = 1;
        document.getElementById('BOP_17_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_17_mb = 0;
        document.getElementById('BOP_17_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_db() {
    if (PI_17_db == 0) {
        PI_17_db = 1;
        document.getElementById('PI_17_db_rectangle').style.display = 'block';
    }
    else {
        PI_17_db = 0;
        document.getElementById('PI_17_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_b() {
    if (PI_17_b == 0) {
        PI_17_b = 1;
        document.getElementById('PI_17_b_rectangle').style.display = 'block';
    }
    else {
        PI_17_b = 0;
        document.getElementById('PI_17_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_mb() {
    if (PI_17_mb == 0) {
        PI_17_mb = 1;
        document.getElementById('PI_17_mb_rectangle').style.display = 'block';
    }
    else {
        PI_17_mb = 0;
        document.getElementById('PI_17_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_17_dp() {
    if (BOP_17_dp == 0) {
        BOP_17_dp = 1;
        document.getElementById('BOP_17_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_17_dp = 0;
        document.getElementById('BOP_17_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_17_p() {
    if (BOP_17_p == 0) {
        BOP_17_p = 1;
        document.getElementById('BOP_17_p_rectangle').style.display = 'block';
    }
    else {
        BOP_17_p = 0;
        document.getElementById('BOP_17_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_17_mp() {
    if (BOP_17_mp == 0) {
        BOP_17_mp = 1;
        document.getElementById('BOP_17_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_17_mp = 0;
        document.getElementById('BOP_17_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_dp() {
    if (PI_17_dp == 0) {
        PI_17_dp = 1;
        document.getElementById('PI_17_dp_rectangle').style.display = 'block';
    }
    else {
        PI_17_dp = 0;
        document.getElementById('PI_17_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_p() {
    if (PI_17_p == 0) {
        PI_17_p = 1;
        document.getElementById('PI_17_p_rectangle').style.display = 'block';
    }
    else {
        PI_17_p = 0;
        document.getElementById('PI_17_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_17_mp() {
    if (PI_17_mp == 0) {
        PI_17_mp = 1;
        document.getElementById('PI_17_mp_rectangle').style.display = 'block';
    }
    else {
        PI_17_mp = 0;
        document.getElementById('PI_17_mp_rectangle').style.display = 'none';
    }
}

function change_probing_17() {
    if (Zahn_17 == 1) {
        
    // Variablen aus dem Formular
        st_17_db = document.forms[0]["st_17_db"].value;
        st_17_b = document.forms[0]["st_17_b"].value;
        st_17_mb = document.forms[0]["st_17_mb"].value;

        if (document.forms[0]["st_17_dp"].value > 3) {document.forms[0]["st_17_dp"].style.color = 'red';} else {document.forms[0]["st_17_dp"].style.color = 'black'}
        if (document.forms[0]["st_17_p"].value > 3) {document.forms[0]["st_17_p"].style.color = 'red';} else {document.forms[0]["st_17_p"].style.color = 'black'}
        if (document.forms[0]["st_17_mp"].value > 3) {document.forms[0]["st_17_mp"].style.color = 'red';} else {document.forms[0]["st_17_mp"].style.color = 'black'}
        
        mg_17_db = document.forms[0]["mg_17_db"].value;
        mg_17_b = document.forms[0]["mg_17_b"].value;
        mg_17_mb = document.forms[0]["mg_17_mb"].value;
        
        st_17_dp = document.forms[0]["st_17_dp"].value;
        st_17_p = document.forms[0]["st_17_p"].value;
        st_17_mp = document.forms[0]["st_17_mp"].value;

        if (document.forms[0]["st_17_db"].value > 3) {document.forms[0]["st_17_db"].style.color = 'red';} else {document.forms[0]["st_17_db"].style.color = 'black'}
        if (document.forms[0]["st_17_b"].value > 3) {document.forms[0]["st_17_b"].style.color = 'red';} else {document.forms[0]["st_17_b"].style.color = 'black'}
        if (document.forms[0]["st_17_mb"].value > 3) {document.forms[0]["st_17_mb"].style.color = 'red';} else {document.forms[0]["st_17_mb"].style.color = 'black'}

        mg_17_dp = document.forms[0]["mg_17_dp"].value;
        mg_17_p = document.forms[0]["mg_17_p"].value;
        mg_17_mp = document.forms[0]["mg_17_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
        var x_db_17 = 346;							// distal 17
        var x_mb_17 = 386;							// mesial 17
        var x_b_17 = (x_db_17 + x_mb_17)/2;			// bukkal 17
        
    // Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
        var x_dp_17 = 344;							// distal 17
        var x_mp_17 = 383;							// mesial 17
        var x_p_17 = (x_dp_17 + x_mp_17)/2;			// palatinal 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
        var y_mg_17_db = mg_OK_b + 6.5 * mg_17_db;	// Margo Gingivae distobukkal 17
        var y_mg_17_b = mg_OK_b + 6.5 * mg_17_b;	// Margo Gingivae bukkal 17
        var y_mg_17_mb = mg_OK_b + 6.5 * mg_17_mb;	// Margo Gingivae mesiobukkal 17
        var y_st_17_db = 6.5 * st_17_db;			// Sondierungstiefe distobukkal 17
        var y_st_17_b = 6.5 * st_17_b;				// Sondierungstiefe bukkal 17
        var y_st_17_mb = 6.5 * st_17_mb;			// Sondierungstiefe mesiobukkal 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
        var y_mg_17_dp = mg_OK_p - 6.5 * mg_17_dp;	// Margo Gingivae distopalatinal 17
        var y_mg_17_p = mg_OK_p - 6.5 * mg_17_p;	// Margo Gingivae palatinal 17
        var y_mg_17_mp = mg_OK_p - 6.5 * mg_17_mp;	// Margo Gingivae mesiopalatinal 17
        var y_st_17_dp = 6.5 * st_17_dp;			// Sondierungstiefe distopalatinal 17
        var y_st_17_p = 6.5 * st_17_p;				// Sondierungstiefe palatinal 17
        var y_st_17_mp = 6.5 * st_17_mp;			// Sondierungstiefe mesiopalatinal 17
        
    // Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_db = y_mg_17_db - y_st_17_db;	// Attachmentniveau distobukkal 17
        var y_an_17_b = y_mg_17_b - y_st_17_b;		// Attachmentniveau bukkal 17
        var y_an_17_mb = y_mg_17_mb - y_st_17_mb;	// Attachmentniveau mesiobukkal 17
        
    // Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_dp = y_mg_17_dp + y_st_17_dp;	// Attachmentniveau distopalatinal 17
        var y_an_17_p = y_mg_17_p + y_st_17_p;		// Attachmentniveau palatinal 17
        var y_an_17_mp = y_mg_17_mp + y_st_17_mp;	// Attachmentniveau mesiopalatinal 17
        
    // Parodontaltasche 17 bukkal zeichnen
        var string = 
            x_db_17 + ", " + y_an_17_db + "  " + 
            x_b_17 + ", " + y_an_17_b + "  " + 
            x_mb_17 + ", " + y_an_17_mb + "  " + 
            x_mb_17 + ", " + y_mg_17_mb + "  " + 
            x_b_17 + ", " + y_mg_17_b + "  " + 
            x_db_17 + ", " + y_mg_17_db;
        document.getElementById("polygon_17_b").setAttribute("points", string);
    // Attachmentniveau 17 bukkal zeichnen
        var string = 
            x_db_17 + ", " + y_an_17_db + "  " + 
            x_b_17 + ", " + y_an_17_b + "  " + 
            x_mb_17 + ", " + y_an_17_mb;
        document.getElementById("polyline_an_17_b").setAttribute("points", string);
    // Margo Gingivae 17 bukkal zeichnen
        var string =
            x_db_17 + ", " + y_mg_17_db + "  " + 
            x_b_17 + ", " + y_mg_17_b + "  " + 
            x_mb_17 + ", " + y_mg_17_mb;
        document.getElementById("polyline_mg_17_b").setAttribute("points", string);

    // Parodontaltasche 17 palatinal zeichnen
        var string = 
            x_dp_17 + ", " + y_an_17_dp + "  " + 
            x_p_17 + ", " + y_an_17_p + "  " + 
            x_mp_17 + ", " + y_an_17_mp + "  " + 
            x_mp_17 + ", " + y_mg_17_mp + "  " + 
            x_p_17 + ", " + y_mg_17_p + "  " + 
            x_dp_17 + ", " + y_mg_17_dp;
        document.getElementById("polygon_17_p").setAttribute("points", string);
    // Attachmentniveau 17 palatinal zeichnen
        var string = 
            x_dp_17 + ", " + y_an_17_dp + "  " + 
            x_p_17 + ", " + y_an_17_p + "  " + 
            x_mp_17 + ", " + y_an_17_mp;
        document.getElementById("polyline_an_17_p").setAttribute("points", string);
    // Margo Gingivae 17 palatinal zeichnen
        var string =
            x_dp_17 + ", " + y_mg_17_dp + "  " + 
            x_p_17 + ", " + y_mg_17_p + "  " + 
            x_mp_17 + ", " + y_mg_17_mp;
        document.getElementById("polyline_mg_17_p").setAttribute("points", string);
    }
    if (Zahn_17 == 1 && Zahn_16 == 1) {

        st_16_db = document.forms[0]["st_16_db"].value;
        mg_16_db = document.forms[0]["mg_16_db"].value;
        
        st_16_dp = document.forms[0]["st_16_dp"].value;
        mg_16_dp = document.forms[0]["mg_16_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
        var x_db_16 = 397;							// distal 16
        
    // Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
        var x_dp_16 = 399;							// distal 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
        var y_mg_16_db = mg_OK_b + 6.5 * mg_16_db;	// Margo Gingivae distobukkal 16
        var y_st_16_db = 6.5 * st_16_db;			// Sondierungstiefe distobukkal 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
        var y_mg_16_dp = mg_OK_p - 6.5 * mg_16_dp;	// Margo Gingivae distopalatinal 16
        var y_st_16_dp = 6.5 * st_16_dp;			// Sondierungstiefe distopalatinal 16
        
    // Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_db = y_mg_16_db - y_st_16_db;	// Attachmentniveau distobukkal 16
        
    // Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_dp = y_mg_16_dp + y_st_16_dp;	// Attachmentniveau distopalatinal 16

    // Parodontaltasche inter_17_16 bukkal zeichnen
        var string = 
            x_mb_17 + ", " + y_an_17_mb + "  " + 
            x_db_16 + ", " + y_an_16_db + "  " + 
            x_db_16 + ", " + y_mg_16_db + "  " + 
            x_mb_17 + ", " + y_mg_17_mb;
        document.getElementById("polygon_inter_17_16_b").setAttribute("points", string);
    // Attachmentniveau inter_17_16 bukkal zeichnen
        var string = 
            x_mb_17 + ", " + y_an_17_mb + "  " + 
            x_db_16 + ", " + y_an_16_db;
        document.getElementById("polyline_an_inter_17_16_b").setAttribute("points", string);
    // Margo Gingivae inter_17_16 bukkal zeichnen
        var string =
            x_mb_17 + ", " + y_mg_17_mb + "  " + 
            x_db_16 + ", " + y_mg_16_db;
        document.getElementById("polyline_mg_inter_17_16_b").setAttribute("points", string);

    // Parodontaltasche inter_17_16 palatinal zeichnen
        var string = 
            x_mp_17 + ", " + y_an_17_mp + "  " + 
            x_dp_16 + ", " + y_an_16_dp + "  " + 
            x_dp_16 + ", " + y_mg_16_dp + "  " + 
            x_mp_17 + ", " + y_mg_17_mp;
        document.getElementById("polygon_inter_17_16_p").setAttribute("points", string);
    // Attachmentniveau inter_17_16 palatinal zeichnen
        var string = 
            x_mp_17 + ", " + y_an_17_mp + "  " + 
            x_dp_16 + ", " + y_an_16_dp;
        document.getElementById("polyline_an_inter_17_16_p").setAttribute("points", string);
    // Margo Gingivae inter_17_16 palatinal zeichnen
        var string =
            x_mp_17 + ", " + y_mg_17_mp + "  " + 
            x_dp_16 + ", " + y_mg_16_dp;
        document.getElementById("polyline_mg_inter_17_16_p").setAttribute("points", string);
    }
    if (Zahn_18 == 1 && Zahn_17 == 1) {

        var st_18_mb = document.forms[0]["st_18_mb"].value;
        var mg_18_mb = document.forms[0]["mg_18_mb"].value;
        
        var st_18_mp = document.forms[0]["st_18_mp"].value;
        var mg_18_mp = document.forms[0]["mg_18_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 18 (bukkal) in der Bitmap
        var x_mb_18 = 332;							// mesial 18
        
    // Set der horizontalen Koordinaten von Zahn 18 (palatinal) in der Bitmap
        var x_mp_18 = 331;							// mesial 18
        
    // Set der vertikalen Koordinaten von Zahn 18 (bukkal) aus dem Formular
        var y_mg_18_mb = mg_OK_b + 6.5 * mg_18_mb;	// Margo Gingivae mesiobukkal 18
        var y_st_18_mb = 6.5 * st_18_mb;			// Sondierungstiefe mesiobukkal 18
        
    // Set der vertikalen Koordinaten von Zahn 18 (palatinal) aus dem Formular
        var y_mg_18_mp = mg_OK_p - 6.5 * mg_18_mp;	// Margo Gingivae mesiopalatinal 18
        var y_st_18_mp = 6.5 * st_18_mp;			// Sondierungstiefe mesiopalatinal 18
        
    // Berechnung des Attachmentniveaus 18 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_18_mb = y_mg_18_mb - y_st_18_mb;	// Attachmentniveau mesiobukkal 18
        
    // Berechnung des Attachmentniveaus 18 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_18_mp = y_mg_18_mp + y_st_18_mp;	// Attachmentniveau mesiopalatinal 18

    // Parodontaltasche inter_18_17 bukkal zeichnen
        var string = 
            x_mb_18 + ", " + y_an_18_mb + "  " + 
            x_db_17 + ", " + y_an_17_db + "  " + 
            x_db_17 + ", " + y_mg_17_db + "  " + 
            x_mb_18 + ", " + y_mg_18_mb;
        document.getElementById("polygon_inter_18_17_b").setAttribute("points", string);
    // Attachmentniveau inter_18_17 bukkal zeichnen
        var string = 
            x_mb_18 + ", " + y_an_18_mb + "  " + 
            x_db_17 + ", " + y_an_17_db;
        document.getElementById("polyline_an_inter_18_17_b").setAttribute("points", string);
    // Margo Gingivae inter_18_17 bukkal zeichnen
        var string =
            x_mb_18 + ", " + y_mg_18_mb + "  " + 
            x_db_17 + ", " + y_mg_17_db;
        document.getElementById("polyline_mg_inter_18_17_b").setAttribute("points", string);

    // Parodontaltasche inter_18_17 palatinal zeichnen
        var string = 
            x_mp_18 + ", " + y_an_18_mp + "  " + 
            x_dp_17 + ", " + y_an_17_dp + "  " + 
            x_dp_17 + ", " + y_mg_17_dp + "  " + 
            x_mp_18 + ", " + y_mg_18_mp;
        document.getElementById("polygon_inter_18_17_p").setAttribute("points", string);
    // Attachmentniveau inter_18_17 palatinal zeichnen
        var string = 
            x_mp_18 + ", " + y_an_18_mp + "  " + 
            x_dp_17 + ", " + y_an_17_dp;
        document.getElementById("polyline_an_inter_18_17_p").setAttribute("points", string);
    // Margo Gingivae inter_18_17 palatinal zeichnen
        var string =
            x_mp_18 + ", " + y_mg_18_mp + "  " + 
            x_dp_17 + ", " + y_mg_17_dp;
        document.getElementById("polyline_mg_inter_18_17_p").setAttribute("points", string);
    }
}