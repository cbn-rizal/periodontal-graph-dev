	// Definition der Variablen fÃ¼r das Formular
    var Tooth_38 = 1;
    var Furkation_38_b = 0;
    var Furkation_38_l = 0;
    var Implantat_38 = 0;
    var BOP_38_db = 0;
    var BOP_38_b = 0;
    var BOP_38_mb = 0;
    var PI_38_db = 0;
    var PI_38_b = 0;
    var PI_38_mb = 0;
    var BOP_38_dl = 0;
    var BOP_38_l = 0;
    var BOP_38_ml = 0;
    var PI_38_dl = 0;
    var PI_38_l = 0;
    var PI_38_ml = 0;
    var mg_38_db = 0;
    var mg_38_b = 0;
    var mg_38_mb = 0;
    var st_38_db = 0;
    var st_38_b = 0;
    var st_38_mb = 0;
    var mg_38_dl = 0;
    var mg_38_l = 0;
    var mg_38_ml = 0;
    var st_38_dl = 0;
    var st_38_l = 0;
    var st_38_ml = 0;

function clear_data_38() {
    if (Tooth_38 == 1) {
        mg_38_db = 0;
        mg_38_b = 0;
        mg_38_mb = 0;
        st_38_db = 0;
        st_38_b = 0;
        st_38_mb = 0;

            document.getElementById('mg_38_db_txt').value = 0;
            document.getElementById('mg_38_b_txt').value = 0;
            document.getElementById('mg_38_mb_txt').value = 0;
            
            document.getElementById('st_38_db_txt').value = 0;
            document.getElementById('st_38_b_txt').value = 0;
            document.getElementById('st_38_mb_txt').value = 0;
        
            document.forms[0]["st_38_db"].style.color = 'black'
            document.forms[0]["st_38_b"].style.color = 'black'
            document.forms[0]["st_38_mb"].style.color = 'black'
        
        mg_38_dl = 0;
        mg_38_l = 0;
        mg_38_ml = 0;
        st_38_dl = 0;
        st_38_l = 0;
        st_38_ml = 0;

            document.getElementById('mg_38_dl_txt').value = 0;
            document.getElementById('mg_38_l_txt').value = 0;
            document.getElementById('mg_38_ml_txt').value = 0;
            
            document.getElementById('st_38_dl_txt').value = 0;
            document.getElementById('st_38_l_txt').value = 0;
            document.getElementById('st_38_ml_txt').value = 0;

            document.forms[0]["st_38_dl"].style.color = 'black'
            document.forms[0]["st_38_l"].style.color = 'black'
            document.forms[0]["st_38_ml"].style.color = 'black'
        
        change_probing_38();
        
        mobility_38 = 0;

            document.getElementById('mobility_38_txt').value = "0";

        note_38 = "";

            document.getElementById('note_38_txt').value = "";

        Furkation_38_b = 0;
        Furkation_38_l = 0;


            document.getElementById('furkation_1_38_b').style.display = 'none';
            document.getElementById('furkation_2_38_b').style.display = 'none';
            document.getElementById('furkation_3_38_b').style.display = 'none';
                
            document.getElementById('furkation_1_38_b_tab').style.display = 'none';
            document.getElementById('furkation_2_38_b_tab').style.display = 'none';
            document.getElementById('furkation_3_38_b_tab').style.display = 'none';
            
            document.getElementById('furkation_1_38_l').style.display = 'none';
            document.getElementById('furkation_2_38_l').style.display = 'none';
            document.getElementById('furkation_3_38_l').style.display = 'none';
                
            document.getElementById('furkation_1_38_l_tab').style.display = 'none';
            document.getElementById('furkation_2_38_l_tab').style.display = 'none';
            document.getElementById('furkation_3_38_l_tab').style.display = 'none';
            
        BOP_38_db = 0;
        BOP_38_b = 0;
        BOP_38_mb = 0;
                
        BOP_38_dl = 0;
        BOP_38_l = 0;
        BOP_38_ml = 0;
                
            document.getElementById('BOP_38_db_rectangle').style.display = 'none';
            document.getElementById('BOP_38_b_rectangle').style.display = 'none';
            document.getElementById('BOP_38_mb_rectangle').style.display = 'none';
                
            document.getElementById('BOP_38_dl_rectangle').style.display = 'none';
            document.getElementById('BOP_38_l_rectangle').style.display = 'none';
            document.getElementById('BOP_38_ml_rectangle').style.display = 'none';
            
        PI_38_db = 0;
        PI_38_b = 0;
        PI_38_mb = 0;
                
        PI_38_dl = 0;
        PI_38_l = 0;
        PI_38_ml = 0;

            document.getElementById('PI_38_db_rectangle').style.display = 'none';
            document.getElementById('PI_38_b_rectangle').style.display = 'none';
            document.getElementById('PI_38_mb_rectangle').style.display = 'none';
                
            document.getElementById('PI_38_dl_rectangle').style.display = 'none';
            document.getElementById('PI_38_l_rectangle').style.display = 'none';
            document.getElementById('PI_38_ml_rectangle').style.display = 'none';
    }
}

