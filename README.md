# Toma Victor-Stefan & PopescuMara - GloT


<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="documentation.css"/>
    <title>
        Documentation
    </title>
</head>

<body>

<h2>GloT (Global Terrorism Visualiser)</h2>
<h2>Autori</h2>
<ul>
    <li>Popescu Mara</li>
    <ul>
        <li><a href="mailto:mara.popescu03@gmail.com">mara.popescu03@gmail.com</a></li>
    </ul>
    <li>Toma Victor-Ștefan</li>
    <ul>
        <li><a href="mailto:viky.toma15@gmail.com">viky.toma15@gmail.com</a></li>
    </ul>
</ul>

<div class="contentinfo">
    <ol role="directory">
        <li>
            <a href="#introduction">
                <span>1. </span>
                Introducere
            </a>
            <ol role="directory">
                <li>
                    <a href="#Purpose">
                        <span>1.1 </span>
                        Scop
                    </a>
                </li>
                <li>
                    <a href="#Conventions">
                        <span>1.2 </span>
                        Convenție de scriere
                    </a>
                </li>
                <li>
                    <a href="#Audience">
                        <span>1.3 </span>
                        Publicul țintă
                    </a>
                </li>
                <li>
                    <a href="#Scope">
                        <span>1.4 </span>
                        Scopul produsului
                    </a>
                </li>
                <li>
                    <a href="#References">
                        <span>1.5 </span>
                        Referințe
                    </a>
                </li>
            </ol>
        </li>
    </ol>

    <ol role="directory">
        <li>
            <a href="#description">
                <span>2. </span>
                Descriere Generală
            </a>
            <ol role="directory">
                <li>
                    <a href="#productDescription">
                        <span>2.1 </span>
                        Perspectiva produsului
                    </a>
                </li>
                <li>
                    <a href="#Functions">
                        <span>2.2 </span>
                        Funcționalitățile produsului
                    </a>
                </li>
                <li>
                    <a href="#Characteristics">
                        <span>2.3 </span>
                        Clase și caracteristici ale utilizatorilor
                    </a>
                </li>
                <li>
                    <a href="#Environment">
                        <span>2.4 </span>
                        Mediul de operare
                    </a>
                </li>
                <li>
                    <a href="#Constraints">
                        <span>2.5 </span>
                        Documentația pentru utilizator
                    </a>
                </li>
            </ol>
        </li>
    </ol>

    <ol role="directory">
        <li>
            <a href="#requirements">
                <span>3. </span>
                Interfețele aplicației
            </a>
            <ol role="directory">
                <li>
                    <a href="#UI">
                        <span>3.1 </span>
                        Interfața utilizatorului
                    </a>
                </li>
                <li>
                    <a href="#softwareInterfaces">
                        <span>3.2 </span>
                        Interfața Software
                    </a>
                </li>
                <li>
                    <a href="#communicationsInterfaces">
                        <span>3.3 </span>
                        Interfața de comunicare
                    </a>
                </li>
            </ol>
        </li>
    </ol>

    <ol role="directory">
        <li>
            <a href="#features">
                <span>4. </span>
                Caracteristici ale sistemului
            </a>
            <ol role="directory">
                <li>
                    <a href="#Home">
                        <span>4.1 </span>
                        Sign Up
                    </a>
                </li>
                <li>
                    <a href="#Register">
                        <span>4.2 </span>
                        Sign In
                    </a>
                </li>
                <li>
                    <a href="#Login">
                        <span>4.3 </span>
                        Setari cont
                    </a>
                </li>
                <li>
                    <a href="#Settings">
                        <span>4.4 </span>
                        Acasa
                    </a>
                </li>
                <li>
                    <a href="#MyPref">
                        <span>4.5 </span>
                        Atacuri Recente
                    </a>
                </li>
                <li>
                    <a href="#GroupP">
                        <span>4.6 </span>
                        Statistici
                    </a>
                </li>
                <li>
                    <a href="#About">
                        <span>4.7 </span>
                        About
                    </a>
                </li>
            </ol>
        </li>
    </ol>

    <ol role="directory">
        <li>
            <a href="#nonfunctionalRequirements">
                <span>5. </span>
                Funcționalități pentru protecție și securitate
            </a>
            <ol role="directory">
                <li>
                    <a href="#Safety">
                        <span>5.1 </span>
                        Protecția datelor
                    </a>
                </li>
                <li>
                    <a href="#Security">
                        <span>5.2 </span>
                        Securizarea datelor
                    </a>
                </li>
                <li>
                    <a href="#Quality">
                        <span>5.3 </span>
                        Calitățile Software
                    </a>
                </li>
            </ol>
        </li>
    </ol>
</div>

</br>
</br>

