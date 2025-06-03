	// Definition der Variablen fÃ¼r das Formular
    var Tooth_16 = 1;
    var Furcation_16_b = 0;
    var Furcation_16_dp = 0;
    var Furcation_16_mp = 0;
    var Implant_16 = 0;
    var BOP_16_db = 0;
    var BOP_16_b = 0;
    var BOP_16_mb = 0;
    var PI_16_db = 0;
    var PI_16_b = 0;
    var PI_16_mb = 0;
    var BOP_16_dp = 0;
    var BOP_16_p = 0;
    var BOP_16_mp = 0;
    var PI_16_dp = 0;
    var PI_16_p = 0;
    var PI_16_mp = 0;
    var mg_16_db = 0;
    var mg_16_b = 0;
    var mg_16_mb = 0;
    var st_16_db = 0;
    var st_16_b = 0;
    var st_16_mb = 0;
    var mg_16_dp = 0;
    var mg_16_p = 0;
    var mg_16_mp = 0;
    var st_16_dp = 0;
    var st_16_p = 0;
    var st_16_mp = 0;

function clear_data_16() {
    if (Tooth_16 == 1) {
        mg_16_db = 0;
        mg_16_b = 0;
        mg_16_mb = 0;
        st_16_db = 0;
        st_16_b = 0;
        st_16_mb = 0;

            document.getElementById('mg_16_db_txt').value = 0;
            document.getElementById('mg_16_b_txt').value = 0;
            document.getElementById('mg_16_mb_txt').value = 0;
            
            document.getElementById('st_16_db_txt').value = 0;
            document.getElementById('st_16_b_txt').value = 0;
            document.getElementById('st_16_mb_txt').value = 0;
        
            document.forms[0]["st_16_db"].style.color = 'black'
            document.forms[0]["st_16_b"].style.color = 'black'
            document.forms[0]["st_16_mb"].style.color = 'black'
        
        mg_16_dp = 0;
        mg_16_p = 0;
        mg_16_mp = 0;
        st_16_dp = 0;
        st_16_p = 0;
        st_16_mp = 0;

            document.getElementById('mg_16_dp_txt').value = 0;
            document.getElementById('mg_16_p_txt').value = 0;
            document.getElementById('mg_16_mp_txt').value = 0;
            
            document.getElementById('st_16_dp_txt').value = 0;
            document.getElementById('st_16_p_txt').value = 0;
            document.getElementById('st_16_mp_txt').value = 0;

            document.forms[0]["st_16_dp"].style.color = 'black'
            document.forms[0]["st_16_p"].style.color = 'black'
            document.forms[0]["st_16_mp"].style.color = 'black'
        
        change_probing_16();
        
        mobility_16 = 0;

            document.getElementById('mobility_16_txt').value = "0";

        note_16 = "";

            document.getElementById('note_16_txt').value = "";

        Furcation_16_b = 0;
        Furcation_16_dp = 0;
        Furcation_16_mp = 0;

            document.getElementById('furcation_1_16_b').style.display = 'none';
            document.getElementById('furcation_2_16_b').style.display = 'none';
            document.getElementById('furcation_3_16_b').style.display = 'none';
                
            document.getElementById('furcation_1_16_b_tab').style.display = 'none';
            document.getElementById('furcation_2_16_b_tab').style.display = 'none';
            document.getElementById('furcation_3_16_b_tab').style.display = 'none';
            
            document.getElementById('furcation_1_16_dp').style.display = 'none';
            document.getElementById('furcation_2_16_dp').style.display = 'none';
            document.getElementById('furcation_3_16_dp').style.display = 'none';
                
            document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
            document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
            document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
            
            document.getElementById('furcation_1_16_mp').style.display = 'none';
            document.getElementById('furcation_2_16_mp').style.display = 'none';
            document.getElementById('furcation_3_16_mp').style.display = 'none';
            
            document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
            document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
            document.getElementById('furcation_3_16_mp_tab').style.display = 'none';

        BOP_16_db = 0;
        BOP_16_b = 0;
        BOP_16_mb = 0;
                
        BOP_16_dp = 0;
        BOP_16_p = 0;
        BOP_16_mp = 0;
                
            document.getElementById('BOP_16_db_rectangle').style.display = 'none';
            document.getElementById('BOP_16_b_rectangle').style.display = 'none';
            document.getElementById('BOP_16_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_16_dp_rectangle').style.display = 'none';
            document.getElementById('BOP_16_p_rectangle').style.display = 'none';
            document.getElementById('BOP_16_mp_rectangle').style.display = 'none';
            
        PI_16_db = 0;
        PI_16_b = 0;
        PI_16_mb = 0;
                
        PI_16_dp = 0;
        PI_16_p = 0;
        PI_16_mp = 0;

            document.getElementById('PI_16_db_rectangle').style.display = 'none';
            document.getElementById('PI_16_b_rectangle').style.display = 'none';
            document.getElementById('PI_16_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_16_dp_rectangle').style.display = 'none';
            document.getElementById('PI_16_p_rectangle').style.display = 'none';
            document.getElementById('PI_16_mp_rectangle').style.display = 'none';
    }
}

