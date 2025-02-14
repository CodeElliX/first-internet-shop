"use client";
import { usePathname } from "next/navigation";
import styles from "./filtersItems.module.css"
import { useState } from "react";

const FiltersItems = () => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const pathname = usePathname();
  const colours = [
    "#F5F5DC", "#00B0B9", "#00B0B9", "#00BFFF", "#0000FF", "#000080",
    "#9FFEB0", "#84BD00", "#78866B", "#FFFF00", "#FFE5B4", "#FFA500", "#FFA500", "#FFC0CB",
    "#C8A2C8", "#8B00FF", "#808080", "#000000", "#555555", "linear-gradient(90deg, #FF5733,rgb(42, 222, 75), #3357FF)"
  ];

  return (
    <>
      {pathname === '/backpacks' && (
        <div>
          <article className={styles.products_groop}>
            <h4>Група товарів</h4>
            <span><input type="checkbox" />Для дітей</span>
            <span><input type="checkbox" />Для школи</span>
            <span><input type="checkbox" />Старша школа і дорослі</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Колір</h4>
            <div className={styles.products_groop__colours}>
              {colours.map((item, i) => {
                return <div key={i} style={{ background: item, border: "1px solid" }}></div>
              })}
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Классифікація</h4>
            <span><input type="checkbox" />Каркасні</span>
            <span><input type="checkbox" />Напівкаркасні</span>
            <span><input type="checkbox" />М'які</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Стать</h4>
            <span><input type="checkbox" />Дшвч</span>
            <span><input type="checkbox" />хлопч</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Кількість відділень</h4>
            <span><input type="checkbox" />1</span>
            <span><input type="checkbox" />2</span>
            <span><input type="checkbox" />3</span>
          </article>
        </div>
      )}
    </>
  )

}

export default FiltersItems;