<div id="introduction">
    <h2>
        <span>1. </span>
        Introducere
    </h2>
    <div id="Purpose">
        <h3>
            <span>1.1 </span>
            Scop
        </h3>
        <p>
            GloT (Global Terrorism Visualiser) este o aplicație web dezvoltată de studenții menționați în secțiunea de Autori de la Facultatea de Informatică a Universității Alexandru Ioan Cuza. Scopul acestui document este de a prezenta funcționalitățile proiectului și de a ilustra cerințele aplicației. Această aplicație își propune să ofere utilizatorilor posibilitatea de a vizualiza, într-o maniera filtrată, informații despre atentate teroriste la nivel global, dar și de a exporta statistici și reprezentări cartografice.
        </p>
    </div>
    </br>
    <div id="Conventions">
        <h3>
            <span>1.2 </span>
            Convenție de scriere
        </h3>
        <p>
            Acest document urmează șablonul de documentație a cerințelor software conform IEEE Software Requirements Specification.
        </p>
    </div>
    </br>
    <div id="Audience">
        <h3>
            <span>1.3 </span>
            Publicul țintă
        </h3>
        <p>
            Acest document este destinat oricărei persoane care dorește să afle mai multe despre atentate teroriste globale.
        </p>
    </div>
    </br>
    <div id="Scope">
        <h3>
            <span>1.4 </span>
            Scopul produsului
        </h3>
        <p>
            Scopul aplicației este de a oferi utilizatorilor un centralizator de informații legate de atentate teroriste la nivel global, cu posibilitatea de vizualizare filtrată. Utilizatorii pot citi informații legate de fiecare atentat, statistici și au opțiunea de a filtra informațiile în funcție de locație, arme folosite, număr de victime, etc. De asemenea, le este pusă la dispoziție opțiunea de a exporta atât informații, cât și reprezentări cartografice.
        </p>
    </div>
    </br>
    <div id="References">
        <h3>
            <span>1.5 </span>
            Referințe
        </h3>
        <ul>
            <li><a href="https://github.com/victortoma15/TW_TomaVictor-Stefan_PopescuMara"> GloT's GitHub Page</a>
            </li>
        </li>
        <li><a href="https://www.kaggle.com/datasets/START-UMD/gtd"> Global Terrorism Database</a>
        </li>
            <li><a href="https://github.com/TeodorescuCalin/RoT/blob/master/README.md#conventions"> IEEE Template for
                System Requirements Specification Documents</a>
            </li>
            <li><a href="https://www.figma.com"> Figma: The Collaborative Interface Design Tool</a>
        </ul>
    </div>
</div>

</br>
</br>