function toggle_tooth_16() {
    if (Tooth_16 === 1) {
        Tooth_16 = 0;
        document.getElementById('tooth_line_16_b').style.display = 'block';
        document.getElementById('tooth_line_16_p').style.display = 'block';
        
        document.getElementById('mobility_16_txt').style.display = 'none';
        
        document.getElementById('implant_16_btn').style.display = 'none';
        document.getElementById('implant_16_tab').style.display = 'none';
        document.getElementById('implant_16_b_image').style.display = 'none';
        document.getElementById('implant_16_p_image').style.display = 'none';
        
        document.getElementById('furcation_16_b_btn').style.display = 'none';
        document.getElementById('furcation_16_dp_btn').style.display = 'none';
        document.getElementById('furcation_16_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_16_b').style.display = 'none';
        document.getElementById('furcation_2_16_b').style.display = 'none';
        document.getElementById('furcation_3_16_b').style.display = 'none';
        
        document.getElementById('furcation_1_16_b_tab').style.display = 'none';
        document.getElementById('furcation_2_16_b_tab').style.display = 'none';
        document.getElementById('furcation_3_16_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp').style.display = 'none';
        document.getElementById('furcation_2_16_dp').style.display = 'none';
        document.getElementById('furcation_3_16_dp').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp').style.display = 'none';
        document.getElementById('furcation_2_16_mp').style.display = 'none';
        document.getElementById('furcation_3_16_mp').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'none';
        
        document.getElementById('mg_16_db_txt').style.display = 'none';
        document.getElementById('mg_16_b_txt').style.display = 'none';
        document.getElementById('mg_16_mb_txt').style.display = 'none';
        
        document.getElementById('st_16_db_txt').style.display = 'none';
        document.getElementById('st_16_b_txt').style.display = 'none';
        document.getElementById('st_16_mb_txt').style.display = 'none';
        
        document.getElementById('mg_16_dp_txt').style.display = 'none';
        document.getElementById('mg_16_p_txt').style.display = 'none';
        document.getElementById('mg_16_mp_txt').style.display = 'none';
        
        document.getElementById('st_16_dp_txt').style.display = 'none';
        document.getElementById('st_16_p_txt').style.display = 'none';
        document.getElementById('st_16_mp_txt').style.display = 'none';
                
        document.getElementById('BOP_16_db_rectangle').style.display = 'none';
        document.getElementById('BOP_16_b_rectangle').style.display = 'none';
        document.getElementById('BOP_16_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_16_dp_rectangle').style.display = 'none';
        document.getElementById('BOP_16_p_rectangle').style.display = 'none';
        document.getElementById('BOP_16_mp_rectangle').style.display = 'none';
        
        document.getElementById('BOP_16_db_btn').style.display = 'none';
        document.getElementById('BOP_16_b_btn').style.display = 'none';
        document.getElementById('BOP_16_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_16_dp_btn').style.display = 'none';
        document.getElementById('BOP_16_p_btn').style.display = 'none';
        document.getElementById('BOP_16_mp_btn').style.display = 'none';
        
        document.getElementById('PI_16_db_rectangle').style.display = 'none';
        document.getElementById('PI_16_b_rectangle').style.display = 'none';
        document.getElementById('PI_16_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_16_dp_rectangle').style.display = 'none';
        document.getElementById('PI_16_p_rectangle').style.display = 'none';
        document.getElementById('PI_16_mp_rectangle').style.display = 'none';
        
        document.getElementById('PI_16_db_btn').style.display = 'none';
        document.getElementById('PI_16_b_btn').style.display = 'none';
        document.getElementById('PI_16_mb_btn').style.display = 'none';
        
        document.getElementById('PI_16_dp_btn').style.display = 'none';
        document.getElementById('PI_16_p_btn').style.display = 'none';
        document.getElementById('PI_16_mp_btn').style.display = 'none';
        
        document.getElementById('polygon_16_b').style.display = 'none';
        document.getElementById('polyline_an_16_b').style.display = 'none';
        document.getElementById('polyline_mg_16_b').style.display = 'none';
        
        document.getElementById('polygon_16_p').style.display = 'none';
        document.getElementById('polyline_an_16_p').style.display = 'none';
        document.getElementById('polyline_mg_16_p').style.display = 'none';
        
        document.getElementById('polygon_inter_17_16_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_17_16_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_17_16_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_17_16_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_17_16_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_17_16_p').style.display = 'none';            
        
        document.getElementById('polygon_inter_16_15_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_16_15_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_16_15_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_16_15_p').style.display = 'none';            
        document.getElementById('polyline_an_inter_16_15_p').style.display = 'none';            
        document.getElementById('polyline_mg_inter_16_15_p').style.display = 'none';  
        
        document.getElementById('note_16_txt').style.display = 'none';
    }
    else if (Implant_16 !== 1) {
        Tooth_16 = 1;
        document.getElementById('tooth_line_16_b').style.display = 'none';
        document.getElementById('tooth_line_16_p').style.display = 'none';

        document.getElementById('mobility_16_txt').style.display = 'block';

        document.getElementById('implant_16_btn').style.display = 'block';

        document.getElementById('furcation_16_b_btn').style.display = 'block';
        document.getElementById('furcation_16_dp_btn').style.display = 'block';
        document.getElementById('furcation_16_mp_btn').style.display = 'block';
        
        document.getElementById('mg_16_db_txt').style.display = 'block';
        document.getElementById('mg_16_b_txt').style.display = 'block';
        document.getElementById('mg_16_mb_txt').style.display = 'block';
        
        document.getElementById('st_16_db_txt').style.display = 'block';
        document.getElementById('st_16_b_txt').style.display = 'block';
        document.getElementById('st_16_mb_txt').style.display = 'block';
        
        document.getElementById('mg_16_dp_txt').style.display = 'block';
        document.getElementById('mg_16_p_txt').style.display = 'block';
        document.getElementById('mg_16_mp_txt').style.display = 'block';
        
        document.getElementById('st_16_dp_txt').style.display = 'block';
        document.getElementById('st_16_p_txt').style.display = 'block';
        document.getElementById('st_16_mp_txt').style.display = 'block';
        
        document.getElementById('note_16_txt').style.display = 'block';

        document.getElementById('polygon_16_b').style.display = 'block';
        document.getElementById('polyline_an_16_b').style.display = 'block';
        document.getElementById('polyline_mg_16_b').style.display = 'block';
        
        document.getElementById('polygon_16_p').style.display = 'block';
        document.getElementById('polyline_an_16_p').style.display = 'block';
        document.getElementById('polyline_mg_16_p').style.display = 'block';

        if (Tooth_17 == 1 && Tooth_16 == 1) {
            document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_p').style.display = 'block';            
        }        

        if (Tooth_16 == 1 && Tooth_15 == 1) {
            document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_p').style.display = 'block';            
        }        

        if (Furcation_16_b == 1) {
            document.getElementById('furcation_1_16_b').style.display = 'block';
        } else if (Furcation_16_b == 2) {
            document.getElementById('furcation_2_16_b').style.display = 'block';
        } else if (Furcation_16_b == 3) {
            document.getElementById('furcation_3_16_b').style.display = 'block';
        }
        if (Furcation_16_b == 1) {
            document.getElementById('furcation_1_16_b_tab').style.display = 'block';
        } else if (Furcation_16_b == 2) {
            document.getElementById('furcation_2_16_b_tab').style.display = 'block';
        } else if (Furcation_16_b == 3) {
            document.getElementById('furcation_3_16_b_tab').style.display = 'block';
        }
        if (Furcation_16_dp == 1) {
            document.getElementById('furcation_1_16_dp').style.display = 'block';
        } else if (Furcation_16_dp == 2) {
            document.getElementById('furcation_2_16_dp').style.display = 'block';
        } else if (Furcation_16_dp == 3) {
            document.getElementById('furcation_3_16_dp').style.display = 'block';
        }
        if (Furcation_16_dp == 1) {
            document.getElementById('furcation_1_16_dp_tab').style.display = 'block';
        } else if (Furcation_16_dp == 2) {
            document.getElementById('furcation_2_16_dp_tab').style.display = 'block';
        } else if (Furcation_16_dp == 3) {
            document.getElementById('furcation_3_16_dp_tab').style.display = 'block';
        }
        if (Furcation_16_mp == 1) {
            document.getElementById('furcation_1_16_mp').style.display = 'block';
        } else if (Furcation_16_mp == 2) {
            document.getElementById('furcation_2_16_mp').style.display = 'block';
        } else if (Furcation_16_mp == 3) {
            document.getElementById('furcation_3_16_mp').style.display = 'block';
        }
        if (Furcation_16_mp == 1) {
            document.getElementById('furcation_1_16_mp_tab').style.display = 'block';
        } else if (Furcation_16_mp == 2) {
            document.getElementById('furcation_2_16_mp_tab').style.display = 'block';
        } else if (Furcation_16_mp == 3) {
            document.getElementById('furcation_3_16_mp_tab').style.display = 'block';
        }

        document.getElementById('BOP_16_db_btn').style.display = 'block';
        document.getElementById('BOP_16_b_btn').style.display = 'block';
        document.getElementById('BOP_16_mb_btn').style.display = 'block';

        document.getElementById('BOP_16_dp_btn').style.display = 'block';
        document.getElementById('BOP_16_p_btn').style.display = 'block';
        document.getElementById('BOP_16_mp_btn').style.display = 'block';
        
        if (BOP_16_db == 1) {
            document.getElementById('BOP_16_db_rectangle').style.display = 'block';
        }
        if (BOP_16_b == 1) {
            document.getElementById('BOP_16_b_rectangle').style.display = 'block';
        }
        if (BOP_16_mb == 1) {
            document.getElementById('BOP_16_mb_rectangle').style.display = 'block';
        }
        if (BOP_16_dp == 1) {
            document.getElementById('BOP_16_dp_rectangle').style.display = 'block';
        }
        if (BOP_16_p == 1) {
            document.getElementById('BOP_16_p_rectangle').style.display = 'block';
        }
        if (BOP_16_mp == 1) {
            document.getElementById('BOP_16_mp_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_16_db_btn').style.display = 'block';
        document.getElementById('PI_16_b_btn').style.display = 'block';
        document.getElementById('PI_16_mb_btn').style.display = 'block';

        document.getElementById('PI_16_dp_btn').style.display = 'block';
        document.getElementById('PI_16_p_btn').style.display = 'block';
        document.getElementById('PI_16_mp_btn').style.display = 'block';
        
        if (PI_16_db == 1) {
            document.getElementById('PI_16_db_rectangle').style.display = 'block';
        }
        if (PI_16_b == 1) {
            document.getElementById('PI_16_b_rectangle').style.display = 'block';
        }
        if (PI_16_mb == 1) {
            document.getElementById('PI_16_mb_rectangle').style.display = 'block';
        }
        if (PI_16_dp == 1) {
            document.getElementById('PI_16_dp_rectangle').style.display = 'block';
        }
        if (PI_16_p == 1) {
            document.getElementById('PI_16_p_rectangle').style.display = 'block';
        }
        if (PI_16_mp == 1) {
            document.getElementById('PI_16_mp_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_16 == 1) {
        Tooth_16 = 1;
        document.getElementById('tooth_line_16_b').style.display = 'none';
        document.getElementById('tooth_line_16_p').style.display = 'none';

        document.getElementById('mobility_16_txt').style.display = 'block';
        
        document.getElementById('note_16_txt').style.display = 'block';

        document.getElementById('implant_16_btn').style.display = 'block';
        document.getElementById('implant_16_tab').style.display = 'block';
        document.getElementById('implant_16_b_image').style.display = 'block';
        document.getElementById('implant_16_p_image').style.display = 'block';

        document.getElementById('mg_16_db_txt').style.display = 'block';
        document.getElementById('mg_16_b_txt').style.display = 'block';
        document.getElementById('mg_16_mb_txt').style.display = 'block';
        
        document.getElementById('st_16_db_txt').style.display = 'block';
        document.getElementById('st_16_b_txt').style.display = 'block';
        document.getElementById('st_16_mb_txt').style.display = 'block';
        
        document.getElementById('mg_16_dp_txt').style.display = 'block';
        document.getElementById('mg_16_p_txt').style.display = 'block';
        document.getElementById('mg_16_mp_txt').style.display = 'block';
        
        document.getElementById('st_16_dp_txt').style.display = 'block';
        document.getElementById('st_16_p_txt').style.display = 'block';
        document.getElementById('st_16_mp_txt').style.display = 'block';

        document.getElementById('polygon_16_b').style.display = 'block';
        document.getElementById('polyline_an_16_b').style.display = 'block';
        document.getElementById('polyline_mg_16_b').style.display = 'block';
        
        document.getElementById('polygon_16_p').style.display = 'block';
        document.getElementById('polyline_an_16_p').style.display = 'block';
        document.getElementById('polyline_mg_16_p').style.display = 'block';

        if (Tooth_17 == 1 && Tooth_16 == 1) {
            document.getElementById('polygon_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_17_16_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_17_16_p').style.display = 'block';            
        }        

        if (Tooth_16 == 1 && Tooth_15 == 1) {
            document.getElementById('polygon_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_an_inter_16_15_p').style.display = 'block';            
            document.getElementById('polyline_mg_inter_16_15_p').style.display = 'block';            
        }        

        document.getElementById('BOP_16_db_btn').style.display = 'block';
        document.getElementById('BOP_16_b_btn').style.display = 'block';
        document.getElementById('BOP_16_mb_btn').style.display = 'block';

        document.getElementById('BOP_16_dp_btn').style.display = 'block';
        document.getElementById('BOP_16_p_btn').style.display = 'block';
        document.getElementById('BOP_16_mp_btn').style.display = 'block';
        
        document.getElementById('PI_16_db_btn').style.display = 'block';
        document.getElementById('PI_16_b_btn').style.display = 'block';
        document.getElementById('PI_16_mb_btn').style.display = 'block';

        document.getElementById('PI_16_dp_btn').style.display = 'block';
        document.getElementById('PI_16_p_btn').style.display = 'block';
        document.getElementById('PI_16_mp_btn').style.display = 'block';
        
        if (BOP_16_db == 1) {
            document.getElementById('BOP_16_db_rectangle').style.display = 'block';
        }
        if (BOP_16_b == 1) {
            document.getElementById('BOP_16_b_rectangle').style.display = 'block';
        }
        if (BOP_16_mb == 1) {
            document.getElementById('BOP_16_mb_rectangle').style.display = 'block';
        }
        if (BOP_16_dp == 1) {
            document.getElementById('BOP_16_dp_rectangle').style.display = 'block';
        }
        if (BOP_16_p == 1) {
            document.getElementById('BOP_16_p_rectangle').style.display = 'block';
        }
        if (BOP_16_mp == 1) {
            document.getElementById('BOP_16_mp_rectangle').style.display = 'block';
        }
        
        if (PI_16_db == 1) {
            document.getElementById('PI_16_db_rectangle').style.display = 'block';
        }
        if (PI_16_b == 1) {
            document.getElementById('PI_16_b_rectangle').style.display = 'block';
        }
        if (PI_16_mb == 1) {
            document.getElementById('PI_16_mb_rectangle').style.display = 'block';
        }
        if (PI_16_dp == 1) {
            document.getElementById('PI_16_dp_rectangle').style.display = 'block';
        }
        if (PI_16_p == 1) {
            document.getElementById('PI_16_p_rectangle').style.display = 'block';
        }
        if (PI_16_mp == 1) {
            document.getElementById('PI_16_mp_rectangle').style.display = 'block';
        }
    }
}

function toggle_implant_16() {
    if (Implant_16 == 0) {
        Implant_16 = 1;
        
        document.getElementById('implant_16_b_image').style.display = 'block';
        document.getElementById('implant_16_p_image').style.display = 'block';
        document.getElementById('implant_16_tab').style.display = 'block';
        
        document.getElementById('furcation_16_b_btn').style.display = 'none';
        document.getElementById('furcation_16_dp_btn').style.display = 'none';
        document.getElementById('furcation_16_mp_btn').style.display = 'none';
        
        document.getElementById('furcation_1_16_b').style.display = 'none';
        document.getElementById('furcation_2_16_b').style.display = 'none';
        document.getElementById('furcation_3_16_b').style.display = 'none';
        
        document.getElementById('furcation_1_16_b_tab').style.display = 'none';
        document.getElementById('furcation_2_16_b_tab').style.display = 'none';
        document.getElementById('furcation_3_16_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp').style.display = 'none';
        document.getElementById('furcation_2_16_dp').style.display = 'none';
        document.getElementById('furcation_3_16_dp').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp').style.display = 'none';
        document.getElementById('furcation_2_16_mp').style.display = 'none';
        document.getElementById('furcation_3_16_mp').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'none';
    }
    else {
        Implant_16 = 0;
        
        document.getElementById('implant_16_b_image').style.display = 'none';
        document.getElementById('implant_16_p_image').style.display = 'none';
        document.getElementById('implant_16_tab').style.display = 'none';
        
        document.getElementById('furcation_16_b_btn').style.display = 'block';
        document.getElementById('furcation_16_dp_btn').style.display = 'block';
        document.getElementById('furcation_16_mp_btn').style.display = 'block';

        if (Furcation_16_b == 1) {
            document.getElementById('furcation_1_16_b').style.display = 'block';
        } else if (Furcation_16_b == 2) {
            document.getElementById('furcation_2_16_b').style.display = 'block';
        } else if (Furcation_16_b == 3) {
            document.getElementById('furcation_3_16_b').style.display = 'block';
        }
        if (Furcation_16_b == 1) {
            document.getElementById('furcation_1_16_b_tab').style.display = 'block';
        } else if (Furcation_16_b == 2) {
            document.getElementById('furcation_2_16_b_tab').style.display = 'block';
        } else if (Furcation_16_b == 3) {
            document.getElementById('furcation_3_16_b_tab').style.display = 'block';
        }
        if (Furcation_16_dp == 1) {
            document.getElementById('furcation_1_16_dp').style.display = 'block';
        } else if (Furcation_16_dp == 2) {
            document.getElementById('furcation_2_16_dp').style.display = 'block';
        } else if (Furcation_16_dp == 3) {
            document.getElementById('furcation_3_16_dp').style.display = 'block';
        }
        if (Furcation_16_dp == 1) {
            document.getElementById('furcation_1_16_dp_tab').style.display = 'block';
        } else if (Furcation_16_dp == 2) {
            document.getElementById('furcation_2_16_dp_tab').style.display = 'block';
        } else if (Furcation_16_dp == 3) {
            document.getElementById('furcation_3_16_dp_tab').style.display = 'block';
        }
        if (Furcation_16_mp == 1) {
            document.getElementById('furcation_1_16_mp').style.display = 'block';
        } else if (Furcation_16_mp == 2) {
            document.getElementById('furcation_2_16_mp').style.display = 'block';
        } else if (Furcation_16_mp == 3) {
            document.getElementById('furcation_3_16_mp').style.display = 'block';
        }
        if (Furcation_16_mp == 1) {
            document.getElementById('furcation_1_16_mp_tab').style.display = 'block';
        } else if (Furcation_16_mp == 2) {
            document.getElementById('furcation_2_16_mp_tab').style.display = 'block';
        } else if (Furcation_16_mp == 3) {
            document.getElementById('furcation_3_16_mp_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_16_b() {
    if (Furcation_16_b == 0) {
        document.getElementById('furcation_1_16_b_tab').style.display = 'block';
        document.getElementById('furcation_2_16_b_tab').style.display = 'none';
        document.getElementById('furcation_3_16_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_b').style.display = 'block';
        document.getElementById('furcation_2_16_b').style.display = 'none';
        document.getElementById('furcation_3_16_b').style.display = 'none';

        Furcation_16_b = 1;
    }
    else if (Furcation_16_b == 1) {
        document.getElementById('furcation_1_16_b_tab').style.display = 'none';
        document.getElementById('furcation_2_16_b_tab').style.display = 'block';
        document.getElementById('furcation_3_16_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_b').style.display = 'none';
        document.getElementById('furcation_2_16_b').style.display = 'block';
        document.getElementById('furcation_3_16_b').style.display = 'none';
        
        Furcation_16_b = 2;
    }
    else if (Furcation_16_b == 2) {
        document.getElementById('furcation_1_16_b_tab').style.display = 'none';
        document.getElementById('furcation_2_16_b_tab').style.display = 'none';
        document.getElementById('furcation_3_16_b_tab').style.display = 'block';
        
        document.getElementById('furcation_1_16_b').style.display = 'none';
        document.getElementById('furcation_2_16_b').style.display = 'none';
        document.getElementById('furcation_3_16_b').style.display = 'block';
                    
        Furcation_16_b = 3;
    }
    else if (Furcation_16_b == 3) {
        document.getElementById('furcation_1_16_b_tab').style.display = 'none';
        document.getElementById('furcation_2_16_b_tab').style.display = 'none';
        document.getElementById('furcation_3_16_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_b').style.display = 'none';
        document.getElementById('furcation_2_16_b').style.display = 'none';
        document.getElementById('furcation_3_16_b').style.display = 'none';
                    
        Furcation_16_b = 0;
    }
}

function toggle_furcation_16_dp() {
    if (Furcation_16_dp == 0) {
        document.getElementById('furcation_1_16_dp_tab').style.display = 'block';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp').style.display = 'block';
        document.getElementById('furcation_2_16_dp').style.display = 'none';
        document.getElementById('furcation_3_16_dp').style.display = 'none';

        Furcation_16_dp = 1;
    }
    else if (Furcation_16_dp == 1) {
        document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'block';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp').style.display = 'none';
        document.getElementById('furcation_2_16_dp').style.display = 'block';
        document.getElementById('furcation_3_16_dp').style.display = 'none';
        
        Furcation_16_dp = 2;
    }
    else if (Furcation_16_dp == 2) {
        document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_16_dp').style.display = 'none';
        document.getElementById('furcation_2_16_dp').style.display = 'none';
        document.getElementById('furcation_3_16_dp').style.display = 'block';
                    
        Furcation_16_dp = 3;
    }
    else if (Furcation_16_dp == 3) {
        document.getElementById('furcation_1_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_dp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_dp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_dp').style.display = 'none';
        document.getElementById('furcation_2_16_dp').style.display = 'none';
        document.getElementById('furcation_3_16_dp').style.display = 'none';
                    
        Furcation_16_dp = 0;
    }
}

function toggle_furcation_16_mp() {
    if (Furcation_16_mp == 0) {
        document.getElementById('furcation_1_16_mp_tab').style.display = 'block';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp').style.display = 'block';
        document.getElementById('furcation_2_16_mp').style.display = 'none';
        document.getElementById('furcation_3_16_mp').style.display = 'none';

        Furcation_16_mp = 1;
    }
    else if (Furcation_16_mp == 1) {
        document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'block';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp').style.display = 'none';
        document.getElementById('furcation_2_16_mp').style.display = 'block';
        document.getElementById('furcation_3_16_mp').style.display = 'none';
        
        Furcation_16_mp = 2;
    }
    else if (Furcation_16_mp == 2) {
        document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'block';
        
        document.getElementById('furcation_1_16_mp').style.display = 'none';
        document.getElementById('furcation_2_16_mp').style.display = 'none';
        document.getElementById('furcation_3_16_mp').style.display = 'block';
                    
        Furcation_16_mp = 3;
    }
    else if (Furcation_16_mp == 3) {
        document.getElementById('furcation_1_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_2_16_mp_tab').style.display = 'none';
        document.getElementById('furcation_3_16_mp_tab').style.display = 'none';
        
        document.getElementById('furcation_1_16_mp').style.display = 'none';
        document.getElementById('furcation_2_16_mp').style.display = 'none';
        document.getElementById('furcation_3_16_mp').style.display = 'none';
                    
        Furcation_16_mp = 0;
    }
}

function toggle_BOP_16_db() {
    if (BOP_16_db == 0) {
        BOP_16_db = 1;
        document.getElementById('BOP_16_db_rectangle').style.display = 'block';
    }
    else {
        BOP_16_db = 0;
        document.getElementById('BOP_16_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_16_b() {
    if (BOP_16_b == 0) {
        BOP_16_b = 1;
        document.getElementById('BOP_16_b_rectangle').style.display = 'block';
    }
    else {
        BOP_16_b = 0;
        document.getElementById('BOP_16_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_16_mb() {
    if (BOP_16_mb == 0) {
        BOP_16_mb = 1;
        document.getElementById('BOP_16_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_16_mb = 0;
        document.getElementById('BOP_16_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_db() {
    if (PI_16_db == 0) {
        PI_16_db = 1;
        document.getElementById('PI_16_db_rectangle').style.display = 'block';
    }
    else {
        PI_16_db = 0;
        document.getElementById('PI_16_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_b() {
    if (PI_16_b == 0) {
        PI_16_b = 1;
        document.getElementById('PI_16_b_rectangle').style.display = 'block';
    }
    else {
        PI_16_b = 0;
        document.getElementById('PI_16_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_mb() {
    if (PI_16_mb == 0) {
        PI_16_mb = 1;
        document.getElementById('PI_16_mb_rectangle').style.display = 'block';
    }
    else {
        PI_16_mb = 0;
        document.getElementById('PI_16_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_16_dp() {
    if (BOP_16_dp == 0) {
        BOP_16_dp = 1;
        document.getElementById('BOP_16_dp_rectangle').style.display = 'block';
    }
    else {
        BOP_16_dp = 0;
        document.getElementById('BOP_16_dp_rectangle').style.display = 'none';
    }
}

function toggle_BOP_16_p() {
    if (BOP_16_p == 0) {
        BOP_16_p = 1;
        document.getElementById('BOP_16_p_rectangle').style.display = 'block';
    }
    else {
        BOP_16_p = 0;
        document.getElementById('BOP_16_p_rectangle').style.display = 'none';
    }
}

function toggle_BOP_16_mp() {
    if (BOP_16_mp == 0) {
        BOP_16_mp = 1;
        document.getElementById('BOP_16_mp_rectangle').style.display = 'block';
    }
    else {
        BOP_16_mp = 0;
        document.getElementById('BOP_16_mp_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_dp() {
    if (PI_16_dp == 0) {
        PI_16_dp = 1;
        document.getElementById('PI_16_dp_rectangle').style.display = 'block';
    }
    else {
        PI_16_dp = 0;
        document.getElementById('PI_16_dp_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_p() {
    if (PI_16_p == 0) {
        PI_16_p = 1;
        document.getElementById('PI_16_p_rectangle').style.display = 'block';
    }
    else {
        PI_16_p = 0;
        document.getElementById('PI_16_p_rectangle').style.display = 'none';
    }
}

function toggle_PI_16_mp() {
    if (PI_16_mp == 0) {
        PI_16_mp = 1;
        document.getElementById('PI_16_mp_rectangle').style.display = 'block';
    }
    else {
        PI_16_mp = 0;
        document.getElementById('PI_16_mp_rectangle').style.display = 'none';
    }
}

function change_probing_16() {
    if (Tooth_16 == 1) {
        
    // Variablen aus dem Formular
        st_16_db = document.forms[0]["st_16_db"].value;
        st_16_b = document.forms[0]["st_16_b"].value;
        st_16_mb = document.forms[0]["st_16_mb"].value;

        if (document.forms[0]["st_16_dp"].value > 3) {document.forms[0]["st_16_dp"].style.color = 'red';} else {document.forms[0]["st_16_dp"].style.color = 'black'}
        if (document.forms[0]["st_16_p"].value > 3) {document.forms[0]["st_16_p"].style.color = 'red';} else {document.forms[0]["st_16_p"].style.color = 'black'}
        if (document.forms[0]["st_16_mp"].value > 3) {document.forms[0]["st_16_mp"].style.color = 'red';} else {document.forms[0]["st_16_mp"].style.color = 'black'}
        
        mg_16_db = document.forms[0]["mg_16_db"].value;
        mg_16_b = document.forms[0]["mg_16_b"].value;
        mg_16_mb = document.forms[0]["mg_16_mb"].value;
        
        st_16_dp = document.forms[0]["st_16_dp"].value;
        st_16_p = document.forms[0]["st_16_p"].value;
        st_16_mp = document.forms[0]["st_16_mp"].value;

        if (document.forms[0]["st_16_db"].value > 3) {document.forms[0]["st_16_db"].style.color = 'red';} else {document.forms[0]["st_16_db"].style.color = 'black'}
        if (document.forms[0]["st_16_b"].value > 3) {document.forms[0]["st_16_b"].style.color = 'red';} else {document.forms[0]["st_16_b"].style.color = 'black'}
        if (document.forms[0]["st_16_mb"].value > 3) {document.forms[0]["st_16_mb"].style.color = 'red';} else {document.forms[0]["st_16_mb"].style.color = 'black'}
        
        mg_16_dp = document.forms[0]["mg_16_dp"].value;
        mg_16_p = document.forms[0]["mg_16_p"].value;
        mg_16_mp = document.forms[0]["mg_16_mp"].value;

    // Set der horizontalen Koordinaten von Zahn 16 (bukkal) in der Bitmap
        var x_db_16 = 397;							// distal 16
        var x_mb_16 = 451;							// mesial 16
        var x_b_16 = (x_db_16 + x_mb_16)/2;			// bukkal 16
        
    // Set der horizontalen Koordinaten von Zahn 16 (palatinal) in der Bitmap
        var x_dp_16 = 399;							// distal 16
        var x_mp_16 = 445;							// mesial 16
        var x_p_16 = (x_dp_16 + x_mp_16)/2;			// palatinal 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (bukkal) aus dem Formular
        var y_mg_16_db = mg_OK_b + 6.5 * mg_16_db;	// Margo Gingivae distobukkal 16
        var y_mg_16_b = mg_OK_b + 6.5 * mg_16_b;	// Margo Gingivae bukkal 16
        var y_mg_16_mb = mg_OK_b + 6.5 * mg_16_mb;	// Margo Gingivae mesiobukkal 16
        var y_st_16_db = 6.5 * st_16_db;			// Sondierungstiefe distobukkal 16
        var y_st_16_b = 6.5 * st_16_b;				// Sondierungstiefe bukkal 16
        var y_st_16_mb = 6.5 * st_16_mb;			// Sondierungstiefe mesiobukkal 16
        
    // Set der vertikalen Koordinaten von Zahn 16 (palatinal) aus dem Formular
        var y_mg_16_dp = mg_OK_p - 6.5 * mg_16_dp;	// Margo Gingivae distopalatinal 16
        var y_mg_16_p = mg_OK_p - 6.5 * mg_16_p;	// Margo Gingivae palatinal 16
        var y_mg_16_mp = mg_OK_p - 6.5 * mg_16_mp;	// Margo Gingivae mesiopalatinal 16
        var y_st_16_dp = 6.5 * st_16_dp;			// Sondierungstiefe distopalatinal 16
        var y_st_16_p = 6.5 * st_16_p;				// Sondierungstiefe palatinal 16
        var y_st_16_mp = 6.5 * st_16_mp;			// Sondierungstiefe mesiopalatinal 16
        
    // Berechnung des Attachmentniveaus 16 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_db = y_mg_16_db - y_st_16_db;	// Attachmentniveau distobukkal 16
        var y_an_16_b = y_mg_16_b - y_st_16_b;		// Attachmentniveau bukkal 16
        var y_an_16_mb = y_mg_16_mb - y_st_16_mb;	// Attachmentniveau mesiobukkal 16
        
    // Berechnung des Attachmentniveaus 16 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_16_dp = y_mg_16_dp + y_st_16_dp;	// Attachmentniveau distopalatinal 16
        var y_an_16_p = y_mg_16_p + y_st_16_p;		// Attachmentniveau palatinal 16
        var y_an_16_mp = y_mg_16_mp + y_st_16_mp;	// Attachmentniveau mesiopalatinal 16
        
    // Parodontaltasche 16 bukkal zeichnen
        var string = 
            x_db_16 + ", " + y_an_16_db + "  " + 
            x_b_16 + ", " + y_an_16_b + "  " + 
            x_mb_16 + ", " + y_an_16_mb + "  " + 
            x_mb_16 + ", " + y_mg_16_mb + "  " + 
            x_b_16 + ", " + y_mg_16_b + "  " + 
            x_db_16 + ", " + y_mg_16_db;
        document.getElementById("polygon_16_b").setAttribute("points", string);
    // Attachmentniveau 16 bukkal zeichnen
        var string = 
            x_db_16 + ", " + y_an_16_db + "  " + 
            x_b_16 + ", " + y_an_16_b + "  " + 
            x_mb_16 + ", " + y_an_16_mb;
        document.getElementById("polyline_an_16_b").setAttribute("points", string);
    // Margo Gingivae 16 bukkal zeichnen
        var string =
            x_db_16 + ", " + y_mg_16_db + "  " + 
            x_b_16 + ", " + y_mg_16_b + "  " + 
            x_mb_16 + ", " + y_mg_16_mb;
        document.getElementById("polyline_mg_16_b").setAttribute("points", string);

    // Parodontaltasche 16 palatinal zeichnen
        var string = 
            x_dp_16 + ", " + y_an_16_dp + "  " + 
            x_p_16 + ", " + y_an_16_p + "  " + 
            x_mp_16 + ", " + y_an_16_mp + "  " + 
            x_mp_16 + ", " + y_mg_16_mp + "  " + 
            x_p_16 + ", " + y_mg_16_p + "  " + 
            x_dp_16 + ", " + y_mg_16_dp;
        document.getElementById("polygon_16_p").setAttribute("points", string);
    // Attachmentniveau 16 palatinal zeichnen
        var string = 
            x_dp_16 + ", " + y_an_16_dp + "  " + 
            x_p_16 + ", " + y_an_16_p + "  " + 
            x_mp_16 + ", " + y_an_16_mp;
        document.getElementById("polyline_an_16_p").setAttribute("points", string);
    // Margo Gingivae 16 palatinal zeichnen
        var string =
            x_dp_16 + ", " + y_mg_16_dp + "  " + 
            x_p_16 + ", " + y_mg_16_p + "  " + 
            x_mp_16 + ", " + y_mg_16_mp;
        document.getElementById("polyline_mg_16_p").setAttribute("points", string);
    }
    if (Tooth_16 == 1 && Tooth_15 == 1) {

        st_15_db = document.forms[0]["st_15_db"].value;
        mg_15_db = document.forms[0]["mg_15_db"].value;
        
        st_15_dp = document.forms[0]["st_15_dp"].value;
        mg_15_dp = document.forms[0]["mg_15_dp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 15 (bukkal) in der Bitmap
        var x_db_15 = 463;							// distal 15
        
    // Set der horizontalen Koordinaten von Zahn 15 (palatinal) in der Bitmap
        var x_dp_15 = 461;							// distal 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (bukkal) aus dem Formular
        var y_mg_15_db = mg_OK_b + 6.5 * mg_15_db;	// Margo Gingivae distobukkal 15
        var y_st_15_db = 6.5 * st_15_db;			// Sondierungstiefe distobukkal 15
        
    // Set der vertikalen Koordinaten von Zahn 15 (palatinal) aus dem Formular
        var y_mg_15_dp = mg_OK_p - 6.5 * mg_15_dp;	// Margo Gingivae distopalatinal 15
        var y_st_15_dp = 6.5 * st_15_dp;			// Sondierungstiefe distopalatinal 15
        
    // Berechnung des Attachmentniveaus 15 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_db = y_mg_15_db - y_st_15_db;	// Attachmentniveau distobukkal 15
        
    // Berechnung des Attachmentniveaus 15 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_15_dp = y_mg_15_dp + y_st_15_dp;	// Attachmentniveau distopalatinal 15

    // Parodontaltasche inter_16_15 bukkal zeichnen
        var string = 
            x_mb_16 + ", " + y_an_16_mb + "  " + 
            x_db_15 + ", " + y_an_15_db + "  " + 
            x_db_15 + ", " + y_mg_15_db + "  " + 
            x_mb_16 + ", " + y_mg_16_mb;
        document.getElementById("polygon_inter_16_15_b").setAttribute("points", string);
    // Attachmentniveau inter_16_15 bukkal zeichnen
        var string = 
            x_mb_16 + ", " + y_an_16_mb + "  " + 
            x_db_15 + ", " + y_an_15_db;
        document.getElementById("polyline_an_inter_16_15_b").setAttribute("points", string);
    // Margo Gingivae inter_16_15 bukkal zeichnen
        var string =
            x_mb_16 + ", " + y_mg_16_mb + "  " + 
            x_db_15 + ", " + y_mg_15_db;
        document.getElementById("polyline_mg_inter_16_15_b").setAttribute("points", string);

    // Parodontaltasche inter_16_15 palatinal zeichnen
        var string = 
            x_mp_16 + ", " + y_an_16_mp + "  " + 
            x_dp_15 + ", " + y_an_15_dp + "  " + 
            x_dp_15 + ", " + y_mg_15_dp + "  " + 
            x_mp_16 + ", " + y_mg_16_mp;
        document.getElementById("polygon_inter_16_15_p").setAttribute("points", string);
    // Attachmentniveau inter_16_15 palatinal zeichnen
        var string = 
            x_mp_16 + ", " + y_an_16_mp + "  " + 
            x_dp_15 + ", " + y_an_15_dp;
        document.getElementById("polyline_an_inter_16_15_p").setAttribute("points", string);
    // Margo Gingivae inter_16_15 palatinal zeichnen
        var string =
            x_mp_16 + ", " + y_mg_16_mp + "  " + 
            x_dp_15 + ", " + y_mg_15_dp;
        document.getElementById("polyline_mg_inter_16_15_p").setAttribute("points", string);
    }
    if (Tooth_17 == 1 && Tooth_16 == 1) {

        st_17_mb = document.forms[0]["st_17_mb"].value;
        mg_17_mb = document.forms[0]["mg_17_mb"].value;
        
        st_17_mp = document.forms[0]["st_17_mp"].value;
        mg_17_mp = document.forms[0]["mg_17_mp"].value;
        
    // Set der horizontalen Koordinaten von Zahn 17 (bukkal) in der Bitmap
        var x_mb_17 = 386;							// mesial 17
        
    // Set der horizontalen Koordinaten von Zahn 17 (palatinal) in der Bitmap
        var x_mp_17 = 383;							// mesial 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (bukkal) aus dem Formular
        var y_mg_17_mb = mg_OK_b + 6.5 * mg_17_mb;	// Margo Gingivae mesiobukkal 17
        var y_st_17_mb = 6.5 * st_17_mb;			// Sondierungstiefe mesiobukkal 17
        
    // Set der vertikalen Koordinaten von Zahn 17 (palatinal) aus dem Formular
        var y_mg_17_mp = mg_OK_p - 6.5 * mg_17_mp;	// Margo Gingivae mesiopalatinal 17
        var y_st_17_mp = 6.5 * st_17_mp;			// Sondierungstiefe mesiopalatinal 17
        
    // Berechnung des Attachmentniveaus 17 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_mb = y_mg_17_mb - y_st_17_mb;	// Attachmentniveau mesiobukkal 17
        
    // Berechnung des Attachmentniveaus 17 (palatinal) aus Margo Gingivae und Sondierungstiefe
        var y_an_17_mp = y_mg_17_mp + y_st_17_mp;	// Attachmentniveau mesiopalatinal 17

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
}