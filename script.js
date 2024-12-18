// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

START


FUNKTION räknaAndel(totalSumma, antalVänner, dricksProcent)

// Räkna ut totala summan inklusive dricks
SET totalaBeloppet = totalSumma * (1 + dricksprocent);

// Räknar ut beloppet som varje vän ska betala.
SET summaPerVän = totalaBeloppet / antalVänner;

// Vi returnerar svaret till vännerna
RETURN summaPerVän

END FUNCTION

//Start av programmet

PRINT "Ange summa"
SET var totalSumma = INPUT från användaren

PRINT "Ange antal vänner"
SET var antalVänner = INPUT från användaren

PRINT "Ange dricksprocent som en decimal"
SET var dricksProcent = INPUT från användaren

SET summaPerVän = CALL FUNCTION räknaAndel(totalSumma, antalVänner, dricksProcent)

PRINT "Varje person ska betala: " + summaPerVän + "kr"


END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

START
SET var ordbok = ["EYE", "LID", "EYD", "VID"]  // exempel ord 
SET var startord = "EYE"
SET var slutord = "LID"
SET var aktuelltOrd = startord
SET var historik = [aktuelltOrd]

FUNCTION kontrolleraEnBokstav(ord1, ord2):
    OM längd(ord1) != längd(ord2):
        RETURN False
    SET variabel skillnad = 0
    FÖR varje position i ord1:
        OM ord1[position] != ord2[position]:
            skillnad = skillnad + 1
    RETURN skillnad === 1

END FUNCTION

WHILE aktuelltOrd != slutord:
    PRINT "Nuvarande ord:", aktuelltOrd
    nyttOrd = användarInput("Ange nästa ord: ")

// Kontrollerar ifall att ordet är giltigt
    OM nyttOrd INTE finns i ordbok:
    PRINT "Ogiltigt ord! Ordet finns inte i ordboken."
    CONTINUE

    OM kontrolleraEnBokstav(aktuelltOrd, nyttOrd) == False:
    PRINT "Du får endast ändra en bokstav i ordet."
    CONTINUE

// den här uppdaterar spelets tillstånd

    Lägg till nyttOrd i historik.
    aktuelltOrd = nyttOrd

END WHILE

    PRINT "Grattis! Du löste pusslet."
    PRINT "Ordhistorik: ", + historik
SLUT

*/
