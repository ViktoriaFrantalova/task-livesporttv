import React, { useState, useEffect } from "react";
import { fetchData } from "./helper";

function DetailAbilities(props) {
  const [ability, setAbility] = useState(null);

  useEffect(() => {
    props.data.map(item => {
      fetchData(item.ability.url).then(res => {
        setAbility(res.data.effect_entries[0].effect);
      });
      return null;
    });
  }, [props.data]);

  if (ability !== null) {
    return <div>{ability}</div>;
  } else {
    return null;
  }
}

export default DetailAbilities;
