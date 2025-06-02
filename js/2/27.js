	// Definition der Variablen fÃ¼r das Formular
    var Zahn_27 = 1;
    var Furkation_27_b = 0;
    var Furkation_27_dp = 0;
    var Furkation_27_mp = 0;
    var Implantat_27 = 0;
    var BOP_27_db = 0;
    var BOP_27_b = 0;
    var BOP_27_mb = 0;
    var PI_27_db = 0;
    var PI_27_b = 0;
    var PI_27_mb = 0;
    var BOP_27_dp = 0;
    var BOP_27_p = 0;
    var BOP_27_mp = 0;
    var PI_27_dp = 0;
    var PI_27_p = 0;
    var PI_27_mp = 0;
    var mg_27_db = 0;
    var mg_27_b = 0;
    var mg_27_mb = 0;
    var st_27_db = 0;
    var st_27_b = 0;
    var st_27_mb = 0;
    var mg_27_dp = 0;
    var mg_27_p = 0;
    var mg_27_mp = 0;
    var st_27_dp = 0;
    var st_27_p = 0;
    var st_27_mp = 0;

function clear_data_27() {
    if (Zahn_27 == 1) {
        mg_27_db = 0;
        mg_27_b = 0;
        mg_27_mb = 0;
        st_27_db = 0;
        st_27_b = 0;
        st_27_mb = 0;

            document.getElementById('mg_27_db_txt').value = 0;
            document.getElementById('mg_27_b_txt').value = 0;
            document.getElementById('mg_27_mb_txt').value = 0;
            
            document.getElementById('st_27_db_txt').value = 0;
            document.getElementById('st_27_b_txt').value = 0;
            document.getElementById('st_27_mb_txt').value = 0;
        
            document.forms[0]["st_27_db"].style.color = 'black'
            document.forms[0]["st_27_b"].style.color = 'black'
            document.forms[0]["st_27_mb"].style.color = 'black'
        
        mg_27_dp = 0;
        mg_27_p = 0;
        mg_27_mp = 0;
        st_27_dp = 0;
        st_27_p = 0;
        st_27_mp = 0;

            document.getElementById('mg_27_dp_txt').value = 0;
            document.getElementById('mg_27_p_txt').value = 0;
            document.getElementById('mg_27_mp_txt').value = 0;
            
            document.getElementById('st_27_dp_txt').value = 0;
            document.getElementById('st_27_p_txt').value = 0;
            document.getElementById('st_27_mp_txt').value = 0;

            document.forms[0]["st_27_dp"].style.color = 'black'
            document.forms[0]["st_27_p"].style.color = 'black'
            document.forms[0]["st_27_mp"].style.color = 'black'
        
        change_probing_27();
        
        mobility_27 = 0;

            document.getElementById('mobility_27_txt').value = "0";

        note_27 = "";

            document.getElementById('note_27_txt').value = "";

        Furkation_27_b = 0;
        Furkation_27_dp = 0;
        Furkation_27_mp = 0;

            document.getElementById('furkation_1_27_b').style.display = 'none';
            document.getElementById('furkation_2_27_b').style.display = 'none';
            document.getElementById('furkation_3_27_b').style.display = 'none';
                
            document.getElementById('furkation_1_27_b_tab').style.display = 'none';
            document.getElementById('furkation_2_27_b_tab').style.display = 'none';
            document.getElementById('furkation_3_27_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_27_dp').style.display = 'none';
            document.getElementById('furkation_2_27_dp').style.display = 'none';
            document.getElementById('furkation_3_27_dp').style.display = 'none';
                
            document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
            document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
            document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
            
            document.getElementById('furkation_1_27_mp').style.display = 'none';
            document.getElementById('furkation_2_27_mp').style.display = 'none';
            document.getElementById('furkation_3_27_mp').style.display = 'none';
            
            document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
            document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
            document.getElementById('furkation_3_27_mp_tab').style.display = 'none';

        BOP_27_db = 0;
        BOP_27_b = 0;
        BOP_27_mb = 0;
                
        BOP_27_dp = 0;
        BOP_27_p = 0;
        BOP_27_mp = 0;
                
            document.getElementById('BOP_27_db_rectangle').style.display = 'none';
            document.getElementById('BOP_27_b_rectangle').style.display = 'none';
            document.getElementById('BOP_27_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_27_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_27_p_rectangle').style.display = 'none';
            document.getElementById('BOP_27_mp_rectangle').style.display = 'none';
            
        PI_27_db = 0;
        PI_27_b = 0;
        PI_27_mb = 0;
                
        PI_27_dp = 0;
        PI_27_p = 0;
        PI_27_mp = 0;

            document.getElementById('PI_27_db_rectangle').style.display = 'none';
            document.getElementById('PI_27_b_rectangle').style.display = 'none';
            document.getElementById('PI_27_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_27_dp_rectangle').style.display = 'none';
            document.getElementById('PI_27_p_rectangle').style.display = 'none';
            document.getElementById('PI_27_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_27() {
    if (Zahn_27 === 1) {
        Zahn_27 = 0;
        document.getElementById('tooth_line_27_b').style.display = 'block';
        document.getElementById('tooth_line_27_p').style.display = 'block';
        
        document.getElementById('mobility_27_txt').style.display = 'none';
        
        document.getElementById('implantat_27_btn').style.display = 'none';
        document.getElementById('implantat_27_tab').style.display = 'none';
        document.getElementById('implantat_27_b_image').style.display = 'none';
        document.getElementById('implantat_27_p_image').style.display = 'none';
        
        document.getElementById('furkation_27_b_btn').style.display = 'none';
        document.getElementById('furkation_27_dp_btn').style.display = 'none';
        document.getElementById('furkation_27_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_27_b').style.display = 'none';
        document.getElementById('furkation_2_27_b').style.display = 'none';
        document.getElementById('furkation_3_27_b').style.display = 'none';
        
        document.getElementById('furkation_1_27_b_tab').style.display = 'none';
        document.getElementById('furkation_2_27_b_tab').style.display = 'none';
        document.getElementById('furkation_3_27_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp').style.display = 'none';
        document.getElementById('furkation_2_27_dp').style.display = 'none';
        document.getElementById('furkation_3_27_dp').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp').style.display = 'none';
        document.getElementById('furkation_2_27_mp').style.display = 'none';
        document.getElementById('furkation_3_27_mp').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
        
        document.getElementById('mg_27_db_txt').style.display = 'none';
        document.getElementById('mg_27_b_txt').style.display = 'none';
        document.getElementById('mg_27_mb_txt').style.display = 'none';
        
        document.getElementById('st_27_db_txt').style.display = 'none';
        document.getElementById('st_27_b_txt').style.display = 'none';
        document.getElementById('st_27_mb_txt').style.display = 'none';
        
        document.getElementById('mg_27_dp_txt').style.display = 'none';
        document.getElementById('mg_27_p_txt').style.display = 'none';
        document.getElementById('mg_27_mp_txt').style.display = 'none';
        
        document.getElementById('st_27_dp_txt').style.display = 'none';
        document.getElementById('st_27_p_txt').style.display = 'none';
        document.getElementById('st_27_mp_txt').style.display = 'none';
                
        document.getElementById('BOP_27_db_rectangle').style.display = 'none';
        document.getElementById('BOP_27_b_rectangle').style.display = 'none';
        document.getElementById('BOP_27_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_27_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_27_p_rectangle').style.display = 'none';
        document.getElementById('BOP_27_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_27_db_btn').style.display = 'none';
        document.getElementById('BOP_27_b_btn').style.display = 'none';
        document.getElementById('BOP_27_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_27_dp_btn').style.display = 'none';
        document.getElementById('BOP_27_p_btn').style.display = 'none';
        document.getElementById('BOP_27_mp_btn').style.display = 'none';
        
        document.getElementById('PI_27_db_rectangle').style.display = 'none';
        document.getElementById('PI_27_b_rectangle').style.display = 'none';
        document.getElementById('PI_27_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_27_dp_rectangle').style.display = 'none';
        document.getElementById('PI_27_p_rectangle').style.display = 'none';
        document.getElementById('PI_27_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_27_db_btn').style.display = 'none';
        document.getElementById('PI_27_b_btn').style.display = 'none';
        document.getElementById('PI_27_mb_btn').style.display = 'none';
        
        document.getElementById('PI_27_dp_btn').style.display = 'none';
        document.getElementById('PI_27_p_btn').style.display = 'none';
        document.getElementById('PI_27_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_27_b').style.display = 'none';
        document.getElementById('polyline_an_27_b').style.display = 'none';
        document.getElementById('polyline_mg_27_b').style.display = 'none';
        
        document.getElementById('polygon_27_p').style.display = 'none';
        document.getElementById('polyline_an_27_p').style.display = 'none';
        document.getElementById('polyline_mg_27_p').style.display = 'none';
        
        document.getElementById('polygon_inter_28_27_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_28_27_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_28_27_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_28_27_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_28_27_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_28_27_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_27_26_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_27_26_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_27_26_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_27_26_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_27_26_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_27_26_p').style.display = 'none';            
        
        document.getElementById('note_27_txt').style.display = 'none';
    }
    else if (Implantat_27 !== 1) {
        Zahn_27 = 1;
        document.getElementById('tooth_line_27_b').style.display = 'none';
        document.getElementById('tooth_line_27_p').style.display = 'none';

        document.getElementById('mobility_27_txt').style.display = 'block';

        document.getElementById('implantat_27_btn').style.display = 'block';

        document.getElementById('furkation_27_b_btn').style.display = 'block';
        document.getElementById('furkation_27_dp_btn').style.display = 'block';
        document.getElementById('furkation_27_mp_btn').style.display = 'block';
        
        document.getElementById('mg_27_db_txt').style.display = 'block';
        document.getElementById('mg_27_b_txt').style.display = 'block';
        document.getElementById('mg_27_mb_txt').style.display = 'block';
        
        document.getElementById('st_27_db_txt').style.display = 'block';
        document.getElementById('st_27_b_txt').style.display = 'block';
        document.getElementById('st_27_mb_txt').style.display = 'block';
        
        document.getElementById('mg_27_dp_txt').style.display = 'block';
        document.getElementById('mg_27_p_txt').style.display = 'block';
        document.getElementById('mg_27_mp_txt').style.display = 'block';
        
        document.getElementById('st_27_dp_txt').style.display = 'block';
        document.getElementById('st_27_p_txt').style.display = 'block';
        document.getElementById('st_27_mp_txt').style.display = 'block';
        
        document.getElementById('note_27_txt').style.display = 'block';

        document.getElementById('polygon_27_b').style.display = 'block';
        document.getElementById('polyline_an_27_b').style.display = 'block';
        document.getElementById('polyline_mg_27_b').style.display = 'block';
        
        document.getElementById('polygon_27_p').style.display = 'block';
        document.getElementById('polyline_an_27_p').style.display = 'block';
        document.getElementById('polyline_mg_27_p').style.display = 'block';

        if (Zahn_28 == 1 && Zahn_27 == 1) {
            document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_p').style.display = 'block';            
        }
        
        if (Zahn_27 == 1 && Tooth_26 == 1) {
            document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_p').style.display = 'block';            
        }

        if (Furkation_27_b == 1) {
            document.getElementById('furkation_1_27_b').style.display = 'block';
        } else if (Furkation_27_b == 2) {
            document.getElementById('furkation_2_27_b').style.display = 'block';
        } else if (Furkation_27_b == 3) {
            document.getElementById('furkation_3_27_b').style.display = 'block';
        }
        if (Furkation_27_b == 1) {
            document.getElementById('furkation_1_27_b_tab').style.display = 'block';
        } else if (Furkation_27_b == 2) {
            document.getElementById('furkation_2_27_b_tab').style.display = 'block';
        } else if (Furkation_27_b == 3) {
            document.getElementById('furkation_3_27_b_tab').style.display = 'block';
        }
        if (Furkation_27_dp == 1) {
            document.getElementById('furkation_1_27_dp').style.display = 'block';
        } else if (Furkation_27_dp == 2) {
            document.getElementById('furkation_2_27_dp').style.display = 'block';
        } else if (Furkation_27_dp == 3) {
            document.getElementById('furkation_3_27_dp').style.display = 'block';
        }
        if (Furkation_27_dp == 1) {
            document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
        } else if (Furkation_27_dp == 2) {
            document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
        } else if (Furkation_27_dp == 3) {
            document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
        }
        if (Furkation_27_mp == 1) {
            document.getElementById('furkation_1_27_mp').style.display = 'block';
        } else if (Furkation_27_mp == 2) {
            document.getElementById('furkation_2_27_mp').style.display = 'block';
        } else if (Furkation_27_mp == 3) {
            document.getElementById('furkation_3_27_mp').style.display = 'block';
        }
        if (Furkation_27_mp == 1) {
            document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
        } else if (Furkation_27_mp == 2) {
            document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
        } else if (Furkation_27_mp == 3) {
            document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_27_db_btn').style.display = 'block';
        document.getElementById('BOP_27_b_btn').style.display = 'block';
        document.getElementById('BOP_27_mb_btn').style.display = 'block';

        document.getElementById('BOP_27_dp_btn').style.display = 'block';
        document.getElementById('BOP_27_p_btn').style.display = 'block';
        document.getElementById('BOP_27_mp_btn').style.display = 'block';
        
        if (BOP_27_db == 1) {
            document.getElementById('BOP_27_db_rectangle').style.display = 'block';
        }
        if (BOP_27_b == 1) {
            document.getElementById('BOP_27_b_rectangle').style.display = 'block';
        }
        if (BOP_27_mb == 1) {
            document.getElementById('BOP_27_mb_rectangle').style.display = 'block';
        }
        if (BOP_27_dp == 1) {
            document.getElementById('BOP_27_dp_rectangle').style.display = 'block';
        }
        if (BOP_27_p == 1) {
            document.getElementById('BOP_27_p_rectangle').style.display = 'block';
        }
        if (BOP_27_mp == 1) {
            document.getElementById('BOP_27_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_27_db_btn').style.display = 'block';
        document.getElementById('PI_27_b_btn').style.display = 'block';
        document.getElementById('PI_27_mb_btn').style.display = 'block';

        document.getElementById('PI_27_dp_btn').style.display = 'block';
        document.getElementById('PI_27_p_btn').style.display = 'block';
        document.getElementById('PI_27_mp_btn').style.display = 'block';
        
        if (PI_27_db == 1) {
            document.getElementById('PI_27_db_rectangle').style.display = 'block';
        }
        if (PI_27_b == 1) {
            document.getElementById('PI_27_b_rectangle').style.display = 'block';
        }
        if (PI_27_mb == 1) {
            document.getElementById('PI_27_mb_rectangle').style.display = 'block';
        }
        if (PI_27_dp == 1) {
            document.getElementById('PI_27_dp_rectangle').style.display = 'block';
        }
        if (PI_27_p == 1) {
            document.getElementById('PI_27_p_rectangle').style.display = 'block';
        }
        if (PI_27_mp == 1) {
            document.getElementById('PI_27_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_27 == 1) {
        Zahn_27 = 1;
        document.getElementById('tooth_line_27_b').style.display = 'none';
        document.getElementById('tooth_line_27_p').style.display = 'none';

        document.getElementById('mobility_27_txt').style.display = 'block';
        
        document.getElementById('note_27_txt').style.display = 'block';

        document.getElementById('implantat_27_btn').style.display = 'block';
        document.getElementById('implantat_27_tab').style.display = 'block';
        document.getElementById('implantat_27_b_image').style.display = 'block';
        document.getElementById('implantat_27_p_image').style.display = 'block';

        document.getElementById('mg_27_db_txt').style.display = 'block';
        document.getElementById('mg_27_b_txt').style.display = 'block';
        document.getElementById('mg_27_mb_txt').style.display = 'block';
        
        document.getElementById('st_27_db_txt').style.display = 'block';
        document.getElementById('st_27_b_txt').style.display = 'block';
        document.getElementById('st_27_mb_txt').style.display = 'block';
        
        document.getElementById('mg_27_dp_txt').style.display = 'block';
        document.getElementById('mg_27_p_txt').style.display = 'block';
        document.getElementById('mg_27_mp_txt').style.display = 'block';
        
        document.getElementById('st_27_dp_txt').style.display = 'block';
        document.getElementById('st_27_p_txt').style.display = 'block';
        document.getElementById('st_27_mp_txt').style.display = 'block';

        document.getElementById('polygon_27_b').style.display = 'block';
        document.getElementById('polyline_an_27_b').style.display = 'block';
        document.getElementById('polyline_mg_27_b').style.display = 'block';
        
        document.getElementById('polygon_27_p').style.display = 'block';
        document.getElementById('polyline_an_27_p').style.display = 'block';
        document.getElementById('polyline_mg_27_p').style.display = 'block';

        if (Zahn_28 == 1 && Zahn_27 == 1) {
            document.getElementById('polygon_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_28_27_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_28_27_p').style.display = 'block';            
        }
        
        if (Zahn_27 == 1 && Tooth_26 == 1) {
            document.getElementById('polygon_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_27_26_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_27_26_p').style.display = 'block';            
        }

        document.getElementById('BOP_27_db_btn').style.display = 'block';
        document.getElementById('BOP_27_b_btn').style.display = 'block';
        document.getElementById('BOP_27_mb_btn').style.display = 'block';

        document.getElementById('BOP_27_dp_btn').style.display = 'block';
        document.getElementById('BOP_27_p_btn').style.display = 'block';
        document.getElementById('BOP_27_mp_btn').style.display = 'block';
        
        document.getElementById('PI_27_db_btn').style.display = 'block';
        document.getElementById('PI_27_b_btn').style.display = 'block';
        document.getElementById('PI_27_mb_btn').style.display = 'block';

        document.getElementById('PI_27_dp_btn').style.display = 'block';
        document.getElementById('PI_27_p_btn').style.display = 'block';
        document.getElementById('PI_27_mp_btn').style.display = 'block';
        
        if (BOP_27_db == 1) {
            document.getElementById('BOP_27_db_rectangle').style.display = 'block';
        }
        if (BOP_27_b == 1) {
            document.getElementById('BOP_27_b_rectangle').style.display = 'block';
        }
        if (BOP_27_mb == 1) {
            document.getElementById('BOP_27_mb_rectangle').style.display = 'block';
        }
        if (BOP_27_dp == 1) {
            document.getElementById('BOP_27_dp_rectangle').style.display = 'block';
        }
        if (BOP_27_p == 1) {
            document.getElementById('BOP_27_p_rectangle').style.display = 'block';
        }
        if (BOP_27_mp == 1) {
            document.getElementById('BOP_27_mp_rectangle').style.display = 'block';
        }
        
        if (PI_27_db == 1) {
            document.getElementById('PI_27_db_rectangle').style.display = 'block';
        }
        if (PI_27_b == 1) {
            document.getElementById('PI_27_b_rectangle').style.display = 'block';
        }
        if (PI_27_mb == 1) {
            document.getElementById('PI_27_mb_rectangle').style.display = 'block';
        }
        if (PI_27_dp == 1) {
            document.getElementById('PI_27_dp_rectangle').style.display = 'block';
        }
        if (PI_27_p == 1) {
            document.getElementById('PI_27_p_rectangle').style.display = 'block';
        }
        if (PI_27_mp == 1) {
            document.getElementById('PI_27_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_27() {
    if (Implantat_27 == 0) {
        Implantat_27 = 1;
        
        document.getElementById('implantat_27_b_image').style.display = 'block';
        document.getElementById('implantat_27_p_image').style.display = 'block';
        document.getElementById('implantat_27_tab').style.display = 'block';
        
        document.getElementById('furkation_27_b_btn').style.display = 'none';
        document.getElementById('furkation_27_dp_btn').style.display = 'none';
        document.getElementById('furkation_27_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_27_b').style.display = 'none';
        document.getElementById('furkation_2_27_b').style.display = 'none';
        document.getElementById('furkation_3_27_b').style.display = 'none';
        
        document.getElementById('furkation_1_27_b_tab').style.display = 'none';
        document.getElementById('furkation_2_27_b_tab').style.display = 'none';
        document.getElementById('furkation_3_27_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp').style.display = 'none';
        document.getElementById('furkation_2_27_dp').style.display = 'none';
        document.getElementById('furkation_3_27_dp').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp').style.display = 'none';
        document.getElementById('furkation_2_27_mp').style.display = 'none';
        document.getElementById('furkation_3_27_mp').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
    }
    else {
        Implantat_27 = 0;
        
        document.getElementById('implantat_27_b_image').style.display = 'none';
        document.getElementById('implantat_27_p_image').style.display = 'none';
        document.getElementById('implantat_27_tab').style.display = 'none';
        
        document.getElementById('furkation_27_b_btn').style.display = 'block';
        document.getElementById('furkation_27_dp_btn').style.display = 'block';
        document.getElementById('furkation_27_mp_btn').style.display = 'block';

        if (Furkation_27_b == 1) {
            document.getElementById('furkation_1_27_b').style.display = 'block';
        } else if (Furkation_27_b == 2) {
            document.getElementById('furkation_2_27_b').style.display = 'block';
        } else if (Furkation_27_b == 3) {
            document.getElementById('furkation_3_27_b').style.display = 'block';
        }
        if (Furkation_27_b == 1) {
            document.getElementById('furkation_1_27_b_tab').style.display = 'block';
        } else if (Furkation_27_b == 2) {
            document.getElementById('furkation_2_27_b_tab').style.display = 'block';
        } else if (Furkation_27_b == 3) {
            document.getElementById('furkation_3_27_b_tab').style.display = 'block';
        }
        if (Furkation_27_dp == 1) {
            document.getElementById('furkation_1_27_dp').style.display = 'block';
        } else if (Furkation_27_dp == 2) {
            document.getElementById('furkation_2_27_dp').style.display = 'block';
        } else if (Furkation_27_dp == 3) {
            document.getElementById('furkation_3_27_dp').style.display = 'block';
        }
        if (Furkation_27_dp == 1) {
            document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
        } else if (Furkation_27_dp == 2) {
            document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
        } else if (Furkation_27_dp == 3) {
            document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
        }
        if (Furkation_27_mp == 1) {
            document.getElementById('furkation_1_27_mp').style.display = 'block';
        } else if (Furkation_27_mp == 2) {
            document.getElementById('furkation_2_27_mp').style.display = 'block';
        } else if (Furkation_27_mp == 3) {
            document.getElementById('furkation_3_27_mp').style.display = 'block';
        }
        if (Furkation_27_mp == 1) {
            document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
        } else if (Furkation_27_mp == 2) {
            document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
        } else if (Furkation_27_mp == 3) {
            document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_27_b() {
    if (Furkation_27_b == 0) {
        document.getElementById('furkation_1_27_b_tab').style.display = 'block';
        document.getElementById('furkation_2_27_b_tab').style.display = 'none';
        document.getElementById('furkation_3_27_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_b').style.display = 'block';
        document.getElementById('furkation_2_27_b').style.display = 'none';
        document.getElementById('furkation_3_27_b').style.display = 'none';

        Furkation_27_b = 1;
    }
    else if (Furkation_27_b == 1) {
        document.getElementById('furkation_1_27_b_tab').style.display = 'none';
        document.getElementById('furkation_2_27_b_tab').style.display = 'block';
        document.getElementById('furkation_3_27_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_b').style.display = 'none';
        document.getElementById('furkation_2_27_b').style.display = 'block';
        document.getElementById('furkation_3_27_b').style.display = 'none';
        
        Furkation_27_b = 2;
    }
    else if (Furkation_27_b == 2) {
        document.getElementById('furkation_1_27_b_tab').style.display = 'none';
        document.getElementById('furkation_2_27_b_tab').style.display = 'none';
        document.getElementById('furkation_3_27_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_27_b').style.display = 'none';
        document.getElementById('furkation_2_27_b').style.display = 'none';
        document.getElementById('furkation_3_27_b').style.display = 'block';
                    
        Furkation_27_b = 3;
    }
    else if (Furkation_27_b == 3) {
        document.getElementById('furkation_1_27_b_tab').style.display = 'none';
        document.getElementById('furkation_2_27_b_tab').style.display = 'none';
        document.getElementById('furkation_3_27_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_b').style.display = 'none';
        document.getElementById('furkation_2_27_b').style.display = 'none';
        document.getElementById('furkation_3_27_b').style.display = 'none';
                    
        Furkation_27_b = 0;
    }
}

function toggle_furcation_27_dp() {
    if (Furkation_27_dp == 0) {
        document.getElementById('furkation_1_27_dp_tab').style.display = 'block';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp').style.display = 'block';
        document.getElementById('furkation_2_27_dp').style.display = 'none';
        document.getElementById('furkation_3_27_dp').style.display = 'none';

        Furkation_27_dp = 1;
    }
    else if (Furkation_27_dp == 1) {
        document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'block';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp').style.display = 'none';
        document.getElementById('furkation_2_27_dp').style.display = 'block';
        document.getElementById('furkation_3_27_dp').style.display = 'none';
        
        Furkation_27_dp = 2;
    }
    else if (Furkation_27_dp == 2) {
        document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_27_dp').style.display = 'none';
        document.getElementById('furkation_2_27_dp').style.display = 'none';
        document.getElementById('furkation_3_27_dp').style.display = 'block';
                    
        Furkation_27_dp = 3;
    }
    else if (Furkation_27_dp == 3) {
        document.getElementById('furkation_1_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_dp').style.display = 'none';
        document.getElementById('furkation_2_27_dp').style.display = 'none';
        document.getElementById('furkation_3_27_dp').style.display = 'none';
                    
        Furkation_27_dp = 0;
    }
}

function toggle_furcation_27_mp() {
    if (Furkation_27_mp == 0) {
        document.getElementById('furkation_1_27_mp_tab').style.display = 'block';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp').style.display = 'block';
        document.getElementById('furkation_2_27_mp').style.display = 'none';
        document.getElementById('furkation_3_27_mp').style.display = 'none';

        Furkation_27_mp = 1;
    }
    else if (Furkation_27_mp == 1) {
        document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'block';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp').style.display = 'none';
        document.getElementById('furkation_2_27_mp').style.display = 'block';
        document.getElementById('furkation_3_27_mp').style.display = 'none';
        
        Furkation_27_mp = 2;
    }
    else if (Furkation_27_mp == 2) {
        document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_27_mp').style.display = 'none';
        document.getElementById('furkation_2_27_mp').style.display = 'none';
        document.getElementById('furkation_3_27_mp').style.display = 'block';
                    
        Furkation_27_mp = 3;
    }
    else if (Furkation_27_mp == 3) {
        document.getElementById('furkation_1_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_27_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_27_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_27_mp').style.display = 'none';
        document.getElementById('furkation_2_27_mp').style.display = 'none';
        document.getElementById('furkation_3_27_mp').style.display = 'none';
                    
        Furkation_27_mp = 0;
    }
}

function toggle_BOP_27_db() {
    if (BOP_27_db == 0) {
        BOP_27_db = 1;
        document.getElementById('BOP_27_db_rectangle').style.display = 'block';
    }
    else {
        BOP_27_db = 0;
        document.getElementById('BOP_27_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_27_b() {
    if (BOP_27_b == 0) {
        BOP_27_b = 1;
        document.getElementById('BOP_27_b_rectangle').style.display = 'block';
    }
    else {
        BOP_27_b = 0;
        document.getElementById('BOP_27_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_27_mb() {
    if (BOP_27_mb == 0) {
        BOP_27_mb = 1;
        document.getElementById('BOP_27_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_27_mb = 0;
        document.getElementById('BOP_27_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_db() {
    if (PI_27_db == 0) {
        PI_27_db = 1;
        document.getElementById('PI_27_db_rectangle').style.display = 'block';
    }
    else {
        PI_27_db = 0;
        document.getElementById('PI_27_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_b() {
    if (PI_27_b == 0) {
        PI_27_b = 1;
        document.getElementById('PI_27_b_rectangle').style.display = 'block';
    }
    else {
        PI_27_b = 0;
        document.getElementById('PI_27_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_mb() {
    if (PI_27_mb == 0) {
        PI_27_mb = 1;
        document.getElementById('PI_27_mb_rectangle').style.display = 'block';
    }
    else {
        PI_27_mb = 0;
        document.getElementById('PI_27_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_27_dp() {
    if (BOP_27_dp == 0) {
        BOP_27_dp = 1;
        document.getElementById('BOP_27_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_27_dp = 0;
        document.getElementById('BOP_27_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_27_p() {
    if (BOP_27_p == 0) {
        BOP_27_p = 1;
        document.getElementById('BOP_27_p_rectangle').style.display = 'block';
    }
    else {
        BOP_27_p = 0;
        document.getElementById('BOP_27_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_27_mp() {
    if (BOP_27_mp == 0) {
        BOP_27_mp = 1;
        document.getElementById('BOP_27_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_27_mp = 0;
        document.getElementById('BOP_27_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_dp() {
    if (PI_27_dp == 0) {
        PI_27_dp = 1;
        document.getElementById('PI_27_dp_rectangle').style.display = 'block';
    }
    else {
        PI_27_dp = 0;
        document.getElementById('PI_27_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_p() {
    if (PI_27_p == 0) {
        PI_27_p = 1;
        document.getElementById('PI_27_p_rectangle').style.display = 'block';
    }
    else {
        PI_27_p = 0;
        document.getElementById('PI_27_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_27_mp() {
    if (PI_27_mp == 0) {
        PI_27_mp = 1;
        document.getElementById('PI_27_mp_rectangle').style.display = 'block';
    }
    else {
        PI_27_mp = 0;
        document.getElementById('PI_27_mp_rectangle').style.display = 'none';
    }
}

function change_probing_27() {
    if (Zahn_27 == 1) {
        
    // Variablen aus dem Formular
        st_27_db = document.forms[0]["st_27_db"].value;
        st_27_b = document.forms[0]["st_27_b"].value;
        st_27_mb = document.forms[0]["st_27_mb"].value;

        if (document.forms[0]["st_27_dp"].value > 3) {document.forms[0]["st_27_dp"].style.color = 'red';} else {document.forms[0]["st_27_dp"].style.color = 'black'};
        if (document.forms[0]["st_27_p"].value > 3) {document.forms[0]["st_27_p"].style.color = 'red';} else {document.forms[0]["st_27_p"].style.color = 'black'};
        if (document.forms[0]["st_27_mp"].value > 3) {document.forms[0]["st_27_mp"].style.color = 'red';} else {document.forms[0]["st_27_mp"].style.color = 'black'};
        
        mg_27_db = document.forms[0]["mg_27_db"].value;
        mg_27_b = document.forms[0]["mg_27_b"].value;
        mg_27_mb = document.forms[0]["mg_27_mb"].value;
        
        st_27_dp = document.forms[0]["st_27_dp"].value;
        st_27_p = document.forms[0]["st_27_p"].value;
        st_27_mp = document.forms[0]["st_27_mp"].value;

        if (document.forms[0]["st_27_db"].value > 3) {document.forms[0]["st_27_db"].style.color = 'red';} else {document.forms[0]["st_27_db"].style.color = 'black'};
        if (document.forms[0]["st_27_b"].value > 3) {document.forms[0]["st_27_b"].style.color = 'red';} else {document.forms[0]["st_27_b"].style.color = 'black'};
        if (document.forms[0]["st_27_mb"].value > 3) {document.forms[0]["st_27_mb"].style.color = 'red';} else {document.forms[0]["st_27_mb"].style.color = 'black'};
        
        mg_27_dp = document.forms[0]["mg_27_dp"].value;
        mg_27_p = document.forms[0]["mg_27_p"].value;
        mg_27_mp = document.forms[0]["mg_27_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 27 (bukkal) in der Bitmap
        var x_db_27 = 1011;							// distal 27
        var x_mb_27 = 972;							// mesial 27
        var x_b_27 = (x_db_27 + x_mb_27)/2;			// bukkal 27
        
    // Set der horizontalen Koordinaten von Zahn 27 (palatinal) in der Bitmap
        var x_dp_27 = 1015;							// distal 27
        var x_mp_27 = 976;							// mesial 27
        var x_p_27 = (x_dp_27 + x_mp_27)/2;			// palatinal 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (bukkal) aus dem Formular
        var y_mg_27_db = mg_OK_b + 6.5 * mg_27_db;	// Margo Gingivae distobukkal 27
        var y_mg_27_b = mg_OK_b + 6.5 * mg_27_b;	// Margo Gingivae bukkal 27
        var y_mg_27_mb = mg_OK_b + 6.5 * mg_27_mb;	// Margo Gingivae mesiobukkal 27
        var y_st_27_db = 6.5 * st_27_db;			// Sondierungstiefe distobukkal 27
        var y_st_27_b = 6.5 * st_27_b;				// Sondierungstiefe bukkal 27
        var y_st_27_mb = 6.5 * st_27_mb;			// Sondierungstiefe mesiobukkal 27
        
    // Set der vertikalen Koordinaten von Zahn 27 (palatinal) aus dem Formular
        var y_mg_27_dp = mg_OK_p - 6.5 * mg_27_dp;	// Margo Gingivae distopalatinal 27
        var y_mg_27_p = mg_OK_p - 6.5 * mg_27_p;	// Margo Gingivae palatinal 27
        var y_mg_27_mp = mg_OK_p - 6.5 * mg_27_mp;	// Margo Gingivae mesiopalatinal 27
        var y_st_27_dp = 6.5 * st_27_dp;			// Sondierungstiefe distopalatinal 27
        var y_st_27_p = 6.5 * st_27_p;				// Sondierungstiefe palatinal 27
        var y_st_27_mp = 6.5 * st_27_mp;			// Sondierungstiefe mesiopalatinal 27
        
    // Berechnung des Attachmentniveaus 27 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_db = y_mg_27_db - y_st_27_db;	// Attachmentniveau distobukkal 27
        var y_an_27_b = y_mg_27_b - y_st_27_b;		// Attachmentniveau bukkal 27
        var y_an_27_mb = y_mg_27_mb - y_st_27_mb;	// Attachmentniveau mesiobukkal 27
        
    // Berechnung des Attachmentniveaus 27 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_27_dp = y_mg_27_dp + y_st_27_dp;	// Attachmentniveau distopalatinal 27
        var y_an_27_p = y_mg_27_p + y_st_27_p;		// Attachmentniveau palatinal 27
        var y_an_27_mp = y_mg_27_mp + y_st_27_mp;	// Attachmentniveau mesiopalatinal 27
        
    // Parodontaltasche 27 bukkal zeichnen
        var string = 
            x_db_27 + ", " + y_an_27_db + "  " + 
            x_b_27 + ", " + y_an_27_b + "  " + 
            x_mb_27 + ", " + y_an_27_mb + "  " + 
            x_mb_27 + ", " + y_mg_27_mb + "  " + 
            x_b_27 + ", " + y_mg_27_b + "  " + 
            x_db_27 + ", " + y_mg_27_db;
        document.getElementById("polygon_27_b").setAttribute("points", string);
    // Attachmentniveau 27 bukkal zeichnen
        var string = 
            x_db_27 + ", " + y_an_27_db + "  " + 
            x_b_27 + ", " + y_an_27_b + "  " + 
            x_mb_27 + ", " + y_an_27_mb;
        document.getElementById("polyline_an_27_b").setAttribute("points", string);
    // Margo Gingivae 27 bukkal zeichnen
        var string =
            x_db_27 + ", " + y_mg_27_db + "  " + 
            x_b_27 + ", " + y_mg_27_b + "  " + 
            x_mb_27 + ", " + y_mg_27_mb;
        document.getElementById("polyline_mg_27_b").setAttribute("points", string);

    // Parodontaltasche 27 palatinal zeichnen
        var string = 
            x_dp_27 + ", " + y_an_27_dp + "  " + 
            x_p_27 + ", " + y_an_27_p + "  " + 
            x_mp_27 + ", " + y_an_27_mp + "  " + 
            x_mp_27 + ", " + y_mg_27_mp + "  " + 
            x_p_27 + ", " + y_mg_27_p + "  " + 
            x_dp_27 + ", " + y_mg_27_dp;
        document.getElementById("polygon_27_p").setAttribute("points", string);
    // Attachmentniveau 27 palatinal zeichnen
        var string = 
            x_dp_27 + ", " + y_an_27_dp + "  " + 
            x_p_27 + ", " + y_an_27_p + "  " + 
            x_mp_27 + ", " + y_an_27_mp;
        document.getElementById("polyline_an_27_p").setAttribute("points", string);
    // Margo Gingivae 27 palatinal zeichnen
        var string =
            x_dp_27 + ", " + y_mg_27_dp + "  " + 
            x_p_27 + ", " + y_mg_27_p + "  " + 
            x_mp_27 + ", " + y_mg_27_mp;
        document.getElementById("polyline_mg_27_p").setAttribute("points", string);
    }
    if (Zahn_27 == 1 && Tooth_26 == 1) {

        st_26_db = document.forms[0]["st_26_db"].value;
        mg_26_db = document.forms[0]["mg_26_db"].value;
        
        st_26_dp = document.forms[0]["st_26_dp"].value;
        mg_26_dp = document.forms[0]["mg_26_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 26 (bukkal) in der Bitmap
        var x_db_26 = 961;							// distal 26
        
    // Set der horizontalen Koordinaten von Zahn 26 (palatinal) in der Bitmap
        var x_dp_26 = 960;							// distal 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (bukkal) aus dem Formular
        var y_mg_26_db = mg_OK_b + 6.5 * mg_26_db;	// Margo Gingivae distobukkal 26
        var y_st_26_db = 6.5 * st_26_db;			// Sondierungstiefe distobukkal 26
        
    // Set der vertikalen Koordinaten von Zahn 26 (palatinal) aus dem Formular
        var y_mg_26_dp = mg_OK_p - 6.5 * mg_26_dp;	// Margo Gingivae distopalatinal 26
        var y_st_26_dp = 6.5 * st_26_dp;			// Sondierungstiefe distopalatinal 26
        
    // Berechnung des Attachmentniveaus 26 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_db = y_mg_26_db - y_st_26_db;	// Attachmentniveau distobukkal 26
        
    // Berechnung des Attachmentniveaus 26 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_26_dp = y_mg_26_dp + y_st_26_dp;	// Attachmentniveau distopalatinal 26

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
    if (Zahn_28 == 1 && Zahn_27 == 1) {

        st_28_mb = document.forms[0]["st_28_mb"].value;
        mg_28_mb = document.forms[0]["mg_28_mb"].value;
        
        st_28_mp = document.forms[0]["st_28_mp"].value;
        mg_28_mp = document.forms[0]["mg_28_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 28 (bukkal) in der Bitmap
        var x_mb_28 = 1026;							// mesial 28
        
    // Set der horizontalen Koordinaten von Zahn 28 (palatinal) in der Bitmap
        var x_mp_28 = 1028;							// mesial 28
        
    // Set der vertikalen Koordinaten von Zahn 28 (bukkal) aus dem Formular
        var y_mg_28_mb = mg_OK_b + 6.5 * mg_28_mb;	// Margo Gingivae mesiobukkal 28
        var y_st_28_mb = 6.5 * st_28_mb;			// Sondierungstiefe mesiobukkal 28
        
    // Set der vertikalen Koordinaten von Zahn 28 (palatinal) aus dem Formular
        var y_mg_28_mp = mg_OK_p - 6.5 * mg_28_mp;	// Margo Gingivae mesiopalatinal 28
        var y_st_28_mp = 6.5 * st_28_mp;			// Sondierungstiefe mesiopalatinal 28
        
    // Berechnung des Attachmentniveaus 28 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_28_mb = y_mg_28_mb - y_st_28_mb;	// Attachmentniveau mesiobukkal 28
        
    // Berechnung des Attachmentniveaus 28 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_28_mp = y_mg_28_mp + y_st_28_mp;	// Attachmentniveau mesiopalatinal 28

    // Parodontaltasche inter_28_27 bukkal zeichnen
        var string = 
            x_mb_28 + ", " + y_an_28_mb + "  " + 
            x_db_27 + ", " + y_an_27_db + "  " + 
            x_db_27 + ", " + y_mg_27_db + "  " + 
            x_mb_28 + ", " + y_mg_28_mb;
        document.getElementById("polygon_inter_28_27_b").setAttribute("points", string);
    // Attachmentniveau inter_28_27 bukkal zeichnen
        var string = 
            x_mb_28 + ", " + y_an_28_mb + "  " + 
            x_db_27 + ", " + y_an_27_db;
        document.getElementById("polyline_an_inter_28_27_b").setAttribute("points", string);
    // Margo Gingivae inter_28_27 bukkal zeichnen
        var string =
            x_mb_28 + ", " + y_mg_28_mb + "  " + 
            x_db_27 + ", " + y_mg_27_db;
        document.getElementById("polyline_mg_inter_28_27_b").setAttribute("points", string);

    // Parodontaltasche inter_28_27 palatinal zeichnen
        var string = 
            x_mp_28 + ", " + y_an_28_mp + "  " + 
            x_dp_27 + ", " + y_an_27_dp + "  " + 
            x_dp_27 + ", " + y_mg_27_dp + "  " + 
            x_mp_28 + ", " + y_mg_28_mp;
        document.getElementById("polygon_inter_28_27_p").setAttribute("points", string);
    // Attachmentniveau inter_28_27 palatinal zeichnen
        var string = 
            x_mp_28 + ", " + y_an_28_mp + "  " + 
            x_dp_27 + ", " + y_an_27_dp;
        document.getElementById("polyline_an_inter_28_27_p").setAttribute("points", string);
    // Margo Gingivae inter_28_27 palatinal zeichnen
        var string =
            x_mp_28 + ", " + y_mg_28_mp + "  " + 
            x_dp_27 + ", " + y_mg_27_dp;
        document.getElementById("polyline_mg_inter_28_27_p").setAttribute("points", string);
    }
}