function toggle_tooth_38() {
    if (Tooth_38 === 1) {
        Tooth_38 = 0;
        document.getElementById('tooth_line_38_b').style.display = 'block';
        document.getElementById('tooth_line_38_l').style.display = 'block';
        
        document.getElementById('mobility_38_txt').style.display = 'none';
        
        document.getElementById('implantat_38_btn').style.display = 'none';
        document.getElementById('implantat_38_tab').style.display = 'none';
        document.getElementById('implantat_38_b_image').style.display = 'none';
        document.getElementById('implantat_38_l_image').style.display = 'none';
        
        document.getElementById('furkation_38_b_btn').style.display = 'none';
        document.getElementById('furkation_38_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_38_b').style.display = 'none';
        document.getElementById('furkation_2_38_b').style.display = 'none';
        document.getElementById('furkation_3_38_b').style.display = 'none';
        
        document.getElementById('furkation_1_38_b_tab').style.display = 'none';
        document.getElementById('furkation_2_38_b_tab').style.display = 'none';
        document.getElementById('furkation_3_38_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_l').style.display = 'none';
        document.getElementById('furkation_2_38_l').style.display = 'none';
        document.getElementById('furkation_3_38_l').style.display = 'none';
        
        document.getElementById('furkation_1_38_l_tab').style.display = 'none';
        document.getElementById('furkation_2_38_l_tab').style.display = 'none';
        document.getElementById('furkation_3_38_l_tab').style.display = 'none';

        document.getElementById('mg_38_db_txt').style.display = 'none';
        document.getElementById('mg_38_b_txt').style.display = 'none';
        document.getElementById('mg_38_mb_txt').style.display = 'none';
        
        document.getElementById('st_38_db_txt').style.display = 'none';
        document.getElementById('st_38_b_txt').style.display = 'none';
        document.getElementById('st_38_mb_txt').style.display = 'none';
        
        document.getElementById('mg_38_dl_txt').style.display = 'none';
        document.getElementById('mg_38_l_txt').style.display = 'none';
        document.getElementById('mg_38_ml_txt').style.display = 'none';
        
        document.getElementById('st_38_dl_txt').style.display = 'none';
        document.getElementById('st_38_l_txt').style.display = 'none';
        document.getElementById('st_38_ml_txt').style.display = 'none';
        
        document.getElementById('BOP_38_db_rectangle').style.display = 'none';
        document.getElementById('BOP_38_b_rectangle').style.display = 'none';
        document.getElementById('BOP_38_mb_rectangle').style.display = 'none';
        
        document.getElementById('BOP_38_dl_rectangle').style.display = 'none';
        document.getElementById('BOP_38_l_rectangle').style.display = 'none';
        document.getElementById('BOP_38_ml_rectangle').style.display = 'none';
        
        document.getElementById('BOP_38_db_btn').style.display = 'none';
        document.getElementById('BOP_38_b_btn').style.display = 'none';
        document.getElementById('BOP_38_mb_btn').style.display = 'none';
        
        document.getElementById('BOP_38_dl_btn').style.display = 'none';
        document.getElementById('BOP_38_l_btn').style.display = 'none';
        document.getElementById('BOP_38_ml_btn').style.display = 'none';
        
        document.getElementById('PI_38_db_rectangle').style.display = 'none';
        document.getElementById('PI_38_b_rectangle').style.display = 'none';
        document.getElementById('PI_38_mb_rectangle').style.display = 'none';
        
        document.getElementById('PI_38_dl_rectangle').style.display = 'none';
        document.getElementById('PI_38_l_rectangle').style.display = 'none';
        document.getElementById('PI_38_ml_rectangle').style.display = 'none';
        
        document.getElementById('PI_38_db_btn').style.display = 'none';
        document.getElementById('PI_38_b_btn').style.display = 'none';
        document.getElementById('PI_38_mb_btn').style.display = 'none';
        
        document.getElementById('PI_38_dl_btn').style.display = 'none';
        document.getElementById('PI_38_l_btn').style.display = 'none';
        document.getElementById('PI_38_ml_btn').style.display = 'none';
        
        document.getElementById('polygon_38_b').style.display = 'none';
        document.getElementById('polyline_an_38_b').style.display = 'none';
        document.getElementById('polyline_mg_38_b').style.display = 'none';
        
        document.getElementById('polygon_38_l').style.display = 'none';
        document.getElementById('polyline_an_38_l').style.display = 'none';
        document.getElementById('polyline_mg_38_l').style.display = 'none';
        
        document.getElementById('polygon_inter_38_37_b').style.display = 'none';            
        document.getElementById('polyline_an_inter_38_37_b').style.display = 'none';            
        document.getElementById('polyline_mg_inter_38_37_b').style.display = 'none';            
        
        document.getElementById('polygon_inter_38_37_l').style.display = 'none';            
        document.getElementById('polyline_an_inter_38_37_l').style.display = 'none';            
        document.getElementById('polyline_mg_inter_38_37_l').style.display = 'none';            
        
        document.getElementById('note_38_txt').style.display = 'none';
    }
    else if (Implantat_38 !== 1) {
        Tooth_38 = 1;
        document.getElementById('tooth_line_38_b').style.display = 'none';
        document.getElementById('tooth_line_38_l').style.display = 'none';

        document.getElementById('mobility_38_txt').style.display = 'block';

        document.getElementById('implantat_38_btn').style.display = 'block';

        document.getElementById('furkation_38_b_btn').style.display = 'block';
        document.getElementById('furkation_38_l_btn').style.display = 'block';
        
        document.getElementById('mg_38_db_txt').style.display = 'block';
        document.getElementById('mg_38_b_txt').style.display = 'block';
        document.getElementById('mg_38_mb_txt').style.display = 'block';
        
        document.getElementById('st_38_db_txt').style.display = 'block';
        document.getElementById('st_38_b_txt').style.display = 'block';
        document.getElementById('st_38_mb_txt').style.display = 'block';
        
        document.getElementById('mg_38_dl_txt').style.display = 'block';
        document.getElementById('mg_38_l_txt').style.display = 'block';
        document.getElementById('mg_38_ml_txt').style.display = 'block';
        
        document.getElementById('st_38_dl_txt').style.display = 'block';
        document.getElementById('st_38_l_txt').style.display = 'block';
        document.getElementById('st_38_ml_txt').style.display = 'block';
        
        document.getElementById('note_38_txt').style.display = 'block';

        document.getElementById('polygon_38_b').style.display = 'block';
        document.getElementById('polyline_an_38_b').style.display = 'block';
        document.getElementById('polyline_mg_38_b').style.display = 'block';
        
        document.getElementById('polygon_38_l').style.display = 'block';
        document.getElementById('polyline_an_38_l').style.display = 'block';
        document.getElementById('polyline_mg_38_l').style.display = 'block';

        if (Tooth_38 == 1 && Zahn_37 == 1) {
            document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_l').style.display = 'block';            
        }

        if (Furkation_38_b == 1) {
            document.getElementById('furkation_1_38_b').style.display = 'block';
        } else if (Furkation_38_b == 2) {
            document.getElementById('furkation_2_38_b').style.display = 'block';
        } else if (Furkation_38_b == 3) {
            document.getElementById('furkation_3_38_b').style.display = 'block';
        }
        if (Furkation_38_b == 1) {
            document.getElementById('furkation_1_38_b_tab').style.display = 'block';
        } else if (Furkation_38_b == 2) {
            document.getElementById('furkation_2_38_b_tab').style.display = 'block';
        } else if (Furkation_38_b == 3) {
            document.getElementById('furkation_3_38_b_tab').style.display = 'block';
        }
        if (Furkation_38_l == 1) {
            document.getElementById('furkation_1_38_l').style.display = 'block';
        } else if (Furkation_38_l == 2) {
            document.getElementById('furkation_2_38_l').style.display = 'block';
        } else if (Furkation_38_l == 3) {
            document.getElementById('furkation_3_38_l').style.display = 'block';
        }
        if (Furkation_38_l == 1) {
            document.getElementById('furkation_1_38_l_tab').style.display = 'block';
        } else if (Furkation_38_l == 2) {
            document.getElementById('furkation_2_38_l_tab').style.display = 'block';
        } else if (Furkation_38_l == 3) {
            document.getElementById('furkation_3_38_l_tab').style.display = 'block';
        }

        document.getElementById('BOP_38_db_btn').style.display = 'block';
        document.getElementById('BOP_38_b_btn').style.display = 'block';
        document.getElementById('BOP_38_mb_btn').style.display = 'block';

        document.getElementById('BOP_38_dl_btn').style.display = 'block';
        document.getElementById('BOP_38_l_btn').style.display = 'block';
        document.getElementById('BOP_38_ml_btn').style.display = 'block';
        
        if (BOP_38_db == 1) {
            document.getElementById('BOP_38_db_rectangle').style.display = 'block';
        }
        if (BOP_38_b == 1) {
            document.getElementById('BOP_38_b_rectangle').style.display = 'block';
        }
        if (BOP_38_mb == 1) {
            document.getElementById('BOP_38_mb_rectangle').style.display = 'block';
        }
        if (BOP_38_dl == 1) {
            document.getElementById('BOP_38_dl_rectangle').style.display = 'block';
        }
        if (BOP_38_l == 1) {
            document.getElementById('BOP_38_l_rectangle').style.display = 'block';
        }
        if (BOP_38_ml == 1) {
            document.getElementById('BOP_38_ml_rectangle').style.display = 'block';
        }
        
        document.getElementById('PI_38_db_btn').style.display = 'block';
        document.getElementById('PI_38_b_btn').style.display = 'block';
        document.getElementById('PI_38_mb_btn').style.display = 'block';

        document.getElementById('PI_38_dl_btn').style.display = 'block';
        document.getElementById('PI_38_l_btn').style.display = 'block';
        document.getElementById('PI_38_ml_btn').style.display = 'block';
        
        if (PI_38_db == 1) {
            document.getElementById('PI_38_db_rectangle').style.display = 'block';
        }
        if (PI_38_b == 1) {
            document.getElementById('PI_38_b_rectangle').style.display = 'block';
        }
        if (PI_38_mb == 1) {
            document.getElementById('PI_38_mb_rectangle').style.display = 'block';
        }
        if (PI_38_dl == 1) {
            document.getElementById('PI_38_dl_rectangle').style.display = 'block';
        }
        if (PI_38_l == 1) {
            document.getElementById('PI_38_l_rectangle').style.display = 'block';
        }
        if (PI_38_ml == 1) {
            document.getElementById('PI_38_ml_rectangle').style.display = 'block';
        }
    }		
    else if (Implantat_38 == 1) {
        Tooth_38 = 1;
        document.getElementById('tooth_line_38_b').style.display = 'none';
        document.getElementById('tooth_line_38_l').style.display = 'none';

        document.getElementById('mobility_38_txt').style.display = 'block';
        
        document.getElementById('note_38_txt').style.display = 'block';

        document.getElementById('implantat_38_btn').style.display = 'block';
        document.getElementById('implantat_38_tab').style.display = 'block';
        document.getElementById('implantat_38_b_image').style.display = 'block';
        document.getElementById('implantat_38_l_image').style.display = 'block';

        document.getElementById('mg_38_db_txt').style.display = 'block';
        document.getElementById('mg_38_b_txt').style.display = 'block';
        document.getElementById('mg_38_mb_txt').style.display = 'block';
        
        document.getElementById('st_38_db_txt').style.display = 'block';
        document.getElementById('st_38_b_txt').style.display = 'block';
        document.getElementById('st_38_mb_txt').style.display = 'block';
        
        document.getElementById('mg_38_dl_txt').style.display = 'block';
        document.getElementById('mg_38_l_txt').style.display = 'block';
        document.getElementById('mg_38_ml_txt').style.display = 'block';
        
        document.getElementById('st_38_dl_txt').style.display = 'block';
        document.getElementById('st_38_l_txt').style.display = 'block';
        document.getElementById('st_38_ml_txt').style.display = 'block';

        document.getElementById('polygon_38_b').style.display = 'block';
        document.getElementById('polyline_an_38_b').style.display = 'block';
        document.getElementById('polyline_mg_38_b').style.display = 'block';
        
        document.getElementById('polygon_38_l').style.display = 'block';
        document.getElementById('polyline_an_38_l').style.display = 'block';
        document.getElementById('polyline_mg_38_l').style.display = 'block';

        if (Tooth_38 == 1 && Zahn_37 == 1) {
            document.getElementById('polygon_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_b').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_b').style.display = 'block';            
        
            document.getElementById('polygon_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_an_inter_38_37_l').style.display = 'block';            
            document.getElementById('polyline_mg_inter_38_37_l').style.display = 'block';            
        }            

        document.getElementById('BOP_38_db_btn').style.display = 'block';
        document.getElementById('BOP_38_b_btn').style.display = 'block';
        document.getElementById('BOP_38_mb_btn').style.display = 'block';

        document.getElementById('BOP_38_dl_btn').style.display = 'block';
        document.getElementById('BOP_38_l_btn').style.display = 'block';
        document.getElementById('BOP_38_ml_btn').style.display = 'block';
        
        document.getElementById('PI_38_db_btn').style.display = 'block';
        document.getElementById('PI_38_b_btn').style.display = 'block';
        document.getElementById('PI_38_mb_btn').style.display = 'block';

        document.getElementById('PI_38_dl_btn').style.display = 'block';
        document.getElementById('PI_38_l_btn').style.display = 'block';
        document.getElementById('PI_38_ml_btn').style.display = 'block';
        
        if (BOP_38_db == 1) {
            document.getElementById('BOP_38_db_rectangle').style.display = 'block';
        }
        if (BOP_38_b == 1) {
            document.getElementById('BOP_38_b_rectangle').style.display = 'block';
        }
        if (BOP_38_mb == 1) {
            document.getElementById('BOP_38_mb_rectangle').style.display = 'block';
        }
        if (BOP_38_dl == 1) {
            document.getElementById('BOP_38_dl_rectangle').style.display = 'block';
        }
        if (BOP_38_l == 1) {
            document.getElementById('BOP_38_l_rectangle').style.display = 'block';
        }
        if (BOP_38_ml == 1) {
            document.getElementById('BOP_38_ml_rectangle').style.display = 'block';
        }
        
        if (PI_38_db == 1) {
            document.getElementById('PI_38_db_rectangle').style.display = 'block';
        }
        if (PI_38_b == 1) {
            document.getElementById('PI_38_b_rectangle').style.display = 'block';
        }
        if (PI_38_mb == 1) {
            document.getElementById('PI_38_mb_rectangle').style.display = 'block';
        }
        if (PI_38_dl == 1) {
            document.getElementById('PI_38_dl_rectangle').style.display = 'block';
        }
        if (PI_38_l == 1) {
            document.getElementById('PI_38_l_rectangle').style.display = 'block';
        }
        if (PI_38_ml == 1) {
            document.getElementById('PI_38_ml_rectangle').style.display = 'block';
        }
    }
}		