<div id="description">
    <h2>
        <span>2. </span>
        Descriere Generală
    </h2>
    <div id="productDescription">
        <h3>
            <span>2.1 </span>
            Perspectiva produsului
        </h3>
        <p>
           GloT (Global Terrorism Visualiser) este o aplicație dezvoltată în cadrul cursului de Tehnologii Web, cu scopul de a oferi o vizualizare filtrată a informațiilor legate de atentate teroriste la nivel global. 
           Folosind informațiile din baza de date Global Terrorism Database, utilizatorii au acces la date despre atentate din 1970 până în 2017.
        </p>
    </div>
    </br>

    <div id="Functions">
        <h3>
            <span>2.2 </span>
            Funcțiile produsului
        </h3>
        <p>
            Aplicația web GloT (Global Terrorism Visualiser) va putea fi utilizată pentru a exporta rezultatele filtrărilor datelor despre atentate în format CSV, PNG și SVG.
        </p>
        <ul>
            <p>-- Pagina acasă</p>
            <li>
                Buton Explore : redirecționare către pagina cu atacuri recente.
            </li>
            <p>-- Pagina Sign in</p>
            <li>
                Buton Login : conectează utilizatorul la cont.
            </li>
            <li>
                Buton Don't have an account? : redirecționează utilizatorul la pagina de Sign Up.
            </li>
            <li>
                Buton Continue as guest : redirecționează utilizatorul la pagina principală, fără a avea funcționalități speciale.
            </li>
            <p>-- Pagina Sign Up </p>
            <li>
                Buton Register: crează contul utilizatorului și îl conectează.
            </li>
            <li>
                Buton Already have an account? : redirecționează utilizatorul la pagina de Sign in.
            </li>

            <p>-- Pagina Setări cont c</p>
            <li>
                Bara de navigare
                <ul>
                    <li>Home: redirecționează către pagina acasă</li>
                    <li>Recent attacks: redirecționează către pagina cu atacuri recente</li>
                    <li>Statistics: redirecționează către pagina cu statistici</li>
                    <li>About: redirecționează către pagina cu informații despre dezvoltatorii aplicației</li>
                    <li>Subscribe: oferă posibilitatea de abonare a utilizatorilor la informații noi apărute pe site, funcționând ca un newsletter</li>
                    <li>Logout: deloghează utilizatorul din cont, redirecționându-l către pagina principală</li>
                </ul>
            </li>
            <li>
                Buton Apply the changes! : salvează schimbările făcute la cont.
            </li>
            <p>-- Pagina cu atacuri recente</p>
            <li>
                Bara de navigare
                <ul>
                    <li>SearchBar: o bară de căutare a anumitor key-word-uri pentru a facilita munca utilizatorului în căutarea informațiilor</li>
                    <li>Home: redirecționează către pagina acasă</li>
                    <li>Recent attacks: redirecționează către pagina cu atacuri recente</li>
                    <li>Statistics: redirecționează către pagina cu statistici</li>
                    <li>About: redirecționează către pagina cu informații despre dezvoltatorii aplicației</li>
                    <li>Subscribe: oferă posibilitatea de abonare a utilizatorilor la informații noi apărute pe site, funcționând ca un newsletter</li>
                    <li>Logout: deloghează utilizatorul din cont, redirecționându-l către pagina principală</li>
                </ul>
            </li>
            <li>
                Buton filtrare: utilizatorul poate filtra atacurile după anumite criterii, cum ar fi locația, numărul de victime sau armele utilizate
            </li>
            <p>-- Pagina cu statistici</p>
            <li>
                Bara de navigare
                <ul>
                    <li>SearchBar: o bară de căutare a anumitor key-word-uri pentru a facilita munca utilizatorului în căutarea informațiilor</li>
                    <li>Home: redirecționează către pagina acasă</li>
                    <li>Recent attacks: redirecționează către pagina cu atacuri recente</li>
                    <li>Statistics: redirecționează către pagina cu statistici</li>
                    <li>About: redirecționează către pagina cu informații despre dezvoltatorii aplicației</li>
                    <li>Subscribe: oferă posibilitatea de abonare a utilizatorilor la informații noi apărute pe site, funcționând ca un newsletter</li>
                    <li>Logout: deloghează utilizatorul din cont, redirecționându-l către pagina principală</li>
                </ul>
            </li>
            <li>
                Buton filtrare: utilizatorul poate filtra atacurile după anumite criterii, cum ar fi locația, numărul de victime sau armele utilizate
            </li>
            <p>-- Pagina de About</p>
            <li>
                Bara de navigare
                <ul>
                    <li>Home: redirecționează către pagina acasă</li>
                    <li>Recent attacks: redirecționează către pagina cu atacuri recente</li>
                    <li>Statistics: redirecționează către pagina cu statistici</li>
                    <li>About: redirecționează către pagina cu informații despre dezvoltatorii aplicației</li>
                    <li>Subscribe: oferă posibilitatea de abonare a utilizatorilor la informații noi apărute pe site, funcționând ca un newsletter</li>
                    <li>Logout: deloghează utilizatorul din cont, redirecționându-l către pagina principală</li>
                </ul>
            </li>
            <li>
                Profilurile de LinkedIn: butoane care redirecționează utilizatorul către profilurile de LinkedIn ale dezvoltatorilor aplicației
                Paginile de GitHub: butoane care redirecționează utilizatorul către paginile de GitHub ale dezvoltatorilor aplicației
            </li>
        </ul>
    </div>
    </br>

    <div id="Characteristics">
        <h3>
            <span>2.3 </span>
            Clase și caracteristici ale utilizatorilor
        </h3>
        <ul>
            <li>Utilizator/Colaborator: o persoană care poate urca informații generale legate de unele atacuri care lipsesc din baza de date</li>
            <li>Administrator: o persoană care are acces la tot ceea ce se află in spatele paginii web, și care poate adăuga/șterge informații de pe pagină</li>
            <li>Oaspete: un simplu vizitator al paginii web, care nu are un cont, dar care se poate bucura de functionalitățile site-ului pe deplin</li>
        </ul>
    </div>
    </br>

    <div id="Environment">
        <h3>
            <span>2.4 </span>
            Mediul de operare
        </h3>
        <p>
            Aplicația web poate fi folosită pe orice device care este conectat la internet și care are un browser accesibil.
        </p>
    </div>
    </br>

    <div id="Constraints">
        <h3>
            <span>2.5 </span>
            Documentația pentru utilizator
        </h3>
        <p>
            GloT va folosi următoarele limbaje:
        </p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
        </ul>
    </div>
    </br>
</div>

</br>
</br>

