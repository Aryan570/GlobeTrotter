import html2canvas from 'html2canvas';

export const generateShareImage = async (score: number, username: string): Promise<string> => {
  const template = document.createElement('div');
  template.style.position = 'fixed';
  template.style.left = '-9999px';
  template.style.top = '-9999px';
  template.style.pointerEvents = 'none';
  template.style.zIndex = '-9999';
  
  template.innerHTML = `
    <div style="
      padding: 40px;
      background: #2c3e50;
      color: white;
      font-family: ＭＳ Ｐゴシック;
      width: 520px;
      height: 320px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    ">
      <h2 style="
        font-size: 32px;
        margin-bottom: 20px;
        color: #3498db;
      ">Globetrotter Challenge!</h2>
      <p style="
        font-size: 24px;
        margin-top: 30px;
      ">${username}'s Score: ${score}</p>
      <h2 style="
        font-size: 32px;
        margin-bottom: 20px;
        color: #3498db;
      ">Your time to play!</h2>
    </div>
  `;

  document.body.appendChild(template);
  const canvas = await html2canvas(template, {
    backgroundColor: null,
    scale: 2, // Higher resolution
    logging: false,
    useCORS: true
  });
  
  document.body.removeChild(template);
  
  return canvas.toDataURL('image/png');
};