function toggle_implant_38() {
    if (Implantat_38 == 0) {
        Implantat_38 = 1;
        
        document.getElementById('implantat_38_b_image').style.display = 'block';
        document.getElementById('implantat_38_l_image').style.display = 'block';
        document.getElementById('implantat_38_tab').style.display = 'block';
        
        document.getElementById('furkation_38_b_btn').style.display = 'none';
        document.getElementById('furkation_38_l_btn').style.display = 'none';
        
        document.getElementById('furkation_1_38_b').style.display = 'none';
        document.getElementById('furkation_2_38_b').style.display = 'none';
        document.getElementById('furkation_3_38_b').style.display = 'none';
        
        document.getElementById('furkation_1_38_b_tab').style.display = 'none';
        document.getElementById('furkation_2_38_b_tab').style.display = 'none';
        document.getElementById('furkation_3_38_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_l').style.display = 'none';
        document.getElementById('furkation_2_38_l').style.display = 'none';
        document.getElementById('furkation_3_38_l').style.display = 'none';
        
        document.getElementById('furkation_1_38_l_tab').style.display = 'none';
        document.getElementById('furkation_2_38_l_tab').style.display = 'none';
        document.getElementById('furkation_3_38_l_tab').style.display = 'none';
    }
    else {
        Implantat_38 = 0;
        
        document.getElementById('implantat_38_b_image').style.display = 'none';
        document.getElementById('implantat_38_l_image').style.display = 'none';
        document.getElementById('implantat_38_tab').style.display = 'none';
        
        document.getElementById('furkation_38_b_btn').style.display = 'block';
        document.getElementById('furkation_38_l_btn').style.display = 'block';

        if (Furkation_38_b == 1) {
            document.getElementById('furkation_1_38_b').style.display = 'block';
        } else if (Furkation_38_b == 2) {
            document.getElementById('furkation_2_38_b').style.display = 'block';
        } else if (Furkation_38_b == 3) {
            document.getElementById('furkation_3_38_b').style.display = 'block';
        }
        if (Furkation_38_b == 1) {
            document.getElementById('furkation_1_38_b_tab').style.display = 'block';
        } else if (Furkation_38_b == 2) {
            document.getElementById('furkation_2_38_b_tab').style.display = 'block';
        } else if (Furkation_38_b == 3) {
            document.getElementById('furkation_3_38_b_tab').style.display = 'block';
        }
        if (Furkation_38_l == 1) {
            document.getElementById('furkation_1_38_l').style.display = 'block';
        } else if (Furkation_38_l == 2) {
            document.getElementById('furkation_2_38_l').style.display = 'block';
        } else if (Furkation_38_l == 3) {
            document.getElementById('furkation_3_38_l').style.display = 'block';
        }
        if (Furkation_38_l == 1) {
            document.getElementById('furkation_1_38_l_tab').style.display = 'block';
        } else if (Furkation_38_l == 2) {
            document.getElementById('furkation_2_38_l_tab').style.display = 'block';
        } else if (Furkation_38_l == 3) {
            document.getElementById('furkation_3_38_l_tab').style.display = 'block';
        }
    }
}

