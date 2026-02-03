#!/bin/bash

INPUT="src/styles/components.css"
OUTPUT="src/components-styles"

mkdir -p "$OUTPUT"

current_file=""

while IFS= read -r line; do

  # Détection d’un titre de composant
  if [[ "$line" =~ [A-Z][A-Z0-9\ \-]+ ]]; then
    name=$(echo "$line" \
      | tr '[:upper:]' '[:lower:]' \
      | sed 's/[^a-z0-9]/-/g' \
      | sed 's/--*/-/g' \
      | sed 's/^-//' \
      | sed 's/-$//')

    current_file="$OUTPUT/$name.css"
    echo "/* $line */" > "$current_file"
    echo "✔ Créé : $current_file"
  
  else
    if [[ -n "$current_file" ]]; then
      echo "$line" >> "$current_file"
    fi
  fi

done < "$INPUT"

echo
echo "🎉 Terminé ! Tous les composants CSS ont été exportés dans $OUTPUT"