<div id="requirements">
    <h2>
        <span>3. </span>
        Interfețele aplicației
    </h2>
    <div id="UI">
        <h3>
            <span>3.1 </span>
            Interfața utilizatorului
        </h3>
        <p>Sign Up</p>
        <img src="../pictures/screenshots/register.png" width="750">
        <p>Sign In</p>
        <img src="../pictures/screenshots/login.png" width="750">
        <p>Pagina Acasă</p>
        <img src="../pictures/screenshots/home_page.png" width="750">
        <p>Atacuri Recente</p>
        <img src="../pictures/screenshots/recent_attacks.png" width="750">
        <p>Pagina cu statistici</p>
        <img src="../pictures/screenshots/statistics.png" width="750">
        <p>About</p>
        <img src="../pictures/screenshots/about.png" width="750">
    </div>
    </br>

    <div id="softwareInterfaces">
        <h3>
            <span>3.2 </span>
            Interfața Software
        </h3>
        <p>
            Cerințele minime software pentru a folosi aplicația GloT sunt conexiunea la internet și un browser web.
        </p>
    </div>
    </br>

    <div id="communicationsInterfaces">
        <h3>
            <span>3.3 </span>
            Interfața de comunicare
        </h3>
        <p>
            GloT necesită o conexiune la internet. Standardul de comunicare care va fi utilizat este HTTP.
        </p>
    </div>
    </br>
</div>

</br>
</br>

<div id="features">
    <h2>
        <span>4. </span>
        Caracteristici ale sistemului
    </h2>
    <div id="Home">
        <h3>
            <span>4.1 </span>
            Sign Up
        </h3>
        <p>
            Utilizatorii își pot crea un cont în cadrul aplicației, astfel având acces la funcționalități în plus.
        </p>
    </div>
    </br>

    <div id="Register">
        <h3>
            <span>4.2 </span>
            Sign In
        </h3>
        <p>
           Utilizatorii se pot conecta folosindu-și datele, astfel putând să beneficieze de funcționalități în plus față de un simplu oaspete.
        </p>
    </div>
    </br>

    <div id="Login">
        <h3>
            <span>4.3 </span>
            Setări cont
        </h3>
        <p>
            Utilizatorii conectați la un cont au acces la o pagina pentru a-l vizualiza și modifica dupa preferințe.
        </p>
    </div>
    </br>

    <div id="Settings">
        <h3>
            <span>4.4 </span>
            Pagina Acasă
        </h3>
        <p>
            În această pagină, utilizatorii pot vedea o scurtă descriere a aplicației, dar și un buton care îi va redirecționa către pagina de Sign Up. Utilizatorii pot accesa ulterior paginile destinate scopului aplicației. 
        </p>
    </div>
    </br>

    <div id="MyPref">
        <h3>
            <span>4.5 </span>
            Atacuri recente
        </h3>
        <p>
            Utilizatorii pot vedea în această pagină informații despre cele mai recente 10 atacuri teroriste, dar și un buton cpu ajutorul căruia pot filtra atacurile 
            după anumite criterii, cum ar fi locația, numărul de victime sau armele utilizate.
        </p>
    </div>
    </br>

    <div id="GroupP">
        <h3>
            <span>4.6 </span>
            Pagina cu statistici
        </h3>
        <p>
            Utilizatorii pot vedea statistici la nivel global privind atacurile teroriste din ultimii 50 de ani, dar și o hartă interactivă cu locațiile atacurilor, precum și un buton care le permite să exporte 
            datele sub formă de fișier CSV, PNG sau SVG. De asemenea, utilizatorii pot beneficia de mai multe filtre și tipuri de filtre pentru a-și personaliza experiența.
        </p>
    </div>
    </br>

    <div id="About">
        <h3>
            <span>4.7 </span>
            About
        </h3>
        <p>
            Utilizatorii, dar și orice alt vizitator al paginii, pot vedea informații despre dezvoltatorii aplicației, cât și linkuri către paginile lor de LinkedIn și GitHub.
        </p>
    </div>
    </br>
    </br>
</div>
</br>
</br>
<div id="nonfunctionalRequirements">
    <h2>
        <span>5. </span>
        Funcționalități pentru protecție și securitate
    </h2>
    <div id="Safety">
        <h3>
            <span>5.1 </span>
            Protecția datelor
        </h3>
        <p>
            Datele utilizatorilor sunt stocate într-o bază de date. Datele sunt criptate înainte de a fi stocate în baza de date.
        </p>
    </div>
    </br>

    <div id="Security">
        <h3>
            <span>5.2 </span>
            Securizarea datelor
        </h3>
        <p>
            Autorizarea utilizatorilor se face pe baza standardului JWT. Utilizatorii au acces doar la informații legate strict de contextul paginii, 
            celelalte informații fiind ascunse.
        </p>
    </div>
    </br>

    <div id="Quality">
        <h3>
            <span>5.3 </span>
            Calitățile Software
        </h3>
        <ul>
            <li>Adaptabilitate</li>
            <li>Disponibilitate</li>
            <li>Portabilitate</li>
            <li>Flexibilitate</li>
            <li>Ușurință în utilizare</li>
        </ul>
    </div>
    </br>
</div>

</br>
</br>
</body>

</html>