function toggle_furcation_38_b() {
    if (Furkation_38_b == 0) {
        document.getElementById('furkation_1_38_b_tab').style.display = 'block';
        document.getElementById('furkation_2_38_b_tab').style.display = 'none';
        document.getElementById('furkation_3_38_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_b').style.display = 'block';
        document.getElementById('furkation_2_38_b').style.display = 'none';
        document.getElementById('furkation_3_38_b').style.display = 'none';

        Furkation_38_b = 1;
    }
    else if (Furkation_38_b == 1) {
        document.getElementById('furkation_1_38_b_tab').style.display = 'none';
        document.getElementById('furkation_2_38_b_tab').style.display = 'block';
        document.getElementById('furkation_3_38_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_b').style.display = 'none';
        document.getElementById('furkation_2_38_b').style.display = 'block';
        document.getElementById('furkation_3_38_b').style.display = 'none';
        
        Furkation_38_b = 2;
    }
    else if (Furkation_38_b == 2) {
        document.getElementById('furkation_1_38_b_tab').style.display = 'none';
        document.getElementById('furkation_2_38_b_tab').style.display = 'none';
        document.getElementById('furkation_3_38_b_tab').style.display = 'block';
        
        document.getElementById('furkation_1_38_b').style.display = 'none';
        document.getElementById('furkation_2_38_b').style.display = 'none';
        document.getElementById('furkation_3_38_b').style.display = 'block';
                    
        Furkation_38_b = 3;
    }
    else if (Furkation_38_b == 3) {
        document.getElementById('furkation_1_38_b_tab').style.display = 'none';
        document.getElementById('furkation_2_38_b_tab').style.display = 'none';
        document.getElementById('furkation_3_38_b_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_b').style.display = 'none';
        document.getElementById('furkation_2_38_b').style.display = 'none';
        document.getElementById('furkation_3_38_b').style.display = 'none';
                    
        Furkation_38_b = 0;
    }
}

