              {/* {circles.map((_, index) => {
            const rect = rouletteRingRef.current?.getBoundingClientRect() || {
              width: 240,
            };
            return (
              <div
                key={index}
                className="z-20 absolute bg-gradient-to-r from-[#FFFE89] to-[#C65E34] w-2 h-2 rounded-full"
                style={{
                  top: `calc(50% + ${
                    Math.sin((index / circles.length) * 2 * Math.PI) *
                    rect.width
                  }px)`,
                  left: `calc(50% + ${
                    Math.cos((index / circles.length) * 2 * Math.PI) *
                    rect.width
                  }px)`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            );
          })} */}

