	// Definition der Variablen fÃ¼r das Formular
    var Zahn_24 = 1;
    var Furkation_24_dp = 0;
    var Furkation_24_mp = 0;
    var Implantat_24 = 0;
    var BOP_24_db = 0;
    var BOP_24_b = 0;
    var BOP_24_mb = 0;
    var PI_24_db = 0;
    var PI_24_b = 0;
    var PI_24_mb = 0;
    var BOP_24_dp = 0;
    var BOP_24_p = 0;
    var BOP_24_mp = 0;
    var PI_24_dp = 0;
    var PI_24_p = 0;
    var PI_24_mp = 0;
    var mg_24_db = 0;
    var mg_24_b = 0;
    var mg_24_mb = 0;
    var st_24_db = 0;
    var st_24_b = 0;
    var st_24_mb = 0;
    var mg_24_dp = 0;
    var mg_24_p = 0;
    var mg_24_mp = 0;
    var st_24_dp = 0;
    var st_24_p = 0;
    var st_24_mp = 0;

function clear_data_24() {
    if (Zahn_24 == 1) {
        mg_24_db = 0;
        mg_24_b = 0;
        mg_24_mb = 0;
        st_24_db = 0;
        st_24_b = 0;
        st_24_mb = 0;

            document.getElementById('mg_24_db_txt').value = 0;
            document.getElementById('mg_24_b_txt').value = 0;
            document.getElementById('mg_24_mb_txt').value = 0;
            
            document.getElementById('st_24_db_txt').value = 0;
            document.getElementById('st_24_b_txt').value = 0;
            document.getElementById('st_24_mb_txt').value = 0;
        
            document.forms[0]["st_24_db"].style.color = 'black'
            document.forms[0]["st_24_b"].style.color = 'black'
            document.forms[0]["st_24_mb"].style.color = 'black'
        
        mg_24_dp = 0;
        mg_24_p = 0;
        mg_24_mp = 0;
        st_24_dp = 0;
        st_24_p = 0;
        st_24_mp = 0;

            document.getElementById('mg_24_dp_txt').value = 0;
            document.getElementById('mg_24_p_txt').value = 0;
            document.getElementById('mg_24_mp_txt').value = 0;
            
            document.getElementById('st_24_dp_txt').value = 0;
            document.getElementById('st_24_p_txt').value = 0;
            document.getElementById('st_24_mp_txt').value = 0;

            document.forms[0]["st_24_dp"].style.color = 'black'
            document.forms[0]["st_24_p"].style.color = 'black'
            document.forms[0]["st_24_mp"].style.color = 'black'
        
        change_probing_24();
        
        mobility_24 = 0;

            document.getElementById('mobility_24_txt').value = "0";

        note_24 = "";

            document.getElementById('note_24_txt').value = "";

        Furkation_24_dp = 0;
        Furkation_24_mp = 0;

            document.getElementById('furkation_1_24_dp').style.display = 'none';
            document.getElementById('furkation_2_24_dp').style.display = 'none';
            document.getElementById('furkation_3_24_dp').style.display = 'none';
                
            document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
            document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
            document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
            
            document.getElementById('furkation_1_24_mp').style.display = 'none';
            document.getElementById('furkation_2_24_mp').style.display = 'none';
            document.getElementById('furkation_3_24_mp').style.display = 'none';
            
            document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
            document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
            document.getElementById('furkation_3_24_mp_tab').style.display = 'none';

        BOP_24_db = 0;
        BOP_24_b = 0;
        BOP_24_mb = 0;
                
        BOP_24_dp = 0;
        BOP_24_p = 0;
        BOP_24_mp = 0;
                
            document.getElementById('BOP_24_db_rectangle').style.display = 'none';
            document.getElementById('BOP_24_b_rectangle').style.display = 'none';
            document.getElementById('BOP_24_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_24_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_24_p_rectangle').style.display = 'none';
            document.getElementById('BOP_24_mp_rectangle').style.display = 'none';
            
        PI_24_db = 0;
        PI_24_b = 0;
        PI_24_mb = 0;
                
        PI_24_dp = 0;
        PI_24_p = 0;
        PI_24_mp = 0;

            document.getElementById('PI_24_db_rectangle').style.display = 'none';
            document.getElementById('PI_24_b_rectangle').style.display = 'none';
            document.getElementById('PI_24_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_24_dp_rectangle').style.display = 'none';
            document.getElementById('PI_24_p_rectangle').style.display = 'none';
            document.getElementById('PI_24_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_24() {
    if (Zahn_24 === 1) {
        Zahn_24 = 0;
        document.getElementById('tooth_line_24_b').style.display = 'block';
        document.getElementById('tooth_line_24_p').style.display = 'block';
        
        document.getElementById('mobility_24_txt').style.display = 'none';
        
        document.getElementById('implantat_24_btn').style.display = 'none';
        document.getElementById('implantat_24_tab').style.display = 'none';
        document.getElementById('implantat_24_b_image').style.display = 'none';
        document.getElementById('implantat_24_p_image').style.display = 'none';
        
        document.getElementById('furkation_24_dp_btn').style.display = 'none';
        document.getElementById('furkation_24_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp').style.display = 'none';
        document.getElementById('furkation_2_24_dp').style.display = 'none';
        document.getElementById('furkation_3_24_dp').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp').style.display = 'none';
        document.getElementById('furkation_2_24_mp').style.display = 'none';
        document.getElementById('furkation_3_24_mp').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'none';

        document.getElementById('mg_24_db_txt').style.display = 'none';
        document.getElementById('mg_24_b_txt').style.display = 'none';
        document.getElementById('mg_24_mb_txt').style.display = 'none';
        
        document.getElementById('st_24_db_txt').style.display = 'none';
        document.getElementById('st_24_b_txt').style.display = 'none';
        document.getElementById('st_24_mb_txt').style.display = 'none';
        
        document.getElementById('mg_24_dp_txt').style.display = 'none';
        document.getElementById('mg_24_p_txt').style.display = 'none';
        document.getElementById('mg_24_mp_txt').style.display = 'none';
        
        document.getElementById('st_24_dp_txt').style.display = 'none';
        document.getElementById('st_24_p_txt').style.display = 'none';
        document.getElementById('st_24_mp_txt').style.display = 'none';
        
        document.getElementById('BOP_24_db_rectangle').style.display = 'none';
        document.getElementById('BOP_24_b_rectangle').style.display = 'none';
        document.getElementById('BOP_24_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_24_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_24_p_rectangle').style.display = 'none';
        document.getElementById('BOP_24_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_24_db_btn').style.display = 'none';
        document.getElementById('BOP_24_b_btn').style.display = 'none';
        document.getElementById('BOP_24_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_24_dp_btn').style.display = 'none';
        document.getElementById('BOP_24_p_btn').style.display = 'none';
        document.getElementById('BOP_24_mp_btn').style.display = 'none';
        
        document.getElementById('PI_24_db_rectangle').style.display = 'none';
        document.getElementById('PI_24_b_rectangle').style.display = 'none';
        document.getElementById('PI_24_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_24_dp_rectangle').style.display = 'none';
        document.getElementById('PI_24_p_rectangle').style.display = 'none';
        document.getElementById('PI_24_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_24_db_btn').style.display = 'none';
        document.getElementById('PI_24_b_btn').style.display = 'none';
        document.getElementById('PI_24_mb_btn').style.display = 'none';
        
        document.getElementById('PI_24_dp_btn').style.display = 'none';
        document.getElementById('PI_24_p_btn').style.display = 'none';
        document.getElementById('PI_24_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_24_b').style.display = 'none';
        document.getElementById('polyline_an_24_b').style.display = 'none';
        document.getElementById('polyline_mg_24_b').style.display = 'none';
        
        document.getElementById('polygon_24_p').style.display = 'none';
        document.getElementById('polyline_an_24_p').style.display = 'none';
        document.getElementById('polyline_mg_24_p').style.display = 'none';
        
        document.getElementById('polygon_inter_25_24_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_25_24_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_25_24_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_25_24_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_25_24_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_25_24_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_24_23_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_24_23_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_24_23_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_24_23_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_24_23_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_24_23_p').style.display = 'none';            
        
        document.getElementById('note_24_txt').style.display = 'none';
    }
    else if (Implantat_24 !== 1) {
        Zahn_24 = 1;
        document.getElementById('tooth_line_24_b').style.display = 'none';
        document.getElementById('tooth_line_24_p').style.display = 'none';

        document.getElementById('mobility_24_txt').style.display = 'block';

        document.getElementById('implantat_24_btn').style.display = 'block';

        document.getElementById('furkation_24_dp_btn').style.display = 'block';
        document.getElementById('furkation_24_mp_btn').style.display = 'block';
        
        document.getElementById('mg_24_db_txt').style.display = 'block';
        document.getElementById('mg_24_b_txt').style.display = 'block';
        document.getElementById('mg_24_mb_txt').style.display = 'block';
        
        document.getElementById('st_24_db_txt').style.display = 'block';
        document.getElementById('st_24_b_txt').style.display = 'block';
        document.getElementById('st_24_mb_txt').style.display = 'block';
        
        document.getElementById('mg_24_dp_txt').style.display = 'block';
        document.getElementById('mg_24_p_txt').style.display = 'block';
        document.getElementById('mg_24_mp_txt').style.display = 'block';
        
        document.getElementById('st_24_dp_txt').style.display = 'block';
        document.getElementById('st_24_p_txt').style.display = 'block';
        document.getElementById('st_24_mp_txt').style.display = 'block';
        
        document.getElementById('note_24_txt').style.display = 'block';

        document.getElementById('polygon_24_b').style.display = 'block';
        document.getElementById('polyline_an_24_b').style.display = 'block';
        document.getElementById('polyline_mg_24_b').style.display = 'block';
        
        document.getElementById('polygon_24_p').style.display = 'block';
        document.getElementById('polyline_an_24_p').style.display = 'block';
        document.getElementById('polyline_mg_24_p').style.display = 'block';

        if (Zahn_25 == 1 && Zahn_24 == 1) {
            document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_p').style.display = 'block';            
        }
        
        if (Zahn_24 == 1 && Zahn_23 == 1) {
            document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_p').style.display = 'block';            
        }

        if (Furkation_24_dp == 1) {
            document.getElementById('furkation_1_24_dp').style.display = 'block';
        } else if (Furkation_24_dp == 2) {
            document.getElementById('furkation_2_24_dp').style.display = 'block';
        } else if (Furkation_24_dp == 3) {
            document.getElementById('furkation_3_24_dp').style.display = 'block';
        }
        if (Furkation_24_dp == 1) {
            document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
        } else if (Furkation_24_dp == 2) {
            document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
        } else if (Furkation_24_dp == 3) {
            document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
        }
        if (Furkation_24_mp == 1) {
            document.getElementById('furkation_1_24_mp').style.display = 'block';
        } else if (Furkation_24_mp == 2) {
            document.getElementById('furkation_2_24_mp').style.display = 'block';
        } else if (Furkation_24_mp == 3) {
            document.getElementById('furkation_3_24_mp').style.display = 'block';
        }
        if (Furkation_24_mp == 1) {
            document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
        } else if (Furkation_24_mp == 2) {
            document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
        } else if (Furkation_24_mp == 3) {
            document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_24_db_btn').style.display = 'block';
        document.getElementById('BOP_24_b_btn').style.display = 'block';
        document.getElementById('BOP_24_mb_btn').style.display = 'block';

        document.getElementById('BOP_24_dp_btn').style.display = 'block';
        document.getElementById('BOP_24_p_btn').style.display = 'block';
        document.getElementById('BOP_24_mp_btn').style.display = 'block';
        
        if (BOP_24_db == 1) {
            document.getElementById('BOP_24_db_rectangle').style.display = 'block';
        }
        if (BOP_24_b == 1) {
            document.getElementById('BOP_24_b_rectangle').style.display = 'block';
        }
        if (BOP_24_mb == 1) {
            document.getElementById('BOP_24_mb_rectangle').style.display = 'block';
        }
        if (BOP_24_dp == 1) {
            document.getElementById('BOP_24_dp_rectangle').style.display = 'block';
        }
        if (BOP_24_p == 1) {
            document.getElementById('BOP_24_p_rectangle').style.display = 'block';
        }
        if (BOP_24_mp == 1) {
            document.getElementById('BOP_24_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_24_db_btn').style.display = 'block';
        document.getElementById('PI_24_b_btn').style.display = 'block';
        document.getElementById('PI_24_mb_btn').style.display = 'block';

        document.getElementById('PI_24_dp_btn').style.display = 'block';
        document.getElementById('PI_24_p_btn').style.display = 'block';
        document.getElementById('PI_24_mp_btn').style.display = 'block';
        
        if (PI_24_db == 1) {
            document.getElementById('PI_24_db_rectangle').style.display = 'block';
        }
        if (PI_24_b == 1) {
            document.getElementById('PI_24_b_rectangle').style.display = 'block';
        }
        if (PI_24_mb == 1) {
            document.getElementById('PI_24_mb_rectangle').style.display = 'block';
        }
        if (PI_24_dp == 1) {
            document.getElementById('PI_24_dp_rectangle').style.display = 'block';
        }
        if (PI_24_p == 1) {
            document.getElementById('PI_24_p_rectangle').style.display = 'block';
        }
        if (PI_24_mp == 1) {
            document.getElementById('PI_24_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_24 == 1) {
        Zahn_24 = 1;
        document.getElementById('tooth_line_24_b').style.display = 'none';
        document.getElementById('tooth_line_24_p').style.display = 'none';

        document.getElementById('mobility_24_txt').style.display = 'block';
        
        document.getElementById('note_24_txt').style.display = 'block';

        document.getElementById('implantat_24_btn').style.display = 'block';
        document.getElementById('implantat_24_tab').style.display = 'block';
        document.getElementById('implantat_24_b_image').style.display = 'block';
        document.getElementById('implantat_24_p_image').style.display = 'block';

        document.getElementById('mg_24_db_txt').style.display = 'block';
        document.getElementById('mg_24_b_txt').style.display = 'block';
        document.getElementById('mg_24_mb_txt').style.display = 'block';
        
        document.getElementById('st_24_db_txt').style.display = 'block';
        document.getElementById('st_24_b_txt').style.display = 'block';
        document.getElementById('st_24_mb_txt').style.display = 'block';
        
        document.getElementById('mg_24_dp_txt').style.display = 'block';
        document.getElementById('mg_24_p_txt').style.display = 'block';
        document.getElementById('mg_24_mp_txt').style.display = 'block';
        
        document.getElementById('st_24_dp_txt').style.display = 'block';
        document.getElementById('st_24_p_txt').style.display = 'block';
        document.getElementById('st_24_mp_txt').style.display = 'block';

        document.getElementById('polygon_24_b').style.display = 'block';
        document.getElementById('polyline_an_24_b').style.display = 'block';
        document.getElementById('polyline_mg_24_b').style.display = 'block';
        
        document.getElementById('polygon_24_p').style.display = 'block';
        document.getElementById('polyline_an_24_p').style.display = 'block';
        document.getElementById('polyline_mg_24_p').style.display = 'block';

        if (Zahn_25 == 1 && Zahn_24 == 1) {
            document.getElementById('polygon_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_25_24_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_25_24_p').style.display = 'block';            
        }
        
        if (Zahn_24 == 1 && Zahn_23 == 1) {
            document.getElementById('polygon_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_24_23_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_24_23_p').style.display = 'block';            
        }        

        document.getElementById('BOP_24_db_btn').style.display = 'block';
        document.getElementById('BOP_24_b_btn').style.display = 'block';
        document.getElementById('BOP_24_mb_btn').style.display = 'block';

        document.getElementById('BOP_24_dp_btn').style.display = 'block';
        document.getElementById('BOP_24_p_btn').style.display = 'block';
        document.getElementById('BOP_24_mp_btn').style.display = 'block';
        
        document.getElementById('PI_24_db_btn').style.display = 'block';
        document.getElementById('PI_24_b_btn').style.display = 'block';
        document.getElementById('PI_24_mb_btn').style.display = 'block';

        document.getElementById('PI_24_dp_btn').style.display = 'block';
        document.getElementById('PI_24_p_btn').style.display = 'block';
        document.getElementById('PI_24_mp_btn').style.display = 'block';
        
        if (BOP_24_db == 1) {
            document.getElementById('BOP_24_db_rectangle').style.display = 'block';
        }
        if (BOP_24_b == 1) {
            document.getElementById('BOP_24_b_rectangle').style.display = 'block';
        }
        if (BOP_24_mb == 1) {
            document.getElementById('BOP_24_mb_rectangle').style.display = 'block';
        }
        if (BOP_24_dp == 1) {
            document.getElementById('BOP_24_dp_rectangle').style.display = 'block';
        }
        if (BOP_24_p == 1) {
            document.getElementById('BOP_24_p_rectangle').style.display = 'block';
        }
        if (BOP_24_mp == 1) {
            document.getElementById('BOP_24_mp_rectangle').style.display = 'block';
        }
        
        if (PI_24_db == 1) {
            document.getElementById('PI_24_db_rectangle').style.display = 'block';
        }
        if (PI_24_b == 1) {
            document.getElementById('PI_24_b_rectangle').style.display = 'block';
        }
        if (PI_24_mb == 1) {
            document.getElementById('PI_24_mb_rectangle').style.display = 'block';
        }
        if (PI_24_dp == 1) {
            document.getElementById('PI_24_dp_rectangle').style.display = 'block';
        }
        if (PI_24_p == 1) {
            document.getElementById('PI_24_p_rectangle').style.display = 'block';
        }
        if (PI_24_mp == 1) {
            document.getElementById('PI_24_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_24() {
    if (Implantat_24 == 0) {
        Implantat_24 = 1;
        
        document.getElementById('implantat_24_b_image').style.display = 'block';
        document.getElementById('implantat_24_p_image').style.display = 'block';
        document.getElementById('implantat_24_tab').style.display = 'block';
        
        document.getElementById('furkation_24_dp_btn').style.display = 'none';
        document.getElementById('furkation_24_mp_btn').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp').style.display = 'none';
        document.getElementById('furkation_2_24_dp').style.display = 'none';
        document.getElementById('furkation_3_24_dp').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp').style.display = 'none';
        document.getElementById('furkation_2_24_mp').style.display = 'none';
        document.getElementById('furkation_3_24_mp').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
    }
    else {
        Implantat_24 = 0;
        
        document.getElementById('implantat_24_b_image').style.display = 'none';
        document.getElementById('implantat_24_p_image').style.display = 'none';
        document.getElementById('implantat_24_tab').style.display = 'none';
        
        document.getElementById('furkation_24_dp_btn').style.display = 'block';
        document.getElementById('furkation_24_mp_btn').style.display = 'block';

        if (Furkation_24_dp == 1) {
            document.getElementById('furkation_1_24_dp').style.display = 'block';
        } else if (Furkation_24_dp == 2) {
            document.getElementById('furkation_2_24_dp').style.display = 'block';
        } else if (Furkation_24_dp == 3) {
            document.getElementById('furkation_3_24_dp').style.display = 'block';
        }
        if (Furkation_24_dp == 1) {
            document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
        } else if (Furkation_24_dp == 2) {
            document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
        } else if (Furkation_24_dp == 3) {
            document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
        }
        if (Furkation_24_mp == 1) {
            document.getElementById('furkation_1_24_mp').style.display = 'block';
        } else if (Furkation_24_mp == 2) {
            document.getElementById('furkation_2_24_mp').style.display = 'block';
        } else if (Furkation_24_mp == 3) {
            document.getElementById('furkation_3_24_mp').style.display = 'block';
        }
        if (Furkation_24_mp == 1) {
            document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
        } else if (Furkation_24_mp == 2) {
            document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
        } else if (Furkation_24_mp == 3) {
            document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_24_dp() {
    if (Furkation_24_dp == 0) {
        document.getElementById('furkation_1_24_dp_tab').style.display = 'block';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp').style.display = 'block';
        document.getElementById('furkation_2_24_dp').style.display = 'none';
        document.getElementById('furkation_3_24_dp').style.display = 'none';

        Furkation_24_dp = 1;
    }
    else if (Furkation_24_dp == 1) {
        document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'block';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp').style.display = 'none';
        document.getElementById('furkation_2_24_dp').style.display = 'block';
        document.getElementById('furkation_3_24_dp').style.display = 'none';
        
        Furkation_24_dp = 2;
    }
    else if (Furkation_24_dp == 2) {
        document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_24_dp').style.display = 'none';
        document.getElementById('furkation_2_24_dp').style.display = 'none';
        document.getElementById('furkation_3_24_dp').style.display = 'block';
                    
        Furkation_24_dp = 3;
    }
    else if (Furkation_24_dp == 3) {
        document.getElementById('furkation_1_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_dp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_dp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_dp').style.display = 'none';
        document.getElementById('furkation_2_24_dp').style.display = 'none';
        document.getElementById('furkation_3_24_dp').style.display = 'none';
                    
        Furkation_24_dp = 0;
    }
}

function toggle_furcation_24_mp() {
    if (Furkation_24_mp == 0) {
        document.getElementById('furkation_1_24_mp_tab').style.display = 'block';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp').style.display = 'block';
        document.getElementById('furkation_2_24_mp').style.display = 'none';
        document.getElementById('furkation_3_24_mp').style.display = 'none';

        Furkation_24_mp = 1;
    }
    else if (Furkation_24_mp == 1) {
        document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'block';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp').style.display = 'none';
        document.getElementById('furkation_2_24_mp').style.display = 'block';
        document.getElementById('furkation_3_24_mp').style.display = 'none';
        
        Furkation_24_mp = 2;
    }
    else if (Furkation_24_mp == 2) {
        document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'block';
        
        document.getElementById('furkation_1_24_mp').style.display = 'none';
        document.getElementById('furkation_2_24_mp').style.display = 'none';
        document.getElementById('furkation_3_24_mp').style.display = 'block';
                    
        Furkation_24_mp = 3;
    }
    else if (Furkation_24_mp == 3) {
        document.getElementById('furkation_1_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_2_24_mp_tab').style.display = 'none';
        document.getElementById('furkation_3_24_mp_tab').style.display = 'none';
        
        document.getElementById('furkation_1_24_mp').style.display = 'none';
        document.getElementById('furkation_2_24_mp').style.display = 'none';
        document.getElementById('furkation_3_24_mp').style.display = 'none';
                    
        Furkation_24_mp = 0;
    }
}

function toggle_BOP_24_db() {
    if (BOP_24_db == 0) {
        BOP_24_db = 1;
        document.getElementById('BOP_24_db_rectangle').style.display = 'block';
    }
    else {
        BOP_24_db = 0;
        document.getElementById('BOP_24_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_24_b() {
    if (BOP_24_b == 0) {
        BOP_24_b = 1;
        document.getElementById('BOP_24_b_rectangle').style.display = 'block';
    }
    else {
        BOP_24_b = 0;
        document.getElementById('BOP_24_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_24_mb() {
    if (BOP_24_mb == 0) {
        BOP_24_mb = 1;
        document.getElementById('BOP_24_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_24_mb = 0;
        document.getElementById('BOP_24_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_db() {
    if (PI_24_db == 0) {
        PI_24_db = 1;
        document.getElementById('PI_24_db_rectangle').style.display = 'block';
    }
    else {
        PI_24_db = 0;
        document.getElementById('PI_24_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_b() {
    if (PI_24_b == 0) {
        PI_24_b = 1;
        document.getElementById('PI_24_b_rectangle').style.display = 'block';
    }
    else {
        PI_24_b = 0;
        document.getElementById('PI_24_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_mb() {
    if (PI_24_mb == 0) {
        PI_24_mb = 1;
        document.getElementById('PI_24_mb_rectangle').style.display = 'block';
    }
    else {
        PI_24_mb = 0;
        document.getElementById('PI_24_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_24_dp() {
    if (BOP_24_dp == 0) {
        BOP_24_dp = 1;
        document.getElementById('BOP_24_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_24_dp = 0;
        document.getElementById('BOP_24_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_24_p() {
    if (BOP_24_p == 0) {
        BOP_24_p = 1;
        document.getElementById('BOP_24_p_rectangle').style.display = 'block';
    }
    else {
        BOP_24_p = 0;
        document.getElementById('BOP_24_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_24_mp() {
    if (BOP_24_mp == 0) {
        BOP_24_mp = 1;
        document.getElementById('BOP_24_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_24_mp = 0;
        document.getElementById('BOP_24_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_dp() {
    if (PI_24_dp == 0) {
        PI_24_dp = 1;
        document.getElementById('PI_24_dp_rectangle').style.display = 'block';
    }
    else {
        PI_24_dp = 0;
        document.getElementById('PI_24_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_p() {
    if (PI_24_p == 0) {
        PI_24_p = 1;
        document.getElementById('PI_24_p_rectangle').style.display = 'block';
    }
    else {
        PI_24_p = 0;
        document.getElementById('PI_24_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_24_mp() {
    if (PI_24_mp == 0) {
        PI_24_mp = 1;
        document.getElementById('PI_24_mp_rectangle').style.display = 'block';
    }
    else {
        PI_24_mp = 0;
        document.getElementById('PI_24_mp_rectangle').style.display = 'none';
    }
}

function change_probing_24() {
    if (Zahn_24 == 1) {
        
    // Variablen aus dem Formular
        st_24_db = document.forms[0]["st_24_db"].value;
        st_24_b = document.forms[0]["st_24_b"].value;
        st_24_mb = document.forms[0]["st_24_mb"].value;

        if (document.forms[0]["st_24_dp"].value > 3) {document.forms[0]["st_24_dp"].style.color = 'red';} else {document.forms[0]["st_24_dp"].style.color = 'black'};
        if (document.forms[0]["st_24_p"].value > 3) {document.forms[0]["st_24_p"].style.color = 'red';} else {document.forms[0]["st_24_p"].style.color = 'black'};
        if (document.forms[0]["st_24_mp"].value > 3) {document.forms[0]["st_24_mp"].style.color = 'red';} else {document.forms[0]["st_24_mp"].style.color = 'black'};
        
        mg_24_db = document.forms[0]["mg_24_db"].value;
        mg_24_b = document.forms[0]["mg_24_b"].value;
        mg_24_mb = document.forms[0]["mg_24_mb"].value;
        
        st_24_dp = document.forms[0]["st_24_dp"].value;
        st_24_p = document.forms[0]["st_24_p"].value;
        st_24_mp = document.forms[0]["st_24_mp"].value;

        if (document.forms[0]["st_24_db"].value > 3) {document.forms[0]["st_24_db"].style.color = 'red';} else {document.forms[0]["st_24_db"].style.color = 'black'};
        if (document.forms[0]["st_24_b"].value > 3) {document.forms[0]["st_24_b"].style.color = 'red';} else {document.forms[0]["st_24_b"].style.color = 'black'};
        if (document.forms[0]["st_24_mb"].value > 3) {document.forms[0]["st_24_mb"].style.color = 'red';} else {document.forms[0]["st_24_mb"].style.color = 'black'};
        
        mg_24_dp = document.forms[0]["mg_24_dp"].value;
        mg_24_p = document.forms[0]["mg_24_p"].value;
        mg_24_mp = document.forms[0]["mg_24_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 24 (bukkal) in der Bitmap
        var x_db_24 = 855;							// distal 24
        var x_mb_24 = 829;							// mesial 24
        var x_b_24 = (x_db_24 + x_mb_24)/2;			// bukkal 24
        
    // Set der horizontalen Koordinaten von Zahn 24 (palatinal) in der Bitmap
        var x_dp_24 = 854;							// distal 24
        var x_mp_24 = 829;							// mesial 24
        var x_p_24 = (x_dp_24 + x_mp_24)/2;			// palatinal 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (bukkal) aus dem Formular
        var y_mg_24_db = mg_OK_b + 6.5 * mg_24_db;	// Margo Gingivae distobukkal 24
        var y_mg_24_b = mg_OK_b + 6.5 * mg_24_b;	// Margo Gingivae bukkal 24
        var y_mg_24_mb = mg_OK_b + 6.5 * mg_24_mb;	// Margo Gingivae mesiobukkal 24
        var y_st_24_db = 6.5 * st_24_db;			// Sondierungstiefe distobukkal 24
        var y_st_24_b = 6.5 * st_24_b;				// Sondierungstiefe bukkal 24
        var y_st_24_mb = 6.5 * st_24_mb;			// Sondierungstiefe mesiobukkal 24
        
    // Set der vertikalen Koordinaten von Zahn 24 (palatinal) aus dem Formular
        var y_mg_24_dp = mg_OK_p - 6.5 * mg_24_dp;	// Margo Gingivae distopalatinal 24
        var y_mg_24_p = mg_OK_p - 6.5 * mg_24_p;	// Margo Gingivae palatinal 24
        var y_mg_24_mp = mg_OK_p - 6.5 * mg_24_mp;	// Margo Gingivae mesiopalatinal 24
        var y_st_24_dp = 6.5 * st_24_dp;			// Sondierungstiefe distopalatinal 24
        var y_st_24_p = 6.5 * st_24_p;				// Sondierungstiefe palatinal 24
        var y_st_24_mp = 6.5 * st_24_mp;			// Sondierungstiefe mesiopalatinal 24
        
    // Berechnung des Attachmentniveaus 24 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_db = y_mg_24_db - y_st_24_db;	// Attachmentniveau distobukkal 24
        var y_an_24_b = y_mg_24_b - y_st_24_b;		// Attachmentniveau bukkal 24
        var y_an_24_mb = y_mg_24_mb - y_st_24_mb;	// Attachmentniveau mesiobukkal 24
        
    // Berechnung des Attachmentniveaus 24 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_24_dp = y_mg_24_dp + y_st_24_dp;	// Attachmentniveau distopalatinal 24
        var y_an_24_p = y_mg_24_p + y_st_24_p;		// Attachmentniveau palatinal 24
        var y_an_24_mp = y_mg_24_mp + y_st_24_mp;	// Attachmentniveau mesiopalatinal 24
        
    // Parodontaltasche 24 bukkal zeichnen
        var string = 
            x_db_24 + ", " + y_an_24_db + "  " + 
            x_b_24 + ", " + y_an_24_b + "  " + 
            x_mb_24 + ", " + y_an_24_mb + "  " + 
            x_mb_24 + ", " + y_mg_24_mb + "  " + 
            x_b_24 + ", " + y_mg_24_b + "  " + 
            x_db_24 + ", " + y_mg_24_db;
        document.getElementById("polygon_24_b").setAttribute("points", string);
    // Attachmentniveau 24 bukkal zeichnen
        var string = 
            x_db_24 + ", " + y_an_24_db + "  " + 
            x_b_24 + ", " + y_an_24_b + "  " + 
            x_mb_24 + ", " + y_an_24_mb;
        document.getElementById("polyline_an_24_b").setAttribute("points", string);
    // Margo Gingivae 24 bukkal zeichnen
        var string =
            x_db_24 + ", " + y_mg_24_db + "  " + 
            x_b_24 + ", " + y_mg_24_b + "  " + 
            x_mb_24 + ", " + y_mg_24_mb;
        document.getElementById("polyline_mg_24_b").setAttribute("points", string);

    // Parodontaltasche 24 palatinal zeichnen
        var string = 
            x_dp_24 + ", " + y_an_24_dp + "  " + 
            x_p_24 + ", " + y_an_24_p + "  " + 
            x_mp_24 + ", " + y_an_24_mp + "  " + 
            x_mp_24 + ", " + y_mg_24_mp + "  " + 
            x_p_24 + ", " + y_mg_24_p + "  " + 
            x_dp_24 + ", " + y_mg_24_dp;
        document.getElementById("polygon_24_p").setAttribute("points", string);
    // Attachmentniveau 24 palatinal zeichnen
        var string = 
            x_dp_24 + ", " + y_an_24_dp + "  " + 
            x_p_24 + ", " + y_an_24_p + "  " + 
            x_mp_24 + ", " + y_an_24_mp;
        document.getElementById("polyline_an_24_p").setAttribute("points", string);
    // Margo Gingivae 24 palatinal zeichnen
        var string =
            x_dp_24 + ", " + y_mg_24_dp + "  " + 
            x_p_24 + ", " + y_mg_24_p + "  " + 
            x_mp_24 + ", " + y_mg_24_mp;
        document.getElementById("polyline_mg_24_p").setAttribute("points", string);
    }
    if (Zahn_24 == 1 && Zahn_23 == 1) {

        st_23_db = document.forms[0]["st_23_db"].value;
        mg_23_db = document.forms[0]["mg_23_db"].value;
        
        st_23_dp = document.forms[0]["st_23_dp"].value;
        mg_23_dp = document.forms[0]["mg_23_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 23 (bukkal) in der Bitmap
        var x_db_23 = 815;							// distal 23
        
    // Set der horizontalen Koordinaten von Zahn 23 (palatinal) in der Bitmap
        var x_dp_23 = 813;							// distal 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (bukkal) aus dem Formular
        var y_mg_23_db = mg_OK_b + 6.5 * mg_23_db;	// Margo Gingivae distobukkal 23
        var y_st_23_db = 6.5 * st_23_db;			// Sondierungstiefe distobukkal 23
        
    // Set der vertikalen Koordinaten von Zahn 23 (palatinal) aus dem Formular
        var y_mg_23_dp = mg_OK_p - 6.5 * mg_23_dp;	// Margo Gingivae distopalatinal 23
        var y_st_23_dp = 6.5 * st_23_dp;			// Sondierungstiefe distopalatinal 23
        
    // Berechnung des Attachmentniveaus 23 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_db = y_mg_23_db - y_st_23_db;	// Attachmentniveau distobukkal 23
        
    // Berechnung des Attachmentniveaus 23 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_23_dp = y_mg_23_dp + y_st_23_dp;	// Attachmentniveau distopalatinal 23

    // Parodontaltasche inter_24_23 bukkal zeichnen
        var string = 
            x_mb_24 + ", " + y_an_24_mb + "  " + 
            x_db_23 + ", " + y_an_23_db + "  " + 
            x_db_23 + ", " + y_mg_23_db + "  " + 
            x_mb_24 + ", " + y_mg_24_mb;
        document.getElementById("polygon_inter_24_23_b").setAttribute("points", string);
    // Attachmentniveau inter_24_23 bukkal zeichnen
        var string = 
            x_mb_24 + ", " + y_an_24_mb + "  " + 
            x_db_23 + ", " + y_an_23_db;
        document.getElementById("polyline_an_inter_24_23_b").setAttribute("points", string);
    // Margo Gingivae inter_24_23 bukkal zeichnen
        var string =
            x_mb_24 + ", " + y_mg_24_mb + "  " + 
            x_db_23 + ", " + y_mg_23_db;
        document.getElementById("polyline_mg_inter_24_23_b").setAttribute("points", string);

    // Parodontaltasche inter_24_23 palatinal zeichnen
        var string = 
            x_mp_24 + ", " + y_an_24_mp + "  " + 
            x_dp_23 + ", " + y_an_23_dp + "  " + 
            x_dp_23 + ", " + y_mg_23_dp + "  " + 
            x_mp_24 + ", " + y_mg_24_mp;
        document.getElementById("polygon_inter_24_23_p").setAttribute("points", string);
    // Attachmentniveau inter_24_23 palatinal zeichnen
        var string = 
            x_mp_24 + ", " + y_an_24_mp + "  " + 
            x_dp_23 + ", " + y_an_23_dp;
        document.getElementById("polyline_an_inter_24_23_p").setAttribute("points", string);
    // Margo Gingivae inter_24_23 palatinal zeichnen
        var string =
            x_mp_24 + ", " + y_mg_24_mp + "  " + 
            x_dp_23 + ", " + y_mg_23_dp;
        document.getElementById("polyline_mg_inter_24_23_p").setAttribute("points", string);
    }
    if (Zahn_25 == 1 && Zahn_24 == 1) {

        st_25_mb = document.forms[0]["st_25_mb"].value;
        mg_25_mb = document.forms[0]["mg_25_mb"].value;
        
        st_25_mp = document.forms[0]["st_25_mp"].value;
        mg_25_mp = document.forms[0]["mg_25_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 25 (bukkal) in der Bitmap
        var x_mb_25 = 869;							// mesial 25
        
    // Set der horizontalen Koordinaten von Zahn 25 (palatinal) in der Bitmap
        var x_mp_25 = 871;							// mesial 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (bukkal) aus dem Formular
        var y_mg_25_mb = mg_OK_b + 6.5 * mg_25_mb;	// Margo Gingivae mesiobukkal 25
        var y_st_25_mb = 6.5 * st_25_mb;			// Sondierungstiefe mesiobukkal 25
        
    // Set der vertikalen Koordinaten von Zahn 25 (palatinal) aus dem Formular
        var y_mg_25_mp = mg_OK_p - 6.5 * mg_25_mp;	// Margo Gingivae mesiopalatinal 25
        var y_st_25_mp = 6.5 * st_25_mp;			// Sondierungstiefe mesiopalatinal 25
        
    // Berechnung des Attachmentniveaus 25 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_mb = y_mg_25_mb - y_st_25_mb;	// Attachmentniveau mesiobukkal 25
        
    // Berechnung des Attachmentniveaus 25 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_25_mp = y_mg_25_mp + y_st_25_mp;	// Attachmentniveau mesiopalatinal 25

    // Parodontaltasche inter_25_24 bukkal zeichnen
        var string = 
            x_mb_25 + ", " + y_an_25_mb + "  " + 
            x_db_24 + ", " + y_an_24_db + "  " + 
            x_db_24 + ", " + y_mg_24_db + "  " + 
            x_mb_25 + ", " + y_mg_25_mb;
        document.getElementById("polygon_inter_25_24_b").setAttribute("points", string);
    // Attachmentniveau inter_25_24 bukkal zeichnen
        var string = 
            x_mb_25 + ", " + y_an_25_mb + "  " + 
            x_db_24 + ", " + y_an_24_db;
        document.getElementById("polyline_an_inter_25_24_b").setAttribute("points", string);
    // Margo Gingivae inter_25_24 bukkal zeichnen
        var string =
            x_mb_25 + ", " + y_mg_25_mb + "  " + 
            x_db_24 + ", " + y_mg_24_db;
        document.getElementById("polyline_mg_inter_25_24_b").setAttribute("points", string);

    // Parodontaltasche inter_25_24 palatinal zeichnen
        var string = 
            x_mp_25 + ", " + y_an_25_mp + "  " + 
            x_dp_24 + ", " + y_an_24_dp + "  " + 
            x_dp_24 + ", " + y_mg_24_dp + "  " + 
            x_mp_25 + ", " + y_mg_25_mp;
        document.getElementById("polygon_inter_25_24_p").setAttribute("points", string);
    // Attachmentniveau inter_25_24 palatinal zeichnen
        var string = 
            x_mp_25 + ", " + y_an_25_mp + "  " + 
            x_dp_24 + ", " + y_an_24_dp;
        document.getElementById("polyline_an_inter_25_24_p").setAttribute("points", string);
    // Margo Gingivae inter_25_24 palatinal zeichnen
        var string =
            x_mp_25 + ", " + y_mg_25_mp + "  " + 
            x_dp_24 + ", " + y_mg_24_dp;
        document.getElementById("polyline_mg_inter_25_24_p").setAttribute("points", string);
    }
}