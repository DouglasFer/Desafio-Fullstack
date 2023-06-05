import { useState } from "react";
import { Update } from "./Modal/updateDelete";

import { ContentLi, LiCard } from "./style";

export const CardContact = ({ contacts }) => {
  const [updateOn, setUpdateOn] = useState(false);

  return (
    <div>
      <LiCard
        key={contacts.id}
        id={contacts.id}
        onClick={() => setUpdateOn(true)}
      >
        <p>{contacts.fullName}</p>
        <ContentLi>
          <span>{contacts.phone}</span>
        </ContentLi>
      </LiCard>

      {updateOn ? (
        <Update
          contact={contacts}
          id={contacts.id}
          setUpdateOn={setUpdateOn}
        />
      ) : (
        false
      )}
    </div>
  );
};
