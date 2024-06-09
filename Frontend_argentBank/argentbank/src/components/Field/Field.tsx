import React from 'react';


export interface FieldProps {
  fieldType: number,
  label: string,
  name: string,
  placeholder: string,
  id?: string,

}

const FIELD_TYPE = {
  INPUT_TEXT: 1, // Champ de texte
  TEXTAREA: 2, // Zone de texte
  CHECKBOX: 3, // Case à cocher
  PASSWORD: 4 // Champ de mot de passe
};

export const Field: React.FC<FieldProps> = ({ fieldType = FIELD_TYPE.INPUT_TEXT, label, name, placeholder, id }) => {
  let component;

  switch (fieldType) {
    case FIELD_TYPE.INPUT_TEXT:
      // Champ de texte
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}

          />
        </div>
      );
      break;
    case FIELD_TYPE.PASSWORD:
      // Champ de mot de passe
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="password"
            name={name}
            placeholder={placeholder}

          />
        </div>
      );
      break;
    case FIELD_TYPE.TEXTAREA:
      // Zone de texte
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <textarea name={name} />;
        </div>
      )
      break;
    case FIELD_TYPE.CHECKBOX:
      // Case à cocher
      component = (
        <div>
          <input
            type="checkbox"
            id={id}

          />
          <label htmlFor={id}>{label}</label>
        </div>
      );
      break;
    default:
      // Par défaut, un champ de texte est affiché
      component = (
        <div>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}

          />
        </div>
      );
  }
  return (
    <>
      {component}
    </>
  );
};

