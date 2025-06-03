	// Definition der Variablen fÃ¼r das Formular
    var Tooth_48 = 1;
    var Furcation_48_b = 0;
    var Furcation_48_l = 0;
    var Implant_48 = 0;
    var BOP_48_db = 0;
    var BOP_48_b = 0;
    var BOP_48_mb = 0;
    var PI_48_db = 0;
    var PI_48_b = 0;
    var PI_48_mb = 0;
    var BOP_48_dl = 0;
    var BOP_48_l = 0;
    var BOP_48_ml = 0;
    var PI_48_dl = 0;
    var PI_48_l = 0;
    var PI_48_ml = 0;
    var mg_48_db = 0;
    var mg_48_b = 0;
    var mg_48_mb = 0;
    var st_48_db = 0;
    var st_48_b = 0;
    var st_48_mb = 0;
    var mg_48_dl = 0;
    var mg_48_l = 0;
    var mg_48_ml = 0;
    var st_48_dl = 0;
    var st_48_l = 0;
    var st_48_ml = 0;

function clear_data_48() {
    if (Tooth_48 == 1) {
        mg_48_db = 0;
        mg_48_b = 0;
        mg_48_mb = 0;
        st_48_db = 0;
        st_48_b = 0;
        st_48_mb = 0;

            document.getElementById('mg_48_db_txt').value = 0;
            document.getElementById('mg_48_b_txt').value = 0;
            document.getElementById('mg_48_mb_txt').value = 0;
            
            document.getElementById('st_48_db_txt').value = 0;
            document.getElementById('st_48_b_txt').value = 0;
            document.getElementById('st_48_mb_txt').value = 0;
        
            document.forms[0]["st_48_db"].style.color = 'black'
            document.forms[0]["st_48_b"].style.color = 'black'
            document.forms[0]["st_48_mb"].style.color = 'black'
        
        mg_48_dl = 0;
        mg_48_l = 0;
        mg_48_ml = 0;
        st_48_dl = 0;
        st_48_l = 0;
        st_48_ml = 0;

            document.getElementById('mg_48_dl_txt').value = 0;
            document.getElementById('mg_48_l_txt').value = 0;
            document.getElementById('mg_48_ml_txt').value = 0;
            
            document.getElementById('st_48_dl_txt').value = 0;
            document.getElementById('st_48_l_txt').value = 0;
            document.getElementById('st_48_ml_txt').value = 0;

            document.forms[0]["st_48_dl"].style.color = 'black'
            document.forms[0]["st_48_l"].style.color = 'black'
            document.forms[0]["st_48_ml"].style.color = 'black'
        
        change_probing_48();
        
        mobility_48 = 0;

            document.getElementById('mobility_48_txt').value = "0";

        note_48 = "";

            document.getElementById('note_48_txt').value = "";

        Furcation_48_b = 0;
        Furcation_48_l = 0;

            document.getElementById('furcation_1_48_b').style.display = 'none';
            document.getElementById('furcation_2_48_b').style.display = 'none';
            document.getElementById('furcation_3_48_b').style.display = 'none';
                
            document.getElementById('furcation_1_48_b_tab').style.display = 'none';
            document.getElementById('furcation_2_48_b_tab').style.display = 'none';
            document.getElementById('furcation_3_48_b_tab').style.display = 'none';
            
            document.getElementById('furcation_1_48_l').style.display = 'none';
            document.getElementById('furcation_2_48_l').style.display = 'none';
            document.getElementById('furcation_3_48_l').style.display = 'none';
                
            document.getElementById('furcation_1_48_l_tab').style.display = 'none';
            document.getElementById('furcation_2_48_l_tab').style.display = 'none';
            document.getElementById('furcation_3_48_l_tab').style.display = 'none';
            
        BOP_48_db = 0;
        BOP_48_b = 0;
        BOP_48_mb = 0;
                
        BOP_48_dl = 0;
        BOP_48_l = 0;
        BOP_48_ml = 0;
                
            document.getElementById('BOP_48_db_rectangle').style.display = 'none';
            document.getElementById('BOP_48_b_rectangle').style.display = 'none';
            document.getElementById('BOP_48_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_48_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_48_l_rectangle').style.display = 'none';
            document.getElementById('BOP_48_ml_rectangle').style.display = 'none';
            
        PI_48_db = 0;
        PI_48_b = 0;
        PI_48_mb = 0;
                
        PI_48_dl = 0;
        PI_48_l = 0;
        PI_48_ml = 0;

            document.getElementById('PI_48_db_rectangle').style.display = 'none';
            document.getElementById('PI_48_b_rectangle').style.display = 'none';
            document.getElementById('PI_48_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_48_dl_rectangle').style.display = 'none';
            document.getElementById('PI_48_l_rectangle').style.display = 'none';
            document.getElementById('PI_48_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_48() {
    if (Tooth_48 === 1) {
        Tooth_48 = 0;
        document.getElementById('tooth_line_48_b').style.display = 'block';
        document.getElementById('tooth_line_48_l').style.display = 'block';
        
        document.getElementById('mobility_48_txt').style.display = 'none';
        
        document.getElementById('implant_48_btn').style.display = 'none';
        document.getElementById('implant_48_tab').style.display = 'none';
        document.getElementById('implant_48_b_image').style.display = 'none';
        document.getElementById('implant_48_l_image').style.display = 'none';
        
        document.getElementById('furcation_48_b_btn').style.display = 'none';
        document.getElementById('furcation_48_l_btn').style.display = 'none';

        document.getElementById('furcation_1_48_b').style.display = 'none';
        document.getElementById('furcation_2_48_b').style.display = 'none';
        document.getElementById('furcation_3_48_b').style.display = 'none';
        
        document.getElementById('furcation_1_48_b_tab').style.display = 'none';
        document.getElementById('furcation_2_48_b_tab').style.display = 'none';
        document.getElementById('furcation_3_48_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_l').style.display = 'none';
        document.getElementById('furcation_2_48_l').style.display = 'none';
        document.getElementById('furcation_3_48_l').style.display = 'none';
        
        document.getElementById('furcation_1_48_l_tab').style.display = 'none';
        document.getElementById('furcation_2_48_l_tab').style.display = 'none';
        document.getElementById('furcation_3_48_l_tab').style.display = 'none';
                    
        document.getElementById('mg_48_db_txt').style.display = 'none';
        document.getElementById('mg_48_b_txt').style.display = 'none';
        document.getElementById('mg_48_mb_txt').style.display = 'none';
        
        document.getElementById('st_48_db_txt').style.display = 'none';
        document.getElementById('st_48_b_txt').style.display = 'none';
        document.getElementById('st_48_mb_txt').style.display = 'none';
        
        document.getElementById('mg_48_dl_txt').style.display = 'none';
        document.getElementById('mg_48_l_txt').style.display = 'none';
        document.getElementById('mg_48_ml_txt').style.display = 'none';
        
        document.getElementById('st_48_dl_txt').style.display = 'none';
        document.getElementById('st_48_l_txt').style.display = 'none';
        document.getElementById('st_48_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_48_db_rectangle').style.display = 'none';
        document.getElementById('BOP_48_b_rectangle').style.display = 'none';
        document.getElementById('BOP_48_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_48_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_48_l_rectangle').style.display = 'none';
        document.getElementById('BOP_48_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_48_db_btn').style.display = 'none';
        document.getElementById('BOP_48_b_btn').style.display = 'none';
        document.getElementById('BOP_48_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_48_dl_btn').style.display = 'none';
        document.getElementById('BOP_48_l_btn').style.display = 'none';
        document.getElementById('BOP_48_ml_btn').style.display = 'none';
        
        document.getElementById('PI_48_db_rectangle').style.display = 'none';
        document.getElementById('PI_48_b_rectangle').style.display = 'none';
        document.getElementById('PI_48_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_48_dl_rectangle').style.display = 'none';
        document.getElementById('PI_48_l_rectangle').style.display = 'none';
        document.getElementById('PI_48_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_48_db_btn').style.display = 'none';
        document.getElementById('PI_48_b_btn').style.display = 'none';
        document.getElementById('PI_48_mb_btn').style.display = 'none';
        
        document.getElementById('PI_48_dl_btn').style.display = 'none';
        document.getElementById('PI_48_l_btn').style.display = 'none';
        document.getElementById('PI_48_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_48_b').style.display = 'none';
        document.getElementById('polyline_an_48_b').style.display = 'none';
        document.getElementById('polyline_mg_48_b').style.display = 'none';
        
        document.getElementById('polygon_48_l').style.display = 'none';
        document.getElementById('polyline_an_48_l').style.display = 'none';
        document.getElementById('polyline_mg_48_l').style.display = 'none';
        
        document.getElementById('polygon_inter_48_47_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_48_47_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_48_47_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_48_47_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_48_47_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_48_47_l').style.display = 'none';            
        
        document.getElementById('note_48_txt').style.display = 'none';
    }
    else if (Implant_48 !== 1) {
        Tooth_48 = 1;
        document.getElementById('tooth_line_48_b').style.display = 'none';
        document.getElementById('tooth_line_48_l').style.display = 'none';

        document.getElementById('mobility_48_txt').style.display = 'block';

        document.getElementById('implant_48_btn').style.display = 'block';

        document.getElementById('furcation_48_b_btn').style.display = 'block';
        document.getElementById('furcation_48_l_btn').style.display = 'block';
        
        document.getElementById('mg_48_db_txt').style.display = 'block';
        document.getElementById('mg_48_b_txt').style.display = 'block';
        document.getElementById('mg_48_mb_txt').style.display = 'block';
        
        document.getElementById('st_48_db_txt').style.display = 'block';
        document.getElementById('st_48_b_txt').style.display = 'block';
        document.getElementById('st_48_mb_txt').style.display = 'block';
        
        document.getElementById('mg_48_dl_txt').style.display = 'block';
        document.getElementById('mg_48_l_txt').style.display = 'block';
        document.getElementById('mg_48_ml_txt').style.display = 'block';
        
        document.getElementById('st_48_dl_txt').style.display = 'block';
        document.getElementById('st_48_l_txt').style.display = 'block';
        document.getElementById('st_48_ml_txt').style.display = 'block';
        
        document.getElementById('note_48_txt').style.display = 'block';

        document.getElementById('polygon_48_b').style.display = 'block';
        document.getElementById('polyline_an_48_b').style.display = 'block';
        document.getElementById('polyline_mg_48_b').style.display = 'block';
        
        document.getElementById('polygon_48_l').style.display = 'block';
        document.getElementById('polyline_an_48_l').style.display = 'block';
        document.getElementById('polyline_mg_48_l').style.display = 'block';

        if (Tooth_48 == 1 && Tooth_47 == 1) {
            document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_l').style.display = 'block';            
        }

        if (Furcation_48_b == 1) {
            document.getElementById('furcation_1_48_b').style.display = 'block';
        } else if (Furcation_48_b == 2) {
            document.getElementById('furcation_2_48_b').style.display = 'block';
        } else if (Furcation_48_b == 3) {
            document.getElementById('furcation_3_48_b').style.display = 'block';
        }
        if (Furcation_48_b == 1) {
            document.getElementById('furcation_1_48_b_tab').style.display = 'block';
        } else if (Furcation_48_b == 2) {
            document.getElementById('furcation_2_48_b_tab').style.display = 'block';
        } else if (Furcation_48_b == 3) {
            document.getElementById('furcation_3_48_b_tab').style.display = 'block';
        }
        if (Furcation_48_l == 1) {
            document.getElementById('furcation_1_48_l').style.display = 'block';
        } else if (Furcation_48_l == 2) {
            document.getElementById('furcation_2_48_l').style.display = 'block';
        } else if (Furcation_48_l == 3) {
            document.getElementById('furcation_3_48_l').style.display = 'block';
        }
        if (Furcation_48_l == 1) {
            document.getElementById('furcation_1_48_l_tab').style.display = 'block';
        } else if (Furcation_48_l == 2) {
            document.getElementById('furcation_2_48_l_tab').style.display = 'block';
        } else if (Furcation_48_l == 3) {
            document.getElementById('furcation_3_48_l_tab').style.display = 'block';
        }

        document.getElementById('BOP_48_db_btn').style.display = 'block';
        document.getElementById('BOP_48_b_btn').style.display = 'block';
        document.getElementById('BOP_48_mb_btn').style.display = 'block';

        document.getElementById('BOP_48_dl_btn').style.display = 'block';
        document.getElementById('BOP_48_l_btn').style.display = 'block';
        document.getElementById('BOP_48_ml_btn').style.display = 'block';
        
        if (BOP_48_db == 1) {
            document.getElementById('BOP_48_db_rectangle').style.display = 'block';
        }
        if (BOP_48_b == 1) {
            document.getElementById('BOP_48_b_rectangle').style.display = 'block';
        }
        if (BOP_48_mb == 1) {
            document.getElementById('BOP_48_mb_rectangle').style.display = 'block';
        }
        if (BOP_48_dl == 1) {
            document.getElementById('BOP_48_dl_rectangle').style.display = 'block';
        }
        if (BOP_48_l == 1) {
            document.getElementById('BOP_48_l_rectangle').style.display = 'block';
        }
        if (BOP_48_ml == 1) {
            document.getElementById('BOP_48_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_48_db_btn').style.display = 'block';
        document.getElementById('PI_48_b_btn').style.display = 'block';
        document.getElementById('PI_48_mb_btn').style.display = 'block';

        document.getElementById('PI_48_dl_btn').style.display = 'block';
        document.getElementById('PI_48_l_btn').style.display = 'block';
        document.getElementById('PI_48_ml_btn').style.display = 'block';
        
        if (PI_48_db == 1) {
            document.getElementById('PI_48_db_rectangle').style.display = 'block';
        }
        if (PI_48_b == 1) {
            document.getElementById('PI_48_b_rectangle').style.display = 'block';
        }
        if (PI_48_mb == 1) {
            document.getElementById('PI_48_mb_rectangle').style.display = 'block';
        }
        if (PI_48_dl == 1) {
            document.getElementById('PI_48_dl_rectangle').style.display = 'block';
        }
        if (PI_48_l == 1) {
            document.getElementById('PI_48_l_rectangle').style.display = 'block';
        }
        if (PI_48_ml == 1) {
            document.getElementById('PI_48_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implant_48 == 1) {
        Tooth_48 = 1;
        document.getElementById('tooth_line_48_b').style.display = 'none';
        document.getElementById('tooth_line_48_l').style.display = 'none';

        document.getElementById('mobility_48_txt').style.display = 'block';
        
        document.getElementById('note_48_txt').style.display = 'block';

        document.getElementById('implant_48_btn').style.display = 'block';
        document.getElementById('implant_48_tab').style.display = 'block';
        document.getElementById('implant_48_b_image').style.display = 'block';
        document.getElementById('implant_48_l_image').style.display = 'block';

        document.getElementById('mg_48_db_txt').style.display = 'block';
        document.getElementById('mg_48_b_txt').style.display = 'block';
        document.getElementById('mg_48_mb_txt').style.display = 'block';
        
        document.getElementById('st_48_db_txt').style.display = 'block';
        document.getElementById('st_48_b_txt').style.display = 'block';
        document.getElementById('st_48_mb_txt').style.display = 'block';
        
        document.getElementById('mg_48_dl_txt').style.display = 'block';
        document.getElementById('mg_48_l_txt').style.display = 'block';
        document.getElementById('mg_48_ml_txt').style.display = 'block';
        
        document.getElementById('st_48_dl_txt').style.display = 'block';
        document.getElementById('st_48_l_txt').style.display = 'block';
        document.getElementById('st_48_ml_txt').style.display = 'block';

        document.getElementById('polygon_48_b').style.display = 'block';
        document.getElementById('polyline_an_48_b').style.display = 'block';
        document.getElementById('polyline_mg_48_b').style.display = 'block';
        
        document.getElementById('polygon_48_l').style.display = 'block';
        document.getElementById('polyline_an_48_l').style.display = 'block';
        document.getElementById('polyline_mg_48_l').style.display = 'block';

        if (Tooth_48 == 1 && Tooth_47 == 1) {
            document.getElementById('polygon_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_48_47_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_48_47_l').style.display = 'block';            
        }

        document.getElementById('BOP_48_db_btn').style.display = 'block';
        document.getElementById('BOP_48_b_btn').style.display = 'block';
        document.getElementById('BOP_48_mb_btn').style.display = 'block';

        document.getElementById('BOP_48_dl_btn').style.display = 'block';
        document.getElementById('BOP_48_l_btn').style.display = 'block';
        document.getElementById('BOP_48_ml_btn').style.display = 'block';
        
        document.getElementById('PI_48_db_btn').style.display = 'block';
        document.getElementById('PI_48_b_btn').style.display = 'block';
        document.getElementById('PI_48_mb_btn').style.display = 'block';

        document.getElementById('PI_48_dl_btn').style.display = 'block';
        document.getElementById('PI_48_l_btn').style.display = 'block';
        document.getElementById('PI_48_ml_btn').style.display = 'block';
        
        if (BOP_48_db == 1) {
            document.getElementById('BOP_48_db_rectangle').style.display = 'block';
        }
        if (BOP_48_b == 1) {
            document.getElementById('BOP_48_b_rectangle').style.display = 'block';
        }
        if (BOP_48_mb == 1) {
            document.getElementById('BOP_48_mb_rectangle').style.display = 'block';
        }
        if (BOP_48_dl == 1) {
            document.getElementById('BOP_48_dl_rectangle').style.display = 'block';
        }
        if (BOP_48_l == 1) {
            document.getElementById('BOP_48_l_rectangle').style.display = 'block';
        }
        if (BOP_48_ml == 1) {
            document.getElementById('BOP_48_ml_rectangle').style.display = 'block';
        }
        
        if (PI_48_db == 1) {
            document.getElementById('PI_48_db_rectangle').style.display = 'block';
        }
        if (PI_48_b == 1) {
            document.getElementById('PI_48_b_rectangle').style.display = 'block';
        }
        if (PI_48_mb == 1) {
            document.getElementById('PI_48_mb_rectangle').style.display = 'block';
        }
        if (PI_48_dl == 1) {
            document.getElementById('PI_48_dl_rectangle').style.display = 'block';
        }
        if (PI_48_l == 1) {
            document.getElementById('PI_48_l_rectangle').style.display = 'block';
        }
        if (PI_48_ml == 1) {
            document.getElementById('PI_48_ml_rectangle').style.display = 'block';
        }
    }
}		

function toggle_implant_48() {
    if (Implant_48 == 0) {
        Implant_48 = 1;
        
        document.getElementById('implant_48_b_image').style.display = 'block';
        document.getElementById('implant_48_l_image').style.display = 'block';
        document.getElementById('implant_48_tab').style.display = 'block';
        
        document.getElementById('furcation_48_b_btn').style.display = 'none';
        document.getElementById('furcation_48_l_btn').style.display = 'none';
        
        document.getElementById('furcation_1_48_b').style.display = 'none';
        document.getElementById('furcation_2_48_b').style.display = 'none';
        document.getElementById('furcation_3_48_b').style.display = 'none';
        
        document.getElementById('furcation_1_48_b_tab').style.display = 'none';
        document.getElementById('furcation_2_48_b_tab').style.display = 'none';
        document.getElementById('furcation_3_48_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_l').style.display = 'none';
        document.getElementById('furcation_2_48_l').style.display = 'none';
        document.getElementById('furcation_3_48_l').style.display = 'none';
        
        document.getElementById('furcation_1_48_l_tab').style.display = 'none';
        document.getElementById('furcation_2_48_l_tab').style.display = 'none';
        document.getElementById('furcation_3_48_l_tab').style.display = 'none';
    }
    else {
        Implant_48 = 0;
        
        document.getElementById('implant_48_b_image').style.display = 'none';
        document.getElementById('implant_48_l_image').style.display = 'none';
        document.getElementById('implant_48_tab').style.display = 'none';
        
        document.getElementById('furcation_48_b_btn').style.display = 'block';
        document.getElementById('furcation_48_l_btn').style.display = 'block';

        if (Furcation_48_b == 1) {
            document.getElementById('furcation_1_48_b').style.display = 'block';
        } else if (Furcation_48_b == 2) {
            document.getElementById('furcation_2_48_b').style.display = 'block';
        } else if (Furcation_48_b == 3) {
            document.getElementById('furcation_3_48_b').style.display = 'block';
        }
        if (Furcation_48_b == 1) {
            document.getElementById('furcation_1_48_b_tab').style.display = 'block';
        } else if (Furcation_48_b == 2) {
            document.getElementById('furcation_2_48_b_tab').style.display = 'block';
        } else if (Furcation_48_b == 3) {
            document.getElementById('furcation_3_48_b_tab').style.display = 'block';
        }
        if (Furcation_48_l == 1) {
            document.getElementById('furcation_1_48_l').style.display = 'block';
        } else if (Furcation_48_l == 2) {
            document.getElementById('furcation_2_48_l').style.display = 'block';
        } else if (Furcation_48_l == 3) {
            document.getElementById('furcation_3_48_l').style.display = 'block';
        }
        if (Furcation_48_l == 1) {
            document.getElementById('furcation_1_48_l_tab').style.display = 'block';
        } else if (Furcation_48_l == 2) {
            document.getElementById('furcation_2_48_l_tab').style.display = 'block';
        } else if (Furcation_48_l == 3) {
            document.getElementById('furcation_3_48_l_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_48_b() {
    if (Furcation_48_b == 0) {
        document.getElementById('furcation_1_48_b_tab').style.display = 'block';
        document.getElementById('furcation_2_48_b_tab').style.display = 'none';
        document.getElementById('furcation_3_48_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_b').style.display = 'block';
        document.getElementById('furcation_2_48_b').style.display = 'none';
        document.getElementById('furcation_3_48_b').style.display = 'none';

        Furcation_48_b = 1;
    }
    else if (Furcation_48_b == 1) {
        document.getElementById('furcation_1_48_b_tab').style.display = 'none';
        document.getElementById('furcation_2_48_b_tab').style.display = 'block';
        document.getElementById('furcation_3_48_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_b').style.display = 'none';
        document.getElementById('furcation_2_48_b').style.display = 'block';
        document.getElementById('furcation_3_48_b').style.display = 'none';
        
        Furcation_48_b = 2;
    }
    else if (Furcation_48_b == 2) {
        document.getElementById('furcation_1_48_b_tab').style.display = 'none';
        document.getElementById('furcation_2_48_b_tab').style.display = 'none';
        document.getElementById('furcation_3_48_b_tab').style.display = 'block';
        
        document.getElementById('furcation_1_48_b').style.display = 'none';
        document.getElementById('furcation_2_48_b').style.display = 'none';
        document.getElementById('furcation_3_48_b').style.display = 'block';
                    
        Furcation_48_b = 3;
    }
    else if (Furcation_48_b == 3) {
        document.getElementById('furcation_1_48_b_tab').style.display = 'none';
        document.getElementById('furcation_2_48_b_tab').style.display = 'none';
        document.getElementById('furcation_3_48_b_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_b').style.display = 'none';
        document.getElementById('furcation_2_48_b').style.display = 'none';
        document.getElementById('furcation_3_48_b').style.display = 'none';
                    
        Furcation_48_b = 0;
    }
}

function toggle_furcation_48_l() {
    if (Furcation_48_l == 0) {
        document.getElementById('furcation_1_48_l_tab').style.display = 'block';
        document.getElementById('furcation_2_48_l_tab').style.display = 'none';
        document.getElementById('furcation_3_48_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_l').style.display = 'block';
        document.getElementById('furcation_2_48_l').style.display = 'none';
        document.getElementById('furcation_3_48_l').style.display = 'none';

        Furcation_48_l = 1;
    }
    else if (Furcation_48_l == 1) {
        document.getElementById('furcation_1_48_l_tab').style.display = 'none';
        document.getElementById('furcation_2_48_l_tab').style.display = 'block';
        document.getElementById('furcation_3_48_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_l').style.display = 'none';
        document.getElementById('furcation_2_48_l').style.display = 'block';
        document.getElementById('furcation_3_48_l').style.display = 'none';
        
        Furcation_48_l = 2;
    }
    else if (Furcation_48_l == 2) {
        document.getElementById('furcation_1_48_l_tab').style.display = 'none';
        document.getElementById('furcation_2_48_l_tab').style.display = 'none';
        document.getElementById('furcation_3_48_l_tab').style.display = 'block';
        
        document.getElementById('furcation_1_48_l').style.display = 'none';
        document.getElementById('furcation_2_48_l').style.display = 'none';
        document.getElementById('furcation_3_48_l').style.display = 'block';
                    
        Furcation_48_l = 3;
    }
    else if (Furcation_48_l == 3) {
        document.getElementById('furcation_1_48_l_tab').style.display = 'none';
        document.getElementById('furcation_2_48_l_tab').style.display = 'none';
        document.getElementById('furcation_3_48_l_tab').style.display = 'none';
        
        document.getElementById('furcation_1_48_l').style.display = 'none';
        document.getElementById('furcation_2_48_l').style.display = 'none';
        document.getElementById('furcation_3_48_l').style.display = 'none';
                    
        Furcation_48_l = 0;
    }
}

function toggle_BOP_48_db() {
    if (BOP_48_db == 0) {
        BOP_48_db = 1;
        document.getElementById('BOP_48_db_rectangle').style.display = 'block';
    }
    else {
        BOP_48_db = 0;
        document.getElementById('BOP_48_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_48_b() {
    if (BOP_48_b == 0) {
        BOP_48_b = 1;
        document.getElementById('BOP_48_b_rectangle').style.display = 'block';
    }
    else {
        BOP_48_b = 0;
        document.getElementById('BOP_48_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_48_mb() {
    if (BOP_48_mb == 0) {
        BOP_48_mb = 1;
        document.getElementById('BOP_48_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_48_mb = 0;
        document.getElementById('BOP_48_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_db() {
    if (PI_48_db == 0) {
        PI_48_db = 1;
        document.getElementById('PI_48_db_rectangle').style.display = 'block';
    }
    else {
        PI_48_db = 0;
        document.getElementById('PI_48_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_b() {
    if (PI_48_b == 0) {
        PI_48_b = 1;
        document.getElementById('PI_48_b_rectangle').style.display = 'block';
    }
    else {
        PI_48_b = 0;
        document.getElementById('PI_48_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_mb() {
    if (PI_48_mb == 0) {
        PI_48_mb = 1;
        document.getElementById('PI_48_mb_rectangle').style.display = 'block';
    }
    else {
        PI_48_mb = 0;
        document.getElementById('PI_48_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_48_dl() {
    if (BOP_48_dl == 0) {
        BOP_48_dl = 1;
        document.getElementById('BOP_48_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_48_dl = 0;
        document.getElementById('BOP_48_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_48_l() {
    if (BOP_48_l == 0) {
        BOP_48_l = 1;
        document.getElementById('BOP_48_l_rectangle').style.display = 'block';
    }
    else {
        BOP_48_l = 0;
        document.getElementById('BOP_48_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_48_ml() {
    if (BOP_48_ml == 0) {
        BOP_48_ml = 1;
        document.getElementById('BOP_48_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_48_ml = 0;
        document.getElementById('BOP_48_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_dl() {
    if (PI_48_dl == 0) {
        PI_48_dl = 1;
        document.getElementById('PI_48_dl_rectangle').style.display = 'block';
    }
    else {
        PI_48_dl = 0;
        document.getElementById('PI_48_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_l() {
    if (PI_48_l == 0) {
        PI_48_l = 1;
        document.getElementById('PI_48_l_rectangle').style.display = 'block';
    }
    else {
        PI_48_l = 0;
        document.getElementById('PI_48_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_48_ml() {
    if (PI_48_ml == 0) {
        PI_48_ml = 1;
        document.getElementById('PI_48_ml_rectangle').style.display = 'block';
    }
    else {
        PI_48_ml = 0;
        document.getElementById('PI_48_ml_rectangle').style.display = 'none';
    }
}

function change_probing_48() {
    if (Tooth_48 == 1) {
        
    // Variablen aus dem Formular
        st_48_db = document.forms[0]["st_48_db"].value;
        st_48_b = document.forms[0]["st_48_b"].value;
        st_48_mb = document.forms[0]["st_48_mb"].value;

        if (document.forms[0]["st_48_dl"].value > 3) {document.forms[0]["st_48_dl"].style.color = 'red';} else {document.forms[0]["st_48_dl"].style.color = 'black'};
        if (document.forms[0]["st_48_l"].value > 3) {document.forms[0]["st_48_l"].style.color = 'red';} else {document.forms[0]["st_48_l"].style.color = 'black'};
        if (document.forms[0]["st_48_ml"].value > 3) {document.forms[0]["st_48_ml"].style.color = 'red';} else {document.forms[0]["st_48_ml"].style.color = 'black'};
        
        mg_48_db = document.forms[0]["mg_48_db"].value;
        mg_48_b = document.forms[0]["mg_48_b"].value;
        mg_48_mb = document.forms[0]["mg_48_mb"].value;
        
        st_48_dl = document.forms[0]["st_48_dl"].value;
        st_48_l = document.forms[0]["st_48_l"].value;
        st_48_ml = document.forms[0]["st_48_ml"].value;

        if (document.forms[0]["st_48_db"].value > 3) {document.forms[0]["st_48_db"].style.color = 'red';} else {document.forms[0]["st_48_db"].style.color = 'black'};
        if (document.forms[0]["st_48_b"].value > 3) {document.forms[0]["st_48_b"].style.color = 'red';} else {document.forms[0]["st_48_b"].style.color = 'black'};
        if (document.forms[0]["st_48_mb"].value > 3) {document.forms[0]["st_48_mb"].style.color = 'red';} else {document.forms[0]["st_48_mb"].style.color = 'black'};
        
        mg_48_dl = document.forms[0]["mg_48_dl"].value;
        mg_48_l = document.forms[0]["mg_48_l"].value;
        mg_48_ml = document.forms[0]["mg_48_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 48 (bukkal) in der Bitmap
        var x_db_48 = 296;							// distal 48
        var x_mb_48 = 342;							// mesial 48
        var x_b_48 = (x_db_48 + x_mb_48)/2;			// bukkal 48
        
    // Set der horizontalen Koordinaten von Zahn 48 (lingual) in der Bitmap
        var x_dl_48 = 297;							// distal 48
        var x_ml_48 = 346;							// mesial 48
        var x_l_48 = (x_dl_48 + x_ml_48)/2;			// lingual 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (bukkal) aus dem Formular
        var y_mg_48_db = mg_UK_b - 6.05 * mg_48_db;	// Margo Gingivae distobukkal 48
        var y_mg_48_b = mg_UK_b - 6.05 * mg_48_b;	// Margo Gingivae bukkal 48
        var y_mg_48_mb = mg_UK_b - 6.05 * mg_48_mb;	// Margo Gingivae mesiobukkal 48
        var y_st_48_db = 6.05 * st_48_db;			// Sondierungstiefe distobukkal 48
        var y_st_48_b = 6.05 * st_48_b;				// Sondierungstiefe bukkal 48
        var y_st_48_mb = 6.05 * st_48_mb;			// Sondierungstiefe mesiobukkal 48
        
    // Set der vertikalen Koordinaten von Zahn 48 (lingual) aus dem Formular
        var y_mg_48_dl = mg_UK_l + 6.05 * mg_48_dl;	// Margo Gingivae distolingual 48
        var y_mg_48_l = mg_UK_l + 6.05 * mg_48_l;	// Margo Gingivae lingual 48
        var y_mg_48_ml = mg_UK_l + 6.05 * mg_48_ml;	// Margo Gingivae mesiolingual 48
        var y_st_48_dl = 6.05 * st_48_dl;			// Sondierungstiefe distolingual 48
        var y_st_48_l = 6.05 * st_48_l;				// Sondierungstiefe lingual 48
        var y_st_48_ml = 6.05 * st_48_ml;			// Sondierungstiefe mesiolingual 48
        
    // Berechnung des Attachmentniveaus 48 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_48_db = y_mg_48_db + y_st_48_db;	// Attachmentniveau distobukkal 48
        var y_an_48_b = y_mg_48_b + y_st_48_b;		// Attachmentniveau bukkal 48
        var y_an_48_mb = y_mg_48_mb + y_st_48_mb;	// Attachmentniveau mesiobukkal 48
        
    // Berechnung des Attachmentniveaus 48 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_48_dl = y_mg_48_dl - y_st_48_dl;	// Attachmentniveau distolingual 48
        var y_an_48_l = y_mg_48_l - y_st_48_l;		// Attachmentniveau lingual 48
        var y_an_48_ml = y_mg_48_ml - y_st_48_ml;	// Attachmentniveau mesiolingual 48
        
    // Parodontaltasche 48 bukkal zeichnen
        var string = 
            x_db_48 + ", " + y_an_48_db + "  " + 
            x_b_48 + ", " + y_an_48_b + "  " + 
            x_mb_48 + ", " + y_an_48_mb + "  " + 
            x_mb_48 + ", " + y_mg_48_mb + "  " + 
            x_b_48 + ", " + y_mg_48_b + "  " + 
            x_db_48 + ", " + y_mg_48_db;
        document.getElementById("polygon_48_b").setAttribute("points", string);
    // Attachmentniveau 48 bukkal zeichnen
        var string = 
            x_db_48 + ", " + y_an_48_db + "  " + 
            x_b_48 + ", " + y_an_48_b + "  " + 
            x_mb_48 + ", " + y_an_48_mb;
        document.getElementById("polyline_an_48_b").setAttribute("points", string);
    // Margo Gingivae 48 bukkal zeichnen
        var string =
            x_db_48 + ", " + y_mg_48_db + "  " + 
            x_b_48 + ", " + y_mg_48_b + "  " + 
            x_mb_48 + ", " + y_mg_48_mb;
        document.getElementById("polyline_mg_48_b").setAttribute("points", string);

    // Parodontaltasche 48 lingual zeichnen
        var string = 
            x_dl_48 + ", " + y_an_48_dl + "  " + 
            x_l_48 + ", " + y_an_48_l + "  " + 
            x_ml_48 + ", " + y_an_48_ml + "  " + 
            x_ml_48 + ", " + y_mg_48_ml + "  " + 
            x_l_48 + ", " + y_mg_48_l + "  " + 
            x_dl_48 + ", " + y_mg_48_dl;
        document.getElementById("polygon_48_l").setAttribute("points", string);
    // Attachmentniveau 48 lingual zeichnen
        var string = 
            x_dl_48 + ", " + y_an_48_dl + "  " + 
            x_l_48 + ", " + y_an_48_l + "  " + 
            x_ml_48 + ", " + y_an_48_ml;
        document.getElementById("polyline_an_48_l").setAttribute("points", string);
    // Margo Gingivae 48 lingual zeichnen
        var string =
            x_dl_48 + ", " + y_mg_48_dl + "  " + 
            x_l_48 + ", " + y_mg_48_l + "  " + 
            x_ml_48 + ", " + y_mg_48_ml;
        document.getElementById("polyline_mg_48_l").setAttribute("points", string);
    }
    if (Tooth_48 == 1 && Tooth_47 == 1) {

        st_47_db = document.forms[0]["st_47_db"].value;
        mg_47_db = document.forms[0]["mg_47_db"].value;
        
        st_47_dl = document.forms[0]["st_47_dl"].value;
        mg_47_dl = document.forms[0]["mg_47_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 47 (bukkal) in der Bitmap
        var x_db_47 = 358;							// distal 47
        
    // Set der horizontalen Koordinaten von Zahn 47 (lingual) in der Bitmap
        var x_dl_47 = 362;							// distal 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (bukkal) aus dem Formular
        var y_mg_47_db = mg_UK_b - 6.05 * mg_47_db;	// Margo Gingivae distobukkal 47
        var y_st_47_db = 6.05 * st_47_db;			// Sondierungstiefe distobukkal 47
        
    // Set der vertikalen Koordinaten von Zahn 47 (lingual) aus dem Formular
        var y_mg_47_dl = mg_UK_l + 6.05 * mg_47_dl;	// Margo Gingivae distolingual 47
        var y_st_47_dl = 6.05 * st_47_dl;			// Sondierungstiefe distolingual 47
        
    // Berechnung des Attachmentniveaus 47 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_db = y_mg_47_db + y_st_47_db;	// Attachmentniveau distobukkal 47
        
    // Berechnung des Attachmentniveaus 47 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_47_dl = y_mg_47_dl - y_st_47_dl;	// Attachmentniveau distolingual 47

    // Parodontaltasche inter_48_47 bukkal zeichnen
        var string = 
            x_mb_48 + ", " + y_an_48_mb + "  " + 
            x_db_47 + ", " + y_an_47_db + "  " + 
            x_db_47 + ", " + y_mg_47_db + "  " + 
            x_mb_48 + ", " + y_mg_48_mb;
        document.getElementById("polygon_inter_48_47_b").setAttribute("points", string);
    // Attachmentniveau inter_48_47 bukkal zeichnen
        var string = 
            x_mb_48 + ", " + y_an_48_mb + "  " + 
            x_db_47 + ", " + y_an_47_db;
        document.getElementById("polyline_an_inter_48_47_b").setAttribute("points", string);
    // Margo Gingivae inter_48_47 bukkal zeichnen
        var string =
            x_mb_48 + ", " + y_mg_48_mb + "  " + 
            x_db_47 + ", " + y_mg_47_db;
        document.getElementById("polyline_mg_inter_48_47_b").setAttribute("points", string);

    // Parodontaltasche inter_48_47 lingual zeichnen
        var string = 
            x_ml_48 + ", " + y_an_48_ml + "  " + 
            x_dl_47 + ", " + y_an_47_dl + "  " + 
            x_dl_47 + ", " + y_mg_47_dl + "  " + 
            x_ml_48 + ", " + y_mg_48_ml;
        document.getElementById("polygon_inter_48_47_l").setAttribute("points", string);
    // Attachmentniveau inter_48_47 lingual zeichnen
        var string = 
            x_ml_48 + ", " + y_an_48_ml + "  " + 
            x_dl_47 + ", " + y_an_47_dl;
        document.getElementById("polyline_an_inter_48_47_l").setAttribute("points", string);
    // Margo Gingivae inter_48_47 lingual zeichnen
        var string =
            x_ml_48 + ", " + y_mg_48_ml + "  " + 
            x_dl_47 + ", " + y_mg_47_dl;
        document.getElementById("polyline_mg_inter_48_47_l").setAttribute("points", string);
    }
}