function toggle_furcation_38_l() {
    if (Furkation_38_l == 0) {
        document.getElementById('furkation_1_38_l_tab').style.display = 'block';
        document.getElementById('furkation_2_38_l_tab').style.display = 'none';
        document.getElementById('furkation_3_38_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_l').style.display = 'block';
        document.getElementById('furkation_2_38_l').style.display = 'none';
        document.getElementById('furkation_3_38_l').style.display = 'none';

        Furkation_38_l = 1;
    }
    else if (Furkation_38_l == 1) {
        document.getElementById('furkation_1_38_l_tab').style.display = 'none';
        document.getElementById('furkation_2_38_l_tab').style.display = 'block';
        document.getElementById('furkation_3_38_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_l').style.display = 'none';
        document.getElementById('furkation_2_38_l').style.display = 'block';
        document.getElementById('furkation_3_38_l').style.display = 'none';
        
        Furkation_38_l = 2;
    }
    else if (Furkation_38_l == 2) {
        document.getElementById('furkation_1_38_l_tab').style.display = 'none';
        document.getElementById('furkation_2_38_l_tab').style.display = 'none';
        document.getElementById('furkation_3_38_l_tab').style.display = 'block';
        
        document.getElementById('furkation_1_38_l').style.display = 'none';
        document.getElementById('furkation_2_38_l').style.display = 'none';
        document.getElementById('furkation_3_38_l').style.display = 'block';
                    
        Furkation_38_l = 3;
    }
    else if (Furkation_38_l == 3) {
        document.getElementById('furkation_1_38_l_tab').style.display = 'none';
        document.getElementById('furkation_2_38_l_tab').style.display = 'none';
        document.getElementById('furkation_3_38_l_tab').style.display = 'none';
        
        document.getElementById('furkation_1_38_l').style.display = 'none';
        document.getElementById('furkation_2_38_l').style.display = 'none';
        document.getElementById('furkation_3_38_l').style.display = 'none';
                    
        Furkation_38_l = 0;
    }
}

