// Middleware pour vérifier si l'utilisateur est admin
exports.isAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Accès refusé : Vous n\'êtes pas administrateur.' });
    }
    next(); // Passe au middleware ou à la route suivante
  };
  
const jwt = require('jsonwebtoken');

// Middleware pour authentifier le token JWT
exports.authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Récupère le token de l'en-tête Authorization
  if (!token) {
    return res.status(401).json({ message: 'Token non fourni.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Vérifie et décode le token
    req.user = decoded; // Ajoute l'utilisateur décodé à la requête
    next(); // Passe au middleware ou à la route suivante
  } catch (err) {
    res.status(403).json({ message: 'Token invalide.' });
  }
};
