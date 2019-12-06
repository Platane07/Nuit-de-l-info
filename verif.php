<!-- Vérification des compte -->
<?php
session_start();  // démarrage d'une session

//connexion base de données (m)
$dbh = new PDO('mysql:host=localhost;dbname=', 'user', 'mdp');

// on vérifie que les données du formulaire sont présentes
if (isset($_POST['login']) && isset($_POST['mdp'])) {
    $bdd = $dbh;
    // cette requête permet de récupérer l'utilisateur depuis la BD
    $requete = ("SELECT * FROM utilis WHERE LoginUtil=? AND PassUtil=?");
    $resultat = $bdd->prepare($requete);
    $login = $_POST['login'];
    $mdp = $_POST['mdp'];
    $resultat->execute(array($login, $mdp));
    if ($resultat->rowCount() == 1) {
        // l'utilisateur existe dans la table
        // on ajoute ses infos en tant que variables de session
        $_SESSION['login'] = $login;
        $_SESSION['mdp'] = $mdp;
        // cette variable indique que l'authentification a réussi
        $authOK = true;
    }
}
?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Résultat de l'authentification</title>
</head>
<body>
    <h1>Résultat de l'authentification</h1>
    <!-- Montre l'utilisateur connecter ou pas -->
    <?php
    // Dit à l'utilisateur s'il est bien connecter()
    if (isset($authOK)) {
        echo "<p>Vous avez été reconnu(e) en tant que " . $login . "</p>";
        echo '<a href="modification.php">Poursuivre vers la page de modification</a>';
    } else { ?>
        <p>Vous n'avez pas été reconnu(e)</p>
        <p><a href="connexion.php">Nouvel essai</p>
    <?php } ?>
</body>
</html>