function toggle_BOP_38_db() {
    if (BOP_38_db == 0) {
        BOP_38_db = 1;
        document.getElementById('BOP_38_db_rectangle').style.display = 'block';
    }
    else {
        BOP_38_db = 0;
        document.getElementById('BOP_38_db_rectangle').style.display = 'none';
    }
}

function toggle_BOP_38_b() {
    if (BOP_38_b == 0) {
        BOP_38_b = 1;
        document.getElementById('BOP_38_b_rectangle').style.display = 'block';
    }
    else {
        BOP_38_b = 0;
        document.getElementById('BOP_38_b_rectangle').style.display = 'none';
    }
}

function toggle_BOP_38_mb() {
    if (BOP_38_mb == 0) {
        BOP_38_mb = 1;
        document.getElementById('BOP_38_mb_rectangle').style.display = 'block';
    }
    else {
        BOP_38_mb = 0;
        document.getElementById('BOP_38_mb_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_db() {
    if (PI_38_db == 0) {
        PI_38_db = 1;
        document.getElementById('PI_38_db_rectangle').style.display = 'block';
    }
    else {
        PI_38_db = 0;
        document.getElementById('PI_38_db_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_b() {
    if (PI_38_b == 0) {
        PI_38_b = 1;
        document.getElementById('PI_38_b_rectangle').style.display = 'block';
    }
    else {
        PI_38_b = 0;
        document.getElementById('PI_38_b_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_mb() {
    if (PI_38_mb == 0) {
        PI_38_mb = 1;
        document.getElementById('PI_38_mb_rectangle').style.display = 'block';
    }
    else {
        PI_38_mb = 0;
        document.getElementById('PI_38_mb_rectangle').style.display = 'none';
    }
}

function toggle_BOP_38_dl() {
    if (BOP_38_dl == 0) {
        BOP_38_dl = 1;
        document.getElementById('BOP_38_dl_rectangle').style.display = 'block';
    }
    else {
        BOP_38_dl = 0;
        document.getElementById('BOP_38_dl_rectangle').style.display = 'none';
    }
}

function toggle_BOP_38_l() {
    if (BOP_38_l == 0) {
        BOP_38_l = 1;
        document.getElementById('BOP_38_l_rectangle').style.display = 'block';
    }
    else {
        BOP_38_l = 0;
        document.getElementById('BOP_38_l_rectangle').style.display = 'none';
    }
}

function toggle_BOP_38_ml() {
    if (BOP_38_ml == 0) {
        BOP_38_ml = 1;
        document.getElementById('BOP_38_ml_rectangle').style.display = 'block';
    }
    else {
        BOP_38_ml = 0;
        document.getElementById('BOP_38_ml_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_dl() {
    if (PI_38_dl == 0) {
        PI_38_dl = 1;
        document.getElementById('PI_38_dl_rectangle').style.display = 'block';
    }
    else {
        PI_38_dl = 0;
        document.getElementById('PI_38_dl_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_l() {
    if (PI_38_l == 0) {
        PI_38_l = 1;
        document.getElementById('PI_38_l_rectangle').style.display = 'block';
    }
    else {
        PI_38_l = 0;
        document.getElementById('PI_38_l_rectangle').style.display = 'none';
    }
}

function toggle_PI_38_ml() {
    if (PI_38_ml == 0) {
        PI_38_ml = 1;
        document.getElementById('PI_38_ml_rectangle').style.display = 'block';
    }
    else {
        PI_38_ml = 0;
        document.getElementById('PI_38_ml_rectangle').style.display = 'none';
    }
}

function change_probing_38() {
    if (Tooth_38 == 1) {
        
    // Variablen aus dem Formular
        st_38_db = document.forms[0]["st_38_db"].value;
        st_38_b = document.forms[0]["st_38_b"].value;
        st_38_mb = document.forms[0]["st_38_mb"].value;

        if (document.forms[0]["st_38_dl"].value > 3) {document.forms[0]["st_38_dl"].style.color = 'red';} else {document.forms[0]["st_38_dl"].style.color = 'black'};
        if (document.forms[0]["st_38_l"].value > 3) {document.forms[0]["st_38_l"].style.color = 'red';} else {document.forms[0]["st_38_l"].style.color = 'black'};
        if (document.forms[0]["st_38_ml"].value > 3) {document.forms[0]["st_38_ml"].style.color = 'red';} else {document.forms[0]["st_38_ml"].style.color = 'black'};
        
        mg_38_db = document.forms[0]["mg_38_db"].value;
        mg_38_b = document.forms[0]["mg_38_b"].value;
        mg_38_mb = document.forms[0]["mg_38_mb"].value;
        
        st_38_dl = document.forms[0]["st_38_dl"].value;
        st_38_l = document.forms[0]["st_38_l"].value;
        st_38_ml = document.forms[0]["st_38_ml"].value;

        if (document.forms[0]["st_38_db"].value > 3) {document.forms[0]["st_38_db"].style.color = 'red';} else {document.forms[0]["st_38_db"].style.color = 'black'};
        if (document.forms[0]["st_38_b"].value > 3) {document.forms[0]["st_38_b"].style.color = 'red';} else {document.forms[0]["st_38_b"].style.color = 'black'};
        if (document.forms[0]["st_38_mb"].value > 3) {document.forms[0]["st_38_mb"].style.color = 'red';} else {document.forms[0]["st_38_mb"].style.color = 'black'};
        
        mg_38_dl = document.forms[0]["mg_38_dl"].value;
        mg_38_l = document.forms[0]["mg_38_l"].value;
        mg_38_ml = document.forms[0]["mg_38_ml"].value;

    // Set der horizontalen Koordinaten von Zahn 38 (bukkal) in der Bitmap
        var x_db_38 = 1061;							// distal 38
        var x_mb_38 = 1016;							// mesial 38
        var x_b_38 = (x_db_38 + x_mb_38)/2;			// bukkal 38
        
    // Set der horizontalen Koordinaten von Zahn 38 (lingual) in der Bitmap
        var x_dl_38 = 1061;							// distal 38
        var x_ml_38 = 1012;							// mesial 38
        var x_l_38 = (x_dl_38 + x_ml_38)/2;			// lingual 38
        
    // Set der vertikalen Koordinaten von Zahn 38 (bukkal) aus dem Formular
        var y_mg_38_db = mg_UK_b - 6.05 * mg_38_db;	// Margo Gingivae distobukkal 38
        var y_mg_38_b = mg_UK_b - 6.05 * mg_38_b;	// Margo Gingivae bukkal 38
        var y_mg_38_mb = mg_UK_b - 6.05 * mg_38_mb;	// Margo Gingivae mesiobukkal 38
        var y_st_38_db = 6.05 * st_38_db;			// Sondierungstiefe distobukkal 38
        var y_st_38_b = 6.05 * st_38_b;				// Sondierungstiefe bukkal 38
        var y_st_38_mb = 6.05 * st_38_mb;			// Sondierungstiefe mesiobukkal 38
        
    // Set der vertikalen Koordinaten von Zahn 38 (lingual) aus dem Formular
        var y_mg_38_dl = mg_UK_l + 6.05 * mg_38_dl;	// Margo Gingivae distolingual 38
        var y_mg_38_l = mg_UK_l + 6.05 * mg_38_l;	// Margo Gingivae lingual 38
        var y_mg_38_ml = mg_UK_l + 6.05 * mg_38_ml;	// Margo Gingivae mesiolingual 38
        var y_st_38_dl = 6.05 * st_38_dl;			// Sondierungstiefe distolingual 38
        var y_st_38_l = 6.05 * st_38_l;				// Sondierungstiefe lingual 38
        var y_st_38_ml = 6.05 * st_38_ml;			// Sondierungstiefe mesiolingual 38
        
    // Berechnung des Attachmentniveaus 38 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_38_db = y_mg_38_db + y_st_38_db;	// Attachmentniveau distobukkal 38
        var y_an_38_b = y_mg_38_b + y_st_38_b;		// Attachmentniveau bukkal 38
        var y_an_38_mb = y_mg_38_mb + y_st_38_mb;	// Attachmentniveau mesiobukkal 38
        
    // Berechnung des Attachmentniveaus 38 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_38_dl = y_mg_38_dl - y_st_38_dl;	// Attachmentniveau distolingual 38
        var y_an_38_l = y_mg_38_l - y_st_38_l;		// Attachmentniveau lingual 38
        var y_an_38_ml = y_mg_38_ml - y_st_38_ml;	// Attachmentniveau mesiolingual 38
        
    // Parodontaltasche 38 bukkal zeichnen
        var string = 
            x_db_38 + ", " + y_an_38_db + "  " + 
            x_b_38 + ", " + y_an_38_b + "  " + 
            x_mb_38 + ", " + y_an_38_mb + "  " + 
            x_mb_38 + ", " + y_mg_38_mb + "  " + 
            x_b_38 + ", " + y_mg_38_b + "  " + 
            x_db_38 + ", " + y_mg_38_db;
        document.getElementById("polygon_38_b").setAttribute("points", string);
    // Attachmentniveau 38 bukkal zeichnen
        var string = 
            x_db_38 + ", " + y_an_38_db + "  " + 
            x_b_38 + ", " + y_an_38_b + "  " + 
            x_mb_38 + ", " + y_an_38_mb;
        document.getElementById("polyline_an_38_b").setAttribute("points", string);
    // Margo Gingivae 38 bukkal zeichnen
        var string =
            x_db_38 + ", " + y_mg_38_db + "  " + 
            x_b_38 + ", " + y_mg_38_b + "  " + 
            x_mb_38 + ", " + y_mg_38_mb;
        document.getElementById("polyline_mg_38_b").setAttribute("points", string);

    // Parodontaltasche 38 lingual zeichnen
        var string = 
            x_dl_38 + ", " + y_an_38_dl + "  " + 
            x_l_38 + ", " + y_an_38_l + "  " + 
            x_ml_38 + ", " + y_an_38_ml + "  " + 
            x_ml_38 + ", " + y_mg_38_ml + "  " + 
            x_l_38 + ", " + y_mg_38_l + "  " + 
            x_dl_38 + ", " + y_mg_38_dl;
        document.getElementById("polygon_38_l").setAttribute("points", string);
    // Attachmentniveau 38 lingual zeichnen
        var string = 
            x_dl_38 + ", " + y_an_38_dl + "  " + 
            x_l_38 + ", " + y_an_38_l + "  " + 
            x_ml_38 + ", " + y_an_38_ml;
        document.getElementById("polyline_an_38_l").setAttribute("points", string);
    // Margo Gingivae 38 lingual zeichnen
        var string =
            x_dl_38 + ", " + y_mg_38_dl + "  " + 
            x_l_38 + ", " + y_mg_38_l + "  " + 
            x_ml_38 + ", " + y_mg_38_ml;
        document.getElementById("polyline_mg_38_l").setAttribute("points", string);
    }
    if (Tooth_38 == 1 && Zahn_37 == 1) {

        st_37_db = document.forms[0]["st_37_db"].value;
        mg_37_db = document.forms[0]["mg_37_db"].value;
        
        st_37_dl = document.forms[0]["st_37_dl"].value;
        mg_37_dl = document.forms[0]["mg_37_dl"].value;
        
    // Set der horizontalen Koordinaten von Zahn 37 (bukkal) in der Bitmap
        var x_db_37 = 999;							// distal 37
        
    // Set der horizontalen Koordinaten von Zahn 37 (lingual) in der Bitmap
        var x_dl_37 = 995;							// distal 37
        
    // Set der vertikalen Koordinaten von Zahn 37 (bukkal) aus dem Formular
        var y_mg_37_db = mg_UK_b - 6.05 * mg_37_db;	// Margo Gingivae distobukkal 37
        var y_st_37_db = 6.05 * st_37_db;			// Sondierungstiefe distobukkal 37
        
    // Set der vertikalen Koordinaten von Zahn 37 (lingual) aus dem Formular
        var y_mg_37_dl = mg_UK_l + 6.05 * mg_37_dl;	// Margo Gingivae distolingual 37
        var y_st_37_dl = 6.05 * st_37_dl;			// Sondierungstiefe distolingual 37
        
    // Berechnung des Attachmentniveaus 37 (bukkal) aus Margo Gingivae und Sondierungstiefe
        var y_an_37_db = y_mg_37_db + y_st_37_db;	// Attachmentniveau distobukkal 37
        
    // Berechnung des Attachmentniveaus 37 (lingual) aus Margo Gingivae und Sondierungstiefe
        var y_an_37_dl = y_mg_37_dl - y_st_37_dl;	// Attachmentniveau distolingual 37

    // Parodontaltasche inter_38_37 bukkal zeichnen
        var string = 
            x_mb_38 + ", " + y_an_38_mb + "  " + 
            x_db_37 + ", " + y_an_37_db + "  " + 
            x_db_37 + ", " + y_mg_37_db + "  " + 
            x_mb_38 + ", " + y_mg_38_mb;
        document.getElementById("polygon_inter_38_37_b").setAttribute("points", string);
    // Attachmentniveau inter_38_37 bukkal zeichnen
        var string = 
            x_mb_38 + ", " + y_an_38_mb + "  " + 
            x_db_37 + ", " + y_an_37_db;
        document.getElementById("polyline_an_inter_38_37_b").setAttribute("points", string);
    // Margo Gingivae inter_38_37 bukkal zeichnen
        var string =
            x_mb_38 + ", " + y_mg_38_mb + "  " + 
            x_db_37 + ", " + y_mg_37_db;
        document.getElementById("polyline_mg_inter_38_37_b").setAttribute("points", string);

    // Parodontaltasche inter_38_37 lingual zeichnen
        var string = 
            x_ml_38 + ", " + y_an_38_ml + "  " + 
            x_dl_37 + ", " + y_an_37_dl + "  " + 
            x_dl_37 + ", " + y_mg_37_dl + "  " + 
            x_ml_38 + ", " + y_mg_38_ml;
        document.getElementById("polygon_inter_38_37_l").setAttribute("points", string);
    // Attachmentniveau inter_38_37 lingual zeichnen
        var string = 
            x_ml_38 + ", " + y_an_38_ml + "  " + 
            x_dl_37 + ", " + y_an_37_dl;
        document.getElementById("polyline_an_inter_38_37_l").setAttribute("points", string);
    // Margo Gingivae inter_38_37 lingual zeichnen
        var string =
            x_ml_38 + ", " + y_mg_38_ml + "  " + 
            x_dl_37 + ", " + y_mg_37_dl;
        document.getElementById("polyline_mg_inter_38_37_l").setAttribute("points", string);
    }
}