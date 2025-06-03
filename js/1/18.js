	// Definition der Variablen fÃ¼r das Formular
    var Tooth_18 = 1;
    var Furcation_18_b = 0;
    var Furcation_18_dp = 0;
    var Furcation_18_mp = 0;
    var Implantat_18 = 0;
    var BOP_18_db = 0;
    var BOP_18_b = 0;
    var BOP_18_mb = 0;
    var PI_18_db = 0;
    var PI_18_b = 0;
    var PI_18_mb = 0;
    var BOP_18_dp = 0;
    var BOP_18_p = 0;
    var BOP_18_mp = 0;
    var PI_18_dp = 0;
    var PI_18_p = 0;
    var PI_18_mp = 0;
    var mg_18_db = 0;
    var mg_18_b = 0;
    var mg_18_mb = 0;
    var st_18_db = 0;
    var st_18_b = 0;
    var st_18_mb = 0;
    var mg_18_dp = 0;
    var mg_18_p = 0;
    var mg_18_mp = 0;
    var st_18_dp = 0;
    var st_18_p = 0;
    var st_18_mp = 0;

function clear_data_18() {
    if (Tooth_18 == 1) {
        mg_18_db = 0;
        mg_18_b = 0;
        mg_18_mb = 0;
        st_18_db = 0;
        st_18_b = 0;
        st_18_mb = 0;

            document.getElementById('mg_18_db_txt').value = 0;
            document.getElementById('mg_18_b_txt').value = 0;
            document.getElementById('mg_18_mb_txt').value = 0;
            
            document.getElementById('st_18_db_txt').value = 0;
            document.getElementById('st_18_b_txt').value = 0;
            document.getElementById('st_18_mb_txt').value = 0;
        
            document.forms[0]["st_18_db"].style.color = 'black'
            document.forms[0]["st_18_b"].style.color = 'black'
            document.forms[0]["st_18_mb"].style.color = 'black'
        
        mg_18_dp = 0;
        mg_18_p = 0;
        mg_18_mp = 0;
        st_18_dp = 0;
        st_18_p = 0;
        st_18_mp = 0;

            document.getElementById('mg_18_dp_txt').value = 0;
            document.getElementById('mg_18_p_txt').value = 0;
            document.getElementById('mg_18_mp_txt').value = 0;
            
            document.getElementById('st_18_dp_txt').value = 0;
            document.getElementById('st_18_p_txt').value = 0;
            document.getElementById('st_18_mp_txt').value = 0;

            document.forms[0]["st_18_dp"].style.color = 'black'
            document.forms[0]["st_18_p"].style.color = 'black'
            document.forms[0]["st_18_mp"].style.color = 'black'
        
        change_probing_18();
        
        mobility_18 = 0;

            document.getElementById('mobility_18_txt').value = "0";

        note_18 = "";

            document.getElementById('note_18_txt').value = "";

        Furcation_18_b = 0;
        Furcation_18_dp = 0;
        Furcation_18_mp = 0;

            document.getElementById('furcation_1_18_b').style.display = 'none';
            document.getElementById('furcation_2_18_b').style.display = 'none';
            document.getElementById('furcation_3_18_b').style.display = 'none';
                
            document.getElementById('furcation_1_18_b_tab').style.display = 'none';
            document.getElementById('furcation_2_18_b_tab').style.display = 'none';
            document.getElementById('furcation_3_18_b_tab').style.display = 'none';
            
            document.getElementById('furcation_1_18_dp').style.display = 'none';
            document.getElementById('furcation_2_18_dp').style.display = 'none';
            document.getElementById('furcation_3_18_dp').style.display = 'none';
                
            document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
            document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
            document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
            
            document.getElementById('furcation_1_18_mp').style.display = 'none';
            document.getElementById('furcation_2_18_mp').style.display = 'none';
            document.getElementById('furcation_3_18_mp').style.display = 'none';
            
            document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
            document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
            document.getElementById('furcation_3_18_mp_tab').style.display = 'none';

        BOP_18_db = 0;
        BOP_18_b = 0;
        BOP_18_mb = 0;
                
        BOP_18_dp = 0;
        BOP_18_p = 0;
        BOP_18_mp = 0;
                
            document.getElementById('BOP_18_db_rectangle').style.display = 'none';
            document.getElementById('BOP_18_b_rectangle').style.display = 'none';
            document.getElementById('BOP_18_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_18_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_18_p_rectangle').style.display = 'none';
            document.getElementById('BOP_18_mp_rectangle').style.display = 'none';
            
        PI_18_db = 0;
        PI_18_b = 0;
        PI_18_mb = 0;
                
        PI_18_dp = 0;
        PI_18_p = 0;
        PI_18_mp = 0;

            document.getElementById('PI_18_db_rectangle').style.display = 'none';
            document.getElementById('PI_18_b_rectangle').style.display = 'none';
            document.getElementById('PI_18_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_18_dp_rectangle').style.display = 'none';
            document.getElementById('PI_18_p_rectangle').style.display = 'none';
            document.getElementById('PI_18_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_18() {
    if (Tooth_18 === 1) {
        Tooth_18 = 0;
        document.getElementById('tooth_line_18_b').style.display = 'block';
        document.getElementById('tooth_line_18_p').style.display = 'block';
        
        document.getElementById('mobility_18_txt').style.display = 'none';
        
        document.getElementById('implantat_18_btn').style.display = 'none';
        document.getElementById('implantat_18_tab').style.display = 'none';
        document.getElementById('implantat_18_b_image').style.display = 'none';
        document.getElementById('implantat_18_p_image').style.display = 'none';
        
        document.getElementById('furcation_18_b_btn').style.display = 'none';
        document.getElementById('furcation_18_dp_btn').style.display = 'none';
        document.getElementById('furcation_18_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_18_b').style.display = 'none';
        document.getElementById('furcation_2_18_b').style.display = 'none';
        document.getElementById('furcation_3_18_b').style.display = 'none';
        
        document.getElementById('furcation_1_18_b_tab').style.display = 'none';
        document.getElementById('furcation_2_18_b_tab').style.display = 'none';
        document.getElementById('furcation_3_18_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp').style.display = 'none';
        document.getElementById('furcation_2_18_dp').style.display = 'none';
        document.getElementById('furcation_3_18_dp').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp').style.display = 'none';
        document.getElementById('furcation_2_18_mp').style.display = 'none';
        document.getElementById('furcation_3_18_mp').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'none';
        
        document.getElementById('mg_18_db_txt').style.display = 'none';
        document.getElementById('mg_18_b_txt').style.display = 'none';
        document.getElementById('mg_18_mb_txt').style.display = 'none';
        
        document.getElementById('st_18_db_txt').style.display = 'none';
        document.getElementById('st_18_b_txt').style.display = 'none';
        document.getElementById('st_18_mb_txt').style.display = 'none';
        
        document.getElementById('mg_18_dp_txt').style.display = 'none';
        document.getElementById('mg_18_p_txt').style.display = 'none';
        document.getElementById('mg_18_mp_txt').style.display = 'none';
        
        document.getElementById('st_18_dp_txt').style.display = 'none';
        document.getElementById('st_18_p_txt').style.display = 'none';
        document.getElementById('st_18_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_18_db_rectangle').style.display = 'none';
        document.getElementById('BOP_18_b_rectangle').style.display = 'none';
        document.getElementById('BOP_18_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_18_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_18_p_rectangle').style.display = 'none';
        document.getElementById('BOP_18_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_18_db_btn').style.display = 'none';
        document.getElementById('BOP_18_b_btn').style.display = 'none';
        document.getElementById('BOP_18_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_18_dp_btn').style.display = 'none';
        document.getElementById('BOP_18_p_btn').style.display = 'none';
        document.getElementById('BOP_18_mp_btn').style.display = 'none';
        
        document.getElementById('PI_18_db_rectangle').style.display = 'none';
        document.getElementById('PI_18_b_rectangle').style.display = 'none';
        document.getElementById('PI_18_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_18_dp_rectangle').style.display = 'none';
        document.getElementById('PI_18_p_rectangle').style.display = 'none';
        document.getElementById('PI_18_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_18_db_btn').style.display = 'none';
        document.getElementById('PI_18_b_btn').style.display = 'none';
        document.getElementById('PI_18_mb_btn').style.display = 'none';
        
        document.getElementById('PI_18_dp_btn').style.display = 'none';
        document.getElementById('PI_18_p_btn').style.display = 'none';
        document.getElementById('PI_18_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_18_b').style.display = 'none';
        document.getElementById('polyline_an_18_b').style.display = 'none';
        document.getElementById('polyline_mg_18_b').style.display = 'none';
        
        document.getElementById('polygon_18_p').style.display = 'none';
        document.getElementById('polyline_an_18_p').style.display = 'none';
        document.getElementById('polyline_mg_18_p').style.display = 'none';
        
        document.getElementById('polygon_inter_18_17_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_18_17_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_18_17_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_18_17_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_18_17_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_18_17_p').style.display = 'none';            
        
        document.getElementById('note_18_txt').style.display = 'none';
    }
    else if (Implantat_18 !== 1) {
        Tooth_18 = 1;
        document.getElementById('tooth_line_18_b').style.display = 'none';
        document.getElementById('tooth_line_18_p').style.display = 'none';

        document.getElementById('mobility_18_txt').style.display = 'block';

        document.getElementById('implantat_18_btn').style.display = 'block';

        document.getElementById('furcation_18_b_btn').style.display = 'block';
        document.getElementById('furcation_18_dp_btn').style.display = 'block';
        document.getElementById('furcation_18_mp_btn').style.display = 'block';
        
        document.getElementById('mg_18_db_txt').style.display = 'block';
        document.getElementById('mg_18_b_txt').style.display = 'block';
        document.getElementById('mg_18_mb_txt').style.display = 'block';
        
        document.getElementById('st_18_db_txt').style.display = 'block';
        document.getElementById('st_18_b_txt').style.display = 'block';
        document.getElementById('st_18_mb_txt').style.display = 'block';
        
        document.getElementById('mg_18_dp_txt').style.display = 'block';
        document.getElementById('mg_18_p_txt').style.display = 'block';
        document.getElementById('mg_18_mp_txt').style.display = 'block';
        
        document.getElementById('st_18_dp_txt').style.display = 'block';
        document.getElementById('st_18_p_txt').style.display = 'block';
        document.getElementById('st_18_mp_txt').style.display = 'block';
        
        document.getElementById('polygon_18_b').style.display = 'block';
        document.getElementById('polyline_an_18_b').style.display = 'block';
        document.getElementById('polyline_mg_18_b').style.display = 'block';
        
        document.getElementById('polygon_18_p').style.display = 'block';
        document.getElementById('polyline_an_18_p').style.display = 'block';
        document.getElementById('polyline_mg_18_p').style.display = 'block';
         
        if (Tooth_18 == 1 && Tooth_17 == 1) {
            document.getElementById('polygon_inter_18_17_b').style.display = 'block';
            document.getElementById('polyline_an_inter_18_17_b').style.display = 'block';
            document.getElementById('polyline_mg_inter_18_17_b').style.display = 'block';
            
            document.getElementById('polygon_inter_18_17_p').style.display = 'block';
            document.getElementById('polyline_an_inter_18_17_p').style.display = 'block';
            document.getElementById('polyline_mg_inter_18_17_p').style.display = 'block';            
        }
       
        document.getElementById('note_18_txt').style.display = 'block';

        if (Furcation_18_b == 1) {
            document.getElementById('furcation_1_18_b').style.display = 'block';
        } else if (Furcation_18_b == 2) {
            document.getElementById('furcation_2_18_b').style.display = 'block';
        } else if (Furcation_18_b == 3) {
            document.getElementById('furcation_3_18_b').style.display = 'block';
        }
        if (Furcation_18_b == 1) {
            document.getElementById('furcation_1_18_b_tab').style.display = 'block';
        } else if (Furcation_18_b == 2) {
            document.getElementById('furcation_2_18_b_tab').style.display = 'block';
        } else if (Furcation_18_b == 3) {
            document.getElementById('furcation_3_18_b_tab').style.display = 'block';
        }
        if (Furcation_18_dp == 1) {
            document.getElementById('furcation_1_18_dp').style.display = 'block';
        } else if (Furcation_18_dp == 2) {
            document.getElementById('furcation_2_18_dp').style.display = 'block';
        } else if (Furcation_18_dp == 3) {
            document.getElementById('furcation_3_18_dp').style.display = 'block';
        }
        if (Furcation_18_dp == 1) {
            document.getElementById('furcation_1_18_dp_tab').style.display = 'block';
        } else if (Furcation_18_dp == 2) {
            document.getElementById('furcation_2_18_dp_tab').style.display = 'block';
        } else if (Furcation_18_dp == 3) {
            document.getElementById('furcation_3_18_dp_tab').style.display = 'block';
        }
        if (Furcation_18_mp == 1) {
            document.getElementById('furcation_1_18_mp').style.display = 'block';
        } else if (Furcation_18_mp == 2) {
            document.getElementById('furcation_2_18_mp').style.display = 'block';
        } else if (Furcation_18_mp == 3) {
            document.getElementById('furcation_3_18_mp').style.display = 'block';
        }
        if (Furcation_18_mp == 1) {
            document.getElementById('furcation_1_18_mp_tab').style.display = 'block';
        } else if (Furcation_18_mp == 2) {
            document.getElementById('furcation_2_18_mp_tab').style.display = 'block';
        } else if (Furcation_18_mp == 3) {
            document.getElementById('furcation_3_18_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_18_db_btn').style.display = 'block';
        document.getElementById('BOP_18_b_btn').style.display = 'block';
        document.getElementById('BOP_18_mb_btn').style.display = 'block';

        document.getElementById('BOP_18_dp_btn').style.display = 'block';
        document.getElementById('BOP_18_p_btn').style.display = 'block';
        document.getElementById('BOP_18_mp_btn').style.display = 'block';
        
        if (BOP_18_db == 1) {
            document.getElementById('BOP_18_db_rectangle').style.display = 'block';
        }
        if (BOP_18_b == 1) {
            document.getElementById('BOP_18_b_rectangle').style.display = 'block';
        }
        if (BOP_18_mb == 1) {
            document.getElementById('BOP_18_mb_rectangle').style.display = 'block';
        }
        if (BOP_18_dp == 1) {
            document.getElementById('BOP_18_dp_rectangle').style.display = 'block';
        }
        if (BOP_18_p == 1) {
            document.getElementById('BOP_18_p_rectangle').style.display = 'block';
        }
        if (BOP_18_mp == 1) {
            document.getElementById('BOP_18_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_18_db_btn').style.display = 'block';
        document.getElementById('PI_18_b_btn').style.display = 'block';
        document.getElementById('PI_18_mb_btn').style.display = 'block';

        document.getElementById('PI_18_dp_btn').style.display = 'block';
        document.getElementById('PI_18_p_btn').style.display = 'block';
        document.getElementById('PI_18_mp_btn').style.display = 'block';
        
        if (PI_18_db == 1) {
            document.getElementById('PI_18_db_rectangle').style.display = 'block';
        }
        if (PI_18_b == 1) {
            document.getElementById('PI_18_b_rectangle').style.display = 'block';
        }
        if (PI_18_mb == 1) {
            document.getElementById('PI_18_mb_rectangle').style.display = 'block';
        }
        if (PI_18_dp == 1) {
            document.getElementById('PI_18_dp_rectangle').style.display = 'block';
        }
        if (PI_18_p == 1) {
            document.getElementById('PI_18_p_rectangle').style.display = 'block';
        }
        if (PI_18_mp == 1) {
            document.getElementById('PI_18_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_18 == 1) {
        Tooth_18 = 1;
        document.getElementById('tooth_line_18_b').style.display = 'none';
        document.getElementById('tooth_line_18_p').style.display = 'none';

        document.getElementById('mobility_18_txt').style.display = 'block';
        
        document.getElementById('note_18_txt').style.display = 'block';

        document.getElementById('implantat_18_btn').style.display = 'block';
        document.getElementById('implantat_18_tab').style.display = 'block';
        document.getElementById('implantat_18_b_image').style.display = 'block';
        document.getElementById('implantat_18_p_image').style.display = 'block';

        document.getElementById('mg_18_db_txt').style.display = 'block';
        document.getElementById('mg_18_b_txt').style.display = 'block';
        document.getElementById('mg_18_mb_txt').style.display = 'block';
        
        document.getElementById('st_18_db_txt').style.display = 'block';
        document.getElementById('st_18_b_txt').style.display = 'block';
        document.getElementById('st_18_mb_txt').style.display = 'block';
        
        document.getElementById('mg_18_dp_txt').style.display = 'block';
        document.getElementById('mg_18_p_txt').style.display = 'block';
        document.getElementById('mg_18_mp_txt').style.display = 'block';
        
        document.getElementById('st_18_dp_txt').style.display = 'block';
        document.getElementById('st_18_p_txt').style.display = 'block';
        document.getElementById('st_18_mp_txt').style.display = 'block';
        
        document.getElementById('polygon_18_b').style.display = 'block';
        document.getElementById('polyline_an_18_b').style.display = 'block';
        document.getElementById('polyline_mg_18_b').style.display = 'block';
        
        document.getElementById('polygon_18_p').style.display = 'block';
        document.getElementById('polyline_an_18_p').style.display = 'block';
        document.getElementById('polyline_mg_18_p').style.display = 'block';
        
        if (Tooth_18 == 1 && Tooth_17 == 1) {
            document.getElementById('polygon_inter_18_17_b').style.display = 'block';
            document.getElementById('polyline_an_inter_18_17_b').style.display = 'block';
            document.getElementById('polyline_mg_inter_18_17_b').style.display = 'block';
            
            document.getElementById('polygon_inter_18_17_p').style.display = 'block';
            document.getElementById('polyline_an_inter_18_17_p').style.display = 'block';
            document.getElementById('polyline_mg_inter_18_17_p').style.display = 'block';            
        }

        document.getElementById('BOP_18_db_btn').style.display = 'block';
        document.getElementById('BOP_18_b_btn').style.display = 'block';
        document.getElementById('BOP_18_mb_btn').style.display = 'block';

        document.getElementById('BOP_18_dp_btn').style.display = 'block';
        document.getElementById('BOP_18_p_btn').style.display = 'block';
        document.getElementById('BOP_18_mp_btn').style.display = 'block';
        
        document.getElementById('PI_18_db_btn').style.display = 'block';
        document.getElementById('PI_18_b_btn').style.display = 'block';
        document.getElementById('PI_18_mb_btn').style.display = 'block';

        document.getElementById('PI_18_dp_btn').style.display = 'block';
        document.getElementById('PI_18_p_btn').style.display = 'block';
        document.getElementById('PI_18_mp_btn').style.display = 'block';
        
        if (BOP_18_db == 1) {
            document.getElementById('BOP_18_db_rectangle').style.display = 'block';
        }
        if (BOP_18_b == 1) {
            document.getElementById('BOP_18_b_rectangle').style.display = 'block';
        }
        if (BOP_18_mb == 1) {
            document.getElementById('BOP_18_mb_rectangle').style.display = 'block';
        }
        if (BOP_18_dp == 1) {
            document.getElementById('BOP_18_dp_rectangle').style.display = 'block';
        }
        if (BOP_18_p == 1) {
            document.getElementById('BOP_18_p_rectangle').style.display = 'block';
        }
        if (BOP_18_mp == 1) {
            document.getElementById('BOP_18_mp_rectangle').style.display = 'block';
        }
        
        if (PI_18_db == 1) {
            document.getElementById('PI_18_db_rectangle').style.display = 'block';
        }
        if (PI_18_b == 1) {
            document.getElementById('PI_18_b_rectangle').style.display = 'block';
        }
        if (PI_18_mb == 1) {
            document.getElementById('PI_18_mb_rectangle').style.display = 'block';
        }
        if (PI_18_dp == 1) {
            document.getElementById('PI_18_dp_rectangle').style.display = 'block';
        }
        if (PI_18_p == 1) {
            document.getElementById('PI_18_p_rectangle').style.display = 'block';
        }
        if (PI_18_mp == 1) {
            document.getElementById('PI_18_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_18() {
    if (Implantat_18 == 0) {
        Implantat_18 = 1;
        
        document.getElementById('implantat_18_b_image').style.display = 'block';
        document.getElementById('implantat_18_p_image').style.display = 'block';
        document.getElementById('implantat_18_tab').style.display = 'block';
        
        document.getElementById('furcation_18_b_btn').style.display = 'none';
        document.getElementById('furcation_18_dp_btn').style.display = 'none';
        document.getElementById('furcation_18_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_18_b').style.display = 'none';
        document.getElementById('furcation_2_18_b').style.display = 'none';
        document.getElementById('furcation_3_18_b').style.display = 'none';
        
        document.getElementById('furcation_1_18_b_tab').style.display = 'none';
        document.getElementById('furcation_2_18_b_tab').style.display = 'none';
        document.getElementById('furcation_3_18_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp').style.display = 'none';
        document.getElementById('furcation_2_18_dp').style.display = 'none';
        document.getElementById('furcation_3_18_dp').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp').style.display = 'none';
        document.getElementById('furcation_2_18_mp').style.display = 'none';
        document.getElementById('furcation_3_18_mp').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'none';
    }
    else {
        Implantat_18 = 0;
        
        document.getElementById('implantat_18_b_image').style.display = 'none';
        document.getElementById('implantat_18_p_image').style.display = 'none';
        document.getElementById('implantat_18_tab').style.display = 'none';
        
        document.getElementById('furcation_18_b_btn').style.display = 'block';
        document.getElementById('furcation_18_dp_btn').style.display = 'block';
        document.getElementById('furcation_18_mp_btn').style.display = 'block';

        if (Furcation_18_b == 1) {
            document.getElementById('furcation_1_18_b').style.display = 'block';
        } else if (Furcation_18_b == 2) {
            document.getElementById('furcation_2_18_b').style.display = 'block';
        } else if (Furcation_18_b == 3) {
            document.getElementById('furcation_3_18_b').style.display = 'block';
        }
        if (Furcation_18_b == 1) {
            document.getElementById('furcation_1_18_b_tab').style.display = 'block';
        } else if (Furcation_18_b == 2) {
            document.getElementById('furcation_2_18_b_tab').style.display = 'block';
        } else if (Furcation_18_b == 3) {
            document.getElementById('furcation_3_18_b_tab').style.display = 'block';
        }
        if (Furcation_18_dp == 1) {
            document.getElementById('furcation_1_18_dp').style.display = 'block';
        } else if (Furcation_18_dp == 2) {
            document.getElementById('furcation_2_18_dp').style.display = 'block';
        } else if (Furcation_18_dp == 3) {
            document.getElementById('furcation_3_18_dp').style.display = 'block';
        }
        if (Furcation_18_dp == 1) {
            document.getElementById('furcation_1_18_dp_tab').style.display = 'block';
        } else if (Furcation_18_dp == 2) {
            document.getElementById('furcation_2_18_dp_tab').style.display = 'block';
        } else if (Furcation_18_dp == 3) {
            document.getElementById('furcation_3_18_dp_tab').style.display = 'block';
        }
        if (Furcation_18_mp == 1) {
            document.getElementById('furcation_1_18_mp').style.display = 'block';
        } else if (Furcation_18_mp == 2) {
            document.getElementById('furcation_2_18_mp').style.display = 'block';
        } else if (Furcation_18_mp == 3) {
            document.getElementById('furcation_3_18_mp').style.display = 'block';
        }
        if (Furcation_18_mp == 1) {
            document.getElementById('furcation_1_18_mp_tab').style.display = 'block';
        } else if (Furcation_18_mp == 2) {
            document.getElementById('furcation_2_18_mp_tab').style.display = 'block';
        } else if (Furcation_18_mp == 3) {
            document.getElementById('furcation_3_18_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_18_b() {
    if (Furcation_18_b == 0) {
        document.getElementById('furcation_1_18_b_tab').style.display = 'block';
        document.getElementById('furcation_2_18_b_tab').style.display = 'none';
        document.getElementById('furcation_3_18_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_b').style.display = 'block';
        document.getElementById('furcation_2_18_b').style.display = 'none';
        document.getElementById('furcation_3_18_b').style.display = 'none';

        Furcation_18_b = 1;
    }
    else if (Furcation_18_b == 1) {
        document.getElementById('furcation_1_18_b_tab').style.display = 'none';
        document.getElementById('furcation_2_18_b_tab').style.display = 'block';
        document.getElementById('furcation_3_18_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_b').style.display = 'none';
        document.getElementById('furcation_2_18_b').style.display = 'block';
        document.getElementById('furcation_3_18_b').style.display = 'none';
        
        Furcation_18_b = 2;
    }
    else if (Furcation_18_b == 2) {
        document.getElementById('furcation_1_18_b_tab').style.display = 'none';
        document.getElementById('furcation_2_18_b_tab').style.display = 'none';
        document.getElementById('furcation_3_18_b_tab').style.display = 'block';
        
        document.getElementById('furcation_1_18_b').style.display = 'none';
        document.getElementById('furcation_2_18_b').style.display = 'none';
        document.getElementById('furcation_3_18_b').style.display = 'block';
                    
        Furcation_18_b = 3;
    }
    else if (Furcation_18_b == 3) {
        document.getElementById('furcation_1_18_b_tab').style.display = 'none';
        document.getElementById('furcation_2_18_b_tab').style.display = 'none';
        document.getElementById('furcation_3_18_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_b').style.display = 'none';
        document.getElementById('furcation_2_18_b').style.display = 'none';
        document.getElementById('furcation_3_18_b').style.display = 'none';
                    
        Furcation_18_b = 0;
    }
}

function toggle_furcation_18_dp() {
    if (Furcation_18_dp == 0) {
        document.getElementById('furcation_1_18_dp_tab').style.display = 'block';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp').style.display = 'block';
        document.getElementById('furcation_2_18_dp').style.display = 'none';
        document.getElementById('furcation_3_18_dp').style.display = 'none';

        Furcation_18_dp = 1;
    }
    else if (Furcation_18_dp == 1) {
        document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'block';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp').style.display = 'none';
        document.getElementById('furcation_2_18_dp').style.display = 'block';
        document.getElementById('furcation_3_18_dp').style.display = 'none';
        
        Furcation_18_dp = 2;
    }
    else if (Furcation_18_dp == 2) {
        document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_18_dp').style.display = 'none';
        document.getElementById('furcation_2_18_dp').style.display = 'none';
        document.getElementById('furcation_3_18_dp').style.display = 'block';
                    
        Furcation_18_dp = 3;
    }
    else if (Furcation_18_dp == 3) {
        document.getElementById('furcation_1_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_dp').style.display = 'none';
        document.getElementById('furcation_2_18_dp').style.display = 'none';
        document.getElementById('furcation_3_18_dp').style.display = 'none';
                    
        Furcation_18_dp = 0;
    }
}

function toggle_furcation_18_mp() {
    if (Furcation_18_mp == 0) {
        document.getElementById('furcation_1_18_mp_tab').style.display = 'block';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp').style.display = 'block';
        document.getElementById('furcation_2_18_mp').style.display = 'none';
        document.getElementById('furcation_3_18_mp').style.display = 'none';

        Furcation_18_mp = 1;
    }
    else if (Furcation_18_mp == 1) {
        document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'block';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp').style.display = 'none';
        document.getElementById('furcation_2_18_mp').style.display = 'block';
        document.getElementById('furcation_3_18_mp').style.display = 'none';
        
        Furcation_18_mp = 2;
    }
    else if (Furcation_18_mp == 2) {
        document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_18_mp').style.display = 'none';
        document.getElementById('furcation_2_18_mp').style.display = 'none';
        document.getElementById('furcation_3_18_mp').style.display = 'block';
                    
        Furcation_18_mp = 3;
    }
    else if (Furcation_18_mp == 3) {
        document.getElementById('furcation_1_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_18_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_18_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_18_mp').style.display = 'none';
        document.getElementById('furcation_2_18_mp').style.display = 'none';
        document.getElementById('furcation_3_18_mp').style.display = 'none';
                    
        Furcation_18_mp = 0;
    }
}

function toggle_BOP_18_db() {
    if (BOP_18_db == 0) {
        BOP_18_db = 1;
        document.getElementById('BOP_18_db_rectangle').style.display = 'block';
    }
    else {
        BOP_18_db = 0;
        document.getElementById('BOP_18_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_18_b() {
    if (BOP_18_b == 0) {
        BOP_18_b = 1;
        document.getElementById('BOP_18_b_rectangle').style.display = 'block';
    }
    else {
        BOP_18_b = 0;
        document.getElementById('BOP_18_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_18_mb() {
    if (BOP_18_mb == 0) {
        BOP_18_mb = 1;
        document.getElementById('BOP_18_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_18_mb = 0;
        document.getElementById('BOP_18_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_db() {
    if (PI_18_db == 0) {
        PI_18_db = 1;
        document.getElementById('PI_18_db_rectangle').style.display = 'block';
    }
    else {
        PI_18_db = 0;
        document.getElementById('PI_18_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_b() {
    if (PI_18_b == 0) {
        PI_18_b = 1;
        document.getElementById('PI_18_b_rectangle').style.display = 'block';
    }
    else {
        PI_18_b = 0;
        document.getElementById('PI_18_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_mb() {
    if (PI_18_mb == 0) {
        PI_18_mb = 1;
        document.getElementById('PI_18_mb_rectangle').style.display = 'block';
    }
    else {
        PI_18_mb = 0;
        document.getElementById('PI_18_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_18_dp() {
    if (BOP_18_dp == 0) {
        BOP_18_dp = 1;
        document.getElementById('BOP_18_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_18_dp = 0;
        document.getElementById('BOP_18_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_18_p() {
    if (BOP_18_p == 0) {
        BOP_18_p = 1;
        document.getElementById('BOP_18_p_rectangle').style.display = 'block';
    }
    else {
        BOP_18_p = 0;
        document.getElementById('BOP_18_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_18_mp() {
    if (BOP_18_mp == 0) {
        BOP_18_mp = 1;
        document.getElementById('BOP_18_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_18_mp = 0;
        document.getElementById('BOP_18_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_dp() {
    if (PI_18_dp == 0) {
        PI_18_dp = 1;
        document.getElementById('PI_18_dp_rectangle').style.display = 'block';
    }
    else {
        PI_18_dp = 0;
        document.getElementById('PI_18_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_p() {
    if (PI_18_p == 0) {
        PI_18_p = 1;
        document.getElementById('PI_18_p_rectangle').style.display = 'block';
    }
    else {
        PI_18_p = 0;
        document.getElementById('PI_18_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_18_mp() {
    if (PI_18_mp == 0) {
        PI_18_mp = 1;
        document.getElementById('PI_18_mp_rectangle').style.display = 'block';
    }
    else {
        PI_18_mp = 0;
        document.getElementById('PI_18_mp_rectangle').style.display = 'none';
    }
}

function change_probing_18() {
    if (Tooth_18 == 1) {
        
    // Variablen aus dem Formular
        st_18_db = document.forms[0]["st_18_db"].value;
        st_18_b = document.forms[0]["st_18_b"].value;
        st_18_mb = document.forms[0]["st_18_mb"].value;

        if (document.forms[0]["st_18_dp"].value > 3) {document.forms[0]["st_18_dp"].style.color = 'red';} else {document.forms[0]["st_18_dp"].style.color = 'black'}
        if (document.forms[0]["st_18_p"].value > 3) {document.forms[0]["st_18_p"].style.color = 'red';} else {document.forms[0]["st_18_p"].style.color = 'black'}
        if (document.forms[0]["st_18_mp"].value > 3) {document.forms[0]["st_18_mp"].style.color = 'red';} else {document.forms[0]["st_18_mp"].style.color = 'black'}
        
        mg_18_db = document.forms[0]["mg_18_db"].value;
        mg_18_b = document.forms[0]["mg_18_b"].value;
        mg_18_mb = document.forms[0]["mg_18_mb"].value;
        
        st_18_dp = document.forms[0]["st_18_dp"].value;
        st_18_p = document.forms[0]["st_18_p"].value;
        st_18_mp = document.forms[0]["st_18_mp"].value;

        if (document.forms[0]["st_18_db"].value > 3) {document.forms[0]["st_18_db"].style.color = 'red';} else {document.forms[0]["st_18_db"].style.color = 'black'}
        if (document.forms[0]["st_18_b"].value > 3) {document.forms[0]["st_18_b"].style.color = 'red';} else {document.forms[0]["st_18_b"].style.color = 'black'}
        if (document.forms[0]["st_18_mb"].value > 3) {document.forms[0]["st_18_mb"].style.color = 'red';} else {document.forms[0]["st_18_mb"].style.color = 'black'}
        
        mg_18_dp = document.forms[0]["mg_18_dp"].value;
        mg_18_p = document.forms[0]["mg_18_p"].value;
        mg_18_mp = document.forms[0]["mg_18_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 18 (bukkal) in der Bitmap
        var x_db_18 = 295;							// distal 18
        var x_mb_18 = 332;							// mesial 18
        var x_b_18 = (x_db_18 + x_mb_18)/2;			// bukkal 18
        
    // Set der horizontalen Koordinaten von Zahn 18 (palatinal) in der Bitmap
        var x_dp_18 = 291;							// distal 18
        var x_mp_18 = 331;							// mesial 18
        var x_p_18 = (x_dp_18 + x_mp_18)/2;			// palatinal 18
        
    // Set der vertikalen Koordinaten von Zahn 18 (bukkal) aus dem Formular
        var y_mg_18_db = mg_OK_b + 6.5 * mg_18_db;	// Margo Gingivae distobukkal 18
        var y_mg_18_b = mg_OK_b + 6.5 * mg_18_b;	// Margo Gingivae bukkal 18
        var y_mg_18_mb = mg_OK_b + 6.5 * mg_18_mb;	// Margo Gingivae mesiobukkal 18
        var y_st_18_db = 6.5 * st_18_db;			// Sondierungstiefe distobukkal 18
        var y_st_18_b = 6.5 * st_18_b;				// Sondierungstiefe bukkal 18
        var y_st_18_mb = 6.5 * st_18_mb;			// Sondierungstiefe mesiobukkal 18
        
    // Set der vertikalen Koordinaten von Zahn 18 (palatinal) aus dem Formular
        var y_mg_18_dp = mg_OK_p - 6.5 * mg_18_dp;	// Margo Gingivae distopalatinal 18
        var y_mg_18_p = mg_OK_p - 6.5 * mg_18_p;	// Margo Gingivae palatinal 18
        var y_mg_18_mp = mg_OK_p - 6.5 * mg_18_mp;	// Margo Gingivae mesiopalatinal 18
        var y_st_18_dp = 6.5 * st_18_dp;			// Sondierungstiefe distopalatinal 18
        var y_st_18_p = 6.5 * st_18_p;				// Sondierungstiefe palatinal 18
        var y_st_18_mp = 6.5 * st_18_mp;			// Sondierungstiefe mesiopalatinal 18
        
    // Berechnung des Attachmentniveaus 18 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_18_db = y_mg_18_db - y_st_18_db;	// Attachmentniveau distobukkal 18
        var y_an_18_b = y_mg_18_b - y_st_18_b;		// Attachmentniveau bukkal 18
        var y_an_18_mb = y_mg_18_mb - y_st_18_mb;	// Attachmentniveau mesiobukkal 18
        
    // Berechnung des Attachmentniveaus 18 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_18_dp = y_mg_18_dp + y_st_18_dp;	// Attachmentniveau distopalatinal 18
        var y_an_18_p = y_mg_18_p + y_st_18_p;		// Attachmentniveau palatinal 18
        var y_an_18_mp = y_mg_18_mp + y_st_18_mp;	// Attachmentniveau mesiopalatinal 18
        
    // Parodontaltasche 18 bukkal zeichnen
        var string = 
            x_db_18 + ", " + y_an_18_db + "  " + 
            x_b_18 + ", " + y_an_18_b + "  " + 
            x_mb_18 + ", " + y_an_18_mb + "  " + 
            x_mb_18 + ", " + y_mg_18_mb + "  " + 
            x_b_18 + ", " + y_mg_18_b + "  " + 
            x_db_18 + ", " + y_mg_18_db;
        document.getElementById("polygon_18_b").setAttribute("points", string);
    // Attachmentniveau 18 bukkal zeichnen
        var string = 
            x_db_18 + ", " + y_an_18_db + "  " + 
            x_b_18 + ", " + y_an_18_b + "  " + 
            x_mb_18 + ", " + y_an_18_mb;
        document.getElementById("polyline_an_18_b").setAttribute("points", string);
    // Margo Gingivae 18 bukkal zeichnen
        var string =
            x_db_18 + ", " + y_mg_18_db + "  " + 
            x_b_18 + ", " + y_mg_18_b + "  " + 
            x_mb_18 + ", " + y_mg_18_mb;
        document.getElementById("polyline_mg_18_b").setAttribute("points", string);

    // Parodontaltasche 18 palatinal zeichnen
        var string = 
            x_dp_18 + ", " + y_an_18_dp + "  " + 
            x_p_18 + ", " + y_an_18_p + "  " + 
            x_mp_18 + ", " + y_an_18_mp + "  " + 
            x_mp_18 + ", " + y_mg_18_mp + "  " + 
            x_p_18 + ", " + y_mg_18_p + "  " + 
            x_dp_18 + ", " + y_mg_18_dp;
        document.getElementById("polygon_18_p").setAttribute("points", string);
    // Attachmentniveau 18 palatinal zeichnen
        var string = 
            x_dp_18 + ", " + y_an_18_dp + "  " + 
            x_p_18 + ", " + y_an_18_p + "  " + 
            x_mp_18 + ", " + y_an_18_mp;
        document.getElementById("polyline_an_18_p").setAttribute("points", string);
    // Margo Gingivae 18 palatinal zeichnen
        var string =
            x_dp_18 + ", " + y_mg_18_dp + "  " + 
            x_p_18 + ", " + y_mg_18_p + "  " + 
            x_mp_18 + ", " + y_mg_18_mp;
        document.getElementById("polyline_mg_18_p").setAttribute("points", string);
    }
    if (Tooth_18 == 1 && Tooth_17 == 1) {

        st_17_db = document.forms[0]["st_17_db"].value;
        mg_17_db = document.forms[0]["mg_17_db"].value;
        
        st_17_dp = document.forms[0]["st_17_dp"].value;
        mg_17_dp = document.forms[0]["mg_17_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
        var x_db_17 = 346;							// distal 17
        
    // Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
        var x_dp_17 = 344;							// distal 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
        var y_mg_17_db = mg_OK_b + 6.5 * mg_17_db;	// Margo Gingivae distobukkal 17
        var y_st_17_db = 6.5 * st_17_db;			// Sondierungstiefe distobukkal 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
        var y_mg_17_dp = mg_OK_p - 6.5 * mg_17_dp;	// Margo Gingivae distopalatinal 17
        var y_st_17_dp = 6.5 * st_17_dp;			// Sondierungstiefe distopalatinal 17
        
    // Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_db = y_mg_17_db - y_st_17_db;	// Attachmentniveau distobukkal 17
        
    // Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_dp = y_mg_17_dp + y_st_17_dp;	// Attachmentniveau distopalatinal 17

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