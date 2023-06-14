export default function FinishingPriceData({ rooms }) {
  console.log(rooms);
  function calculateData(room) {
    const { length, width, height } = room;
    const area = length * width;
    const cornice = length;
    const ceramic = area + length * 0.1 + 0.07;
    const wallpaper = length * height;
    const plaster = wallpaper + area + 0.07 - (0.9 * 2.2 + 1 * 1.2);
    const plaster_cubed = plaster * 0.015;
    const sand = plaster_cubed;
    const cement = plaster_cubed * 300;
    const paint = plaster;
    const emulsion = paint;
    const putty = paint;
    return {
      area: +area.toFixed(2),
      cornice: +cornice.toFixed(2),
      ceramic: +ceramic.toFixed(2),
      wallpaper: +wallpaper.toFixed(2),
      plaster: +plaster.toFixed(2),
      plaster_cubed: +plaster_cubed.toFixed(2),
      sand: +sand.toFixed(2),
      cement: +cement.toFixed(2),
      paint: +paint.toFixed(2),
      emulsion: +emulsion.toFixed(2),
      putty: +putty.toFixed(2),
    };
  }

  let result = {
    cornice: {
      value: 0,
      unit: "m",
    },
    ceramic: {
      value: 0,
      unit: "m<sup>2</sup>",
    },
    wallpaper: {
      value: 0,
      unit: "m<sup>2</sup>",
    },
    plaster: {
      value: 0,
      unit: "m<sup>2</sup>",
    },
    sand: {
      value: 0,
      unit: "m<sup>3</sup>",
    },
    cement: {
      value: 0,
      unit: "KG",
    },
    paint: {
      value: 0,
      unit: "m<sup>2</sup>",
    },
    emulsion: {
      value: 0,
      unit: "/6L",
    },
    putty: {
      value: 0,
      unit: "/1.5 KG",
    },
  };

  rooms?.forEach((room) => {
    const roomData = calculateData(room);
    for (const [key, value] of Object.entries(roomData)) {
      if (result[key]) {
        result[key]["value"] += value;
      }
    }
  });

  return (
    <>
      <div className="single-unit__rooms mb-4">
        <table className="w-100">
          <thead>
            <tr>
              <th className="main-color">Detail</th>
              <th className="main-color">Price</th>
              <th className="main-color">Unit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Cornice</span>
              </td>
              <td>
                <span>{result.cornice.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.cornice.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Ceramic</span>
              </td>
              <td>
                <span>{result.ceramic.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.ceramic.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Wallpaper</span>
              </td>
              <td>
                <span>{result.wallpaper.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.wallpaper.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Plaster</span>
              </td>
              <td>
                <span>{result.plaster.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.plaster.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Sand</span>
              </td>
              <td>
                <span>{result.sand.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.sand.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Cement</span>
              </td>
              <td>
                <span>{result.cement.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.cement.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Paint</span>
              </td>
              <td>
                <span>{result.paint.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.paint.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Emulsion</span>
              </td>
              <td>
                <span>{result.emulsion.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.emulsion.unit }}
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Putty</span>
              </td>
              <td>
                <span>{result.putty.value.toFixed(2)}</span>
              </td>
              <td>
                <span
                  dangerouslySetInnerHTML={{ __html: result.putty.unit }}
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
